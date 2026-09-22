(function () {
  if (window.__vxChatbot) return;
  window.__vxChatbot = true;

  const CONTACT_EMAIL = 'info@volaxin.com';
  const CONTACT_MAILTO = 'mailto:' + CONTACT_EMAIL + '?subject=Volaxin%20Enquiry';

  const KB = [
    { k: ['demo', 'trial', 'try', 'test drive', 'showcase'], a: 'A live demo takes 30 minutes and is tailored to your fleet. Shall I connect you with our team? Email <a href="' + CONTACT_MAILTO + '">' + CONTACT_EMAIL + '</a> or use the Request a Demo button.' },
    { k: ['price', 'pricing', 'cost', 'quote', 'quotation', 'budget', 'plan'], a: 'Pricing is per vessel and depends on module selection (16 modules available). Please write to <a href="' + CONTACT_MAILTO + '">' + CONTACT_EMAIL + '</a> with fleet size and modules of interest — we\'ll send an indicative quote the same day.' },
    { k: ['module', 'modules', 'feature', 'features', 'suite', 'what do you offer', 'products'], a: 'Volaxin ships 16 integrated modules on one dataset — PMS, Inventory, Procurement, Crew, SHEQ, Navigation, Chartering, Warehouse, DryDock, Ops, Finance, Documents, Insights, Hull, Comply and Wavy (offline AI). Which one shall I open for you?' },
    { k: ['pms', 'planned maintenance', 'maintenance'], a: 'VOLAX PMS covers counter, calendar and condition-based scheduling — class approved, offline-first. See <a href="/products/pms.html">the PMS page</a> or ask <a href="' + CONTACT_MAILTO + '">' + CONTACT_EMAIL + '</a>.' },
    { k: ['crew', 'seafarer', 'mlc', 'stcw', 'payroll', 'rest hour', 'work rest'], a: 'VOLAX Crew handles the full seafarer lifecycle — MLC 2006 rest-hours, STCW certificates, payroll and planning. See <a href="/products/crew-management.html">Crew module</a>.' },
    { k: ['sheq', 'safety', 'incident', 'sire', 'tmsa', 'audit'], a: 'VOLAX SHEQ covers incidents, permits, drills, TMSA and SIRE 2.0. Details: <a href="/products/sheq.html">SHEQ module</a>.' },
    { k: ['chartering', 'voyage', 'laytime', 'demurrage', 'freight'], a: 'VOLAX ChartExec — voyage estimation, laytime, demurrage and post-fixture. See <a href="/products/chartering.html">ChartExec module</a>.' },
    { k: ['navigation', 'ais', 'route', 'passage'], a: 'VOLAX Navigate — AIS tracking, route planning, ECA/HRA alerts. See <a href="/products/navigation.html">Navigation module</a>.' },
    { k: ['procurement', 'purchase', 'po', 'supplier', 'vendor'], a: 'VOLAX Procure — requisition to PO to invoice with AI matching. See <a href="/products/procurement.html">Procurement</a>.' },
    { k: ['inventory', 'spare', 'stock'], a: 'VOLAX Inventory — fleet-wide stock, spares and interchangeability. See <a href="/products/inventory.html">Inventory</a>.' },
    { k: ['ai', 'wavy', 'assistant'], a: 'VOLAX Wavy is the only offline AI for ship management. See <a href="/products/ai-assistant.html">Wavy</a>.' },
    { k: ['cii', 'ets', 'fueleu', 'mrv', 'emission', 'compliance', 'imo dcs'], a: 'VOLAX Comply — CII, EU ETS, FuelEU Maritime, MRV, IMO DCS. See <a href="/products/compliance.html">Comply</a>.' },
    { k: ['offline', 'satcom', 'ship side', 'sync'], a: 'Every module works fully offline at sea with change-log sync when the link is up. Ship-side and shore stay identical.' },
    { k: ['language', 'multilingual', 'translate'], a: 'The platform ships in 92+ languages across all modules.' },
    { k: ['contact', 'email', 'phone', 'reach', 'talk to', 'support', 'help'], a: 'The fastest way to reach us is <a href="' + CONTACT_MAILTO + '">' + CONTACT_EMAIL + '</a>. Our team responds within one business day.' },
    { k: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'good afternoon'], a: 'Hello! I\'m the Volaxin assistant. Ask about our 16 modules, pricing, offline sync, or how to book a demo.' },
    { k: ['thanks', 'thank you', 'thx', 'cheers'], a: 'You\'re welcome. If anything else comes up, write to <a href="' + CONTACT_MAILTO + '">' + CONTACT_EMAIL + '</a>.' },
    { k: ['about', 'company', 'who are you', 'volaxin'], a: 'Volaxin Maritime Suite is a unified ship-management platform — sixteen modules on one dataset, offline-first, class-approved. See <a href="/company/about.html">About Volaxin</a>.' },
    { k: ['blog', 'article', 'guide'], a: 'Our maritime blog covers CII, SIRE 2.0, MLC, ORB and more. <a href="/blog.html">Read the blog</a>.' }
  ];

  const QUICK = [
    'Book a demo',
    'Pricing',
    'What modules?',
    'Contact us'
  ];

  const FALLBACK = 'Thanks for your question. For a precise answer please email <a href="' + CONTACT_MAILTO + '">' + CONTACT_EMAIL + '</a> — our team replies within one business day.';

  function match(q) {
    const s = (q || '').toLowerCase();
    if (!s.trim()) return null;
    let best = null, score = 0;
    for (const item of KB) {
      let sc = 0;
      for (const kw of item.k) if (s.includes(kw)) sc += kw.length;
      if (sc > score) { score = sc; best = item; }
    }
    return best ? best.a : FALLBACK;
  }

  function el(tag, attrs, kids) {
    const n = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    if (kids) kids.forEach(c => { if (c) n.appendChild(c); });
    return n;
  }

  function build() {
    if (document.getElementById('vx-chatbot')) return;

    const wrap = el('div', { id: 'vx-chatbot' });

    const launcher = el('button', {
      id: 'vx-chatbot-launcher',
      type: 'button',
      'aria-label': 'Open chat'
    });
    launcher.innerHTML = '<img src="/chatbotlogo.webp" alt="Volaxin chatbot" onerror="this.style.display=\'none\'"><span id="vx-chatbot-badge">1</span>';

    const panel = el('div', { id: 'vx-chatbot-panel', role: 'dialog', 'aria-label': 'Volaxin assistant' });

    const head = el('div', { class: 'vxb-head' });
    head.innerHTML =
      '<div class="vxb-avatar"><img src="/chatbotlogo.webp" alt="" onerror="this.parentNode.textContent=\'V\'"></div>' +
      '<div class="vxb-head-txt"><div class="vxb-name">Volaxin Assistant</div><div class="vxb-status">Online · Ready to help</div></div>' +
      '<button class="vxb-close" type="button" aria-label="Close">✕</button>';

    const body = el('div', { class: 'vxb-body', id: 'vx-chatbot-body' });

    const foot = el('div', { class: 'vxb-foot' });
    foot.innerHTML =
      '<div class="vxb-input-row">' +
        '<input class="vxb-input" id="vx-chatbot-input" type="text" placeholder="Type your question…" autocomplete="off">' +
        '<button class="vxb-send" type="button" aria-label="Send"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></button>' +
      '</div>' +
      '<div class="vxb-hint">Or email us at <a href="' + CONTACT_MAILTO + '">' + CONTACT_EMAIL + '</a></div>';

    panel.appendChild(head);
    panel.appendChild(body);
    panel.appendChild(foot);
    wrap.appendChild(launcher);
    wrap.appendChild(panel);
    document.body.appendChild(wrap);

    function scrollDown() { body.scrollTop = body.scrollHeight; }

    function addMsg(who, html) {
      const m = el('div', { class: 'vxb-msg ' + who });
      const av = el('div', { class: 'vxb-msg-av' });
      if (who === 'bot') {
        av.innerHTML = '<img src="/chatbotlogo.webp" alt="" onerror="this.parentNode.textContent=\'V\'">';
      } else {
        av.innerHTML = '<img src="/chatbotuser.webp" alt="" onerror="this.parentNode.textContent=\'You\'.charAt(0)">';
      }
      const b = el('div', { class: 'vxb-msg-b', html: html });
      m.appendChild(av);
      m.appendChild(b);
      body.appendChild(m);
      scrollDown();
    }

    function addQuick(list) {
      const q = el('div', { class: 'vxb-quick' });
      list.forEach(function (label) {
        const btn = el('button', { type: 'button' });
        btn.textContent = label;
        btn.addEventListener('click', function () { send(label); });
        q.appendChild(btn);
      });
      body.appendChild(q);
      scrollDown();
    }

    function addTyping() {
      const m = el('div', { class: 'vxb-msg bot', id: 'vx-typing' });
      const av = el('div', { class: 'vxb-msg-av' });
      av.innerHTML = '<img src="/chatbotlogo.webp" alt="" onerror="this.parentNode.textContent=\'V\'">';
      const t = el('div', { class: 'vxb-typing', html: '<span></span><span></span><span></span>' });
      m.appendChild(av);
      m.appendChild(t);
      body.appendChild(m);
      scrollDown();
    }
    function clearTyping() {
      const t = document.getElementById('vx-typing');
      if (t) t.remove();
    }

    function send(text) {
      const val = (text || '').trim();
      if (!val) return;
      addMsg('user', val.replace(/[<>&]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]; }));
      const input = document.getElementById('vx-chatbot-input');
      if (input) input.value = '';
      addTyping();
      const reply = match(val);
      setTimeout(function () {
        clearTyping();
        addMsg('bot', reply);
      }, 650);
    }

    let opened = false;
    function openPanel() {
      panel.classList.add('open');
      const badge = document.getElementById('vx-chatbot-badge');
      if (badge) badge.style.display = 'none';
      if (!opened) {
        opened = true;
        addMsg('bot', 'Hello — I\'m the Volaxin assistant. Ask me about our 16 modules, offline sync, pricing, or a demo. For anything specific, please email <a href="' + CONTACT_MAILTO + '">' + CONTACT_EMAIL + '</a> and our team will respond within a business day.');
        addQuick(QUICK);
      }
      setTimeout(function () {
        const i = document.getElementById('vx-chatbot-input');
        if (i) i.focus();
      }, 120);
    }
    function closePanel() { panel.classList.remove('open'); }

    launcher.addEventListener('click', function () {
      if (panel.classList.contains('open')) closePanel(); else openPanel();
    });
    head.querySelector('.vxb-close').addEventListener('click', closePanel);

    foot.querySelector('.vxb-send').addEventListener('click', function () {
      const i = document.getElementById('vx-chatbot-input');
      send(i ? i.value : '');
    });
    foot.querySelector('.vxb-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); send(e.target.value); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
    });

    try { localStorage.removeItem('vxChatbotPos'); } catch (_) { }

    const intro = document.getElementById('intro');
    if (intro) {
      wrap.style.display = 'none';
      const reveal = function () {
        wrap.style.display = '';
        if (obs) obs.disconnect();
      };
      const check = function () { if (intro.classList.contains('gone')) reveal(); };
      const obs = new MutationObserver(check);
      obs.observe(intro, { attributes: true, attributeFilter: ['class'] });
      check();
      setTimeout(reveal, 15000);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
