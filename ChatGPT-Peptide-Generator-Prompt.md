# ChatGPT Prompt Template — Elixa Peptide Index Data Generator

Copy everything below the line and paste it into ChatGPT, replacing [PEPTIDE NAME] with the compound you want generated.

---

## PROMPT START

You are a research data assistant helping build the **Elixa Peptide Index** — an evidence-based peptide research platform. Your job is to generate accurate, well-sourced peptide data in an exact JavaScript object format.

**Accuracy is critical.** Only use data from:
- PubMed / published peer-reviewed studies
- ClinicalTrials.gov (registered trials)
- FDA.gov, EMA, TGA, SAHPRA official records
- WADA prohibited list (current year)

Do not fabricate studies, trial names, DOIs, or enrollment numbers. If data is unknown, use `null` or say "Data not available."

---

## STEP 1 — Generate this peptide:

**Peptide:** [PEPTIDE NAME]

---

## STEP 2 — Use this exact JavaScript object format:

```javascript
{
  id:"[lowercase_id_no_spaces]",
  name:"[Official Name]",
  category:"[one of: glp1 | recovery | gh_axis | longevity | cognitive_neuro | sexual_health | immune]",

  altNames:"[Brand names and synonyms separated by · ]",
  brandNames:["Brand1","Brand2"],
  class:"[Peptide class e.g. GHRH Analogue / GLP-1 Receptor Agonist / etc.]",
  icon:"[single relevant emoji]",
  color:"[hex color matching category — see guide below]",
  iconBg:"linear-gradient(135deg,[dark shade of color],[slightly lighter shade])",

  // EVIDENCE SCORES — rate 0–10, one decimal
  // t1 = Human clinical trials (most important)
  // t2 = Preclinical / animal / lab studies
  // t3 = Community / real-world reports
  // composite = (t1 × 0.50) + (t2 × 0.25) + (t3 × 0.25), round to 1 decimal
  t1:[0.0–10.0], t2:[0.0–10.0], t3:[0.0–10.0], composite:[calculated],

  // LANDSCAPE MAP POSITION — both 0–10
  // evidence_x: strength of overall research evidence (left=weak, right=strong)
  // access_y: regulatory access / global approval level (bottom=none, top=widely approved)
  evidence_x:[0.0–10.0], access_y:[0.0–10.0],

  // REGULATORY STATUS
  // fdaStatus options: "approved" | "phase3" | "phase2" | "research" | "registered" | "grey"
  fdaStatus:"[status]", fdaLabel:"[Short label e.g. FDA Approved / Phase 3 Trials / Research Only]",
  // sahpraStatus options: "registered" | "grey" | "prohibited" | "research"
  sahpraStatus:"[status]", sahpraLabel:"[Short SA label]",
  // wadaStatus options: "wada-prohibited" | "wada-ok"
  wadaStatus:"[status]", wadaLabel:"[Not Prohibited / WADA Prohibited]",

  // MECHANISM — two versions
  mechanism:"[Plain English, 1–2 sentences, suitable for a general educated audience. What does it do in the body?]",
  technicalMech:"[Scientific detail — receptor targets, half-life mechanism, molecular action. 2–3 sentences for researchers.]",

  // WHAT IT DOES CALLOUT — HTML formatted, use the color variable matching p.color
  whatItDoes:{
    title:"[PeptideName] — What It Does",
    body:`<p>[2–3 sentence overview of clinical status and key use cases]</p>
<p><strong style="color:[category_color]">[Approved indications OR Studied effects:]</strong></p>
<ul>
  <li><strong>[Indication 1]</strong> — [brief result with data point if available]</li>
  <li><strong>[Indication 2]</strong> — [brief result]</li>
