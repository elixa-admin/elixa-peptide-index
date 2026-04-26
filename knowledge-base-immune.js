// ═══════════════════════════════════════════════════════════════════
// ELIXA PEPTIDE INDEX — IMMUNE / AUTOIMMUNE KNOWLEDGE BASE
// Generated: April 2026
// Purpose: Condition-to-peptide mapping for future "Condition Explorer"
//          feature. Not yet integrated into dashboard UI.
// ═══════════════════════════════════════════════════════════════════

// ── AUTOIMMUNE DISEASE TARGETS ──────────────────────────────────────
// Ranked by prevalence. Each entry defines the inflammation profile,
// symptoms, relevant peptides, evidence level, and important cautions.

export const IMMUNE_DISEASE_TARGETS = [
  {
    id: "atopic_dermatitis",
    name: "Atopic Dermatitis / Eczema",
    category: "immune-mediated inflammatory skin disease",
    prevalenceRank: 1,
    inflammationProfile: ["Th2 inflammation", "skin barrier dysfunction", "itch", "allergic comorbidity"],
    symptoms: ["eczema", "itching", "redness", "dry skin", "flare-ups"],
    peptideAngles: ["KPV", "LL-37 caution", "BPC-157 theoretical wound/barrier support"],
    evidenceSummary: "Very common inflammatory skin disease. Peptide relevance is mostly experimental; KPV has preclinical anti-inflammatory interest, while LL-37 is biologically relevant but may worsen or drive inflammatory signalling in some skin contexts.",
    evidenceLevel: "preclinical / mechanistic",
    caution: "Do not position peptides as eczema treatment. LL-37 is not simply 'healing'; it may be pro-inflammatory depending on disease state."
  },
  {
    id: "psoriasis",
    name: "Psoriasis / Psoriatic Disease",
    category: "autoimmune / immune-mediated skin disease",
    prevalenceRank: 2,
    inflammationProfile: ["IL-17/IL-23 axis", "T-cell activation", "keratinocyte hyperproliferation"],
    symptoms: ["plaques", "scaling", "itching", "joint pain if psoriatic arthritis"],
    peptideAngles: ["KPV", "LL-37 caution", "Thymosin alpha-1 theoretical immune modulation"],
    evidenceSummary: "LL-37 is implicated as an autoantigen in psoriasis, so dashboard language should flag it as disease-relevant but not necessarily therapeutic. KPV has anti-inflammatory interest, mainly preclinical.",
    evidenceLevel: "mechanistic / preclinical",
    caution: "Avoid claiming LL-37 treats psoriasis; evidence suggests it can participate in disease activation."
  },
  {
    id: "rheumatoid_arthritis",
    name: "Rheumatoid Arthritis",
    category: "systemic autoimmune inflammatory disease",
    prevalenceRank: 3,
    inflammationProfile: ["TNF-alpha", "IL-6", "autoantibodies", "synovial inflammation"],
    symptoms: ["joint pain", "swelling", "morning stiffness", "fatigue"],
    peptideAngles: ["Thymosin alpha-1", "BPC-157 theoretical tissue repair", "ARA-290 theoretical neuro-inflammatory pain support"],
    evidenceSummary: "Peptide therapy evidence is weak for RA itself. TA1 is immunomodulatory in human contexts but not established as RA therapy. BPC-157 is mostly animal/tissue-repair literature.",
    evidenceLevel: "low / exploratory",
    caution: "RA has proven disease-modifying therapies; peptides should be framed as research candidates only."
  },
  {
    id: "hashimotos",
    name: "Hashimoto's Thyroiditis",
    category: "autoimmune thyroid disease",
    prevalenceRank: 4,
    inflammationProfile: ["thyroid autoantibodies", "lymphocytic thyroid inflammation"],
    symptoms: ["fatigue", "weight gain", "cold intolerance", "low mood", "dry skin"],
    peptideAngles: ["Thymosin alpha-1 theoretical immune regulation", "KPV theoretical anti-inflammatory"],
    evidenceSummary: "Common autoimmune condition, but peptide evidence is indirect. No strong disease-specific peptide therapy evidence.",
    evidenceLevel: "very low / theoretical",
    caution: "Do not imply thyroid autoimmunity reversal."
  },
  {
    id: "graves_disease",
    name: "Graves' Disease",
    category: "autoimmune thyroid disease",
    prevalenceRank: 5,
    inflammationProfile: ["TSH receptor antibodies", "thyroid stimulation", "orbital inflammation in some cases"],
    symptoms: ["hyperthyroidism", "anxiety", "palpitations", "weight loss", "eye symptoms"],
    peptideAngles: ["Thymosin alpha-1 theoretical immune modulation"],
    evidenceSummary: "Relevant due to prevalence, but peptide evidence remains theoretical.",
    evidenceLevel: "very low",
    caution: "High risk if misrepresented; Graves requires conventional endocrine management."
  },
  {
    id: "ibd_crohns_uc",
    name: "Inflammatory Bowel Disease: Crohn's / Ulcerative Colitis",
    category: "autoimmune / immune-mediated gut inflammation",
    prevalenceRank: 6,
    inflammationProfile: ["mucosal inflammation", "barrier dysfunction", "TNF-alpha", "IL-23"],
    symptoms: ["diarrhoea", "abdominal pain", "bleeding", "fatigue", "weight loss"],
    peptideAngles: ["BPC-157", "KPV", "Larazotide theoretical barrier support"],
    evidenceSummary: "One of the stronger peptide-interest areas. KPV has murine colitis data; BPC-157 has extensive animal gut-healing literature; larazotide is more celiac-focused but relevant to gut barrier research.",
    evidenceLevel: "preclinical with some adjacent human trial relevance",
    caution: "BPC-157 is not an approved IBD therapy; human evidence remains limited."
  },
  {
    id: "celiac_disease",
    name: "Celiac Disease",
    category: "autoimmune gut disease",
    prevalenceRank: 7,
    inflammationProfile: ["gluten-triggered autoimmunity", "intestinal permeability", "villous injury"],
    symptoms: ["bloating", "diarrhoea", "malabsorption", "fatigue", "skin rash in dermatitis herpetiformis"],
    peptideAngles: ["Larazotide acetate", "KPV theoretical barrier support"],
    evidenceSummary: "Larazotide acetate is a peptide-like tight-junction regulator studied in celiac disease. Phase 3 development was discontinued, but the mechanism remains useful for research dashboards.",
    evidenceLevel: "human trials, mixed/discontinued",
    caution: "Gluten-free diet remains core standard of care."
  },
  {
    id: "type_1_diabetes",
    name: "Type 1 Diabetes",
    category: "autoimmune endocrine disease",
    prevalenceRank: 8,
    inflammationProfile: ["beta-cell autoimmunity", "T-cell mediated destruction"],
    symptoms: ["high glucose", "thirst", "weight loss", "fatigue"],
    peptideAngles: ["Thymosin alpha-1 theoretical immune modulation", "ARA-290/cibinetide for neuropathy not autoimmunity"],
    evidenceSummary: "Peptides may be relevant to immune modulation or diabetic neuropathy research, but not as a replacement for insulin or approved immunotherapy.",
    evidenceLevel: "exploratory",
    caution: "Do not position peptides as glucose-control or insulin-replacement therapy."
  },
  {
    id: "multiple_sclerosis",
    name: "Multiple Sclerosis",
    category: "autoimmune neuroinflammatory disease",
    prevalenceRank: 9,
    inflammationProfile: ["CNS demyelination", "T-cell/B-cell involvement", "neuroinflammation"],
    symptoms: ["numbness", "weakness", "vision issues", "fatigue", "mobility issues"],
    peptideAngles: ["Thymosin alpha-1 theoretical", "ARA-290 theoretical neuroprotective/anti-inflammatory"],
    evidenceSummary: "Peptide relevance is mostly neuroimmune and tissue-protective theory. No strong peptide therapy claim should be made.",
    evidenceLevel: "low / exploratory",
    caution: "MS has established disease-modifying therapies."
  },
  {
    id: "sle_lupus",
    name: "Systemic Lupus Erythematosus",
    category: "systemic autoimmune disease",
    prevalenceRank: 10,
    inflammationProfile: ["autoantibodies", "immune complexes", "type I interferon", "multi-organ inflammation"],
    symptoms: ["rash", "joint pain", "fatigue", "kidney involvement", "photosensitivity"],
    peptideAngles: ["LL-37 caution", "Thymosin alpha-1 caution"],
    evidenceSummary: "LL-37 is implicated in autoimmune inflammation pathways and should be treated as a mechanistic marker, not a healing peptide. TA1 may be immune-modulating but could theoretically complicate immune activation.",
    evidenceLevel: "mechanistic / cautionary",
    caution: "Avoid immune-stimulating claims in lupus."
  }
];


