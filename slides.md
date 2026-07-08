---
theme: default
title: DeepEmergence — Investor Deck
info: |
  DeepEmergence — governed digital employees on the Sophon harness.
  Public launch: July 2026. Founders: Ajay Pratap Singh, Aman Pratap Singh.
class: text-center
transition: fade
colorSchema: light
fonts:
  sans: Inter
  serif: Instrument Sans
  mono: Fira Code
---

# DeepEmergence

### The engineering stack behind digital employees

**One harness. Any domain. Governed autonomy.**

<div class="deck-meta">
Launching July 2026 · Ajay Pratap Singh · Aman Pratap Singh
</div>

---
layout: default
class: slide-dense
---

# The problem

<div class="deck-lead">
AI capability is advancing yearly — but production labor still lacks governance.
</div>

<div class="deck-snake deck-snake--inline">

<div class="deck-snake-row deck-snake-row--cols-3 deck-snake-row--ltr">
<div class="deck-snake-milestone">
<span class="deck-snake-q">2024</span>
<span class="deck-snake-product">Retrieval</span>
<span class="deck-snake-ver">Summarize documents</span>
</div>
<div class="deck-snake-milestone">
<span class="deck-snake-q">2025</span>
<span class="deck-snake-product">Reasoning</span>
<span class="deck-snake-ver">Workflow analysis</span>
</div>
<div class="deck-snake-milestone deck-snake-milestone--active">
<span class="deck-snake-q">2026</span>
<span class="deck-snake-product">Governed labor</span>
<span class="deck-snake-ver">Identity · audit · coordination</span>
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-3 mt-2">

<div class="deck-card deck-card--warn">
<b>Wrapper agents today</b>
<ul class="deck-list">
<li>LLM + prompt + tool list</li>
<li>No persistent identity or audit trail</li>
<li>Governance lives in the prompt</li>
</ul>
</div>

<div class="deck-card deck-card--active">
<b>What labor actually requires</b>
<ul class="deck-list">
<li>Scoped credentials and policy-as-code</li>
<li>Replayable traces across sessions</li>
<li>Multi-agent handoffs under enforceable policy</li>
</ul>
</div>

</div>

<div class="deck-footnote">
The prompt was never the moat. The <b>harness around the model</b> is — and the market is ready in July 2026.
</div>

---
layout: default
---

# Solution

<div class="deck-lead">
<b>Sophon</b> — the engineering stack that turns model intelligence into dependable, general-purpose labor.
</div>

<div class="grid grid-cols-5 gap-2 deck-pill-row">

<div class="deck-pill"><b>Identity</b><span>Scoped credentials</span></div>
<div class="deck-pill"><b>Guardrails</b><span>Deny-by-default policy</span></div>
<div class="deck-pill"><b>Hooks</b><span>Intercept risky writes</span></div>
<div class="deck-pill"><b>Evals</b><span>Grade trajectories</span></div>
<div class="deck-pill"><b>Traces</b><span>Audit lineage</span></div>

</div>

```mermaid {scale: 0.42}
flowchart LR
    LLM["Foundation models<br/>(swappable)"]
    subgraph cognitive["Beyond-LLM layer"]
        direction TB
        WM["World model"] --> CI["Causal inference"] --> MEM["Memory"] --> PLAN["Planner"]
    end
    subgraph harness["Sophon harness"]
        direction TB
        ID["Identity"] --> GR["Guardrails"] --> HK["Hooks"] --> EV["Evals"] --> TR["Traces"]
    end
    subgraph packs["Domain packs"]
        R["Retail fleet"]
        E["Enterprise"]
    end
    LLM --> WM
    PLAN --> ID
    TR --> R
    TR --> E
    style cognitive fill:#1e293b,stroke:#818cf8,color:#e2e8f0
    style harness fill:#0f172a,stroke:#38bdf8,color:#f8fafc
```

<div class="deck-footnote">
Simulate before every write · Domain packs plug into one substrate · Model upgrades are eval-gated
</div>

---
layout: default
class: slide-dense
---

# Traction

<div class="deck-lead">
Pre-revenue today · <b>Platform launches July 2026</b> · Retail sales Q2 2027 · Enterprise Q3 2027
</div>

<div class="deck-snake">

<div class="deck-snake-row deck-snake-row--cols-4 deck-snake-row--ltr">

<div class="deck-snake-milestone deck-snake-milestone--active">
<span class="deck-snake-q">Now</span>
<span class="deck-snake-product">Sophon Harness</span>
<span class="deck-snake-ver"><b>v0.9</b> · stealth · design partners</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--active">
<span class="deck-snake-q">Jul 2026</span>
<span class="deck-snake-product">Sophon Platform</span>
<span class="deck-snake-ver"><b>v1.0</b> · public launch</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--active">
<span class="deck-snake-q">Q4 2026</span>
<span class="deck-snake-product">Sira · Rina</span>
<span class="deck-snake-ver"><b>β</b> · markets · chief of staff</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--active">
<span class="deck-snake-q">Q1 2027</span>
<span class="deck-snake-product">Fleet expansion</span>
<span class="deck-snake-ver">Elyra · Catalyst · Kat <b>α</b> · Auvi <b>α</b></span>
</div>

</div>

<div class="deck-snake-turn deck-snake-turn--right deck-snake-turn--cols-4"></div>

<div class="deck-snake-row deck-snake-row--cols-4 deck-snake-row--rtl">

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q1 2028</span>
<span class="deck-snake-product">Phase 3 pilots</span>
<span class="deck-snake-ver"><b>Career API</b> · parallel to Phase 2</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q4 2027</span>
<span class="deck-snake-product">Phase 2 · Wearable <b>β</b></span>
<span class="deck-snake-ver">Apps <b>β</b> · passive sensors</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q3 2027</span>
<span class="deck-snake-product">Enterprise sales · Phase 2</span>
<span class="deck-snake-ver">Ent. CoS <b>β</b> · Wearable · Apps <b>α</b></span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q2 2027</span>
<span class="deck-snake-product">Retail sales begin</span>
<span class="deck-snake-ver">Sira · Rina <b>GA</b> · first revenue · <b>Seed</b></span>
</div>

</div>

</div>

<div class="deck-footnote">
Retail fleet: Sira · Rina · Elyra · Catalyst · Kat · Auvi · Enterprise CoS — one Sophon substrate
</div>

---
layout: default
---

# Team

<div class="grid grid-cols-2 gap-5 mt-2">

<div class="deck-card">

### Ajay Pratap Singh · Co-founder

