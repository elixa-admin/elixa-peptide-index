// ════════════════════════════════════════════════════════════════
// ELIXA — Autoimmune & Chronic Disease Condition Signals
// Generated: 2026-04-26 (ChatGPT research pass + editorial review)
// 20 conditions × 40 peptides — only connections with confidence ≥ 50
// signal: "positive" | "adverse" | "mixed"
// confidence: 0–100 based on quality + quantity of available evidence
// ════════════════════════════════════════════════════════════════

const AUTOIMMUNE_CONDITIONS = [
  { id: "hashimotos",           name: "Hashimoto's Thyroiditis",       category: "thyroid",           shortDesc: "An autoimmune condition where the immune system attacks the thyroid, often causing an underactive thyroid." },
  { id: "rheumatoid_arthritis", name: "Rheumatoid Arthritis",          category: "joint",             shortDesc: "An autoimmune disease where the immune system attacks the joints, causing pain, swelling, and stiffness." },
  { id: "multiple_sclerosis",   name: "Multiple Sclerosis",            category: "neurological",      shortDesc: "An autoimmune disease where the immune system damages the protective covering around nerves in the brain and spinal cord." },
  { id: "celiac",               name: "Celiac Disease",                category: "gastrointestinal",  shortDesc: "An autoimmune reaction to gluten that damages the small intestine." },
  { id: "lupus",                name: "Systemic Lupus Erythematosus",  category: "systemic",          shortDesc: "A complex autoimmune disease that can affect the skin, joints, kidneys, blood, brain, and other organs." },
  { id: "type1_diabetes",       name: "Type 1 Diabetes",               category: "metabolic",         shortDesc: "An autoimmune disease where the immune system destroys insulin-producing cells in the pancreas." },
  { id: "psoriasis",            name: "Psoriasis",                     category: "skin",              shortDesc: "An immune-driven skin condition that causes red, scaly, inflamed patches." },
  { id: "crohns",               name: "Crohn's Disease",               category: "gastrointestinal",  shortDesc: "A chronic inflammatory bowel disease that can affect any part of the digestive tract." },
  { id: "ulcerative_colitis",   name: "Ulcerative Colitis",            category: "gastrointestinal",  shortDesc: "A chronic inflammatory bowel disease that causes inflammation and ulcers in the colon and rectum." },
  { id: "hiv_aids",             name: "HIV/AIDS",                      category: "infectious-immune", shortDesc: "A viral condition that weakens the immune system by attacking key immune cells." },
  { id: "sjogrens",             name: "Sjögren's Syndrome",            category: "systemic",          shortDesc: "An autoimmune disease that mainly causes dry eyes and dry mouth by attacking moisture-producing glands." },
  { id: "graves_disease",       name: "Graves' Disease",               category: "thyroid",           shortDesc: "An autoimmune condition that overstimulates the thyroid, often causing an overactive thyroid." },
  { id: "ankylosing_spondylitis", name: "Ankylosing Spondylitis",      category: "spine",             shortDesc: "An inflammatory arthritis that mainly affects the spine and sacroiliac joints." },
  { id: "myasthenia_gravis",    name: "Myasthenia Gravis",             category: "neuromuscular",     shortDesc: "An autoimmune disorder that weakens muscles by disrupting nerve-to-muscle signals." },
  { id: "alopecia_areata",      name: "Alopecia Areata",               category: "skin-hair",         shortDesc: "An autoimmune condition where the immune system attacks hair follicles, causing patchy hair loss." },
  { id: "vitiligo",             name: "Vitiligo",                      category: "skin",              shortDesc: "An autoimmune-related condition where pigment-producing skin cells are damaged, causing white patches." },
  { id: "fibromyalgia",         name: "Fibromyalgia",                  category: "pain",              shortDesc: "A chronic pain condition involving widespread pain, fatigue, poor sleep, and heightened pain sensitivity." },
  { id: "sarcoidosis",          name: "Sarcoidosis",                   category: "granulomatous",     shortDesc: "An inflammatory condition where clusters of immune cells form in organs, most commonly the lungs and lymph nodes." },
  { id: "antiphospholipid",     name: "Antiphospholipid Syndrome",     category: "blood-clotting",    shortDesc: "An autoimmune clotting disorder that increases the risk of blood clots and pregnancy complications." },
  { id: "polymyalgia",          name: "Polymyalgia Rheumatica",        category: "inflammatory",      shortDesc: "An inflammatory condition that causes pain and stiffness, especially in the shoulders, neck, and hips." }
];