</ul>
<p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: [1–2 sentences on South Africa availability and legal status]</p>`
  },

  // SOUTH AFRICA CONTEXT — plain text, 1–3 sentences
  saContext:"[SAHPRA registration status. Grey market availability. Any SA-specific regulatory notes. If SAHPRA registered, say so explicitly. If not, use: 'Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.']",

  // PURPOSE BAROMETERS — score 1–10 or null if not applicable
  purposes:{
    weightBody:[1–10 or null],       // weight loss, body composition
    recoveryTissue:[1–10 or null],   // tissue healing, injury recovery
    inflammation:[1–10 or null],     // anti-inflammatory, pain
    energyPerf:[1–10 or null],       // energy, athletic performance
    cognitiveNeuro:[1–10 or null],   // cognition, mood, neuroprotection
    sleep:[1–10 or null],            // sleep quality, circadian rhythm
    cardiovascular:[1–10 or null],   // heart health, blood pressure, CV protection
    skinLongevity:[1–10 or null]     // skin quality, anti-aging, longevity
  },

  // DOSING
  dosing:{
    intro:{dose:'[Starting dose with unit and route]', note:'[Context e.g. Week 1–4]'},
    maintenance:{dose:'[Maintenance dose range]', note:'[Titration note or timing]'},
    frequency:'[Dosing frequency e.g. Once weekly / Daily / Twice daily]',
    halfLife:'[Half-life with unit e.g. ~7 days / ~4 hours]',
    cycle:'[Cycle protocol e.g. Ongoing — no cycling / 8–12 weeks on, 4 weeks off / N/A — investigational]',
    notes:'[Any important dosing notes: fasted state, site rotation, compounding cautions, etc.]'
  },

  // ADMINISTRATION ROUTES — list all relevant routes
  administration:[
    {method:'[Route e.g. SC Injection / Oral / IM Injection / Intranasal / IV]', bio:[bioavailability 1–100 as integer], note:'[Brief note on this route]'},
    // add more routes as applicable
  ],

  // EFFICACY BY DOMAIN — list 3–6 domains with evidence
  // strength options: "high" | "mod" | "low" | "prelim"
  // bar: 1–100 (% evidence bar fill — reflects both strength and quantity of evidence)
  // source: brief citation — include study name, N size, journal if known
  efficacy:[
    {domain:"[Effect Domain]", strength:"[high|mod|low|prelim]", bar:[1–100], source:"[Citation — study name, year, journal or trial name]"},
    // 3–6 entries
  ],

  // CLINICAL TRIALS — registered trials only (ClinicalTrials.gov or equivalent)
  // phase options: "ph-1" | "ph-2" | "ph-3" | "ph-4" | "ph-obs"
  // status options: "active" | "recruiting" | "completed" | "withdrawn"
  trials:[
    {
      phase:"[ph-1|ph-2|ph-3|ph-4|ph-obs]",
      phaseLabel:"[Phase 1|Phase 2|Phase 3|Phase 4|Observational]",
      name:"[Trial name or program name]",
      desc:"[1–2 sentence trial description — intervention, population, primary endpoint]",
      sponsor:"[Sponsor organisation]",
      enrolled:"[~N or exact number]",
      status:"[active|recruiting|completed|withdrawn]",
      statusLabel:"[Active|Recruiting|Completed YYYY|Withdrawn]",
      id:"[NCT number or registry ID if known]"
    },
    // add more trials; use empty array [] if no registered trials exist
  ],

  // KEY PUBLISHED STUDIES — peer-reviewed publications only, no fabrication
  // doi: full DOI URL if available, otherwise omit the field entirely
  studies:[
    {
      year:"[YYYY]",
      title:"[Exact or paraphrased study title]",
      finding:"[1–2 sentence key finding with data point — e.g. 'X% reduction vs placebo in N patients']",
      journal:"[Journal name]",
      doi:"[https://doi.org/... — only if you are certain it is real]"
    },
    // 1–4 entries; use empty array [] if no published studies exist
  ],

  // SAFETY PROFILE
  safety:{
    contraindications:["[Absolute contraindication 1]","[2]"],
    precautions:["[Precaution 1]","[2]","[3]"],
    common:["[Common side effect 1 — include % if known]","[2]","[3]"],
    serious:["[Rare/serious adverse event 1]","[2]"]
  }
}
```

---

## STEP 3 — Category colour guide

Use these hex colours for `color` based on the peptide's primary category:

| Category | id | color |
|---|---|---|
| Metabolic & Weight | glp1 | `#4ade80` |
| Recovery & Repair | recovery | `#38bdf8` |
| Growth Hormone | gh_axis | `#fbbf24` |
| Longevity | longevity | `#c084fc` |
| Cognitive & Neuro | cognitive_neuro | `#818cf8` |
| Sexual Health | sexual_health | `#f472b6` |
| Immune & Repair | immune | `#34d399` |

For `iconBg`, use a dark gradient of the category colour. Examples:
- `#4ade80` → `linear-gradient(135deg,#0c3320,#0c4a2a)`
- `#38bdf8` → `linear-gradient(135deg,#0c2340,#0c3a4a)`
- `#fbbf24` → `linear-gradient(135deg,#2a1a00,#3a2800)`
- `#c084fc` → `linear-gradient(135deg,#1e0a3a,#2d0f52)`
- `#818cf8` → `linear-gradient(135deg,#0f0f3a,#1a1a52)`
- `#f472b6` → `linear-gradient(135deg,#2a0a1e,#3a0f2d)`
- `#34d399` → `linear-gradient(135deg,#022a1a,#043a25)`

---

## STEP 4 — Evidence scoring guide

**t1 (Human clinical evidence):**
- 9–10: Multiple large RCTs (N > 1,000), FDA approved
- 7–8: Phase 2–3 trial data, meaningful human evidence
- 4–6: Small or early-phase human trials only
- 1–3: Minimal human data (1–2 small studies or case reports)
- 0–1: No published human trial data

**t2 (Preclinical/animal/lab):**
- 8–10: Extensive multi-model animal data, strong mechanistic understanding
- 5–7: Multiple consistent animal studies, reasonable coverage
- 2–4: Limited animal data, narrow mechanistic evidence
- 0–2: Very sparse preclinical data

**t3 (Community/real-world):**
- 8–10: Widely used, consistent anecdotal reports, well-characterised side-effect profile
- 5–7: Moderately used, broadly positive reports with some variability
- 2–4: Limited community use or mixed/conflicting reports
- 0–2: Rarely used, insufficient community data

---

## STEP 5 — Important rules

1. **Never fabricate DOIs, NCT numbers, study names, or enrollment figures.** If unsure, omit the `doi` field or use a descriptive source string instead.
2. **saContext must always address SAHPRA specifically.** If SAHPRA registered, name the schedule. If not, use the standard grey-market statement.
3. **purposes scores of null** mean the compound has no meaningful application in that domain — do not use 0, use `null`.
4. **Output only valid JavaScript object syntax** — no markdown fences, no explanation text. Just the raw object starting with `{` and ending with `}`, ready to paste into an array.
5. **Check your composite score**: it must equal `(t1 × 0.50) + (t2 × 0.25) + (t3 × 0.25)` rounded to one decimal.

---

## PROMPT END

---

## HOW TO USE THIS

1. Copy everything between `## PROMPT START` and `## PROMPT END`
2. Replace `[PEPTIDE NAME]` with the compound you want (e.g. `Epitalon`, `MOTS-c`, `IGF-1 LR3`)
3. Paste into ChatGPT (GPT-4o)
4. Copy the output object
5. Send it to Claude in your Elixa session — Claude will validate and integrate it directly

## BATCH GENERATION TIP

To generate multiple peptides in one ChatGPT session, add this line after Step 1:

> "After generating [Peptide 1], continue immediately with [Peptide 2], [Peptide 3], and [Peptide 4] using the same format. Output each as a separate JavaScript object."

Recommended batch size: 3–4 peptides per ChatGPT session for best accuracy.

## REMAINING PEPTIDES TO BUILD (~25)

**Priority 1 — High traffic / well known:**
Epitalon, MOTS-c, IGF-1 LR3, Kisspeptin-10, Oxytocin, Follistatin, Gonadorelin

**Priority 2 — GH axis completions:**
GHRP-2, PEG-MGF, Humanin, Cerebrolysin

**Priority 3 — Immune / specialised:**
LL-37, VIP (Vasoactive Intestinal Peptide), Glatiramer Acetate, Teriparatide, Octreotide

**Priority 4 — Emerging / pipeline:**
CagriSema, Survodutide, Fragment 176-191 (standalone), Collagen Peptides