- B.Tech, **IIT Madras** · Ex-Head of AI, **Premji Invest**
- **Y Combinator** · **Goldman Sachs**

<p class="deck-muted mt-2">
Institutional finance and applied AI at family-office scale — domain depth for investment and regulated verticals.
</p>

</div>

<div class="deck-card">

### Aman Pratap Singh · Co-founder

- M.S. AI Research, **University of Maryland**

<p class="deck-muted mt-2">
Agent systems and applied ML — harness engineering: guardrails, evals, and trace infrastructure.
</p>

</div>

</div>

<div class="deck-footnote">
Pre-revenue · Lean team through pre-seed · Scale to 16 FTE at $10–15M seed
</div>

---
layout: default
class: slide-dense
---

# Advisors

<div class="deck-lead">
Academic, policy, and industry advisors — <b>IIT Madras</b> depth · responsible AI · institutional finance.
</div>

<div class="deck-id-grid deck-id-grid--lead">

<div class="deck-id-card deck-id-card--lead">

<div class="deck-id-header">
<div class="deck-id-photo"><span>BR</span></div>
<span class="deck-id-org">IIT Madras</span>
</div>

<div class="deck-id-body">
<div class="deck-id-name">Prof. Balaraman Ravindran</div>
<div class="deck-id-role">HOD, Dept. of Data Science & AI · Founding Head, WSAI · RBCDSAI · CeRAI</div>
<div class="deck-id-tags">
<span class="deck-id-tag deck-id-tag--accent">AAAI Fellow</span>
<span class="deck-id-tag deck-id-tag--accent">INAE Fellow</span>
<span class="deck-id-tag deck-id-tag--accent">ACM Distinguished</span>
<span class="deck-id-tag">Deep RL · Responsible AI</span>
<span class="deck-id-tag">India AI Governance Guidelines</span>
<span class="deck-id-tag">RBI FREE-AI Framework</span>
<span class="deck-id-tag">UN AI Scientific Panel · 2026</span>
<span class="deck-id-tag">AIGEG · TPEC</span>
</div>
</div>

</div>

</div>

<div class="deck-id-grid deck-id-grid--quad">

<div class="deck-id-card">
<div class="deck-id-header">
<div class="deck-id-photo"><span>MK</span></div>
<div class="deck-id-meta">
<div class="deck-id-name">Prof. Mitesh Khapra</div>
<div class="deck-id-role">Professor · IIT Madras</div>
</div>
</div>
<div class="deck-id-body">
<div class="deck-id-tags">
<span class="deck-id-tag deck-id-tag--accent">Bharat4AI</span>
<span class="deck-id-tag">NLP · AI research</span>
<span class="deck-id-tag">IIT Madras</span>
</div>
</div>
</div>

<div class="deck-id-card">
<div class="deck-id-header">
<div class="deck-id-photo"><span>VK</span></div>
<div class="deck-id-meta">
<div class="deck-id-name">Prof. V. Kamakoti</div>
<div class="deck-id-role">Director · IIT Madras</div>
</div>
</div>
<div class="deck-id-body">
<div class="deck-id-tags">
<span class="deck-id-tag deck-id-tag--accent">IIT Madras</span>
<span class="deck-id-tag">Institutional leadership</span>
<span class="deck-id-tag">National AI policy</span>
</div>
</div>
</div>

<div class="deck-id-card">
<div class="deck-id-header">
<div class="deck-id-photo"><span>AR</span></div>
<div class="deck-id-meta">
<div class="deck-id-name">Aravindan Raghuveer</div>
<div class="deck-id-role">Ex-Google DeepMind · IIT Madras</div>
</div>
</div>
<div class="deck-id-body">
<div class="deck-id-tags">
<span class="deck-id-tag deck-id-tag--accent">Google DeepMind</span>
<span class="deck-id-tag">Applied ML</span>
<span class="deck-id-tag">IIT Madras</span>
</div>
</div>
</div>

<div class="deck-id-card">
<div class="deck-id-header">
<div class="deck-id-photo"><span>AM</span></div>
<div class="deck-id-meta">
<div class="deck-id-name">Aditya Murgai</div>
<div class="deck-id-role">VP · Goldman Sachs · Paytm</div>
</div>
</div>
<div class="deck-id-body">
<div class="deck-id-tags">
<span class="deck-id-tag deck-id-tag--accent">Goldman Sachs</span>
<span class="deck-id-tag">Paytm</span>
<span class="deck-id-tag">Fintech · scale</span>
</div>
</div>
</div>

</div>

---
layout: default
---

# Market size

<div class="grid grid-cols-5 gap-4 items-start">

<div class="col-span-2 deck-tam">

<div class="deck-tam-ring deck-tam-ring--outer">
<span class="deck-tam-label">TAM</span>
<span class="deck-tam-value">$8.4T</span>
</div>
<div class="deck-tam-ring deck-tam-ring--mid">
<span class="deck-tam-label">SAM</span>
<span class="deck-tam-value">$156B</span>
</div>
<div class="deck-tam-ring deck-tam-ring--inner">
<span class="deck-tam-label">SOM</span>
<span class="deck-tam-value">$85M</span>
</div>

</div>

<div class="col-span-3">

| Region | TAM | SAM | SOM Yr-5 |
| --- | ---: | ---: | ---: |
| North America | $3.1T | $62B | $40M |
| Europe | $2.2T | $41B | $17M |
| Japan | $0.9T | $16B | $6M |
| India | $0.7T | $14B | $8M |
| Singapore · UAE | $0.2T | $13B | $9M |
| **Global** | **$8.4T** | **$156B** | **$85M** |

</div>

</div>

---
layout: default
class: slide-dense
---

# Competition

<div class="deck-lead">
Competitors sell <b>agents</b>. Buyers need <b>governed digital employees</b> they can trust with real work.
</div>

<div class="grid grid-cols-2 gap-3 items-stretch">

<div class="deck-chart">

```mermaid {scale: 0.48}
quadrantChart
    title Where value compounds
    x-axis Low governance --> High governance
    y-axis Shallow --> Deep domain ownership
    quadrant-1 Systems of record
    quadrant-2 Domain copilots
    quadrant-3 Chat wrappers
    quadrant-4 Framework toolkits
    "Chat wrappers": [0.18, 0.18]
    "Agent frameworks": [0.32, 0.42]
    "Vertical copilots": [0.55, 0.5]
    "DeepEmergence": [0.88, 0.88]
```

</div>

<div class="grid grid-cols-2 gap-2 deck-stack">

<div class="deck-card">
<b>vs. Chat wrappers</b><br>
<span class="deck-muted">Identity, audit, policy — not stateless chat.</span>
</div>