const AUTOIMMUNE_CONNECTIONS = {

  semaglutide: [
    { condition: "psoriasis",     signal: "positive", confidence: 62,
      mechanism: "GLP-1 receptor activation may reduce systemic inflammation, weight-related inflammatory burden, and immune signalling that can aggravate psoriasis.",
      evidence:  "Small clinical reports and observational studies suggest GLP-1 receptor agonists may improve psoriasis severity, especially in people with obesity or type 2 diabetes.",
      caution:   "Evidence is supportive but not strong enough to treat psoriasis directly." },
    { condition: "type1_diabetes", signal: "mixed",    confidence: 55,
      mechanism: "Semaglutide may reduce insulin requirements and body weight but does not stop the autoimmune destruction that defines type 1 diabetes.",
      evidence:  "Small studies and clinical use reports show metabolic benefits as an adjunct in some people with type 1 diabetes, but it is not an approved disease-modifying treatment.",
      caution:   "Use in type 1 diabetes can increase risk if insulin is reduced too aggressively, including ketosis or diabetic ketoacidosis." }
  ],

  liraglutide: [
    { condition: "psoriasis",     signal: "positive", confidence: 60,
      mechanism: "GLP-1 signalling may dampen inflammatory pathways and reduce obesity-linked immune activation that can worsen psoriasis.",
      evidence:  "Small human studies and case series have reported psoriasis improvement in patients receiving liraglutide for metabolic indications.",
      caution:   "Not an approved psoriasis treatment and evidence remains limited." },
    { condition: "type1_diabetes", signal: "mixed",    confidence: 58,
      mechanism: "Liraglutide can improve weight and glucose variability but does not directly correct the autoimmune basis of type 1 diabetes.",
      evidence:  "Adjunctive type 1 diabetes trials showed modest metabolic benefits but also tolerability concerns and no clear disease-modifying effect.",
      caution:   "Should not replace insulin and may increase risk if insulin dosing is reduced unsafely." }
  ],

  tirzepatide: [
    { condition: "psoriasis", signal: "positive", confidence: 55,
      mechanism: "Dual GIP and GLP-1 activity may reduce weight-driven inflammation and improve metabolic factors linked to psoriasis severity.",
      evidence:  "Evidence is mainly indirect from metabolic and inflammatory improvements seen in obesity and diabetes trials, with limited direct psoriasis data.",
      caution:   "Direct autoimmune skin-disease evidence is still early." }
  ],

  glutathione: [
    { condition: "hiv_aids", signal: "positive", confidence: 60,
      mechanism: "Glutathione supports antioxidant defence in immune cells, which may be relevant because oxidative stress is elevated in HIV infection.",
      evidence:  "Older clinical and mechanistic studies show low glutathione status in HIV and suggest supplementation may improve oxidative stress markers.",
      caution:   "Evidence is adjunctive and does not replace antiretroviral therapy." }
  ],

  ara290: [
    { condition: "sarcoidosis",  signal: "positive", confidence: 68,
      mechanism: "ARA-290 may activate tissue-protective erythropoietin receptor pathways that reduce small-fibre nerve inflammation and pain.",
      evidence:  "Clinical studies in sarcoidosis-associated small-fibre neuropathy reported improvements in neuropathic symptoms and quality-of-life measures.",
      caution:   "This is not established as a general sarcoidosis treatment and mainly relates to neuropathy symptoms." },
    { condition: "fibromyalgia", signal: "positive", confidence: 52,
      mechanism: "ARA-290 may reduce neuroinflammation and small-fibre nerve dysfunction that overlaps with some chronic pain syndromes.",
      evidence:  "Human evidence is stronger in small-fibre neuropathy than fibromyalgia itself, so the connection is mechanistically plausible but limited.",
      caution:   "Fibromyalgia evidence is indirect and should be treated as exploratory." }
  ],

  thymosin_a1: [
    { condition: "hiv_aids", signal: "positive", confidence: 72,
      mechanism: "Thymosin Alpha-1 may support T-cell function and immune regulation, which is relevant in immune-compromised states such as HIV.",
      evidence:  "Clinical studies have evaluated Thymosin Alpha-1 as an immune adjunct in HIV, showing immune-marker improvements in some settings.",
      caution:   "It is not a substitute for antiretroviral therapy and is not universally approved for HIV treatment." },
    { condition: "lupus",    signal: "mixed",    confidence: 52,
      mechanism: "Thymosin Alpha-1 can modulate T-cell and cytokine activity, which could theoretically help immune balance but may also complicate autoimmune activity.",
      evidence:  "Evidence is limited and mostly exploratory rather than based on large lupus trials.",
      caution:   "Immune-stimulating agents may be inappropriate in active autoimmune disease without specialist oversight." }
  ],

  ll37: [
    { condition: "psoriasis", signal: "adverse", confidence: 86,
      mechanism: "LL-37 can bind self-DNA and self-RNA, triggering immune activation that contributes to psoriatic inflammation.",
      evidence:  "Human mechanistic studies identify LL-37 as an autoantigen and immune amplifier in psoriasis.",
      caution:   "This supports disease involvement — LL-37 may worsen psoriasis, not treat it." },
    { condition: "lupus",    signal: "adverse", confidence: 78,
      mechanism: "LL-37 can form complexes with self-DNA that activate plasmacytoid dendritic cells and type I interferon pathways implicated in lupus.",
      evidence:  "Human immunology studies link LL-37 nucleic-acid complexes to lupus-like interferon activation.",
      caution:   "Potentially relevant to autoimmune activation — use with great caution in lupus." },
    { condition: "hiv_aids", signal: "positive", confidence: 55,
      mechanism: "LL-37 has antimicrobial and antiviral immune activity that may interact with HIV-related mucosal and innate immune defence.",
      evidence:  "Laboratory and translational studies suggest anti-HIV activity, but clinical treatment evidence is limited.",
      caution:   "Clinical relevance remains uncertain and not treatment-grade evidence." }
  ],

  selank: [
    { condition: "hashimotos", signal: "mixed", confidence: 50,
      mechanism: "Selank may influence cytokine balance and stress-related immune signalling, which could indirectly affect autoimmune thyroid symptoms.",
      evidence:  "Evidence is mostly mechanistic and regional clinical experience rather than strong Hashimoto's-specific trials.",
      caution:   "Connection is weak and should be considered exploratory." }
  ],

  bpc157: [
    { condition: "crohns",            signal: "positive", confidence: 55,
      mechanism: "BPC-157 may support gut barrier repair, angiogenesis, and anti-inflammatory signalling in intestinal injury models.",
      evidence:  "Animal studies show protective effects in experimental colitis and intestinal injury, but high-quality human Crohn's trials are lacking.",
      caution:   "Not approved for Crohn's disease and human evidence is insufficient." },
    { condition: "ulcerative_colitis", signal: "positive", confidence: 55,
      mechanism: "BPC-157 may reduce gut inflammation and promote mucosal healing in experimental bowel injury.",
      evidence:  "Preclinical colitis models report improved tissue healing and reduced inflammatory damage.",
      caution:   "Evidence is preclinical and should not be treated as established therapy." }
  ],

  vip: [
    { condition: "rheumatoid_arthritis", signal: "positive", confidence: 56,
      mechanism: "VIP can shift immune responses away from pro-inflammatory cytokine production and may promote regulatory immune activity.",
      evidence:  "Preclinical arthritis models and human immune studies support anti-inflammatory effects relevant to rheumatoid arthritis.",
      caution:   "Clinical treatment evidence remains limited." },
    { condition: "crohns",              signal: "positive", confidence: 54,
      mechanism: "VIP may reduce intestinal inflammatory signalling and support immune tolerance in the gut.",
      evidence:  "Preclinical inflammatory bowel disease models show anti-inflammatory effects, with limited direct human evidence.",
      caution:   "Not an approved Crohn's disease therapy." },
    { condition: "ulcerative_colitis",  signal: "positive", confidence: 54,
      mechanism: "VIP may suppress inflammatory cytokines and help regulate immune activity in the colon.",
      evidence:  "Experimental colitis studies show reduced inflammation, but clinical evidence is not yet strong.",
      caution:   "Use remains investigational." },
    { condition: "sarcoidosis",         signal: "mixed",    confidence: 50,
      mechanism: "VIP has immune-regulating effects that may influence granulomatous inflammation, but disease-specific effects are not well established.",
      evidence:  "Mechanistic immune studies suggest relevance to inflammatory lung disease, but sarcoidosis-specific clinical evidence is limited.",
      caution:   "Exploratory connection only." }
  ],

  melanotan2: [
    { condition: "vitiligo", signal: "mixed", confidence: 52,
      mechanism: "Melanocortin stimulation can increase pigmentation, but this does not correct the autoimmune destruction of pigment-producing cells in vitiligo.",
      evidence:  "Melanocortin analogues have pigmentation effects, but Melanotan II itself lacks strong regulated clinical evidence for vitiligo.",
      caution:   "Unregulated use carries safety concerns including skin changes, nausea, blood pressure effects, and uncertain melanoma-related risk." }
  ],

  kisspeptin10: [
    { condition: "type1_diabetes", signal: "mixed", confidence: 50,
      mechanism: "Kisspeptin signalling may influence reproductive hormones and metabolic regulation, but it does not directly address pancreatic autoimmunity.",
      evidence:  "Human metabolic and endocrine studies suggest relevance to glucose regulation, but type 1 diabetes evidence is limited.",
      caution:   "Exploratory metabolic connection only." }
  ],

  glatiramer_acetate: [
    { condition: "multiple_sclerosis", signal: "positive", confidence: 98,
      mechanism: "Glatiramer acetate modifies immune activity against myelin and helps reduce inflammatory attacks on the nervous system.",
      evidence:  "Large controlled trials and long-term clinical use support its approval as a disease-modifying therapy for relapsing forms of multiple sclerosis.",
      caution:   "" }
  ],

  oxytocin: [
    { condition: "fibromyalgia", signal: "mixed", confidence: 52,
      mechanism: "Oxytocin may influence pain processing, stress response, and social-emotional regulation, which overlap with fibromyalgia symptoms.",
      evidence:  "Small human studies have explored oxytocin for pain and central sensitivity, but results are inconsistent.",
      caution:   "Not an approved fibromyalgia treatment and evidence remains mixed." }
  ]

};

// ════════════════════════════════════════════════════════════════
// CONDITION CATEGORY COLOURS — used for chip borders + headers
// ════════════════════════════════════════════════════════════════
const CONDITION_CATEGORY_COLORS = {
  thyroid:           "#38bdf8",
  joint:             "#fb923c",
  neurological:      "#a78bfa",
  gastrointestinal:  "#4ade80",
  systemic:          "#f472b6",
  metabolic:         "#fbbf24",
  skin:              "#f97316",
  "skin-hair":       "#f97316",
  "infectious-immune": "#22d3ee",
  spine:             "#fb923c",
  neuromuscular:     "#a78bfa",
  pain:              "#f87171",
  granulomatous:     "#94a3b8",
  "blood-clotting":  "#f87171",
  inflammatory:      "#fb923c"
};
