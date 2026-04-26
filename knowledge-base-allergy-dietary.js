// ═══════════════════════════════════════════════════════════════════
// ELIXA PEPTIDE INDEX — ALLERGY & DIETARY KNOWLEDGE BASE
// Generated: April 2026
// Purpose: Allergy targets, gluten conditions, compatibility rules,
//          and dashboard labels for future Condition Explorer /
//          Compatibility Filter features.
// ═══════════════════════════════════════════════════════════════════


// ── ALLERGY TARGETS ─────────────────────────────────────────────────
// Covers environmental, food, pet, and venom allergies.
// Each entry includes standard care consensus, peptide research angles,
// evidence level, and positioning guidance.

export const ALLERGY_TARGETS = [
  {
    id: "allergic_rhinitis_pollen",
    name: "Pollen Allergy / Hay Fever",
    category: "environmental",
    commonTriggers: ["grass pollen", "tree pollen", "weed pollen", "ragweed"],
    symptoms: ["sneezing", "runny nose", "nasal congestion", "itchy eyes", "post-nasal drip"],
    prevalenceNote: "Allergic rhinitis affects roughly 10–30% of the global population, with some estimates up to 40%.",
    standardConsensus: ["antihistamines", "intranasal corticosteroids", "allergen avoidance", "SCIT/SLIT immunotherapy"],
    peptideRelevance: ["grass allergen peptide immunotherapy", "T-cell epitope peptides"],
    evidenceLevel: "clinical research / investigational",
    dashboardPositioning: "Peptide-based allergen immunotherapy aims to retrain immune tolerance using short allergen fragments rather than full allergen exposure.",
    caution: "Not equivalent to general peptides like BPC-157 or GHK-Cu."
  },
  {
    id: "dust_mite_allergy",
    name: "House Dust Mite Allergy",
    category: "indoor environmental",
    commonTriggers: ["Dermatophagoides pteronyssinus", "Dermatophagoides farinae", "mite faecal particles"],
    symptoms: ["rhinitis", "asthma flares", "eczema worsening", "night-time congestion"],
    standardConsensus: ["dust mite reduction", "HEPA filtration", "intranasal corticosteroids", "antihistamines", "SLIT/SCIT"],
    peptideRelevance: ["Der p 1 / Der p 2 peptide or epitope-based immunotherapy research"],
    evidenceLevel: "preclinical to clinical immunotherapy-adjacent",
    dashboardPositioning: "Dust mite allergy is a major target for immune-tolerance therapies, including peptide and epitope-based approaches.",
    caution: "Commercially available standard immunotherapy is better established than peptide variants."
  },
  {
    id: "pet_dander_cat",
    name: "Cat Allergy",
    category: "pet / indoor environmental",
    commonTriggers: ["Fel d 1 protein from saliva, skin flakes and sebaceous glands"],
    symptoms: ["sneezing", "itchy eyes", "wheezing", "asthma flares", "skin itching"],
    standardConsensus: ["exposure reduction", "HEPA filtration", "antihistamines", "nasal sprays", "allergen immunotherapy in selected patients"],
    peptideRelevance: ["Fel d 1 peptide immunotherapy", "Cat-PAD"],
    evidenceLevel: "human clinical studies, mixed but notable",
    dashboardPositioning: "Cat allergy is one of the clearest examples of allergen-derived peptide immunotherapy research.",
    caution: "Not a general pet allergy cure; results depend on allergen profile and protocol."
  },
  {
    id: "pet_dander_dog",
    name: "Dog Allergy",
    category: "pet / indoor environmental",
    commonTriggers: ["Can f proteins", "dander", "saliva", "urine proteins"],
    symptoms: ["rhinitis", "itchy eyes", "asthma symptoms", "skin reactions"],
    standardConsensus: ["exposure management", "cleaning", "HEPA filtration", "antihistamines", "nasal steroids"],
    peptideRelevance: ["limited peptide immunotherapy research compared with cat allergy"],
    evidenceLevel: "low / emerging",
    dashboardPositioning: "Dog allergy is common, but peptide-specific research is less mature than Fel d 1 cat allergy work.",
    caution: "Do not overstate peptide relevance."
  },
  {
    id: "mould_allergy",
    name: "Mould / Fungal Spore Allergy",
    category: "environmental / indoor-outdoor",
    commonTriggers: ["Alternaria", "Aspergillus", "Cladosporium", "Penicillium"],
    symptoms: ["nasal congestion", "cough", "wheezing", "asthma worsening", "sinus irritation"],
    standardConsensus: ["humidity control", "mould remediation", "antihistamines", "nasal steroids", "asthma control"],
    peptideRelevance: ["minimal direct peptide therapy evidence"],
    evidenceLevel: "very low",
    dashboardPositioning: "Important allergy category, but peptide therapy is not currently a meaningful evidence-backed intervention.",
    caution: "Focus on environmental control and conventional allergy/asthma management."
  },
  {
    id: "peanut_allergy",
    name: "Peanut Allergy",
    category: "food",
    commonTriggers: ["peanut proteins Ara h 1", "Ara h 2", "Ara h 3", "Ara h 6"],
    symptoms: ["hives", "swelling", "vomiting", "wheezing", "anaphylaxis"],
    standardConsensus: ["strict avoidance", "label vigilance", "epinephrine auto-injector", "oral immunotherapy in selected cases"],
    peptideRelevance: ["PVX108 peanut peptide immunotherapy"],
    evidenceLevel: "human Phase 1; Phase 2 ongoing/reported programme",
    dashboardPositioning: "One of the strongest food-allergy peptide research areas. PVX108 uses synthetic peanut protein fragments designed to induce tolerance with lower acute reaction risk.",
    caution: "Not a retail peptide; must be positioned as clinical-trial immunotherapy."
  },
  {
    id: "tree_nut_allergy",
    name: "Tree Nut Allergy",
    category: "food",
    commonTriggers: ["cashew", "walnut", "almond", "hazelnut", "pistachio", "Brazil nut"],
    symptoms: ["oral itching", "hives", "GI distress", "wheezing", "anaphylaxis"],
    standardConsensus: ["avoidance", "epinephrine", "allergist diagnosis", "cross-reactivity assessment"],
    peptideRelevance: ["limited allergen-epitope research"],
    evidenceLevel: "low",
    dashboardPositioning: "High clinical importance, but peptide therapy evidence is not yet mature.",
    caution: "Do not group with peanut peptide evidence."
  },
  {
    id: "shellfish_allergy",
    name: "Shellfish Allergy",
    category: "food",
    commonTriggers: ["crustaceans", "shrimp", "crab", "lobster", "molluscs"],
    symptoms: ["hives", "angioedema", "vomiting", "respiratory symptoms", "anaphylaxis"],
    standardConsensus: ["avoidance", "epinephrine for severe allergy", "medical diagnosis"],
    peptideRelevance: ["tropomyosin epitope research"],
    evidenceLevel: "early / preclinical",
    dashboardPositioning: "Relevant for future epitope-based allergy research, but not a near-term peptide therapy category.",
    caution: "Shellfish allergy can be severe and lifelong."
  },
  {
    id: "milk_egg_allergy",
    name: "Milk / Egg Allergy",
    category: "food",
    commonTriggers: ["casein", "whey proteins", "ovalbumin", "ovomucoid"],
    symptoms: ["eczema flares", "hives", "vomiting", "wheezing", "anaphylaxis"],
    standardConsensus: ["avoidance", "supervised food challenge", "oral immunotherapy in selected settings"],
    peptideRelevance: ["allergen epitope / tolerance research"],
    evidenceLevel: "early / investigational",
    dashboardPositioning: "Common childhood food allergies with immunotherapy interest, but peptide-specific options remain experimental.",
    caution: "Children may outgrow some milk/egg allergies; diagnosis should be supervised."
  },
  {
    id: "insect_venom_allergy",
    name: "Bee / Wasp Venom Allergy",
    category: "venom",
    commonTriggers: ["bee venom", "wasp venom", "hornet venom"],
    symptoms: ["large local reaction", "systemic reaction", "anaphylaxis"],
    standardConsensus: ["venom immunotherapy", "epinephrine", "avoidance education"],
    peptideRelevance: ["venom allergen peptide/epitope research"],
    evidenceLevel: "standard venom immunotherapy strong; peptide variants investigational",
    dashboardPositioning: "Venom allergy has some of the strongest consensus for immunotherapy as disease-modifying.",
    caution: "Peptide versions are research; standard venom immunotherapy is the clinically established pathway."
  }
];


