(function () {
  var NAV_HTML = '<nav class="nav"><a href="/" class="nav-logo"><img src="/logo.png" alt="Volaxin" onerror="this.style.display=\'none\'"><div class="nav-logo-txt"><span class="nav-logo-name">Volaxin</span><span class="nav-logo-sub">Maritime Suite</span></div></a>'
    + '<ul class="nav-links">'
    + '<li><a href="/products/">Products <span class="caret">▾</span></a><div class="megamenu"><div class="mm-head"><div class="mm-head-l"><h4>Sixteen integrated modules. <em>One dataset.</em></h4><p>Every module on the same database — technical, commercial, and operational management with no reconciliation.</p></div><div class="mm-head-r"><a href="/products/">Platform Overview →</a></div></div><div class="mm-grid">'
    + '<a class="mm-card" href="/products/pms.html"><div class="mm-ico">PMS</div><div class="mm-body"><div class="mm-name">Planned Maintenance</div><div class="mm-desc">Counter, calendar & condition-based scheduling.</div></div></a>'
    + '<a class="mm-card" href="/products/inventory.html"><div class="mm-ico">INV</div><div class="mm-body"><div class="mm-name">Inventory</div><div class="mm-desc">Fleet-wide stock, spares & interchangeability.</div></div></a>'
    + '<a class="mm-card" href="/products/procurement.html"><div class="mm-ico">PRC</div><div class="mm-body"><div class="mm-name">Procurement</div><div class="mm-desc">Requisition to PO to invoice with AI matching.</div></div></a>'
    + '<a class="mm-card" href="/products/crew-management.html"><div class="mm-ico">CRW</div><div class="mm-body"><div class="mm-name">Crew & Payroll</div><div class="mm-desc">Seafarer lifecycle, MLC & STCW compliance.</div></div></a>'
    + '<a class="mm-card" href="/products/sheq.html"><div class="mm-ico">SHQ</div><div class="mm-body"><div class="mm-name">SHEQ</div><div class="mm-desc">Incidents, permits, TMSA, SIRE 2.0 vetting.</div></div></a>'
    + '<a class="mm-card rare" href="/products/navigation.html"><div class="mm-ico">NAV</div><div class="mm-body"><div class="mm-name">Navigation</div><div class="mm-desc">AIS tracking, route planning, ECA alerts.</div><div class="mm-tag">Rare · integrated in ERP</div></div></a>'
    + '<a class="mm-card rare" href="/products/chartering.html"><div class="mm-ico">CHT</div><div class="mm-body"><div class="mm-name">ChartExec</div><div class="mm-desc">Voyage estimation, laytime, demurrage.</div><div class="mm-tag">Rare · 2 of 11</div></div></a>'
    + '<a class="mm-card unique" href="/products/warehouse.html"><div class="mm-ico">WRH</div><div class="mm-body"><div class="mm-name">Warehouse</div><div class="mm-desc">Shore warehouse purpose-built for marine parts.</div><div class="mm-tag"></div></div></a>'
    + '<a class="mm-card" href="/products/drydock.html"><div class="mm-ico">DRY</div><div class="mm-body"><div class="mm-name">DryDock</div><div class="mm-desc">Yard tender, work collection, budget control.</div></div></a>'
    + '<a class="mm-card" href="/products/operations.html"><div class="mm-ico">OPS</div><div class="mm-body"><div class="mm-name">Fleet Ops</div><div class="mm-desc">Noon reports, e-logbooks (MEPC.312), CII.</div></div></a>'
    + '<a class="mm-card few" href="/products/finance.html"><div class="mm-ico">FIN</div><div class="mm-body"><div class="mm-name">Finance</div><div class="mm-desc">Vessel-level P&L, voyage costing, multi-currency.</div><div class="mm-tag">Few · 3 of 11</div></div></a>'
    + '<a class="mm-card" href="/products/documents.html"><div class="mm-ico">DOC</div><div class="mm-body"><div class="mm-name">Documents</div><div class="mm-desc">SMS docs, version control, offline sync.</div></div></a>'
    + '<a class="mm-card" href="/products/analytics.html"><div class="mm-ico">INS</div><div class="mm-body"><div class="mm-name">Insights</div><div class="mm-desc">Cross-module fleet KPIs & benchmarking.</div></div></a>'
    + '<a class="mm-card few" href="/products/hull-integrity.html"><div class="mm-ico">HUL</div><div class="mm-body"><div class="mm-name">Hull Integrity</div><div class="mm-desc">UT readings, coating, structural condition.</div><div class="mm-tag">Few · 2 of 11</div></div></a>'
    + '<a class="mm-card" href="/products/compliance.html"><div class="mm-ico">CMP</div><div class="mm-body"><div class="mm-name">Comply</div><div class="mm-desc">CII, EU ETS, FuelEU, MRV, IMO DCS.</div></div></a>'
    + '<a class="mm-card unique" href="/products/ai-assistant.html"><div class="mm-ico">AI</div><div class="mm-body"><div class="mm-name">VOLAX Wavy</div><div class="mm-desc">The only offline AI for ship management.</div><div class="mm-tag">Unique · offline AI</div></div></a>'
    + '</div><div class="mm-foot"><span>Every module ships in <strong>92+ languages</strong> and works fully offline at sea.</span><a href="/products/">Compare all 16 modules →</a></div></div></li>'
    + '<li><a href="/solutions/">Solutions <span class="caret">▾</span></a><div class="dropdown"><a href="/solutions/tankers.html">For Tanker Operators<small>SIRE 2.0 · ORB · TMSA</small></a><a href="/solutions/bulk-carriers.html">For Bulk Carriers<small>Hold inspection · Hatch cover</small></a><a href="/solutions/container-liner.html">For Container &amp; Liner<small>Schedule · Reefer · Port-call</small></a><a href="/solutions/offshore.html">For Offshore &amp; FPSO<small>Asset integrity · SIMOPS</small></a><a href="/solutions/ship-managers.html">For Ship Managers<small>Multi-client · SLA</small></a></div></li>'
    + '<li><a href="/technology/">Technology <span class="caret">▾</span></a><div class="dropdown"><a href="/technology/architecture.html">Platform Architecture</a><a href="/technology/security.html">Security &amp; Compliance</a><a href="/technology/integrations.html">Integrations &amp; API</a></div></li>'
    + '<li><a href="/company/about.html">Company <span class="caret">▾</span></a><div class="dropdown"><a href="/company/about.html">About Volaxin</a><a href="/company/partners.html">Partners</a><a href="/blog.html">Blog</a><a href="/news.html">News</a></div></li>'
    + '<li><a href="/contact.html">Contact</a></li>'
    + '</ul>'
    + '<a href="/contact.html" class="nav-cta">Request a Demo</a>'
    + '<button class="nav-hamburger" aria-label="Menu" onclick="toggleMobileMenu()"><span></span><span></span><span></span></button>'
    + '</nav>';

  var FOOTER_HTML = '<footer class="foot"><div class="wrap"><div class="foot-grid">'
    + '<div><div class="foot-brand-name">Volaxin</div><p class="foot-brand-sub">Sixteen integrated modules for modern fleets. Technical, commercial, and operational management on one dataset — every module works fully offline at sea.</p><span class="foot-lang-badge">🌐 92+ languages supported</span></div>'
    + '<div><h5>Products</h5><a href="/products/">Platform Overview</a><a href="/products/pms.html">VOLAX PMS</a><a href="/products/inventory.html">VOLAX Inventory</a><a href="/products/procurement.html">VOLAX Procure</a><a href="/products/crew-management.html">VOLAX Crew</a><a href="/products/sheq.html">VOLAX SHEQ</a><a href="/products/navigation.html">VOLAX Navigate</a><a href="/products/chartering.html">VOLAX ChartExec</a><a href="/products/warehouse.html">VOLAX WRH</a></div>'
    + '<div><h5>&nbsp;</h5><a href="/products/drydock.html">VOLAX DryDock</a><a href="/products/operations.html">VOLAX Ops</a><a href="/products/finance.html">VOLAX Finance</a><a href="/products/documents.html">VOLAX Docs</a><a href="/products/analytics.html">VOLAX Insights</a><a href="/products/hull-integrity.html">VOLAX Hull</a><a href="/products/compliance.html">VOLAX Comply</a><a href="/products/ai-assistant.html">VOLAX Wavy</a></div>'
    + '<div><h5>Solutions</h5><a href="/solutions/tankers.html">Tanker Operators</a><a href="/solutions/bulk-carriers.html">Bulk Carriers</a><a href="/solutions/container-liner.html">Container &amp; Liner</a><a href="/solutions/offshore.html">Offshore &amp; FPSO</a><a href="/solutions/ship-managers.html">Ship Managers</a><h5 style="margin-top:22px;">Technology</h5><a href="/technology/architecture.html">Architecture</a><a href="/technology/security.html">Security</a><a href="/technology/integrations.html">Integrations &amp; API</a></div>'
    + '<div><h5>Company</h5><a href="/company/about.html">About Volaxin</a><a href="/company/partners.html">Partners</a><a href="/blog.html">Blog</a><a href="/news.html">News</a><a href="/?tour=1&fresh=1">Cinematic Tour</a><a href="/contact.html">Request a Demo</a></div>'
    + '</div><div class="foot-bottom"><div>© 2026 Volaxin Maritime Suite Ltd · Integrated ship management software.</div><div class="foot-bottom-links"><a href="/privacy.html">Privacy</a><a href="/terms.html">Terms</a><a href="/security.html">Security</a></div></div></div></footer>'
    + '<div class="mnav" id="mnav">'
    + '<button class="mnav-close" onclick="closeMobileMenu()" aria-label="Close">✕</button>'
    + '<h4>Products</h4><a href="/products/">Platform Overview</a><a href="/products/pms.html">PMS</a><a href="/products/inventory.html">Inventory</a><a href="/products/procurement.html">Procurement</a><a href="/products/crew-management.html">Crew & Payroll</a><a href="/products/sheq.html">SHEQ</a><a href="/products/navigation.html">Navigation</a><a href="/products/chartering.html">Chartering</a><a href="/products/warehouse.html">Warehouse</a><a href="/products/drydock.html">DryDock</a><a href="/products/operations.html">Fleet Ops</a><a href="/products/finance.html">Finance</a><a href="/products/documents.html">Documents</a><a href="/products/analytics.html">Insights</a><a href="/products/hull-integrity.html">Hull</a><a href="/products/compliance.html">Comply</a><a href="/products/ai-assistant.html">Wavy (AI)</a>'
    + '<h4>Solutions</h4><a href="/solutions/tankers.html">Tankers</a><a href="/solutions/bulk-carriers.html">Bulk Carriers</a><a href="/solutions/container-liner.html">Container & Liner</a><a href="/solutions/offshore.html">Offshore & FPSO</a><a href="/solutions/ship-managers.html">Ship Managers</a>'
    + '<h4>Technology & Company</h4><a href="/technology/architecture.html">Architecture</a><a href="/technology/security.html">Security</a><a href="/technology/integrations.html">Integrations</a><a href="/company/about.html">About</a><a href="/blog.html">Blog</a><a href="/news.html">News</a><a href="/?tour=1&fresh=1">Cinematic Tour</a>'
    + '<a href="/contact.html" style="margin-top:18px; background:linear-gradient(135deg,var(--steel),var(--sapphire)); color:#fff; text-align:center; border-radius:30px; padding:14px 22px; letter-spacing:.14em; text-transform:uppercase; font-size:11px; font-weight:600;">Request a Demo</a>'
    + '</div>';

  window.toggleMobileMenu = function () {
    var m = document.getElementById('mnav');
    if (!m) return;
    m.classList.toggle('open');
    document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
  };
  window.closeMobileMenu = function () {
    var m = document.getElementById('mnav');
    if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
  };

  function inject() {
    var navSlot = document.getElementById('nav-slot');
    var footSlot = document.getElementById('footer-slot');
    if (navSlot && !navSlot.dataset.filled) { navSlot.innerHTML = NAV_HTML; navSlot.dataset.filled = '1'; }
    if (footSlot && !footSlot.dataset.filled) { footSlot.innerHTML = FOOTER_HTML; footSlot.dataset.filled = '1'; }
    var items = document.querySelectorAll('.nav-links > li');
    items.forEach(function (li) {
      var panel = li.querySelector('.megamenu, .dropdown');
      if (!panel) return;

      var isMegamenu = panel.classList.contains('megamenu'); // only Products has this
      var closeT = null;

      var open = function () { clearTimeout(closeT); li.classList.add('mm-hold'); };

      var scheduleClose = function () {
        clearTimeout(closeT);
        if (isMegamenu) {
          // grace period so the mouse can travel down into the grid
          closeT = setTimeout(function () { li.classList.remove('mm-hold'); }, 550);
        } else {
          // Solutions / Technology / Company — close immediately
          li.classList.remove('mm-hold');
        }
      };

      li.addEventListener('mouseenter', open);
      li.addEventListener('mouseleave', scheduleClose);
      panel.addEventListener('mouseenter', open);
      panel.addEventListener('mouseleave', scheduleClose);
    });
  }

  function loadLenis() {
    if (window.__lenisLoaded) return;
    window.__lenisLoaded = true;
    var s = document.createElement('script');
    s.src = 'https://unpkg.com/lenis@1.1.13/dist/lenis.min.js';
    s.onload = function () {
      if (!window.Lenis) return;
      var lenis = new window.Lenis({
        duration: 1.15,
        easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
        smoothWheel: true,
        wheelMultiplier: 1.05,
        touchMultiplier: 1.6,
        infinite: false
      });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      window.__lenis = lenis;
    };
    s.onerror = function () { window.__lenisLoaded = false; };
    document.head.appendChild(s);
  }

  function registerSW() {
    if (!('serviceWorker' in navigator)) return;
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;
    navigator.serviceWorker.register('/sw.js').catch(function () { });
  }

  function injectChatbot() {
    if (document.getElementById('vx-chatbot')) return;
    if (!document.getElementById('vx-chatbot-css')) {
      var l = document.createElement('link');
      l.id = 'vx-chatbot-css';
      l.rel = 'stylesheet';
      l.href = '/shell/chatbot.css';
      document.head.appendChild(l);
    }
    var s = document.createElement('script');
    s.src = '/shell/chatbot.js';
    s.defer = true;
    document.body.appendChild(s);
  }

  /* Counts every stat up from zero the first time it scrolls into view.
     Text is parsed as prefix + number + suffix, so "500+", "99.9%" and
     "15+" all animate while keeping their punctuation. Anything without a
     clean single number (e.g. "24/7") is left exactly as authored. */
  function initCounters() {
    var SEL = '.vxs-stat-n,.stat-n,.cm-n,.numgrid-n,.trust-n,.tour-stat-n,[data-count]';
    var els = [].slice.call(document.querySelectorAll(SEL)).filter(function (el) {
      if (el.dataset.counted) return false;
      var m = /^(\D*?)(\d[\d,]*(?:\.\d+)?)(\D*)$/.exec(el.textContent.trim());
      if (!m) return false;
      el.dataset.cPre = m[1]; el.dataset.cSuf = m[3];
      el.dataset.cVal = m[2].replace(/,/g, '');
      el.dataset.cDec = (m[2].split('.')[1] || '').length;
      return true;
    });
    if (!els.length) return;

    function run(el) {
      if (el.dataset.counted) return;
      el.dataset.counted = '1';
      var target = parseFloat(el.dataset.cVal);
      var dec = parseInt(el.dataset.cDec, 10) || 0;
      var pre = el.dataset.cPre || '', suf = el.dataset.cSuf || '';
      var dur = 1500, t0 = 0;
      function frame(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var ease = 1 - Math.pow(1 - p, 3);
        var v = target * ease;
        el.textContent = pre + (dec ? v.toFixed(dec) : Math.round(v).toLocaleString()) + suf;
        if (p < 1) requestAnimationFrame(frame);
        else el.textContent = pre + (dec ? target.toFixed(dec) : target.toLocaleString()) + suf;
      }
      requestAnimationFrame(frame);
    }

    if (!('IntersectionObserver' in window)) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.35 });
    els.forEach(function (el) { io.observe(el); });
  }

  function boot() { inject(); loadLenis(); registerSW(); injectChatbot(); initCounters(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