<div class="deck-card">
<b>vs. Agent frameworks</b><br>
<span class="deck-muted">Sophon productized — no 12-month platform build.</span>
</div>

<div class="deck-card">
<b>vs. Vertical copilots</b><br>
<span class="deck-muted">One substrate — shared governance across packs.</span>
</div>

<div class="deck-card deck-card--active">
<b>vs. Workspace AI</b><br>
<span class="deck-muted">Model-agnostic · investment-grade audit · no lock-in.</span>
</div>

</div>

</div>

<div class="deck-footnote">
Similar headlines on a landing page · <b>Different architecture under the hood</b>
</div>

---
layout: default
class: slide-dense
---

# Products

<div class="deck-lead">
One <b>Sophon</b> substrate · seven digital employees · wearables · platform APIs — three phases of product depth.
</div>

<div class="grid grid-cols-3 gap-3 items-stretch">

<div class="deck-phase">
<div class="deck-phase-label"><b>Phase 1</b> · Digital employees · 2026–28</div>
<div class="deck-products">

<div class="deck-product deck-product--active">
<b>Sophon Platform</b>
<span>Governed runtime — identity, policy, evals, traces for every pack</span>
</div>

<div class="deck-product">
<b>Sira</b>
<span>Markets intelligence — research, narrative, audience & positioning</span>
</div>

<div class="deck-product">
<b>Rina</b>
<span>AI Chief of Staff — briefings, calendar routing, executive coordination</span>
</div>

<div class="deck-product">
<b>Elyra</b>
<span>Healthspan COO — longevity habits, biomarkers, daily health ops</span>
</div>

<div class="deck-product">
<b>Auvi</b>
<span>Investment desk — portfolio research, memos, rebalance workflows</span>
</div>

<div class="deck-product">
<b>Catalyst</b>
<span>Career operator — trajectory modeling, role & mentor matching</span>
</div>

<div class="deck-product">
<b>Kat</b>
<span>Relationships — compatibility depth, values, temperament, life path</span>
</div>

<div class="deck-product">
<b>Enterprise CoS</b>
<span>Institutional chief of staff · ghost orgs for governed teams</span>
</div>

</div>
</div>

<div class="deck-phase">
<div class="deck-phase-label"><b>Phase 2</b> · Data mesh · Q3 2027+</div>
<div class="deck-products">

<div class="deck-product deck-product--active">
<b>Deeplife Wearable</b>
<span>Passive biometrics & behavioral context — zero-friction 24/7 capture</span>
</div>

<div class="deck-product">
<b>Companion Apps</b>
<span>iOS & Android — consent-first UX, active capture, real-time Sophon sync</span>
</div>

<div class="deck-product">
<b>Sophon v2 graph</b>
<span>Sensor fusion — fuses active + passive streams into one people graph</span>
</div>

<div class="deck-product">
<b>Passive data layer</b>
<span>Continuous enrichment that Phase 3 matching precision depends on</span>
</div>

</div>
</div>

<div class="deck-phase">
<div class="deck-phase-label"><b>Phase 3</b> · Platform licensing · Q1 2028+</div>
<div class="deck-products">

<div class="deck-product deck-product--active">
<b>Career API</b>
<span>Catalyst licensing — job boards, recruiters, talent platforms</span>
</div>

<div class="deck-product">
<b>Dating layer</b>
<span>Kat white-label — compatibility depth apps cannot build alone</span>
</div>

<div class="deck-product">
<b>Agency graph API</b>
<span>Sira licensing — audience psychology & campaign fit by trajectory</span>
</div>

<div class="deck-product">
<b>Targeted advertising</b>
<span>Consent-gated ads shaped by deep person context — psychology, trajectory, life stage</span>
</div>

<div class="deck-product">
<b>Personalized sales & marketing</b>
<span>Deep-context outreach — message, channel, and timing tuned to each prospect</span>
</div>

<div class="deck-product">
<b>B2B2C platform</b>
<span>Rev-share integrations wherever people psychology drives decisions</span>
</div>

</div>
</div>

</div>

<div class="deck-footnote">
Retail fleet GA <b>Q2 2027</b> · Enterprise <b>Q3 2027</b> · Wearables & Phase 3 run in parallel from Q3 2027 / Q1 2028
</div>

---
layout: default
class: slide-dense
---

# Business model · Phase 1

<div class="deck-lead">
Build retail digital employees and enterprise teams — three phases to a wearable-fed platform moat.
</div>

<div class="grid grid-cols-2 gap-4">

<div class="deck-col">

<div class="deck-snake deck-snake--compact">

<div class="deck-snake-row deck-snake-row--cols-2 deck-snake-row--ltr">

<div class="deck-snake-milestone">
<span class="deck-snake-q">2026 H2</span>
<span class="deck-snake-product">Sira · Rina</span>
<span class="deck-snake-ver"><b>β</b> · free · design partners</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--active">
<span class="deck-snake-q">Q2 2027</span>
<span class="deck-snake-product">Retail sales</span>
<span class="deck-snake-ver"><b>$79–$149/mo</b> · Sira · Rina <b>GA</b></span>
</div>

</div>

<div class="deck-snake-turn deck-snake-turn--right deck-snake-turn--cols-2"></div>

<div class="deck-snake-row deck-snake-row--cols-2 deck-snake-row--rtl">

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">2028</span>
<span class="deck-snake-product">Enterprise scale</span>
<span class="deck-snake-ver">Regulated · <b>$250K–$2M ACV</b></span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q3 2027</span>
<span class="deck-snake-product">Enterprise sales</span>
<span class="deck-snake-ver">Ent. CoS · ghost orgs <b>β</b> · pilots</span>
</div>

</div>

</div>

<div class="grid grid-cols-3 gap-2 mt-3 deck-metrics">
<div class="deck-metric"><b>Retail</b><span>Per-employee SaaS</span></div>
<div class="deck-metric"><b>Enterprise</b><span>Packs + ghost orgs</span></div>
<div class="deck-metric deck-metric--active"><b>Fleet</b><span>Multi-employee bundles</span></div>
</div>

</div>

<div class="deck-col">

| Year | ARR | Mix |
| --- | ---: | --- |
| 2026 | $0 | Pre-revenue |
| 2027 | $12M | 70% retail · 30% enterprise |
| 2028 | $28M | 50% / 50% |
| **2030** | **$85M** | 50% P1 · 30% P2 · 20% P3 |

```mermaid {scale: 0.45}
xychart-beta
    title "ARR ($M)"
    x-axis [2027, 2028, 2030]
    y-axis "USD millions" 0 --> 90
    bar [12, 28, 85]
```