// ── PEPTIDE → IMMUNE CONDITION RESEARCH MAP ────────────────────────
// Maps peptides to their best-fit immune/autoimmune conditions,
// mechanisms, evidence level, and important safety flags.

export const PEPTIDE_IMMUNE_RESEARCH_MAP = [
  {
    peptideId: "kpv",
    peptide: "KPV",
    type: "anti-inflammatory tripeptide",
    bestFitConditions: ["ibd_crohns_uc", "atopic_dermatitis", "psoriasis"],
    mechanisms: ["NF-kB downregulation", "reduced pro-inflammatory cytokines", "mucosal barrier support", "skin inflammation modulation"],
    evidenceLevel: "preclinical",
    strongestEvidenceArea: "murine colitis / inflammatory skin models",
    dashboardPositioning: "Experimental anti-inflammatory peptide candidate for gut and skin inflammation.",
    riskFlag: "Not approved as treatment; human evidence limited."
  },
  {
    peptideId: "bpc157",
    peptide: "BPC-157",
    type: "gastric pentadecapeptide / tissue repair candidate",
    bestFitConditions: ["ibd_crohns_uc", "atopic_dermatitis", "rheumatoid_arthritis"],
    mechanisms: ["angiogenesis modulation", "wound healing", "gut barrier repair", "anti-inflammatory signalling"],
    evidenceLevel: "mostly animal / preclinical",
    strongestEvidenceArea: "gut injury, wound healing, tendon/ligament injury models",
    dashboardPositioning: "Promising preclinical tissue-repair peptide with gut-healing relevance.",
    riskFlag: "Human clinical evidence remains thin; avoid therapeutic claims."
  },
  {
    peptideId: "thymosin_a1",
    peptide: "Thymosin Alpha-1",
    type: "immune-modulating thymic peptide",
    bestFitConditions: ["immune_deficiency_states", "chronic_infections", "cancer_supportive_research", "type_1_diabetes", "rheumatoid_arthritis"],
    mechanisms: ["T-cell modulation", "innate/adaptive immune balancing", "dendritic cell and cytokine effects"],
    evidenceLevel: "human clinical use in selected immune/infectious/oncology contexts; autoimmune use less established",
    strongestEvidenceArea: "immune reconstitution, infection adjunct, oncology-adjacent immune support",
    dashboardPositioning: "Most clinically mature immune peptide, but autoimmune-specific claims should remain cautious.",
    riskFlag: "Immune stimulation may be inappropriate in some autoimmune states."
  },
  {
    peptideId: "ara290",
    peptide: "ARA-290 / Cibinetide",
    type: "erythropoietin-derived innate repair receptor peptide",
    bestFitConditions: ["sarcoidosis_small_fiber_neuropathy", "diabetic_neuropathy", "autoimmune_neuropathic_pain"],
    mechanisms: ["innate repair receptor activation", "anti-inflammatory tissue protection", "neuroprotection"],
    evidenceLevel: "human pilot / phase studies in sarcoidosis-associated small fibre neuropathy",
    strongestEvidenceArea: "neuropathic pain and nerve fibre repair research",
    dashboardPositioning: "Interesting peptide for immune-linked neuropathy rather than broad autoimmune disease.",
    riskFlag: "Not a general autoimmune therapy."
  },
  {
    peptideId: "larazotide",
    peptide: "Larazotide Acetate",
    type: "tight-junction / intestinal permeability modulator",
    bestFitConditions: ["celiac_disease", "gut_barrier_dysfunction"],
    mechanisms: ["tight junction regulation", "reduced gluten-triggered permeability"],
    evidenceLevel: "human trials, mixed results; phase 3 discontinued",
    strongestEvidenceArea: "celiac disease adjunct research",
    dashboardPositioning: "Important gut-barrier peptide candidate with mixed clinical development history.",
    riskFlag: "Not commercially established as celiac treatment."
  },
  {
    peptideId: "ll37",
    peptide: "LL-37",
    type: "cathelicidin antimicrobial peptide",
    bestFitConditions: ["psoriasis", "atopic_dermatitis", "sle_lupus"],
    mechanisms: ["antimicrobial defence", "TLR activation", "immune-cell recruitment", "autoantigen potential"],
    evidenceLevel: "strong mechanistic disease relevance; not a straightforward therapeutic",
    strongestEvidenceArea: "psoriasis and lupus inflammatory pathways",
    dashboardPositioning: "Disease-relevant immune peptide; should be flagged as double-edged.",
    riskFlag: "May drive inflammation/autoimmunity in certain contexts."
  },
  {
    peptideId: "ghkcu",
    peptide: "GHK-Cu",
    type: "copper peptide / tissue remodelling candidate",
    bestFitConditions: ["skin_barrier_damage", "wound_healing", "inflammatory_skin_recovery"],
    mechanisms: ["collagen modulation", "wound repair", "antioxidant signalling"],
    evidenceLevel: "cosmetic/dermatology-adjacent; limited autoimmune evidence",
    strongestEvidenceArea: "skin repair and ageing-related skin studies",
    dashboardPositioning: "Skin-repair peptide, not an autoimmune therapy.",
    riskFlag: "Keep separate from disease-treatment claims."
  },
  {
    peptideId: "tb500",
    peptide: "TB-500 / Thymosin Beta-4",
    type: "repair/regeneration peptide",
    bestFitConditions: ["wound_healing", "soft_tissue_inflammation", "skin_repair"],
    mechanisms: ["actin regulation", "cell migration", "angiogenesis", "tissue repair"],
    evidenceLevel: "preclinical / experimental",
    strongestEvidenceArea: "wound healing and tissue repair models",
    dashboardPositioning: "Tissue-repair candidate with indirect inflammatory relevance.",
    riskFlag: "Not disease-specific autoimmune evidence."
  }
];


// ── INTEGRATION NOTES ───────────────────────────────────────────────
// Future dashboard feature: "Condition Explorer"
// - User selects a condition (e.g. "Crohn's Disease")
// - Dashboard shows relevant peptides ranked by evidence level
// - Each peptide card shows: mechanisms, evidence level, caution flags
// - Cross-links to existing peptide profiles (bpc157, thymosin_a1, etc.)
//
// Key cautions to enforce in UI:
// - Always show riskFlag prominently
// - Never imply treatment/cure — use "research interest" language
// - LL-37 and Thymosin Alpha-1 need conditional warnings in autoimmune context
// - Approved standard-of-care must be mentioned for each condition
