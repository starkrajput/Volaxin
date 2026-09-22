# Volaxin Standard Site Shell

Reusable CSS + JS + HTML partials for every non-cinematic page (product pages, solutions, technology, company, resources).

## Files

- `shell.css` — design system (colors, typography, buttons, cards, nav, mega-menu, footer). Load first on every page.
- `shell.js` — mobile-menu toggle + mega-menu hover polish. Load at end of body.
- `nav.html` — nav bar + mega-menu markup. Paste into every page inside `<body>` immediately after opening `<body>`.
- `footer.html` — footer + mobile-nav overlay markup. Paste before closing `</body>`.

## Page template

Every new page must:

1. Include `<link rel="stylesheet" href="/shell/shell.css">` in `<head>`
2. Load Inter + Montserrat from Google Fonts (already CSP-safe on the deployed domain)
3. Paste nav.html at top of body
4. Paste footer.html at end of body
5. Load `<script src="/shell/shell.js" defer></script>` at end of body
6. Set unique `<title>`, `<meta name="description">`, canonical link, and JSON-LD schema (SoftwareApplication for module pages, WebPage for solutions, Organization for company).

## Body font-size policy (per user request)

- Base: 18px (never smaller)
- Body copy paragraphs: `clamp(17px, 1.15vw, 19px)`
- Lede: `clamp(20px, 1.6vw, 26px)`
- H1: `clamp(40px, 5.6vw, 72px)`
- H2: `clamp(30px, 3.8vw, 52px)`
- H3: `clamp(22px, 2.2vw, 30px)`
- Small (labels, badges): 14–15px minimum

## Colors (do not diverge)

`--sapphire` `--violet` `--gold-rich` `--gold-light` `--steel` `--azure` — same as the cinematic homepage.

## 92+ languages badge

Every footer must include the "92+ languages supported" badge. Every module page hero must include it as a chip in the badges row.
