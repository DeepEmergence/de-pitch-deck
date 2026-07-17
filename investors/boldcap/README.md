# BoldCap — Meeting Pack

**Fund:** [BoldCap](https://www.boldcap.com/) · AI-native pre-seed/seed · Sathya Nellore Sampat (GP) · Vansh  

| Asset | Path |
|-------|------|
| **HTML (present)** | [`pitch.html`](pitch.html) |
| **PDF (send)** | `DeepEmergence-BoldCap.pdf` — regenerate below |

## Thesis for this meeting

**LLM alone ≠ mind. AGI is an engineering problem.**  
BoldCap backs **outlier AI researchers and technical founders** building toward AGI — at basecamp, not after consensus.  
DeepEmergence is the **AI teammates** layer in their market map: Sophon composes mind functions into hireable digital employees (retail + enterprise).

## Why BoldCap (slide 12)

| Angle | Fit |
|-------|-----|
| **Pramaana Labs** | Formal verification portfolio bet; we engineer verify-before-write + causal reasoning into labour |
| **Utopian worlds** | Finance AI · Agent Identity · Formal Verification — we ship the employment runtime under those lanes |
| **Platform pit crew** | Follow-on capital, talent, forward-deployed storytelling — category creation for silicon employees |

Sources: [boldcap.com](https://www.boldcap.com/) · [portfolio](https://www.boldcap.com/portfolio) · [about](https://www.boldcap.com/about)

## Slide map (13 · same as Boundless)

1. Cover · 2. Problem · 3. Conviction · 4. Sophon · 5. Competitors · 6. Market · 7. Phase 1 products · 8. Phase 1 Capital · 9. Phases 2–4 · 10. Team · 11. Advisors · 12. **Why BoldCap** · 13. Close

## Regenerate PDF

```bash
google-chrome-stable --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$(pwd)/investors/boldcap/DeepEmergence-BoldCap.pdf" \
  "file://$(pwd)/investors/boldcap/pitch.html"
```

## Deploy to Cloudflare Pages

```bash
npm run deploy:boldcap
```

Project name: `de-boldcap-pitch` → `https://de-boldcap-pitch.pages.dev`
