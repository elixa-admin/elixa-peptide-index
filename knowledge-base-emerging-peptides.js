// ═══════════════════════════════════════════════════════════════════
// ELIXA PEPTIDE INDEX — EMERGING PEPTIDE INTELLIGENCE DATASET
// Generated: April 2026
// Purpose: Early-signal, experimental, and outlier peptides with
//          emergingSignalScore + hypeRiskScore classification.
//          Powers future "Emerging Watch" or "Signal vs Hype" feature.
// ═══════════════════════════════════════════════════════════════════

// ── OUTPUT SCHEMA (for reference / future GPT generation) ────────────
// Each peptide entry follows this mandatory structure:
//
// {
//   peptideId: "",
//   peptide: "",
//   category: "metabolic | neuro | immune | longevity | repair | other",
//   emergingSignalScore: 1-10,   // strength of early evidence + mechanistic plausibility
//   hypeRiskScore: 1-10,         // likelihood of overstatement in public/biohacking communities
//   primaryTargets: [],
//   secondaryTargets: [],
//   mechanisms: [],
//   bestFitConditions: [],
//   evidence: {
//     level: "",
//     humanData: "",
//     preclinicalData: "",
//     replicationStrength: ""
//   },
//   whyItMatters: "",
//   whatMakesItOutlier: "",
//   controversy: "",
//   misuseOrOverclaimRisk: "",
//   regulatoryStatus: "approved | experimental | research-only | banned-context",
//   dashboardPositioning: "",
//   tags: []
// }