// ── GLUTEN-RELATED CONDITIONS ────────────────────────────────────────
// Distinguishes between celiac (autoimmune), wheat allergy (IgE), and
// non-celiac gluten sensitivity. Important for compatibility filtering.

export const GLUTEN_RELATED_CONDITIONS = [
  {
    id: "celiac_disease",
    label: "Celiac Disease",
    type: "autoimmune",
    trigger: "gluten from wheat, barley, rye and contaminated oats",
    strictness: "strict_avoidance",
    crossContactRisk: true,
    peptideResearchAngle: ["larazotide acetate", "gut barrier research", "KPV theoretical inflammation modulation"],
    evidenceNote: "Larazotide is a gut-permeability peptide candidate studied in celiac disease, but clinical development has been mixed."
  },
  {
    id: "wheat_allergy",
    label: "Wheat Allergy",
    type: "IgE-mediated allergy",
    trigger: "wheat proteins",
    strictness: "allergy_level_avoidance",
    crossContactRisk: true,
    peptideResearchAngle: ["allergen epitope immunotherapy research"],
    evidenceNote: "Different from celiac; acute allergic reaction risk may exist."
  },
  {
    id: "non_celiac_gluten_sensitivity",
    label: "Non-Celiac Gluten Sensitivity",
    type: "intolerance / sensitivity",
    trigger: "gluten or wheat components; sometimes FODMAP-related",
    strictness: "symptom_guided",
    crossContactRisk: "variable",
    peptideResearchAngle: ["gut barrier support research", "anti-inflammatory peptides theoretical"],
    evidenceNote: "No strong peptide consensus; track symptoms and food response."
  }
];


