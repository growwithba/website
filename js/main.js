/* ============================================================
   GrowwithBA — Interactivity & Motion
   Vanilla JS. No frameworks. IntersectionObserver + rAF.
   ============================================================ */

(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;

  /* ---------- Page loader ---------- */
  const loader = document.getElementById('loader');
  const loaderPct = document.getElementById('loader-percent');
  let p = 0;
  const tick = () => {
    p += Math.max(1, (100 - p) * 0.08);
    if (p >= 100) p = 100;
    if (loaderPct) loaderPct.textContent = String(Math.floor(p)).padStart(2, '0');
    if (p < 100) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  const hideLoader = () => {
    if (!loader) return;
    setTimeout(() => loader.classList.add('is-done'), 650);
    setTimeout(() => loader.remove(), 1400);
  };
  window.addEventListener('load', hideLoader);
  setTimeout(hideLoader, 2200);

  /* ---------- Page-in transition ---------- */
  const pt = document.getElementById('pageTransition');
  if (pt) {
    pt.classList.add('is-in');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      pt.classList.remove('is-in');
      pt.classList.add('is-out');
      setTimeout(() => pt.classList.remove('is-out'), 700);
    }));
  }

  /* ---------- Custom cursor ---------- */
  if (!isTouch && !reduced) {
    const ring = document.getElementById('cursor');
    const dot = document.getElementById('cursor-dot');
    let rx = window.innerWidth / 2, ry = window.innerHeight / 2;
    let dx = rx, dy = ry;
    let mx = rx, my = ry;

    window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    window.addEventListener('mouseleave', () => {
      ring?.classList.add('is-hidden');
      dot?.classList.add('is-hidden');
    });
    window.addEventListener('mouseenter', () => {
      ring?.classList.remove('is-hidden');
      dot?.classList.remove('is-hidden');
    });

    const loop = () => {
      dx += (mx - dx) * 0.9;
      dy += (my - dy) * 0.9;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dot) dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`;
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    const hoverables = 'a, button, .service, .case, .post, .principle, .member, .office, .feature, .faq__item summary, .chip, input, textarea, select, label, [data-tilt]';
    document.querySelectorAll(hoverables).forEach(el => {
      el.addEventListener('mouseenter', () => ring?.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => ring?.classList.remove('is-hover'));
    });
  }

  /* ---------- Nav scroll state + progress bar ---------- */
  const nav = document.getElementById('nav');
  const progress = document.getElementById('scrollProgress');
  const onScroll = () => {
    const y = window.scrollY;
    nav?.classList.toggle('is-scrolled', y > 20);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = ((y / max) * 100).toFixed(2) + '%';
    }
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById('navToggle');
  const menu = document.getElementById('menu');
  const closeMenu = () => {
    menu?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  };
  menuToggle?.addEventListener('click', () => {
    const open = menu?.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', !!open);
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  /* ---------- Reveal on scroll ---------- */
  const revealTargets = document.querySelectorAll('[data-reveal], [data-reveal-line]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          const delay = e.target.getAttribute('data-delay') || 0;
          if (delay) e.target.style.setProperty('--reveal-delay', delay + 'ms');
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealTargets.forEach((el, i) => {
      const stagger = el.hasAttribute('data-reveal-line') ? i * 80 : 0;
      el.style.setProperty('--reveal-delay', stagger + 'ms');
      io.observe(el);
    });
  } else {
    revealTargets.forEach(el => el.classList.add('is-in'));
  }

  /* ---------- Number counters ---------- */
  const easeOutQuad = t => 1 - (1 - t) * (1 - t);
  const runCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-counter') || '0');
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = /^\$/.test(el.textContent) ? '$' : '';
    const dur = 1400;
    const start = performance.now();
    const from = 0;
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const v = from + (target - from) * easeOutQuad(p);
      el.textContent = prefix + (decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString()) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const counterEls = document.querySelectorAll('[data-counter]');
  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { runCounter(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    counterEls.forEach(el => cio.observe(el));
  } else {
    counterEls.forEach(runCounter);
  }

  /* ---------- Tilt effect ---------- */
  if (!isTouch && !reduced) {
    document.querySelectorAll('[data-tilt]').forEach(card => {
      let raf = null;
      const rect = () => card.getBoundingClientRect();
      const handle = (e) => {
        const r = rect();
        const cx = e.clientX - r.left;
        const cy = e.clientY - r.top;
        const mx = ((cx / r.width) - 0.5) * 8;
        const my = ((cy / r.height) - 0.5) * -8;
        card.style.setProperty('--mx', ((cx / r.width) * 100) + '%');
        card.style.setProperty('--my', ((cy / r.height) * 100) + '%');
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transform = `perspective(900px) rotateX(${my}deg) rotateY(${mx}deg) translateY(-4px)`;
        });
      };
      card.addEventListener('mousemove', handle);
      card.addEventListener('mouseleave', () => {
        cancelAnimationFrame(raf);
        card.style.transform = '';
      });
    });
  }

  /* ---------- Hero particles ---------- */
  const canvas = document.getElementById('particles');
  if (canvas && !reduced) {
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, DPR = Math.min(2, window.devicePixelRatio || 1);
    let particles = [];

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * DPR; canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const count = Math.min(70, Math.round((W * H) / 22000));
      particles = new Array(count).fill(0).map(() => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.4,
        a: Math.random() * 0.6 + 0.2,
      }));
    };
    resize();
    window.addEventListener('resize', resize);

    let mouseX = -9999, mouseY = -9999;
    canvas.parentElement?.addEventListener('mousemove', e => {
      const r = canvas.getBoundingClientRect();
      mouseX = e.clientX - r.left; mouseY = e.clientY - r.top;
    });
    canvas.parentElement?.addEventListener('mouseleave', () => { mouseX = -9999; mouseY = -9999; });

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        const dx = p.x - mouseX, dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          p.x += (dx / dist) * 0.6;
          p.y += (dy / dist) * 0.6;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,169,110,${p.a})`;
        ctx.fill();
      }
      // links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(201,169,110,${0.10 * (1 - d / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }

  /* ---------- Case filter (work page) ---------- */
  const filterButtons = document.querySelectorAll('.chip[data-filter]');
  const cases = document.querySelectorAll('#casesGrid .case');
  const filterCount = document.getElementById('filterCount');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const f = btn.getAttribute('data-filter');
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      let shown = 0;
      cases.forEach(c => {
        const cat = c.getAttribute('data-cat');
        const show = f === 'all' || cat === f;
        c.classList.toggle('is-hidden', !show);
        if (show) shown++;
      });
      if (filterCount) filterCount.textContent = shown;
    });
  });

  /* ---------- Office local time ---------- */
  const timeEls = document.querySelectorAll('.office__time[data-tz]');
  const renderTimes = () => {
    timeEls.forEach(el => {
      const tz = el.getAttribute('data-tz');
      try {
        const t = new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false });
        el.textContent = 'Local time · ' + t;
      } catch (_) { el.textContent = ''; }
    });
  };
  if (timeEls.length) { renderTimes(); setInterval(renderTimes, 30000); }

  /* ---------- Contact form ---------- */
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    form.classList.add('is-sent');
    if (formNote) formNote.textContent = 'Thanks — we\'ll be in touch within 48 hours.';
    form.querySelectorAll('input, textarea').forEach(i => { if (i.type !== 'checkbox') i.value = ''; });
  });

  /* ---------- Smooth in-page link transition ---------- */
  document.querySelectorAll('a[href$=".html"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || a.target === '_blank' || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      e.preventDefault();
      pt?.classList.add('is-in');
      setTimeout(() => { window.location.href = href; }, 500);
    });
  });

  /* ---------- Marquee pause on hover ---------- */
  document.querySelectorAll('.marquee').forEach(m => {
    const track = m.querySelector('.marquee__track');
    if (!track) return;
    m.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
    m.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
  });
})();