export const EMERGING_PEPTIDE_DATASET = {
  version: "1.0",
  description: "Emerging peptide intelligence dataset focused on early-signal, experimental, and outlier peptides with relevance to chronic conditions and complex biology.",
  lastUpdated: "2026-04-25",

  peptides: [
    {
      peptideId: "mots_c",
      peptide: "MOTS-c",
      category: "metabolic / longevity",
      emergingSignalScore: 8,
      hypeRiskScore: 9,
      primaryTargets: ["insulin resistance", "metabolic dysfunction", "age-related decline"],
      secondaryTargets: ["exercise performance", "mitochondrial health"],
      mechanisms: [
        "mitochondrial-derived peptide",
        "AMPK activation",
        "metabolic homeostasis regulation"
      ],
      bestFitConditions: ["type_2_diabetes", "obesity", "age-related metabolic decline"],
      evidence: {
        level: "preclinical + limited human exploratory",
        humanData: "very limited",
        preclinicalData: "strong in animal metabolic models",
        replicationStrength: "moderate"
      },
      whyItMatters: "Direct link between mitochondrial signalling and systemic metabolism.",
      whatMakesItOutlier: "Encoded in mitochondrial DNA rather than nuclear genome.",
      controversy: "High adoption in longevity and performance communities without strong human validation.",
      misuseOrOverclaimRisk: "Often marketed as fat loss or anti-aging solution.",
      regulatoryStatus: "experimental / banned in sport contexts",
      dashboardPositioning: "High-interest metabolic signalling peptide with strong hype-to-evidence gap.",
      tags: ["longevity", "mitochondria", "metabolic"]
    },

    {
      peptideId: "epitalon",
      peptide: "Epitalon",
      category: "longevity",
      emergingSignalScore: 7,
      hypeRiskScore: 9,
      primaryTargets: ["aging", "circadian rhythm", "telomere biology"],
      secondaryTargets: ["cardiovascular risk", "sleep regulation"],
      mechanisms: [
        "telomerase activation",
        "pineal signalling",
        "circadian rhythm modulation"
      ],
      bestFitConditions: ["age-related decline", "sleep disorders"],
      evidence: {
        level: "small human cohorts + preclinical",
        humanData: "limited regional studies",
        preclinicalData: "moderate",
        replicationStrength: "low to moderate"
      },
      whyItMatters: "One of few peptides targeting telomere biology.",
      whatMakesItOutlier: "Combines ageing, sleep, and circadian regulation in a single mechanism.",
      controversy: "Longevity claims exceed global validation.",
      misuseOrOverclaimRisk: "Frequently marketed as life-extension compound.",
      regulatoryStatus: "experimental",
      dashboardPositioning: "Longevity research peptide with niche but persistent signal.",
      tags: ["aging", "telomeres", "sleep"]
    },

    {
      peptideId: "ara290",
      peptide: "ARA-290 / Cibinetide",
      category: "neuro / inflammatory",
      emergingSignalScore: 8,
      hypeRiskScore: 6,
      primaryTargets: ["neuropathic pain", "small fiber neuropathy"],
      secondaryTargets: ["inflammatory tissue damage"],
      mechanisms: [
        "innate repair receptor activation",
        "anti-inflammatory signalling",
        "neuroprotection"
      ],
      bestFitConditions: ["sarcoidosis neuropathy", "diabetic neuropathy"],
      evidence: {
        level: "phase 2 human trials",
        humanData: "positive neuropathy trial signals",
        preclinicalData: "strong",
        replicationStrength: "moderate"
      },
      whyItMatters: "One of the few peptides with meaningful human neuropathy data.",
      whatMakesItOutlier: "Separates repair signalling from erythropoietin pathways.",
      controversy: "Under-recognised relative to evidence strength.",
      misuseOrOverclaimRisk: "Sometimes generalised incorrectly to all inflammation.",
      regulatoryStatus: "clinical-stage",
      dashboardPositioning: "High-quality signal peptide for neuroinflammation.",
      tags: ["neuropathy", "inflammation", "repair"]
    },

    {
      peptideId: "dihexa",
      peptide: "Dihexa",
      category: "neuro",
      emergingSignalScore: 9,
      hypeRiskScore: 10,
      primaryTargets: ["cognitive decline", "neurodegeneration"],
      secondaryTargets: ["memory formation"],
      mechanisms: [
        "HGF/c-Met pathway activation",
        "synaptogenesis stimulation"
      ],
      bestFitConditions: ["alzheimers", "cognitive impairment"],
      evidence: {
        level: "preclinical",
        humanData: "none",
        preclinicalData: "strong synaptogenesis effects",
        replicationStrength: "low"
      },
      whyItMatters: "Potentially one of the most potent synapse-forming compounds studied.",
      whatMakesItOutlier: "Demonstrates unusually strong synaptogenic activity in animal models.",
      controversy: "No human safety data whatsoever.",
      misuseOrOverclaimRisk: "Marketed as cognitive enhancer despite lack of human trials.",
      regulatoryStatus: "research-only",
      dashboardPositioning: "High-risk, high-theoretical-upside neuro peptide.",
      tags: ["cognition", "alzheimers", "nootropics"]
    },

    {
      peptideId: "kisspeptin10",
      peptide: "Kisspeptin-10",
      category: "endocrine / reproductive",
      emergingSignalScore: 8,
      hypeRiskScore: 6,
      primaryTargets: ["hypogonadism", "fertility"],
      secondaryTargets: ["libido", "hormonal signalling"],
      mechanisms: [
        "GnRH stimulation",
        "HPG axis regulation"
      ],
      bestFitConditions: ["fertility disorders", "low testosterone signalling"],
      evidence: {
        level: "human clinical studies exist",
        humanData: "moderate",
        preclinicalData: "strong",
        replicationStrength: "moderate"
      },
      whyItMatters: "Targets upstream hormonal signalling instead of replacing hormones.",
      whatMakesItOutlier: "Works at hypothalamic level rather than peripheral hormone delivery.",
      controversy: "Often compared incorrectly to TRT.",
      misuseOrOverclaimRisk: "Positioned as libido enhancer in consumer markets.",
      regulatoryStatus: "clinical / research context",
      dashboardPositioning: "Endocrine signalling peptide with real human backing.",
      tags: ["fertility", "testosterone", "hormones"]
    }
  ],

  scoringModel: {
    emergingSignalScore: "Strength of early evidence + mechanistic plausibility (1–10)",
    hypeRiskScore: "Likelihood of overstatement in public / biohacking communities (1–10)"
  },

  // Classification quadrants for future "Signal vs Hype" visualisation
  classification: {
    highSignal_lowHype:  ["ara290"],
    highSignal_highHype: ["mots_c", "kisspeptin10"],
    lowSignal_highHype:  ["dihexa", "epitalon"]
  }
};


// ── INTEGRATION NOTES ───────────────────────────────────────────────
// Future dashboard features this data enables:
//
// 1. EMERGING WATCH / SIGNAL VS HYPE QUADRANT
//    - Scatter plot: emergingSignalScore (x) vs hypeRiskScore (y)
//    - Quadrants: "Worth Watching" / "Overhyped" / "Overlooked" / "Too Early"
//    - Click any dot → full emerging peptide profile
//
// 2. CONDITION EXPLORER INTEGRATION
//    - bestFitConditions links to IMMUNE_DISEASE_TARGETS entries
//    - Surfaces relevant emerging peptides alongside established ones
//
// 3. DASHBOARD BADGE
//    - "🔭 Emerging" badge on sidebar buttons for these peptides
//    - hypeRiskScore ≥ 8 → "⚠ High Hype Risk" warning in profile
//
// 4. GPT GENERATION PIPELINE
//    - Use the schema above to prompt GPT for additional peptide entries
//    - Target: 20–30 emerging peptides total for a full watch list