<div class="grid grid-cols-2 gap-2 mt-2 deck-metrics">
<div class="deck-metric">Gross margin <b>78%</b> at scale</div>
<div class="deck-metric">NRR target <b>125%+</b></div>
</div>

</div>

</div>

---
layout: default
class: slide-dense
---

# Business model · Phase 2

<div class="deck-lead">
Launch <b>wearable devices</b> and <b>companion apps</b> from <b>Q3 2027</b> — passive data layer runs parallel with Phase 3 from Q1 2028.
</div>

<div class="deck-snake">

<div class="deck-snake-row deck-snake-row--cols-4 deck-snake-row--ltr">

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q3 2027</span>
<span class="deck-snake-product">Deeplife Wearable</span>
<span class="deck-snake-ver"><b>α v0.1</b> · Phase 2 kickoff</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q4 2027</span>
<span class="deck-snake-product">Companion Apps</span>
<span class="deck-snake-ver"><b>α</b> · iOS · Android · consent layer</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q1 2028</span>
<span class="deck-snake-product">Wearable · Apps</span>
<span class="deck-snake-ver"><b>β v0.5</b> · passive capture · daily sync</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q2 2028</span>
<span class="deck-snake-product">Real-time graph</span>
<span class="deck-snake-ver">Sensor fusion · <b>Sophon v2</b> · Phase 3 live</span>
</div>

</div>

<div class="deck-snake-turn deck-snake-turn--right deck-snake-turn--cols-4"></div>

<div class="deck-snake-row deck-snake-row--cols-3 deck-snake-row--rtl">

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q2 2028</span>
<span class="deck-snake-product">Wearable · Apps</span>
<span class="deck-snake-ver"><b>GA v1.0</b> · passive data mesh</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q3 2028</span>
<span class="deck-snake-product">Passive data layer</span>
<span class="deck-snake-ver">24/7 enrichment · zero-friction capture</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q4 2028</span>
<span class="deck-snake-product">Graph density</span>
<span class="deck-snake-ver">Phase 2 + 3 running in parallel</span>
</div>

</div>

</div>

<div class="grid grid-cols-3 gap-2 mt-2">

<div class="deck-card deck-card--active">
<b>Wearable device</b>
<ul class="deck-list deck-list--tight">
<li>Continuous biometrics & behavioral context</li>
<li>Passive signals — no manual logging</li>
</ul>
</div>

<div class="deck-card deck-card--active">
<b>Smartphone apps</b>
<ul class="deck-list deck-list--tight">
<li>iOS & Android companion · consent-first UX</li>
<li>Active capture + real-time sync to Sophon</li>
</ul>
</div>

<div class="deck-card deck-card--active">
<b>Richer data moat</b>
<ul class="deck-list deck-list--tight">
<li>Fuses active + passive streams into one graph</li>
<li>Enables Phase 3 with precision others cannot match</li>
</ul>
</div>

</div>

<div class="deck-footnote">
Phase 1 employees seed the graph · Phase 2 wearables from Q3 2027 · Phase 3 platform pilots parallel from Q1 2028
</div>

---
layout: default
class: slide-dense
---

# Business model · Phase 3

<div class="deck-lead">
Merge intelligence into external platforms — <b>Phase 3 launches Q1 2028</b>, two quarters after Phase 2, running in parallel.
</div>

<div class="deck-snake deck-snake--compact mb-2">

<div class="deck-snake-row deck-snake-row--cols-3 deck-snake-row--ltr">

<div class="deck-snake-milestone deck-snake-milestone--active">
<span class="deck-snake-q">Phase 1 · 2026–27</span>
<span class="deck-snake-product">Digital employees</span>
<span class="deck-snake-ver">Retail Q2 · Enterprise Q3 2027</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Phase 2 · Q3 2027+</span>
<span class="deck-snake-product">Wearables · apps</span>
<span class="deck-snake-ver">Passive + real-time data mesh</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Phase 3 · Q1 2028+</span>
<span class="deck-snake-product">Platform licensing</span>
<span class="deck-snake-ver">Parallel · API · rev-share</span>
</div>

</div>

</div>

<div class="deck-snake deck-snake--compact mb-2">

<div class="deck-snake-row deck-snake-row--cols-4 deck-snake-row--ltr">

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q1 2028</span>
<span class="deck-snake-product">Career API</span>
<span class="deck-snake-ver"><b>Catalyst</b> pilots · Phase 3 start</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q2 2028</span>
<span class="deck-snake-product">Dating integrations</span>
<span class="deck-snake-ver"><b>Kat</b> white-label · parallel w/ Phase 2</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q3 2028</span>
<span class="deck-snake-product">Agency graph API</span>
<span class="deck-snake-ver"><b>Sira</b> licensing · targeting</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q4 2028</span>
<span class="deck-snake-product">Full B2B2C scale</span>
<span class="deck-snake-ver">Rev-share · all verticals</span>
</div>

</div>

</div>

<div class="grid grid-cols-3 gap-3">

<div class="deck-card deck-card--active">
<b>Career matching</b> · Catalyst
<ul class="deck-list">
<li>Trajectory inference for roles & positions</li>
<li>Job boards, recruiters, talent platforms</li>
<li>Work psychology — not résumé keywords</li>
</ul>
</div>

<div class="deck-card deck-card--active">
<b>Dating & relationships</b> · Kat
<ul class="deck-list">
<li>Compatibility depth apps cannot build alone</li>
<li>Values, temperament, life trajectory</li>
<li>Consent-gated patterns → better matches</li>
</ul>
</div>

<div class="deck-card deck-card--active">
<b>Marketing agencies</b> · Sira
<ul class="deck-list">
<li>Audience from unified people psychology</li>
<li>Agency platforms tap our graph</li>
<li>Campaign fit by trajectory — not demographics</li>
</ul>
</div>

</div>

<div class="deck-footnote">
Wearable-fed graph depth · Phase 3 unlocks B2B2C reach wherever human psychology drives matching, hiring, and persuasion
</div>

---
layout: default
class: slide-dense
---

# Go-to-market strategy

<div class="deck-lead">
Product roadmap — retail <b>Q2 2027</b> · enterprise <b>Q3 2027</b> · Phase 2 & 3 run in parallel from Q3 2027 / Q1 2028
</div>

<div class="deck-snake">

<div class="deck-snake-row deck-snake-row--cols-4 deck-snake-row--ltr">

