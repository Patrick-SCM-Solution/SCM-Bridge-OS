# SCM Solution — Bridge OS

A structured reference and tooling system for hardware product development, covering the full journey from Idea through to Mass Production.

Built for use alongside Google Drive, Notion, and Odoo Knowledge.

**Live Site → [patrick-scm-solution.github.io/SCM-Bridge-OS](https://patrick-scm-solution.github.io/SCM-Bridge-OS/)** 
---

## Live Pages

| Page | URL |
|------|-----|
| Phase Map | https://patrick-scm-solution.github.io/SCM-Bridge-OS/index.html |
| ME Asset Checklist | https://patrick-scm-solution.github.io/SCM-Bridge-OS/checklists/me-assets.html |
| EE Asset Checklist | https://patrick-scm-solution.github.io/SCM-Bridge-OS/checklists/ee-assets.html |
| CMF & Materials | https://patrick-scm-solution.github.io/SCM-Bridge-OS/checklists/cmf-materials.html |
| Tooling & Molds | https://patrick-scm-solution.github.io/SCM-Bridge-OS/checklists/tooling-molds.html |
| Packaging Engineering | https://patrick-scm-solution.github.io/SCM-Bridge-OS/checklists/packaging.html |
| Handoff Manifest Builder | https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/handoff-manifest.html |
| Project Asset Registry | https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/project-asset-registry.html |
| Chinese SCM Reference | https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/chinese-srs.html |
| SCM Dashboard | https://patrick-scm-solution.github.io/SCM-Bridge-OS/tools/scm-dashboard-v2.html |
| Shared Stylesheet | https://patrick-scm-solution.github.io/SCM-Bridge-OS/css/scm-styles.css |
---

## Repository Structure

```
SCM-hardware-dev-system/
├── index.html                        ← Interactive phase map
├── README.md
├── css/
│   └── scm-styles.css                ← Shared stylesheet (all pages)
├── checklists/
│   ├── me-assets.html                ← ME asset checklist
│   ├── ee-assets.html                ← EE asset checklist
│   ├── cmf-materials.html            ← CMF & Materials checklist
│   ├── tooling-molds.html            ← Tooling & Molds checklist
│   └── packaging.html                ← Packaging Engineering checklist
└── tools/
    ├── handoff-manifest.html         ← Handoff Manifest Builder
    ├── project-asset-registry.html   ← Project Asset Registry
    ├── scm-dashboard-v3.html         ← Operations Dashboard
    ├── Factory-Onsite-Audit-APP      ← Web Based App for Onsite Audits
    └── chinese-srs.html              ← Chinese SCM Vocabulary Reference
```

---

## Pages

### Phase Map — `index.html`
Interactive overview of all six development phases: Idea, PoC, Design, Test, Factory, Mass Production. Click any phase to expand deliverables and gate criteria. Links out to all checklists and tools.

---

### Checklists

| File | Description |
|------|-------------|
| `checklists/me-assets.html` | Mechanical Engineering assets — master assembly, drawings, STEP exports, DXFs, supporting docs |
| `checklists/ee-assets.html` | Electrical Engineering assets — schematics, Gerbers, BOM, CPL, firmware, test scripts |
| `checklists/cmf-materials.html` | Color, Material & Finish specs — color callouts, plastic/metal specs, surface finish, compliance |
| `checklists/tooling-molds.html` | Tooling & Molds — strategy, mold design, T1/T2/T3 review, production handover |
| `checklists/packaging.html` | Packaging Engineering — primary box, inserts, shipping cartons, drop test, labelling |

All checklists track completion progress with a live progress bar and persist state in browser localStorage.

---

### Tools

| File | Description |
|------|-------------|
| `tools/handoff-manifest.html` | 4-step builder: select asset packs → log file locations → confirm NDA → export manifest for CM/ODM |
| `tools/project-asset-registry.html` | Central index for all project files across vendors, clients, and storage locations. Tracks status, access level, version, and storage path per asset. Exports JSON/CSV. |
| `tools/chinese-srs.html` | SCM vocabulary reference — English terms with Traditional Chinese (繁體) and Simplified Chinese (简体) equivalents and usage context. Searchable by category. |

---

## Stylesheet

All pages share a single stylesheet at `css/scm-styles.css`. Page-specific styles are kept in a small inline `<style>` block per file.

**Link from root pages:**
```html
<link rel="stylesheet" href="css/scm-styles.css">
```

**Link from subpages (`checklists/`, `tools/`):**
```html
<link rel="stylesheet" href="../css/scm-styles.css">
```

---

## Development Phases & Gates

| Phase | Gate | Key Activities |
|-------|------|----------------|
| Idea | DR0 — Concept | MRD, vendor shortlist, NDAs, Drive structure |
| PoC | DR1 — Prelim | PoC sample, market validation, PRD |
| Design | DR2 — Critical | ME + EE assets, DFM, TRD, handoff packages |
| Test | DR3 + EVT/DVT | Build, test, FAI, vendor audit, certifications |
| Factory | DR4 + PVT | Production line, PVT, operator training |
| MP | Mass Production | Yield, QC, logistics, failure analysis |

---

## Google Drive Structure

Recommended folder structure per project:

```
/[Project_Name]/
  /00_Master_Checklist/
  /01_Master_Assembly/
  /02_Parts/
  /03_Native_CAD/          ← internal only
  /04_Exports/             ← STEP, DXF, PDF — safe to share
  /05_Drawings/
  /06_Supporting_Docs/
  /07_EE_Assets/
    /Native/               ← internal only
  /08_BOM_AVL/             ← strip pricing before sharing
  /09_Test_Scripts/
  /10_Vendor_Audits/
  /11_Contact_Log/
  /Handoff_Packages/
    /CM_RevA_[date]/
    /ODM_RevA_[date]/
    /Client_RevA_[date]/
```

---

## Coming Soon

| File | Description |
|------|-------------|
| `checklists/dr0-gate.html` → `dr4-gate.html` | Design review gate pass/fail checklists |
| `templates/mrd.html` | Market Requirements Document |
| `templates/prd.html` | Product Requirements Document |
| `templates/trd.html` | Technical Requirements Document |
| `checklists/quality-aql.html` | Quality inspection & AQL tracker |
| `checklists/compliance.html` | CE, FCC, RoHS, REACH compliance tracker |
| `templates/rfq.html` | RFQ & should-cost model template |
| `sops/revision-control.html` | File naming, versioning & release SOP |

---

## Embedding in Notion

Each page has its own GitHub Pages URL. Use Notion's `/embed` block with the full URL to render any page inline. The Phase Map index is the recommended entry point — all other pages are accessible from there.

```
https://patrick-scm-solution.github.io/SCM-hardware-dev-system/index.html
```

---

© 2025 SCM Solution LTD.