// ── RECOMMENDATION PRIORITY RULES ───────────────────────────────────
// Defines the order in which compatibility constraints are applied
// when assessing a peptide against a user's health/lifestyle profile.

export const RECOMMENDATION_RULES = {
  orderOfPriority: [
    "medical_safety",
    "allergy_or_anaphylaxis_risk",
    "autoimmune_cross_contact_risk",
    "religious_or_cultural_compliance",
    "ethical_lifestyle_compliance",
    "nutritional_adequacy",
    "user_preference"
  ],
  logic:
    "A peptide or intervention can only be marked compatible if it passes both the evidence screen and the user's constraint screen.",
  example:
    "A synthetic peptide may be medically relevant, but if supplied in porcine gelatin capsules, it should be flagged as not halaal, not kosher, and not vegan unless an alternative formulation exists."
};


// ── COMPATIBILITY BADGES ─────────────────────────────────────────────
// UI labels to display on peptide cards when user profile flags apply.
// Intended for the future Compatibility Filter / Profile feature.

export const COMPATIBILITY_BADGES = [
  "Celiac-safe pending certification",
  "Gluten-free formulation required",
  "Halaal review required",
  "Vegan formulation required",
  "Gelatin source unknown",
  "Alcohol carrier check",
  "Synthetic peptide source preferred",
  "Food allergy cross-contact warning",
  "Low evidence / experimental",
  "Clinical-trial only"
];


// ── INTEGRATION NOTES ───────────────────────────────────────────────
// Future dashboard features this data enables:
//
// 1. COMPATIBILITY FILTER
//    - User sets profile: celiac / halaal / vegan / food allergies
//    - Peptide cards show relevant COMPATIBILITY_BADGES
//    - Flag formulation concerns (gelatin capsules, alcohol carriers)
//
// 2. CONDITION EXPLORER (allergy tab)
//    - Browse ALLERGY_TARGETS by category (food / environmental / venom)
//    - See standard care consensus alongside peptide research angles
//    - Clear separation between allergen-specific peptide immunotherapy
//      (e.g. PVX108, Cat-PAD) and general research peptides
//
// 3. GLUTEN / DIETARY PROFILE
//    - Distinguish celiac (strict), wheat allergy (IgE), and NCGS
//    - Surface larazotide relevance for celiac users
//    - Apply strictness levels to compatibility scoring