<div class="deck-snake-milestone deck-snake-milestone--active">
<span class="deck-snake-q">Jul 2026</span>
<span class="deck-snake-product">Sophon Platform</span>
<span class="deck-snake-ver"><b>v1.0</b> · waitlist · design partners</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--active">
<span class="deck-snake-q">Q4 2026</span>
<span class="deck-snake-product">Sira · Rina</span>
<span class="deck-snake-ver"><b>β</b> · YC & finance communities</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q1 2027</span>
<span class="deck-snake-product">Fleet <b>β</b></span>
<span class="deck-snake-ver">Elyra · Catalyst · Kat <b>α</b> · Ent. CoS <b>α</b></span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q2 2027</span>
<span class="deck-snake-product">Retail sales</span>
<span class="deck-snake-ver">Sira · Rina <b>GA</b> · paying customers</span>
</div>

</div>

<div class="deck-snake-turn deck-snake-turn--right deck-snake-turn--cols-4"></div>

<div class="deck-snake-row deck-snake-row--cols-4 deck-snake-row--rtl">

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q2 2028</span>
<span class="deck-snake-product">Phase 2 GA · Phase 3</span>
<span class="deck-snake-ver">Wearable <b>v1.0</b> · Dating layer</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q1 2028</span>
<span class="deck-snake-product">Phase 3 pilots</span>
<span class="deck-snake-ver"><b>Career API</b> · parallel to Phase 2</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q4 2027</span>
<span class="deck-snake-product">Phase 2 <b>β</b></span>
<span class="deck-snake-ver">Wearable · Apps · passive sensors</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--future">
<span class="deck-snake-q">Q3 2027</span>
<span class="deck-snake-product">Enterprise · Phase 2</span>
<span class="deck-snake-ver">Ent. sales · Wearable · Apps <b>α</b></span>
</div>

</div>

</div>

---
layout: default
class: slide-dense
---

# Funding roadmap

<div class="deck-lead">
Use of funds by round · ARR ramp · <b>fund · product · phase</b> milestones on one timeline
</div>

<div class="deck-funding">

<div class="grid grid-cols-3 gap-2 deck-funding-rounds">

<div class="deck-funding-round">
<div class="deck-funding-round-head">
<b>Angel</b>
<span>Q3 2026</span>
</div>
<div class="deck-funding-round-amt">$500K</div>
<div class="deck-fund-stack" title="Use of funds">
<div class="deck-fund-seg deck-fund-seg--eng" style="width:40%"></div>
<div class="deck-fund-seg deck-fund-seg--team" style="width:30%"></div>
<div class="deck-fund-seg deck-fund-seg--ml" style="width:15%"></div>
<div class="deck-fund-seg deck-fund-seg--legal" style="width:15%"></div>
</div>
<div class="deck-fund-legend">
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--eng"></span><span>Platform & Sophon</span><b>40%</b></div>
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--team"></span><span>Founder salaries</span><b>30%</b></div>
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--ml"></span><span>ML compute</span><b>15%</b></div>
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--legal"></span><span>Legal · partners</span><b>15%</b></div>
</div>
<div class="deck-funding-tags">
<span class="deck-funding-tag deck-funding-tag--fund">Fund close</span>
<span class="deck-funding-tag deck-funding-tag--product">Sophon v1.0</span>
<span class="deck-funding-tag deck-funding-tag--phase">Phase 1 build</span>
</div>
</div>

<div class="deck-funding-round deck-funding-round--active">
<div class="deck-funding-round-head">
<b>Pre-seed</b>
<span>Q4 2026</span>
</div>
<div class="deck-funding-round-amt">$2.0M</div>
<div class="deck-fund-stack">
<div class="deck-fund-seg deck-fund-seg--team" style="width:45%"></div>
<div class="deck-fund-seg deck-fund-seg--ml" style="width:23%"></div>
<div class="deck-fund-seg deck-fund-seg--gtm" style="width:15%"></div>
<div class="deck-fund-seg deck-fund-seg--legal" style="width:10%"></div>
<div class="deck-fund-seg deck-fund-seg--reserve" style="width:7%"></div>
</div>
<div class="deck-fund-legend">
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--team"></span><span>Core team · 8 FTE</span><b>45%</b></div>
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--ml"></span><span>Research & compute</span><b>23%</b></div>
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--gtm"></span><span>GTM · partners</span><b>15%</b></div>
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--legal"></span><span>Legal</span><b>10%</b></div>
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--reserve"></span><span>Reserve</span><b>7%</b></div>
</div>
<div class="deck-funding-tags">
<span class="deck-funding-tag deck-funding-tag--fund">Fund close</span>
<span class="deck-funding-tag deck-funding-tag--product">Sira · Rina β</span>
<span class="deck-funding-tag deck-funding-tag--product">Fleet α</span>
<span class="deck-funding-tag deck-funding-tag--phase">Phase 1</span>
</div>
</div>

<div class="deck-funding-round">
<div class="deck-funding-round-head">
<b>Seed</b>
<span>Q2 2027</span>
</div>
<div class="deck-funding-round-amt">$12.0M</div>
<div class="deck-fund-stack">
<div class="deck-fund-seg deck-fund-seg--eng" style="width:40%"></div>
<div class="deck-fund-seg deck-fund-seg--gtm" style="width:25%"></div>
<div class="deck-fund-seg deck-fund-seg--ml" style="width:15%"></div>
<div class="deck-fund-seg deck-fund-seg--legal" style="width:10%"></div>
<div class="deck-fund-seg deck-fund-seg--reserve" style="width:10%"></div>
</div>
<div class="deck-fund-legend">
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--eng"></span><span>Eng · product · 16 FTE</span><b>40%</b></div>
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--gtm"></span><span>GTM · enterprise</span><b>25%</b></div>
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--ml"></span><span>ML · Sophon infra</span><b>15%</b></div>
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--legal"></span><span>Legal · compliance</span><b>10%</b></div>
<div class="deck-fund-legend-row"><span class="deck-fund-dot deck-fund-seg--reserve"></span><span>Reserve</span><b>10%</b></div>
</div>
<div class="deck-funding-tags">
<span class="deck-funding-tag deck-funding-tag--fund">Fund close</span>
<span class="deck-funding-tag deck-funding-tag--product">Retail GA</span>
<span class="deck-funding-tag deck-funding-tag--product">Enterprise</span>
<span class="deck-funding-tag deck-funding-tag--phase">Phase 2 α</span>
</div>
</div>

</div>

<div class="deck-funding-lower">

