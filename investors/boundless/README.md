# Boundless Ventures — Meeting Pack

**Meeting:** Natasha Malpani Oswal · Founder & GP, Boundless Ventures  

| Asset | Path |
|-------|------|
| **Live deck** | https://de-boundless-pitch.pages.dev |
| **PDF (send)** | [`DeepEmergence-Boundless-Ventures.pdf`](DeepEmergence-Boundless-Ventures.pdf) — 13 pages · 16:9 (Ask + Standard/bar hidden; capital lives on Phase 1) |
| **HTML (present)** | [`pitch.html`](pitch.html) |

## Thesis for this meeting

**LLM alone ≠ mind. AGI is an engineering problem.**  
**Build Sophon first** — compose miniaturised mind functions into a hireable digital employee (laptop/phone).  
**Then configure** roles on one runtime — not twelve domain wrappers.  
World expectation is heading to digital workers; doesn’t matter who builds it.

## What we cut (on purpose)

| Removed / soft | Why |
|----------------|-----|
| Heavy monthly burn / $12M seed charts | Wrong stage for Boundless; replaced with a concrete $1.5M use-of-funds plan |
| Patent / AISSN / gov deep-dive | Speculative for first meeting |
| Attack on Sierra / Alter / Shram | Position as stack completion |
| Hardware-first Phase 2 | Soft ambient depth; avoid Limitless baggage |
| Full 12-SKU catalog launch | Core → Chronos/Sira roles only |

## Oral opener

> LLM alone isn’t a mind. Domain apps wrap models with tools and skills and sell “workers” — demos still need babysitters. **AGI is an engineering problem:** compose miniaturised mind functions into a hireable digital employee, then configure roles. We’re building Sophon for that — not another finance or health wrapper.

## Slide map (13 · Ask + Standard/bar hidden)

1. Cover — silicon mind for silicon employees  
2. Problem — LLM ≠ mind · wrappers vs engineered mind  
3. Conviction — mind-function signals incl. causal reasoning / CUA; application layer  
4. Sophon — composed mind under every role  
5. Competitors — headcount vs software pie; IT / consultancy / staffing (not AI copilots)  
6. Market — region dropdown (Global / USA / India) · Global TAM $8.4T · SAM $172B (Gartner AI apps) · SOM $85M · see `market-methodology.md`  
7. Phase 1 — Sophon core + retail/enterprise digital-employee ecosystem  
8. Phase 1 Capital — $1.5M India-weighted use of funds + 3 milestones  
9. Phases 2→3→4 — depth (2027) → twin (2027–28) → body (horizon)  
10. Team — CEO & CTO · CRO for mind science  
11. Advisors — 4 open seats  
12. Why Boundless — stack completion, not another wrapper  
13. Close — 5-stage roadmap · Sophon builds the architecture  
~~Roles~~ — folded into Phase 1 · ~~Standard / bar~~ · ~~Ask~~ — `slide-hidden` where kept

## Team framing (this meeting)

| Role | Status |
|------|--------|
| **Ajay · Founder, CEO & CTO** | Ships business + platform; owns raise and product |
| **CRO co-founder** | Open — continuous-mind research; IIT Madras PhD candidates in discussion; MIT / Stanford pipeline |
| **Advisors** | Four seats — all open |

## Advisor seats (all open)

| # | Seat | Status |
|---|------|--------|
| 1 | AI Research Professor | Open · considering Prof. Ravindran & Prof. Khapra |
| 2 | Applied AI Technical Leader | Open |
| 3 | Product & Sales | Open |
| 4 | Software Companies Growth | Open |

Names under seat 1 are consideration only; no affiliation or commitment is implied.

## Regenerate PDF

```bash
google-chrome-stable --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$(pwd)/investors/boundless/DeepEmergence-Boundless-Ventures.pdf" \
  "file://$(pwd)/investors/boundless/pitch.html"
```

## Deploy to Cloudflare Pages

Live URL: **https://de-boundless-pitch.pages.dev**

```bash
npm run deploy:boundless
```

Copies `pitch.html` → `site/index.html` + PDF, then deploys via Wrangler to project `de-boundless-pitch`.
