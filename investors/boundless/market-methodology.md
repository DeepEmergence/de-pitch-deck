# Market sizing methodology (Boundless deck)

**As of:** Jul 2026 · Used by Market slide region switcher (Global / USA / India)  
**Rule:** Prefer primary statistics; label company SOM as *target*, not market research.

---

## Definitions

| Layer | Meaning |
|-------|---------|
| **TAM** | Annual **employer wage pool** for remote-capable knowledge roles (laptop + phone work). Not software market. |
| **SAM** | Near-term **budget we can sell into** as digital employees — triangulated to Gartner AI application software spend and regional IT/BPM displacement that buyers already purchase as labour/capacity. |
| **SOM** | DeepEmergence **Year-5 revenue target** in that geography (company plan). |

---

## Anchors (primary / reputable)

| Anchor | Figure | Source |
|--------|--------|--------|
| US private industry wages & salaries | **$11.03T** (2025) | BEA via FRED `A132RC1A027NBEA` |
| US private industry total compensation | **~$12.5T** (2024) | BEA FRED `A4003C0A144NBEA` |
| Worldwide IT spending | **$5.43T** (2025) | Gartner (Jul 2025 forecast) |
| Worldwide IT services | **$1.69T** (2025) | Gartner (Jul 2025) |
| Worldwide software | **$1.23T** (2025) | Gartner (Jul 2025) |
| Worldwide AI application software | **$172B** (2025) | Gartner (Sep 2025 AI spending forecast) |
| India tech industry revenue | **$282.6–283B** (FY25E) | NASSCOM Strategic Review 2025 |
| India tech exports | **$224.4B** (FY25E) | NASSCOM |
| India IT services / BPM | **$137.1B** / **$54.6B** | NASSCOM |
| India tech headcount | **5.8M** (+126K net) | NASSCOM |
| India GCCs | **1,760** centres · **~1.9M** employees | NASSCOM / Business Standard |

---

## How we derive TAM / SAM / SOM

### USA

| | Figure | Derivation |
|---|---------|------------|
| **TAM** | **$3.1T** | BEA private wages ~$11.0T × knowledge/professional wage share (~50–55%) × remote-capable share among knowledge roles (~55%). Aligns with WFH-capable occupation research (Stanford/Bloom et al. class of estimates: large share of knowledge work is location-flexible). |
| **SAM** | **$62B** | ~36% of global AI application software ($172B × ~0.36) — US share of enterprise AI software spend; proxy for near-term digital-workforce software budget we re-price as hires. |
| **SOM** | **$40M** | DE Yr-5 US revenue target (plan). |

### India

| | Figure | Derivation |
|---|---------|------------|
| **TAM** | **$0.5T** | Conservative remote-capable knowledge wage pool: India total compensation base is far below US; tech sector wage bill (5.8M × loaded cost) plus BFSI/ops knowledge roles. Prior deck used $0.7T (broader knowledge wages); we use **$0.5T** remote-capable to stay conservative vs NASSCOM industry revenue ($283B ≠ wages). |
| **SAM** | **$14B** | Near-term addressable: AI-led services transformation + enterprise/GCC digital-employee spend inside IT services ($137B) + BPM ($55B) + GCC delivery — not the full $283B industry. |
| **SOM** | **$8M** | DE Yr-5 India revenue target (plan). |

### Global

| | Figure | Derivation |
|---|---------|------------|
| **TAM** | **$8.4T** | Sum of regional remote-capable knowledge wage pools (US/NA $3.1T + Europe $2.2T + Japan $0.9T + India $0.5T + other priority corridors ~$1.7T). Cross-check: US ~37% of this global TAM. |
| **SAM** | **$172B** | **Gartner worldwide AI application software, 2025** — audited market we can cite; digital employees expand into adjacent IT-services displacement over time ($1.69T IT services is the longer ceiling, not current SAM). |
| **SOM** | **$85M** | DE Yr-5 global revenue target (US $40M + India $8M + other geos $37M). |

**Note on prior $156B global SAM:** Within ~10% of Gartner’s $172B AI application software figure; deck now cites **$172B** directly.

---

## What we do *not* claim

- McKinsey **$4.4T** (corporate GenAI productivity potential) is **economic value**, not wage bill or DE revenue — do not use as TAM.
- NASSCOM **$283B** is **industry revenue**, not Indian wage TAM.
- SOM figures are **targets**, not third-party forecasts.

---

## Region UI

Market slide dropdown: **Global** (default) · **USA** · **India** — swaps headline, rings, cards, funnel, and source line. Print/PDF renders **Global**.
