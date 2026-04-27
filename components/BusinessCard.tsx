import type { Business } from '@/data/businesses';

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span className="text-amber-500" aria-label={`${rating} out of 5`}>
      {'★'.repeat(full)}
      {half ? '☆' : ''}
      {'☆'.repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
}

export default function BusinessCard({
  business,
  rank,
}: {
  business: Business;
  rank: number;
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
            <span className="rounded bg-brand-50 px-2 py-0.5">#{rank}</span>
            {business.verified && (
              <span className="rounded bg-emerald-50 px-2 py-0.5 text-emerald-700">
                Verified
              </span>
            )}
          </div>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            {business.name}
          </h3>
          <p className="text-sm text-slate-600">{business.tagline}</p>
        </div>
        <div className="text-right text-sm">
          <Stars rating={business.rating} />
          <div className="text-slate-500">
            {business.rating} ({business.reviewCount} reviews)
          </div>
        </div>
      </div>

      <dl className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
        <div>
          <dt className="text-xs uppercase text-slate-400">Phone</dt>
          <dd className="font-medium text-slate-900">{business.phone}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase text-slate-400">Address</dt>
          <dd>{business.address} {business.zip}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase text-slate-400">Hours</dt>
          <dd>{business.hours}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase text-slate-400">Experience</dt>
          <dd>{business.yearsInBusiness} years in business</dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={`tel:${business.phone.replace(/\D/g, '')}`}
          className="rounded-md bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Call now
        </a>
        <a
          href={business.website}
          rel="nofollow noopener noreferrer"
          target="_blank"
          className="rounded-md border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Visit website
        </a>
      </div>
    </article>
  );
}