<div class="deck-arr-chart">
<div class="deck-arr-label">ARR ramp · pre-raise & targets</div>
<div class="deck-arr-row"><span>Q3'26</span><div class="deck-arr-bar"><div class="deck-arr-bar-fill" style="width:0%"></div></div><b>$0</b></div>
<div class="deck-arr-row"><span>Q4'26</span><div class="deck-arr-bar"><div class="deck-arr-bar-fill" style="width:0%"></div></div><b>$0</b></div>
<div class="deck-arr-row"><span>Q1'27</span><div class="deck-arr-bar"><div class="deck-arr-bar-fill" style="width:1%"></div></div><b>~$0</b></div>
<div class="deck-arr-row"><span>Q2'27</span><div class="deck-arr-bar"><div class="deck-arr-bar-fill" style="width:4%"></div></div><b>~$400K</b></div>
<div class="deck-arr-row"><span>Q3'27</span><div class="deck-arr-bar"><div class="deck-arr-bar-fill" style="width:25%"></div></div><b>~$3M</b></div>
<div class="deck-arr-row"><span>Q4'27</span><div class="deck-arr-bar"><div class="deck-arr-bar-fill" style="width:50%"></div></div><b>~$6M</b></div>
<div class="deck-arr-row"><span>EOY</span><div class="deck-arr-bar"><div class="deck-arr-bar-fill" style="width:100%"></div></div><b>$12M</b></div>
</div>

<div class="deck-funding-timeline-wrap">

<div class="deck-snake deck-snake--compact">

<div class="deck-snake-row deck-snake-row--cols-4 deck-snake-row--ltr">

<div class="deck-snake-milestone deck-snake-milestone--fund deck-snake-milestone--active">
<span class="deck-snake-q">Q3 2026</span>
<span class="deck-snake-product">Angel · $500K</span>
<span class="deck-snake-ver">Sophon v1.0 · ~$0 ARR</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--fund">
<span class="deck-snake-q">Q4 2026</span>
<span class="deck-snake-product">Pre-seed · $2M</span>
<span class="deck-snake-ver">Sira · Rina <b>β</b> · Phase 1</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-q">Q1 2027</span>
<span class="deck-snake-product">Fleet <b>β</b></span>
<span class="deck-snake-ver">Elyra · Catalyst · Kat</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-q">Q2 2027</span>
<span class="deck-snake-product">Retail GA</span>
<span class="deck-snake-ver">Seed · $12M · ~$400K ARR</span>
</div>

</div>

<div class="deck-snake-turn deck-snake-turn--right deck-snake-turn--cols-4"></div>

<div class="deck-snake-row deck-snake-row--cols-4 deck-snake-row--rtl">

<div class="deck-snake-milestone deck-snake-milestone--phase">
<span class="deck-snake-q">Q1 2028</span>
<span class="deck-snake-product">Phase 3 pilots</span>
<span class="deck-snake-ver">Career API · ~$18M ARR</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--phase">
<span class="deck-snake-q">Q3 2027</span>
<span class="deck-snake-product">Phase 2 <b>α</b></span>
<span class="deck-snake-ver">Wearable · Apps · ~$3M ARR</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-q">Q3 2027</span>
<span class="deck-snake-product">Enterprise sales</span>
<span class="deck-snake-ver">Ent. CoS · ghost orgs</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-q">EOY 2027</span>
<span class="deck-snake-product"><b>$12M ARR</b></span>
<span class="deck-snake-ver">70% retail · 30% ent.</span>
</div>

</div>

</div>

</div>

</div>

</div>

<div class="deck-footnote">
<span class="deck-funding-tag deck-funding-tag--fund">Fund</span> round close ·
<span class="deck-funding-tag deck-funding-tag--product">Product</span> ship ·
<span class="deck-funding-tag deck-funding-tag--phase">Phase</span> expansion · ARR at pre-raise / run-rate
</div>

---
layout: default
class: slide-dense slide-ask
---

# The ask · Angel investors

<div class="deck-lead">
<b>$50K – $500K</b> per angel · Post-money SAFE · <b>$10–12M</b> valuation cap · Rolling close through Q3 2026
</div>

<div class="deck-ask-context">

<div class="deck-ask-context-item deck-ask-context-item--active">
<span class="deck-ask-context-label">Round timing</span>
<b>Q3 2026</b>
<span>Now · Jul–Sep 2026</span>
</div>

<div class="deck-ask-context-item deck-ask-context-item--active">
<span class="deck-ask-context-label">Pre-raise ARR</span>
<b>~$0</b>
<span>Pre-revenue · Sophon v0.9 · design partners</span>
</div>

</div>

<div class="deck-ask">

<div class="deck-ask-main">

<div class="deck-ask-col">

<div class="deck-ask-section-label">Cap table · pro forma</div>

<div class="deck-table-wrap deck-cap-table">

| Stakeholder | Own. | Notes |
| --- | ---: | --- |
| **Founders** | 87% | Ajay · Aman |
| **ESOP pool** | 10% | Reserved |
| **Angel syndicate** | 3% | $500K @ $12M cap |
| **Prior investors** | — | None |

</div>

<div class="grid grid-cols-2 gap-2 deck-metrics">
<div class="deck-metric"><b>Instrument</b><span>Post-money SAFE</span></div>
<div class="deck-metric"><b>Dilution</b><span>~3% full round</span></div>
<div class="deck-metric"><b>Pro-rata</b><span>Seed rights</span></div>
<div class="deck-metric deck-metric--active"><b>Min check</b><span>$50K</span></div>
</div>

</div>

<div class="deck-ask-col">

<div class="deck-ask-section-label">Use of funds</div>

<div class="deck-stack deck-stack--tight">
<div class="deck-row"><span>Platform & Sophon harness</span><b>40%</b></div>
<div class="deck-row"><span>Founder salaries (lean)</span><b>30%</b></div>
<div class="deck-row"><span>ML compute & research</span><b>15%</b></div>
<div class="deck-row"><span>Legal · design partners</span><b>15%</b></div>
</div>

</div>

</div>

<div class="deck-ask-timeline">

<div class="deck-snake deck-snake--compact">

<div class="deck-snake-row deck-snake-row--cols-3 deck-snake-row--ltr">

<div class="deck-snake-milestone deck-snake-milestone--active">
<span class="deck-snake-q">Q3 2026</span>
<span class="deck-snake-product">Angel close</span>
<span class="deck-snake-ver">SAFE · ~$0 ARR</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-q">Jul 2026</span>
<span class="deck-snake-product">Sophon <b>v1.0</b></span>
<span class="deck-snake-ver">Platform launch</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-q">Q4 2026</span>
<span class="deck-snake-product">Sira · Rina <b>β</b></span>
<span class="deck-snake-ver">Bridge to pre-seed</span>
</div>

