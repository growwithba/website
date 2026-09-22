#!/usr/bin/env python3
"""Feed real Google Maps listings into the PrimeDirectory site.

Writes data/scraped/<category-slug>/<city-slug>.json, which data/businesses.ts
picks up at build time (falls back to generated listings when no file exists).

Scrape live (scraper must be running: `docker compose up -d` in scraper/):
    python3 scraper/scripts/import_to_site.py run --category plumbers --city austin-tx
    python3 scraper/scripts/import_to_site.py run --category plumbers,dentists --city austin-tx,dallas-tx --depth 3
    python3 scraper/scripts/import_to_site.py run --category all --city austin-tx

Import an existing scrape.py output (CSV or JSON, lean or --full):
    python3 scraper/scripts/import_to_site.py import results-abc123.csv --category plumbers --city austin-tx

Run from the repo root. Stdlib only. One job at a time, with a pause between
jobs, to stay under Google's rate limits.
"""
import argparse, csv, json, os, re, subprocess, sys, tempfile, time

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
DATA = os.path.join(ROOT, "data")
OUT_DIR = os.path.join(DATA, "scraped")
SCRAPE_PY = os.path.join(HERE, "scrape.py")
MAX_LISTINGS = 20


def load_categories():
    src = open(os.path.join(DATA, "categories.ts"), encoding="utf-8").read()
    slugs = re.findall(r"slug:\s*'([^']+)'", src)
    queries = re.findall(r"serviceQuery:\s*'([^']+)'", src)
    if len(slugs) != len(queries):
        sys.exit("✗ Could not parse data/categories.ts (slug/serviceQuery mismatch).")
    return dict(zip(slugs, queries))


def load_cities():
    src = open(os.path.join(DATA, "cities.ts"), encoding="utf-8").read()
    pat = re.compile(
        r"slug:\s*'([^']+)',\s*name:\s*'([^']+)',.*?stateCode:\s*'([^']+)',.*?lat:\s*(-?[\d.]+),\s*lng:\s*(-?[\d.]+)"
    )
    return {m[0]: {"name": m[1], "stateCode": m[2], "lat": m[3], "lng": m[4]} for m in pat.findall(src)}


def pick(values, all_values, label):
    if values == "all":
        return list(all_values)
    out = [v.strip() for v in values.split(",") if v.strip()]
    bad = [v for v in out if v not in all_values]
    if bad:
        sys.exit(f"✗ Unknown {label}: {', '.join(bad)}")
    return out


def num(v, cast, default=0):
    try:
        return cast(str(v).replace(",", "").strip())
    except (TypeError, ValueError):
        return default


def slugify(s):
    return re.sub(r"(^-|-$)", "", re.sub(r"[^a-z0-9]+", "-", s.lower()))


ZIP_RE = re.compile(r"\b(\d{5})(?:-\d{4})?\b")


def to_business(row, category, city_slug, i):
    name = (row.get("title") or row.get("name") or "").strip()
    if not name:
        return None
    address = (row.get("address") or row.get("complete_address") or "").strip()
    zips = ZIP_RE.findall(address)
    website = (row.get("website") or row.get("web_site") or "").strip()
    return {
        "id": f"{category}-{city_slug}-{slugify(name)[:40]}-{i}",
        "name": name,
        "rating": round(num(row.get("review_rating"), float), 1),
        "reviewCount": num(row.get("review_count"), int),
        "phone": (row.get("phone") or "").strip(),
        "address": address,
        "zip": zips[-1] if zips else "",
        "website": website,
        "tagline": (row.get("category") or "").strip(),
        "mapsUrl": (row.get("link") or "").strip(),
        "verified": False,
        "source": "google-maps",
    }


def read_rows(path):
    if path.lower().endswith(".json"):
        return json.load(open(path, encoding="utf-8"))
    return list(csv.DictReader(open(path, encoding="utf-8", errors="replace")))


def write(category, city_slug, rows):
    seen, out = set(), []
    for i, r in enumerate(rows):
        b = to_business(r, category, city_slug, i)
        if not b:
            continue
        key = (b["name"].lower(), b["phone"])
        if key in seen:
            continue
        seen.add(key)
        out.append(b)
    out.sort(key=lambda b: (-b["rating"], -b["reviewCount"]))
    out = out[:MAX_LISTINGS]
    if not out:
        print(f"  ⚠ {category}/{city_slug}: 0 usable rows — nothing written (possible rate limit).")
        return 0
    d = os.path.join(OUT_DIR, category)
    os.makedirs(d, exist_ok=True)
    path = os.path.join(d, f"{city_slug}.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"  ✓ {len(out)} listings → {os.path.relpath(path, ROOT)}")
    return len(out)


def cmd_import(a, cats, cities):
    pick(a.category, cats, "category")
    pick(a.city, cities, "city")
    write(a.category, a.city, read_rows(a.file))


def cmd_run(a, cats, cities):
    cat_list = pick(a.category, cats, "category")
    city_list = pick(a.city, cities, "city")
    pairs = [(c, s) for c in cat_list for s in city_list]
    if not a.overwrite:
        pairs = [(c, s) for c, s in pairs if not os.path.exists(os.path.join(OUT_DIR, c, f"{s}.json"))]
    if len(pairs) > 5:
        print(f"⚠️  {len(pairs)} jobs queued. Back-to-back scraping without proxies can get your IP "
              "temporarily rate-limited by Google. Running one at a time with a pause between jobs.\n")
    for n, (cat, cslug) in enumerate(pairs, 1):
        city = cities[cslug]
        keyword = f"{cats[cat]} in {city['name']}, {city['stateCode']}"
        print(f"[{n}/{len(pairs)}] {keyword}")
        with tempfile.TemporaryDirectory() as tmp:
            out = os.path.join(tmp, "rows.json")
            cmd = [sys.executable, SCRAPE_PY, keyword, city["lat"], city["lng"],
                   "--depth", str(a.depth), "--no-email", "--full", "--out", out]
            if subprocess.run(cmd).returncode != 0 or not os.path.exists(out):
                print("  ✗ scrape failed — stopping so you don't hammer Google. Re-run later; "
                      "finished pairs are skipped automatically.")
                sys.exit(1)
            write(cat, cslug, read_rows(out))
        if n < len(pairs):
            time.sleep(a.pause)


def main():
    cats, cities = load_categories(), load_cities()
    ap = argparse.ArgumentParser(description="Import Google Maps listings into the directory site.")
    sub = ap.add_subparsers(dest="cmd", required=True)

    r = sub.add_parser("run", help="scrape category × city pairs and write site data")
    r.add_argument("--category", required=True, help="slug, comma list, or 'all'")
    r.add_argument("--city", required=True, help="slug, comma list, or 'all'")
    r.add_argument("--depth", type=int, default=3)
    r.add_argument("--pause", type=int, default=20, help="seconds between jobs")
    r.add_argument("--overwrite", action="store_true", help="re-scrape pairs that already have data")

    i = sub.add_parser("import", help="convert an existing scrape.py CSV/JSON")
    i.add_argument("file")
    i.add_argument("--category", required=True)
    i.add_argument("--city", required=True)

    sub.add_parser("list", help="print valid category and city slugs")

    a = ap.parse_args()
    if a.cmd == "list":
        print("categories:", ", ".join(cats))
        print("cities:", ", ".join(cities))
    elif a.cmd == "import":
        cmd_import(a, cats, cities)
    else:
        cmd_run(a, cats, cities)


if __name__ == "__main__":
    main()
