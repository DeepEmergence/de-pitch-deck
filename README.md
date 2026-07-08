# DeepEmergence — Pitch Deck

A fully **markdown-editable** pitch deck with live **Mermaid** diagrams.
Edit `slides.md` like a normal text file — no slide-editor lock-in.

## Edit it

Just open `slides.md` in any editor. Each slide is a `---`-delimited Markdown section.

## Preview it

```bash
npm install
npm run dev
```

Opens a live-reloading preview at `localhost:3030`.

### Simple HTML deck (no Node server)

```bash
npm run build:html   # regenerates slides.html from slides.md
```

Open `slides.html` in any browser. Arrow keys or ← → buttons navigate slides.

## Export

```bash
npm run export       # -> DeepEmergence-Pitch-Deck.pptx
npm run export:pdf   # -> DeepEmergence-Pitch-Deck.pdf
```

See also [`architecture.md`](architecture.md) for the full written architecture.

## Structure (19 slides — standard investor narrative)

| # | Slide | Purpose |
|---|---|---|
| 1 | Cover | DeepEmergence — launching July 2026 |
| 2 | Problem | Wrapper agents vs. governable labor |
| 3 | Solution | Sophon harness + platform architecture |
| 4 | Traction | Pre-revenue milestones · product launch plan |
| 5 | Team | Ajay Pratap Singh & Aman Pratap Singh |
| 6 | Advisors | IIT Madras · policy · industry advisors |
| 7 | Market size | TAM / SAM / SOM + geographic breakdown |
| 8 | Competition | Why customers choose us vs. alternatives |
| 9 | Products | Phase 1 employees · Phase 2 wearables · Phase 3 APIs |
| 10 | Business model · Phase 1 | Retail + enterprise monetization · ARR path |
| 11 | Business model · Phase 2 | Wearables + companion apps data mesh |
| 12 | Business model · Phase 3 | Platform licensing · B2B2C expansion |
| 13 | Go-to-market strategy | Phased GTM + product roadmap |
| 14 | Funding roadmap | Expense charts · ARR ramp · milestones by round |
| 15–17 | The ask | Angel · Pre-seed · Seed variants |
| 18 | Unified timeline | Full labeled roadmap through pre-Series A |
| 19 | Contact | Email · website |

## Editorial note

The deck avoids claiming "AGI" outright. The framing: **model intelligence commoditizes; the engineering discipline around it does not.**