</div>

</div>

</div>

</div>

<div class="deck-footnote">
Angels bridge to pre-seed · Pro-rata and MFN standard · Ideal for operators who know enterprise AI
</div>

---
layout: default
class: slide-dense slide-ask
---

# The ask · Pre-seed

<div class="deck-lead">
Raising <b>$500K – $3M</b> · Post-money SAFE or priced note · <b>$15–20M</b> cap · 18-month runway to GA
</div>

<div class="deck-ask-context">

<div class="deck-ask-context-item deck-ask-context-item--active">
<span class="deck-ask-context-label">Round timing</span>
<b>Q4 2026</b>
<span>~1Q from today · Oct–Dec 2026</span>
</div>

<div class="deck-ask-context-item deck-ask-context-item--active">
<span class="deck-ask-context-label">Pre-raise ARR</span>
<b>~$0</b>
<span>Sira · Rina <b>β</b> · free pilots · no GA yet</span>
</div>

</div>

<div class="deck-ask">

<div class="deck-ask-main">

<div class="deck-ask-col">

<div class="deck-ask-section-label">Cap table · pro forma</div>

<div class="deck-table-wrap deck-cap-table">

| Stakeholder | Own. | Notes |
| --- | ---: | --- |
| **Founders** | 74% | Post-angel dilution |
| **ESOP pool** | 12% | Expanded at close |
| **Pre-seed** | 12% | $2M @ $18M cap |
| **Angel / prior** | 2% | SAFE conversion |

</div>

<div class="grid grid-cols-2 gap-2 deck-metrics">
<div class="deck-metric deck-metric--active"><b>Target</b><span>$1.5M – $2M</span></div>
<div class="deck-metric"><b>Dilution</b><span>12–18%</span></div>
<div class="deck-metric"><b>ESOP</b><span>10% → 12%</span></div>
<div class="deck-metric"><b>Valuation</b><span>$15–20M post</span></div>
</div>

</div>

<div class="deck-ask-col">

<div class="deck-ask-section-label">Use of funds · $2M target</div>

<div class="deck-stack deck-stack--tight">
<div class="deck-row"><span>Core team · 8 FTE</span><b>$900K · 45%</b></div>
<div class="deck-row"><span>Research & ML compute</span><b>$450K · 23%</b></div>
<div class="deck-row"><span>GTM · design partners</span><b>$300K · 15%</b></div>
<div class="deck-row"><span>Legal & compliance</span><b>$200K · 10%</b></div>
<div class="deck-row"><span>Reserve</span><b>$150K · 7%</b></div>
</div>

</div>

</div>

<div class="deck-ask-timeline">

<div class="deck-snake deck-snake--compact">

<div class="deck-snake-row deck-snake-row--cols-4 deck-snake-row--ltr">

<div class="deck-snake-milestone deck-snake-milestone--active">
<span class="deck-snake-q">Q4 2026</span>
<span class="deck-snake-product">Pre-seed close</span>
<span class="deck-snake-ver">Sira · Rina <b>β</b> · ~$0 ARR</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-q">Q1 2027</span>
<span class="deck-snake-product">Fleet <b>β</b></span>
<span class="deck-snake-ver">Elyra · Catalyst · Kat</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-q">Q2 2027</span>
<span class="deck-snake-product">Retail sales</span>
<span class="deck-snake-ver">First revenue · seed raise</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-q">Q3 2027</span>
<span class="deck-snake-product">Enterprise · Phase 2</span>
<span class="deck-snake-ver">~$3M ARR run-rate</span>
</div>

</div>

</div>

</div>

</div>

<div class="deck-footnote">
Within market: Carta 2025 median pre-seed cap <b>$10–15M</b> for $1–2.5M raises · IIT + YC + multi-pack platform justify upper range
</div>

---
layout: default
class: slide-dense slide-ask
---

# The ask · Seed

<div class="deck-lead">
Raising <b>$10M – $15M</b> priced equity · <b>$48–55M</b> pre-money · ~18% dilution · Scale retail fleet + enterprise
</div>

<div class="deck-ask-context">

<div class="deck-ask-context-item deck-ask-context-item--active">
<span class="deck-ask-context-label">Round timing</span>
<b>Q2 2027</b>
<span>~3Q from today · Apr–Jun 2027</span>
</div>

<div class="deck-ask-context-item deck-ask-context-item--active">
<span class="deck-ask-context-label">Pre-raise ARR</span>
<b>~$300K – $500K</b>
<span>Early retail GA · Sira · Rina paying customers</span>
</div>

</div>

<div class="deck-ask">

<div class="deck-ask-main">

<div class="deck-ask-col">

<div class="deck-ask-section-label">Cap table · pro forma</div>

<div class="deck-table-wrap deck-cap-table">

| Stakeholder | Own. | Notes |
| --- | ---: | --- |
| **Founders** | 58% | Post pre-seed |
| **ESOP pool** | 10% | 16 FTE plan |
| **Seed investors** | 18% | $12M @ $55M pre |
| **Pre-seed + angels** | 10% | Prior rounds |
| **Strategic advisors** | 4% | Angels · advisors |

</div>

<div class="grid grid-cols-2 gap-2 deck-metrics">
<div class="deck-metric deck-metric--active"><b>Target</b><span>$12M</span></div>
<div class="deck-metric"><b>Pre-money</b><span>$48–55M</span></div>
<div class="deck-metric"><b>Dilution</b><span>17–20%</span></div>
<div class="deck-metric"><b>ESOP</b><span>→ 10% post-close</span></div>
</div>

</div>

<div class="deck-ask-col">

<div class="deck-ask-section-label">Use of funds · $12M target</div>

<div class="deck-stack deck-stack--tight">
<div class="deck-row"><span>Engineering · product · 16 FTE</span><b>$4.8M · 40%</b></div>
<div class="deck-row"><span>GTM · enterprise pilots</span><b>$3.0M · 25%</b></div>
<div class="deck-row"><span>ML compute · Sophon infra</span><b>$1.8M · 15%</b></div>
<div class="deck-row"><span>Legal · compliance</span><b>$1.2M · 10%</b></div>
<div class="deck-row"><span>Reserve</span><b>$1.2M · 10%</b></div>
</div>

</div>

</div>

<div class="deck-ask-timeline">

<div class="deck-snake deck-snake--compact">

<div class="deck-snake-row deck-snake-row--cols-4 deck-snake-row--ltr">

<div class="deck-snake-milestone deck-snake-milestone--active">
<span class="deck-snake-q">Q2 2027</span>
<span class="deck-snake-product">Seed close</span>
<span class="deck-snake-ver">Retail GA · ~$300–500K ARR</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-q">Q3 2027</span>
<span class="deck-snake-product">Enterprise · Phase 2</span>
<span class="deck-snake-ver">~$3M ARR run-rate</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-q">Q4 2027</span>
<span class="deck-snake-product">Fleet scale</span>
<span class="deck-snake-ver">~$6M ARR run-rate</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-q">EOY 2027</span>
<span class="deck-snake-product">ARR target</span>
<span class="deck-snake-ver"><b>$12M</b> · 70/30 mix</span>
</div>

</div>

</div>

</div>

</div>

<div class="deck-footnote">
Ambitious vs. median AI seed (<b>~$4.5M / $20M post</b>, Carta 2025) — justified by 7-pack platform, enterprise pipeline, and wearable Phase 2 optionality
</div>

---
layout: default
class: slide-dense
---

# Unified timeline

<div class="deck-lead">
Every labeled milestone from <b>today</b> through <b>pre-Series A</b> — funding · products · phases · ARR
</div>

<div class="deck-unified">

<div class="deck-unified-legend">
<span class="deck-funding-tag deck-funding-tag--fund">Fund</span>
<span class="deck-funding-tag deck-funding-tag--product">Product</span>
<span class="deck-funding-tag deck-funding-tag--phase">Phase</span>
<span class="deck-funding-tag deck-funding-tag--arr">ARR</span>
</div>

<div class="deck-snake deck-snake--compact">

<div class="deck-snake-row deck-snake-row--cols-5 deck-snake-row--ltr">

<div class="deck-snake-milestone deck-snake-milestone--fund deck-snake-milestone--active">
<span class="deck-snake-type">Fund</span>
<span class="deck-snake-q">Q3 2026 · Now</span>
<span class="deck-snake-product">Angel · $500K</span>
<span class="deck-snake-ver">SAFE · ~$0 ARR</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-type">Product</span>
<span class="deck-snake-q">Jul 2026</span>
<span class="deck-snake-product">Sophon <b>v1.0</b></span>
<span class="deck-snake-ver">Platform launch</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--fund">
<span class="deck-snake-type">Fund</span>
<span class="deck-snake-q">Q4 2026</span>
<span class="deck-snake-product">Pre-seed · $2M</span>
<span class="deck-snake-ver">8 FTE · ~$0 ARR</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-type">Product</span>
<span class="deck-snake-q">Q4 2026</span>
<span class="deck-snake-product">Sira · Rina <b>β</b></span>
<span class="deck-snake-ver">Phase 1 · free pilots</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-type">Product</span>
<span class="deck-snake-q">Q1 2027</span>
<span class="deck-snake-product">Fleet <b>β</b></span>
<span class="deck-snake-ver">Elyra · Catalyst · Kat</span>
</div>

</div>

<div class="deck-snake-turn deck-snake-turn--right deck-snake-turn--cols-5"></div>

<div class="deck-snake-row deck-snake-row--cols-5 deck-snake-row--rtl">

<div class="deck-snake-milestone deck-snake-milestone--phase">
<span class="deck-snake-type">Phase</span>
<span class="deck-snake-q">Q1 2028</span>
<span class="deck-snake-product">Phase 3 pilots</span>
<span class="deck-snake-ver">Career API · Kat · Sira API</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--arr">
<span class="deck-snake-type">ARR</span>
<span class="deck-snake-q">EOY 2027</span>
<span class="deck-snake-product"><b>$12M ARR</b></span>
<span class="deck-snake-ver">70% retail · 30% ent.</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--phase">
<span class="deck-snake-type">Phase</span>
<span class="deck-snake-q">Q4 2027</span>
<span class="deck-snake-product">Phase 2 <b>β</b></span>
<span class="deck-snake-ver">Wearable · Apps · ~$6M ARR</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--phase">
<span class="deck-snake-type">Phase</span>
<span class="deck-snake-q">Q3 2027</span>
<span class="deck-snake-product">Enterprise · Phase 2 <b>α</b></span>
<span class="deck-snake-ver">Ent. CoS · wearable · ~$3M ARR</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--fund">
<span class="deck-snake-type">Fund</span>
<span class="deck-snake-q">Q2 2027</span>
<span class="deck-snake-product">Seed · $12M</span>
<span class="deck-snake-ver">Retail GA · ~$400K ARR</span>
</div>

</div>

<div class="deck-snake-turn deck-snake-turn--left deck-snake-turn--cols-5"></div>

<div class="deck-snake-row deck-snake-row--cols-5 deck-snake-row--ltr">

<div class="deck-snake-milestone">
<span class="deck-snake-type">Product</span>
<span class="deck-snake-q">Q2 2028</span>
<span class="deck-snake-product">Wearable <b>GA</b></span>
<span class="deck-snake-ver">Deeplife · companion apps</span>
</div>

<div class="deck-snake-milestone">
<span class="deck-snake-type">Product</span>
<span class="deck-snake-q">Q3 2028</span>
<span class="deck-snake-product">Agency graph API</span>
<span class="deck-snake-ver">Sira · targeted ads</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--phase">
<span class="deck-snake-type">Phase</span>
<span class="deck-snake-q">Q4 2028</span>
<span class="deck-snake-product">B2B2C scale</span>
<span class="deck-snake-ver">Phase 2 + 3 parallel</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--arr">
<span class="deck-snake-type">ARR</span>
<span class="deck-snake-q">EOY 2028</span>
<span class="deck-snake-product"><b>$28M ARR</b></span>
<span class="deck-snake-ver">50% retail · 50% ent.</span>
</div>

<div class="deck-snake-milestone deck-snake-milestone--fund deck-snake-milestone--active">
<span class="deck-snake-type">Fund</span>
<span class="deck-snake-q">Q2 2029</span>
<span class="deck-snake-product">Pre-Series A</span>
<span class="deck-snake-ver">~$35M ARR · 3-phase platform</span>
</div>

</div>

</div>

<div class="deck-unified-end">
<b>Pre-Series A · Q2 2029</b> — ~$35M ARR run-rate · wearable-fed graph · Phase 3 licensing at scale · positions for Series A
</div>

</div>

<div class="deck-footnote">
Today = Q3 2026 · ~$12.5M total raised through seed · pre-Series A opens the path to Series A and $85M ARR by 2030
</div>

---
layout: center
class: text-center
---

# Governed machine labor — built to last.

### The engineering discipline that makes autonomous work safe to run in production.

**contact@deepemergence.com** · deepemergence.com

<div class="deck-meta">
July 2026
</div>
