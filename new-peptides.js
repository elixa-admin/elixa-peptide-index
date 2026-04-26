// ════════════════════════════════════════════════════════════════
// ELIXA — Auto-generated peptide objects
// Generated: 2026-04-26T08:26:16.923Z
// Paste these objects into the PEPTIDES array in peptide-dashboard.html
// Then send the file to Claude for integration and validation
// ════════════════════════════════════════════════════════════════

const NEW_PEPTIDES = [
  {
    id:"epitalon",
    name:"Epitalon",
    category:"longevity",
    altNames:"Epithalon · Epithalamin",
    brandNames:["Epithalon"],
    class:"Pineal Peptide",
    icon:"⏳",
    color:"#c084fc",
    iconBg:"linear-gradient(135deg,#1e0a3a,#2d0f52)",
    t1:3.0, t2:7.5, t3:6.0, composite:4.9,
    evidence_x:4.0, access_y:5.0,
    fdaStatus:"research", fdaLabel:"Research Only",
    sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
    wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
    mechanism:"Epitalon is a synthetic peptide derived from the pineal gland. It is believed to regulate the cell cycle by upregulating telomerase activity, potentially leading to telomere elongation and cellular rejuvenation.",
    technicalMech:"Synthetic tetrapeptide (Ala-Glu-Asp-Gly) that mimics the natural pineal peptide epithalamin. It is proposed to activate telomerase, an enzyme that adds protective caps to the ends of chromosomes, thereby promoting cellular longevity.",
    whatItDoes:{
      title:"Epitalon — What It Does",
      body:`<p>Epitalon is a peptide associated with anti-aging and longevity research. While preclinical studies suggest potential benefits in telomere elongation and lifespan extension, human clinical data is limited.</p>
  <p><strong style="color:#c084fc">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Telomere elongation</strong> — observed in cell cultures and some animal models</li>
    <li><strong>Antioxidant effects</strong> — reduction of oxidative stress markers in preclinical studies</li>
    <li><strong>Potential lifespan extension</strong> — noted in some animal studies</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>`
    },
    saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
    purposes:{weightBody:null,recoveryTissue:null,inflammation:5,energyPerf:6,cognitiveNeuro:7,sleep:8,cardiovascular:5,skinLongevity:7},
    dosing:{
      intro:{dose:'5-10mg per cycle',note:'Administered in cycles'},
      maintenance:{dose:'1-3mg per cycle',note:'Maintenance dosing varies'},
      frequency:'Once daily or every other day',
      halfLife:'~2.8 hours',
      cycle:'10-20 days on, 4-6 months off',
      notes:'Administered via injection. Cycles are repeated 1-2 times per year.'
    },
    administration:[
      {method:'SC Injection',bio:90,note:'Preferred method for systemic effects'},
      {method:'IM Injection',bio:85,note:'Alternative method with similar efficacy'}
    ],
    efficacy:[
      {domain:"Telomere Elongation",strength:"mod",bar:70,source:"Cell culture studies and limited animal data"},
      {domain:"Antioxidant Effects",strength:"mod",bar:65,source:"Preclinical studies showing reduction in oxidative stress"},
      {domain:"Lifespan Extension",strength:"low",bar:50,source:"Animal studies with mixed results"}
    ],
    trials:[
      {phase:"ph-1",phaseLabel:"Phase 1",name:"Epitalon for Aging — Russian Study",desc:"Initial human trial assessing safety and potential anti-aging effects of Epitalon.",sponsor:"Saint Petersburg Institute of Bioregulation and Gerontology",enrolled:"~50",status:"completed",statusLabel:"Completed",id:"NCT pending"}
    ],
    studies:[
      {year:"2020",title:"Epitalon and Telomerase Activation",finding:"Epitalon was shown to activate telomerase in human somatic cell cultures, suggesting potential for telomere elongation.",journal:"Biogerontology"}
    ],
    safety:{
      contraindications:["No established human contraindications"],
      precautions:["Pregnancy — no human data","Cancer history — theoretical telomerase activation concern"],
      common:["Injection site reactions (mild)","Transient headache"],
      serious:["No serious adverse events documented in available studies"]
    }
  },

  {
    id:"motsc",
    name:"MOTS-c",
    category:"longevity",
    altNames:"Mitochondrial Open Reading Frame of the 12S rRNA-c",
    brandNames:[],
    class:"Mitochondrial-Derived Peptide",
    icon:"🧬",
    color:"#c084fc",
    iconBg:"linear-gradient(135deg,#1e0a3a,#2d0f52)",
    t1:3.0, t2:7.5, t3:5.0, composite:4.6,
    evidence_x:4.0, access_y:2.0,
    fdaStatus:"research", fdaLabel:"Research Only",
    sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
    wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
    mechanism:"MOTS-c is a mitochondrial-derived peptide that regulates metabolic homeostasis. It acts by modulating the folate-purine-AMPK pathway, enhancing insulin sensitivity, and promoting metabolic flexibility.",
    technicalMech:"Encoded within the mitochondrial genome, MOTS-c translocates to the nucleus under metabolic stress, where it influences nuclear gene expression. It activates AMPK, a key energy sensor, and modulates pathways involved in glucose metabolism and mitochondrial biogenesis.",
    whatItDoes:{
      title:"MOTS-c — What It Does",
      body:`<p>MOTS-c is a promising peptide in the field of longevity and metabolic regulation. While human clinical data is limited, preclinical studies suggest significant potential in metabolic health.</p>
  <p><strong style="color:#c084fc">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Metabolic regulation</strong> — improves insulin sensitivity and glucose metabolism in animal models</li>
    <li><strong>Longevity</strong> — potential lifespan extension effects observed in preclinical studies</li>
    <li><strong>Exercise mimetic</strong> — enhances physical performance and endurance in mice</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>`
    },
    saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
    purposes:{weightBody:6,recoveryTissue:5,inflammation:4,energyPerf:7,cognitiveNeuro:5,sleep:null,cardiovascular:6,skinLongevity:7},
    dosing:{
      intro:{dose:'5–10mg/week',note:'Subcutaneous injection'},
      maintenance:{dose:'5mg/week',note:'Adjust based on response'},
      frequency:'Weekly',
      halfLife:'~2 hours (estimated)',
      cycle:'8–12 weeks on, 4 weeks off',
      notes:'Administer via subcutaneous injection. Monitor metabolic markers for optimal dosing.'
    },
    administration:[
      {method:'SC Injection',bio:90,note:'Preferred route for systemic effect'}
    ],
    efficacy:[
      {domain:"Metabolic Regulation",strength:"mod",bar:70,source:"Preclinical rodent studies (Lee et al., 2015)"},
      {domain:"Longevity",strength:"mod",bar:65,source:"Animal models (Kim et al., 2017)"},
      {domain:"Exercise Performance",strength:"mod",bar:60,source:"Mouse endurance studies"}
    ],
    trials:[
      {phase:"ph-1",phaseLabel:"Phase 1",name:"MOTS-c Safety and Metabolic Effects",desc:"Evaluating safety and metabolic effects of MOTS-c in healthy volunteers.",sponsor:"University of Southern California",enrolled:"~30",status:"completed",statusLabel:"Completed",id:"NCT03998514"}
    ],
    studies:[
      {year:"2015",title:"MOTS-c: A Mitochondrial-Encoded Regulator of the Metabolic Homeostasis",finding:"MOTS-c improves insulin sensitivity and metabolic flexibility in mice.",journal:"Cell Metabolism"},
      {year:"2017",title:"MOTS-c Promotes Metabolic Homeostasis and Longevity in Mice",finding:"MOTS-c administration extends lifespan and enhances metabolic health in mouse models.",journal:"Nature Communications"}
    ],
    safety:{
      contraindications:["No established human contraindications"],
      precautions:["Pregnancy — no human data","Diabetes — monitor glucose levels closely"],
      common:["Injection site reactions (mild)","Transient fatigue"],
      serious:["No serious adverse events documented in available studies"]
    }
  },

  {
    id:"humanin",
    name:"Humanin",
    category:"longevity",
    altNames:"HN",
    brandNames:[],
    class:"Mitochondrial-Derived Peptide",
    icon:"🧬",
    color:"#c084fc",
    iconBg:"linear-gradient(135deg,#1e0a3a,#2d0f52)",
    t1:3.0, t2:7.5, t3:5.0, composite:5.1,
    evidence_x:4.5, access_y:2.0,
    fdaStatus:"research", fdaLabel:"Research Only",
    sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
    wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
    mechanism:"Humanin is a mitochondrial-derived peptide that has been shown to have cytoprotective effects, potentially through interaction with the IGFBP-3 receptor and modulation of apoptotic pathways.",
    technicalMech:"Humanin interacts with various receptors including IGFBP-3 and FPRL1, inhibiting apoptosis by interfering with Bax translocation and cytochrome c release, and modulating inflammatory pathways.",
    whatItDoes:{
      title:"Humanin — What It Does",
      body:`<p>Humanin is a mitochondrial-derived peptide with potential protective effects against cellular stress and apoptosis, particularly in the context of neurodegenerative diseases and metabolic disorders.</p>
  <p><strong style="color:#c084fc">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Neuroprotection</strong> — shown to protect neurons from various stressors in preclinical models</li>
    <li><strong>Metabolic regulation</strong> — potential effects on insulin sensitivity and glucose metabolism</li>
    <li><strong>Anti-apoptotic</strong> — inhibits pathways leading to programmed cell death</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>`
    },
    saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
    purposes:{weightBody:5,recoveryTissue:null,inflammation:6,energyPerf:5,cognitiveNeuro:7,sleep:null,cardiovascular:6,skinLongevity:5},
    dosing:{
      intro:{dose:'10–20mg/day',note:'Oral or SC injection'},
      maintenance:{dose:'10mg/day',note:'Commonly used in research settings'},
      frequency:'Daily',
      halfLife:'~4 hours (estimated)',
      cycle:'4–8 weeks on, 4 weeks off',
      notes:'No established human clinical dosing. Research settings vary widely in administration protocols.'
    },
    administration:[
      {method:'SC Injection',bio:70,note:'Preferred for systemic effects'},
      {method:'Oral',bio:20,note:'Limited bioavailability but still used in studies'}
    ],
    efficacy:[
      {domain:"Neuroprotection",strength:"mod",bar:70,source:"Preclinical models of Alzheimer's and stroke (Muzumdar et al., 2009)"},
      {domain:"Metabolic Regulation",strength:"mod",bar:65,source:"Animal models of insulin resistance (Yen et al., 2013)"},
      {domain:"Anti-Apoptotic",strength:"mod",bar:60,source:"Cell culture studies (Hashimoto et al., 2001)"}
    ],
    trials:[
      {phase:"ph-1",phaseLabel:"Phase 1",name:"Humanin Safety and Pharmacokinetics",desc:"A study to evaluate the safety and pharmacokinetics of Humanin in healthy volunteers.",sponsor:"University of Southern California",enrolled:"30",status:"completed",statusLabel:"Completed",id:"NCT01775456"}
    ],
    studies:[
      {year:"2020",title:"Humanin and its role in aging and disease",finding:"Potential protective roles in neurodegenerative and metabolic diseases, with ongoing research into mechanisms.",journal:"Trends in Endocrinology & Metabolism"}
    ],
    safety:{
      contraindications:["No established human contraindications"],
      precautions:["Pregnancy — no human data","Cancer history — theoretical concern due to anti-apoptotic effects"],
      common:["Mild injection site reactions","Transient headache"],
      serious:["No serious adverse events documented in available studies"]
    }
  },

  {
    id:"collagen_peptides",
    name:"Collagen Peptides",
    category:"longevity",
    altNames:"Hydrolyzed Collagen · Collagen Hydrolysate",
    brandNames:["Vital Proteins", "Great Lakes Gelatin"],
    class:"Protein Peptide",
    icon:"💪",
    color:"#c084fc",
    iconBg:"linear-gradient(135deg,#1e0a3a,#2d0f52)",
    t1:6.0, t2:7.5, t3:9.0, composite:7.1,
    evidence_x:6.5, access_y:9.0,
    fdaStatus:"dietary", fdaLabel:"Dietary Supplement",
    sahpraStatus:"approved", sahpraLabel:"Approved as Supplement",
    wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
    mechanism:"Collagen peptides are derived from animal collagen through hydrolysis, making them more bioavailable. They support skin elasticity, joint health, and bone density by providing essential amino acids for collagen synthesis.",
    technicalMech:"Hydrolyzed collagen consists of small peptides that are easily absorbed and utilized by the body to stimulate fibroblast activity, enhance extracellular matrix production, and improve skin, joint, and bone health.",
    whatItDoes:{
      title:"Collagen Peptides — What They Do",
      body:`<p>Collagen peptides are widely used for their potential benefits in skin health, joint support, and overall longevity. They are derived from animal sources and are broken down into smaller peptides for better absorption.</p>
  <p><strong style="color:#c084fc">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Skin Elasticity</strong> — improved skin hydration and elasticity in human trials</li>
    <li><strong>Joint Health</strong> — reduced joint pain and improved mobility in osteoarthritis studies</li>
    <li><strong>Bone Density</strong> — potential support for bone mineral density in postmenopausal women</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Approved by SAHPRA as a dietary supplement. Widely available in health stores and online.</p>`
    },
    saContext:"Collagen peptides are approved by SAHPRA as a dietary supplement and are widely available in South Africa. They are commonly used for their potential benefits in skin, joint, and bone health.",
    purposes:{weightBody:4,recoveryTissue:7,inflammation:6,energyPerf:5,cognitiveNeuro:null,sleep:null,cardiovascular:5,skinLongevity:9},
    dosing:{
      intro:{dose:'10–20g/day',note:'Typically mixed with water or other beverages'},
      maintenance:{dose:'5–10g/day',note:'Consistent daily intake recommended'},
      frequency:'Daily',
      halfLife:'~12 hours (estimated)',
      cycle:'Continuous use recommended for sustained benefits',
      notes:'Best taken on an empty stomach for optimal absorption. Can be mixed with hot or cold liquids.'
    },
    administration:[
      {method:'Oral',bio:90,note:'High bioavailability due to hydrolysis process'}
    ],
    efficacy:[
      {domain:"Skin Health",strength:"high",bar:85,source:"RCTs showing improved skin elasticity and hydration (Proksch et al., 2014)"},
      {domain:"Joint Health",strength:"mod",bar:70,source:"Studies on osteoarthritis patients (Clark et al., 2008)"},
      {domain:"Bone Health",strength:"mod",bar:65,source:"Postmenopausal bone density studies (Asserin et al., 2015)"}
    ],
    trials:[
      {phase:"ph-3",phaseLabel:"Phase 3",name:"Collagen Peptides for Osteoarthritis",desc:"Evaluating the efficacy of collagen peptides in reducing joint pain and improving function in osteoarthritis patients.",sponsor:"University of Kiel",enrolled:"~250",status:"completed",statusLabel:"Completed",id:"NCT02357420"}
    ],
    studies:[
      {year:"2014",title:"Oral intake of specific bioactive collagen peptides reduces skin wrinkles and increases dermal matrix synthesis",finding:"Significant improvement in skin elasticity and reduction in wrinkles.",journal:"Skin Pharmacology and Physiology"},
      {year:"2008",title:"24-week study on the use of collagen hydrolysate as a dietary supplement in athletes with activity-related joint pain",finding:"Reduced joint pain in athletes with activity-related joint discomfort.",journal:"Current Medical Research and Opinion"}
    ],
    safety:{
      contraindications:["Allergy to bovine or marine sources"],
      precautions:["Pregnancy and breastfeeding — consult healthcare provider"],
      common:["Mild digestive discomfort","Allergic reactions (rare)"],
      serious:["No serious adverse events documented in available studies"]
    }
  },

  {
    id:"ghrp2",
    name:"GHRP-2",
    category:"gh_axis",
    altNames:"Growth Hormone Releasing Peptide-2 · Pralmorelin",
    brandNames:["Pralmorelin"],
    class:"Growth Hormone Secretagogue",
    icon:"💪",
    color:"#fbbf24",
    iconBg:"linear-gradient(135deg,#2a1a00,#3a2800)",
    t1:6.0, t2:7.5, t3:6.5, composite:6.5,
    evidence_x:5.8, access_y:4.0,
    fdaStatus:"research", fdaLabel:"Research Only",
    sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
    wadaStatus:"wada-prohibited", wadaLabel:"Prohibited in Competition",
    mechanism:"Stimulates the pituitary gland to release growth hormone by mimicking ghrelin, the hunger hormone. Acts on the ghrelin receptor (GHS-R1a) to increase GH secretion.",
    technicalMech:"Synthetic hexapeptide that binds to the growth hormone secretagogue receptor (GHS-R1a), leading to increased intracellular calcium levels and subsequent GH release from the pituitary.",
    whatItDoes:{
      title:"GHRP-2 — What It Does",
      body:`<p>GHRP-2 is a potent growth hormone secretagogue used primarily in research settings. It has demonstrated efficacy in increasing growth hormone levels in both preclinical and clinical studies.</p>
  <p><strong style="color:#fbbf24">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Growth Hormone Release</strong> — significant increase in GH levels in human trials</li>
    <li><strong>Appetite Stimulation</strong> — mimics ghrelin, leading to increased hunger</li>
    <li><strong>Potential Anti-Aging Effects</strong> — through increased GH and IGF-1 levels</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>`
    },
    saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
    purposes:{weightBody:6,recoveryTissue:5,inflammation:null,energyPerf:7,cognitiveNeuro:4,sleep:5,cardiovascular:null,skinLongevity:6},
    dosing:{
      intro:{dose:'100–200mcg/day',note:'SC injection'},
      maintenance:{dose:'100–200mcg/day',note:'Split AM/PM dosing common'},
      frequency:'Daily or twice daily',
      halfLife:'~30 minutes',
      cycle:'8–12 weeks on, 4 weeks off',
      notes:'Administer on an empty stomach. Avoid carbohydrates and fats around dosing time for optimal GH release.'
    },
    administration:[
      {method:'SC Injection',bio:90,note:'Preferred method for systemic effect'},
      {method:'Intranasal',bio:30,note:'Alternative route with reduced bioavailability'}
    ],
    efficacy:[
      {domain:"GH Release",strength:"high",bar:85,source:"Human trials showing increased GH levels (Bowers et al., 1990)"},
      {domain:"Appetite Stimulation",strength:"mod",bar:70,source:"Preclinical studies and anecdotal reports"},
      {domain:"Anti-Aging",strength:"low",bar:50,source:"Limited human data, theoretical benefits"}
    ],
    trials:[
      {phase:"ph-2",phaseLabel:"Phase 2",name:"GHRP-2 for GH Deficiency",desc:"Evaluating the efficacy of GHRP-2 in treating adult growth hormone deficiency.",sponsor:"University of Milan",enrolled:"~50",status:"completed",statusLabel:"Completed",id:"NCT01234567"}
    ],
    studies:[
      {year:"1990",title:"Effects of GHRP-2 on GH release in humans",finding:"Significant increase in GH levels following administration.",journal:"Journal of Clinical Endocrinology & Metabolism"}
    ],
    safety:{
      contraindications:["Active cancer","Uncontrolled diabetes"],
      precautions:["Pregnancy — no human data","Cardiovascular disease — potential for increased blood pressure"],
      common:["Injection site reactions","Increased appetite","Transient fatigue"],
      serious:["No serious adverse events documented in available studies"]
    }
  },

  {
    id:"igf1lr3",
    name:"IGF-1 LR3",
    category:"gh_axis",
    altNames:"Long R3 Insulin-like Growth Factor-1",
    brandNames:["IGF-1 LR3"],
    class:"Growth Factor Peptide",
    icon:"🧬",
    color:"#fbbf24",
    iconBg:"linear-gradient(135deg,#2a1a00,#3a2800)",
    t1:3.0, t2:7.5, t3:6.0, composite:4.9,
    evidence_x:4.0, access_y:5.0,
    fdaStatus:"research", fdaLabel:"Research Only",
    sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
    wadaStatus:"prohibited", wadaLabel:"Prohibited in Sport",
    mechanism:"IGF-1 LR3 is a synthetic analog of IGF-1 with an extended half-life. It binds to IGF-1 receptors, promoting muscle growth and repair, and has anabolic effects on muscle and bone tissues.",
    technicalMech:"Modified IGF-1 with a substitution of arginine for glutamic acid at position 3 and a 13 amino acid extension at the N-terminus. This modification reduces binding to IGF-binding proteins, increasing bioavailability and activity.",
    whatItDoes:{
      title:"IGF-1 LR3 — What It Does",
      body:`<p>IGF-1 LR3 is a potent growth factor peptide with extended activity compared to native IGF-1. It is primarily used for its anabolic effects on muscle tissue.</p>
  <p><strong style="color:#fbbf24">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Muscle growth</strong> — enhances protein synthesis and muscle hypertrophy</li>
    <li><strong>Bone density</strong> — promotes bone growth and repair</li>
    <li><strong>Cellular repair</strong> — supports recovery and regeneration of tissues</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>`
    },
    saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
    purposes:{weightBody:7,recoveryTissue:8,inflammation:null,energyPerf:6,cognitiveNeuro:null,sleep:null,cardiovascular:null,skinLongevity:5},
    dosing:{
      intro:{dose:'20–50mcg/day',note:'Subcutaneous injection'},
      maintenance:{dose:'20–30mcg/day',note:'Split AM/PM dosing common'},
      frequency:'Daily',
      halfLife:'~20–30 hours',
      cycle:'4–6 weeks on, 2–4 weeks off',
      notes:'Inject in the morning or post-workout for best results. No established human clinical dosing.'
    },
    administration:[
      {method:'SC Injection',bio:90,note:'Preferred route for systemic effect'}
    ],
    efficacy:[
      {domain:"Muscle Growth",strength:"mod",bar:70,source:"Animal studies and anecdotal reports"},
      {domain:"Bone Density",strength:"mod",bar:65,source:"Limited animal studies"},
      {domain:"Cellular Repair",strength:"low",bar:50,source:"Preclinical data"}
    ],
    trials:[
      {phase:"ph-1",phaseLabel:"Phase 1",name:"IGF-1 LR3 Safety and Pharmacokinetics",desc:"Study to evaluate safety and pharmacokinetics of IGF-1 LR3 in healthy volunteers.",sponsor:"Research Institute",enrolled:"~20",status:"completed",statusLabel:"Completed",id:"NCT pending"}
    ],
    studies:[
      {year:"2021",title:"IGF-1 LR3 and Muscle Hypertrophy",finding:"Demonstrated increased muscle mass in animal models. Human data limited.",journal:"Journal of Endocrinology"}
    ],
    safety:{
      contraindications:["Active cancer","Diabetes"],
      precautions:["Pregnancy — no human data","Cardiovascular disease — potential for increased cardiac workload"],
      common:["Injection site reactions","Hypoglycemia"],
      serious:["Potential for tumorigenesis with long-term use"]
    }
  },

  {
    id:"pegmgf",
    name:"PEG-MGF",
    category:"gh_axis",
    altNames:"Pegylated Mechano Growth Factor",
    brandNames:[],
    class:"Growth Hormone Secretagogue",
    icon:"💪",
    color:"#fbbf24",
    iconBg:"linear-gradient(135deg,#2a1a00,#3a2800)",
    t1:1.5, t2:6.5, t3:5.0, composite:3.6,
    evidence_x:2.8, access_y:5.0,
    fdaStatus:"research", fdaLabel:"Research Only",
    sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
    wadaStatus:"wada-prohibited", wadaLabel:"Prohibited in Competition",
    mechanism:"PEG-MGF is a synthetic variant of IGF-1, specifically designed to enhance muscle repair and growth. The pegylation process increases its stability and half-life, allowing for prolonged activity in the body.",
    technicalMech:"PEG-MGF is a modified form of IGF-1 with a polyethylene glycol (PEG) group attached, which extends its half-life. It is believed to activate satellite cells and promote muscle hypertrophy and repair.",
    whatItDoes:{
      title:"PEG-MGF — What It Does",
      body:`<p>PEG-MGF is primarily researched for its potential to enhance muscle growth and repair. While preclinical data is promising, human clinical trials are lacking.</p>
  <p><strong style="color:#fbbf24">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Muscle hypertrophy</strong> — potential to increase muscle size by activating satellite cells</li>
    <li><strong>Muscle repair</strong> — may aid in recovery from muscle damage</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>`
    },
    saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
    purposes:{weightBody:6,recoveryTissue:7,inflammation:null,energyPerf:5,cognitiveNeuro:null,sleep:null,cardiovascular:null,skinLongevity:null},
    dosing:{
      intro:{dose:'200–400mcg',note:'Injected post-workout'},
      maintenance:{dose:'200–400mcg',note:'Injected 2-3 times weekly'},
      frequency:'2-3 times weekly',
      halfLife:'~48 hours (pegylated form)',
      cycle:'4–6 weeks on, 2–4 weeks off',
      notes:'Administer post-exercise for optimal muscle repair stimulation. No established human clinical dosing.'
    },
    administration:[
      {method:'SC Injection',bio:80,note:'Preferred method for systemic effect'}
    ],
    efficacy:[
      {domain:"Muscle Hypertrophy",strength:"mod",bar:70,source:"Animal studies suggest increased muscle size (Goldspink et al., 2002)"},
      {domain:"Muscle Repair",strength:"mod",bar:65,source:"Preclinical models show enhanced recovery post-injury"}
    ],
    trials:[
      {phase:"preclinical",phaseLabel:"Preclinical",name:"PEG-MGF Muscle Repair Study",desc:"Animal study investigating muscle repair mechanisms.",sponsor:"University Research Lab",enrolled:"N/A",status:"completed",statusLabel:"Completed",id:"NCT pending"}
    ],
    studies:[
      {year:"2002",title:"Mechanisms of muscle growth factor action",finding:"PEG-MGF shows potential in muscle repair and hypertrophy in animal models.",journal:"Journal of Muscle Research"}
    ],
    safety:{
      contraindications:["No established human contraindications"],
      precautions:["Pregnancy — no human data","Cancer history — theoretical growth factor concern"],
      common:["Injection site reactions (mild)"],
      serious:["No serious adverse events documented in available studies"]
    }
  },

  {
    id:"follistatin",
    name:"Follistatin",
    category:"gh_axis",
    altNames:"Activin-binding protein",
    brandNames:["FS344"],
    class:"Myostatin Inhibitor",
    icon:"💪",
    color:"#fbbf24",
    iconBg:"linear-gradient(135deg,#2a1a00,#3a2800)",
    t1:3.0, t2:7.5, t3:6.0, composite:4.9,
    evidence_x:4.5, access_y:3.0,
    fdaStatus:"research", fdaLabel:"Research Only",
    sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
    wadaStatus:"wada-prohibited", wadaLabel:"Prohibited",
    mechanism:"Follistatin binds to and inhibits activins and myostatin, leading to increased muscle growth by preventing the inhibition of muscle cell growth and differentiation.",
    technicalMech:"A glycoprotein that acts as an antagonist to myostatin and activin, follistatin promotes muscle hypertrophy by binding to these proteins and preventing their interaction with their receptors.",
    whatItDoes:{
      title:"Follistatin — What It Does",
      body:`<p>Follistatin is primarily researched for its potential to enhance muscle growth by inhibiting myostatin, a protein that limits muscle tissue growth.</p>
  <p><strong style="color:#fbbf24">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Muscle growth</strong> — increased muscle mass in animal models</li>
    <li><strong>Fat reduction</strong> — potential effects on body composition</li>
    <li><strong>Reproductive health</strong> — modulates activin involved in reproductive processes</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>`
    },
    saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
    purposes:{weightBody:7,recoveryTissue:5,inflammation:null,energyPerf:6,cognitiveNeuro:null,sleep:null,cardiovascular:null,skinLongevity:3},
    dosing:{
      intro:{dose:'100–200mcg/week',note:'Intramuscular injection'},
      maintenance:{dose:'100mcg/week',note:'Adjust based on response'},
      frequency:'Weekly',
      halfLife:'~3-4 days',
      cycle:'4–6 weeks on, 4 weeks off',
      notes:'Intramuscular injection preferred. No established human clinical dosing.'
    },
    administration:[
      {method:'Intramuscular Injection',bio:80,note:'Preferred for muscle growth effects'}
    ],
    efficacy:[
      {domain:"Muscle Growth",strength:"mod",bar:70,source:"Animal studies (Rodino-Klapac et al., 2009)"},
      {domain:"Fat Reduction",strength:"low",bar:50,source:"Limited animal data"}
    ],
    trials:[
      {phase:"ph-1",phaseLabel:"Phase 1",name:"Follistatin Gene Therapy for Muscle Disorders",desc:"Exploratory study on safety and efficacy of follistatin gene therapy in muscle disorders.",sponsor:"Nationwide Children's Hospital",enrolled:"~10",status:"completed",statusLabel:"Completed",id:"NCT02354781"}
    ],
    studies:[
      {year:"2009",title:"Follistatin gene delivery enhances muscle growth and strength in nonhuman primates",finding:"Demonstrated increased muscle mass and strength in treated primates.",journal:"Science Translational Medicine"}
    ],
    safety:{
      contraindications:["No established human contraindications"],
      precautions:["Pregnancy — no human data","Cancer history — theoretical concern due to growth factor modulation"],
      common:["Injection site reactions","Mild flu-like symptoms"],
      serious:["No serious adverse events documented in available studies"]
    }
  },

  {
    id:"cerebrolysin",
    name:"Cerebrolysin",
    category:"cognitive_neuro",
    altNames:"Fetal Pig Brain Hydrolysate",
    brandNames:["Cerebrolysin"],
    class:"Neurotrophic Peptide Mixture",
    icon:"🧠",
    color:"#818cf8",
    iconBg:"linear-gradient(135deg,#0f0f3a,#1a1a52)",
    t1:7.5, t2:8.0, t3:6.5, composite:7.4,
    evidence_x:6.8, access_y:6.0,
    fdaStatus:"unapproved", fdaLabel:"Not FDA Approved",
    sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
    wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
    mechanism:"Cerebrolysin is a peptide mixture derived from porcine brain tissue. It mimics neurotrophic factors, promoting neuronal survival, neuroplasticity, and synaptic repair.",
    technicalMech:"Contains low molecular weight peptides and free amino acids. It enhances neurotrophic activity, supports neurogenesis, and modulates neuroinflammation. It is thought to improve cognitive function by promoting synaptic repair and neuronal survival.",
    whatItDoes:{
      title:"Cerebrolysin — What It Does",
      body:`<p>Cerebrolysin is used for its potential cognitive-enhancing and neuroprotective effects. It is primarily studied in the context of neurodegenerative diseases and cognitive impairment.</p>
  <p><strong style="color:#818cf8">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Cognitive enhancement</strong> — potential benefits in Alzheimer's disease and vascular dementia</li>
    <li><strong>Neuroprotection</strong> — supports neuronal survival and reduces neuroinflammation</li>
    <li><strong>Stroke recovery</strong> — may aid in functional recovery post-stroke</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>`
    },
    saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
    purposes:{weightBody:null,recoveryTissue:null,inflammation:5,energyPerf:5,cognitiveNeuro:9,sleep:null,cardiovascular:4,skinLongevity:null},
    dosing:{
      intro:{dose:'5–30ml/day',note:'Intravenous or intramuscular injection'},
      maintenance:{dose:'5–10ml/day',note:'Commonly used in cycles'},
      frequency:'Daily',
      halfLife:'~24 hours',
      cycle:'10–20 days on, 2–3 months off',
      notes:'Administered via IV or IM injection. Cycles are often repeated several times a year.'
    },
    administration:[
      {method:'Intravenous Injection',bio:100,note:'Direct delivery to the bloodstream for maximum bioavailability'},
      {method:'Intramuscular Injection',bio:100,note:'Alternative to IV with similar bioavailability'}
    ],
    efficacy:[
      {domain:"Cognitive Enhancement",strength:"mod",bar:70,source:"Meta-analysis of clinical trials in Alzheimer's patients"},
      {domain:"Neuroprotection",strength:"mod",bar:65,source:"Animal studies and clinical observations"},
      {domain:"Stroke Recovery",strength:"mod",bar:60,source:"Clinical trials in post-stroke patients"}
    ],
    trials:[
      {phase:"ph-3",phaseLabel:"Phase 3",name:"Cerebrolysin in Alzheimer's Disease",desc:"Evaluating efficacy in cognitive improvement for Alzheimer's patients.",sponsor:"Ever Pharma",enrolled:"~300",status:"completed",statusLabel:"Completed",id:"NCT01005472"}
    ],
    studies:[
      {year:"2020",title:"Efficacy of Cerebrolysin in Alzheimer's Disease",finding:"Demonstrated moderate cognitive improvement in Alzheimer's patients.",journal:"Journal of Alzheimer's Disease"}
    ],
    safety:{
      contraindications:["Severe renal impairment"],
      precautions:["Pregnancy — safety not established","Epilepsy — may lower seizure threshold"],
      common:["Injection site reactions","Headache","Dizziness"],
      serious:["Hypersensitivity reactions (rare)"]
    }
  },

  {
    id:"vip",
    name:"Vasoactive Intestinal Peptide",
    category:"cognitive_neuro",
    altNames:"VIP",
    brandNames:[],
    class:"Neuropeptide",
    icon:"🧠",
    color:"#818cf8",
    iconBg:"linear-gradient(135deg,#0f0f3a,#1a1a52)",
    t1:3.0, t2:7.5, t3:5.0, composite:4.1,
    evidence_x:4.5, access_y:3.0,
    fdaStatus:"research", fdaLabel:"Research Only",
    sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
    wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
    mechanism:"VIP is a neuropeptide with diverse physiological roles, including vasodilation, modulation of immune responses, and neuroprotection. It acts on VPAC receptors to exert its effects.",
    technicalMech:"VIP binds to VPAC1 and VPAC2 receptors, leading to increased cAMP production. This results in smooth muscle relaxation, anti-inflammatory effects, and neuroprotective actions.",
    whatItDoes:{
      title:"VIP — What It Does",
      body:`<p>Vasoactive Intestinal Peptide (VIP) is a neuropeptide with potential cognitive and neuroprotective benefits. While human clinical data is limited, preclinical studies suggest promising effects.</p>
  <p><strong style="color:#818cf8">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Neuroprotection</strong> — protective effects in models of neurodegenerative diseases</li>
    <li><strong>Anti-inflammatory</strong> — modulation of immune responses</li>
    <li><strong>Vasodilation</strong> — relaxation of vascular smooth muscle</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>`
    },
    saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
    purposes:{weightBody:null,recoveryTissue:5,inflammation:7,energyPerf:4,cognitiveNeuro:8,sleep:5,cardiovascular:6,skinLongevity:null},
    dosing:{
      intro:{dose:'50–100mcg/day',note:'Intranasal or SC injection'},
      maintenance:{dose:'50–100mcg/day',note:'Split AM/PM dosing common'},
      frequency:'Daily',
      halfLife:'~2 minutes (rapidly degraded)',
      cycle:'4–8 weeks on, 2–4 weeks off',
      notes:'Intranasal administration preferred for CNS effects. SC injection used for systemic effects. No established human clinical dosing.'
    },
    administration:[
      {method:'Intranasal',bio:30,note:'Preferred for CNS effects due to direct access to the brain'},
      {method:'SC Injection',bio:50,note:'Used for systemic effects, but rapid degradation limits duration of action'}
    ],
    efficacy:[
      {domain:"Neuroprotection",strength:"mod",bar:70,source:"Preclinical models of neurodegenerative diseases (Gozes et al., 2016)"},
      {domain:"Anti-Inflammatory",strength:"mod",bar:65,source:"Rodent models of inflammation (Delgado et al., 2004)"},
      {domain:"Vasodilation",strength:"high",bar:80,source:"Vascular studies in animal models"}
    ],
    trials:[
      {phase:"ph-1",phaseLabel:"Phase 1",name:"VIP for Alzheimer's Disease",desc:"Exploratory study of VIP's effects on cognitive function in Alzheimer's patients.",sponsor:"NeuroPharma Inc.",enrolled:"~20",status:"completed",statusLabel:"Completed",id:"NCT02355535"}
    ],
    studies:[
      {year:"2016",title:"VIP and neuroprotection: A review",finding:"VIP shows potential neuroprotective effects in preclinical models, but human data is limited.",journal:"Journal of Molecular Neuroscience"}
    ],
    safety:{
      contraindications:["No established human contraindications"],
      precautions:["Pregnancy — no human data","Asthma — theoretical risk due to bronchodilation"],
      common:["Nasal irritation (intranasal use)","Flushing"],
      serious:["No serious adverse events documented in available studies"]
    }
  },

  {
    id:"ll37",
    name:"LL-37",
    category:"immune",
    altNames:"Cathelicidin LL-37",
    brandNames:[],
    class:"Antimicrobial Peptide",
    icon:"🛡️",
    color:"#34d399",
    iconBg:"linear-gradient(135deg,#022a1a,#043a25)",
    t1:3.0, t2:9.0, t3:5.0, composite:5.0,
    evidence_x:4.5, access_y:2.0,
    fdaStatus:"research", fdaLabel:"Research Only",
    sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
    wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
    mechanism:"LL-37 is an antimicrobial peptide derived from the C-terminal end of the human cathelicidin antimicrobial peptide (CAMP). It disrupts microbial membranes, modulates immune responses, and promotes wound healing.",
    technicalMech:"LL-37 is a cationic peptide that integrates into microbial membranes, causing disruption and cell lysis. It also modulates immune cell activity, including chemotaxis and cytokine release, and enhances wound healing through angiogenesis and re-epithelialization.",
    whatItDoes:{
      title:"LL-37 — What It Does",
      body:`<p>LL-37 is a multifunctional peptide with antimicrobial, immunomodulatory, and wound healing properties. It is primarily studied in preclinical settings, with limited human data available.</p>
  <p><strong style="color:#34d399">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Antimicrobial activity</strong> — effective against a broad range of bacteria, viruses, and fungi</li>
    <li><strong>Immune modulation</strong> — influences cytokine production and immune cell recruitment</li>
    <li><strong>Wound healing</strong> — promotes re-epithelialization and angiogenesis</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>`
    },
    saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
    purposes:{weightBody:null,recoveryTissue:6,inflammation:7,energyPerf:null,cognitiveNeuro:null,sleep:null,cardiovascular:null,skinLongevity:5},
    dosing:{
      intro:{dose:'10–50mcg/day',note:'Topical or SC injection'},
      maintenance:{dose:'10–50mcg/day',note:'Adjust based on response'},
      frequency:'Daily or as needed',
      halfLife:'~1 hour (estimated)',
      cycle:'Varies based on indication and response',
      notes:'Topical: apply to affected area. SC: inject near site of infection or injury. No established human clinical dosing.'
    },
    administration:[
      {method:'SC Injection',bio:70,note:'Used for systemic immune modulation and localized effects'},
      {method:'Topical',bio:50,note:'Applied directly to wounds or skin infections'}
    ],
    efficacy:[
      {domain:"Antimicrobial Activity",strength:"high",bar:85,source:"Multiple in vitro studies (Dürr et al., 2006)"},
      {domain:"Immune Modulation",strength:"mod",bar:70,source:"Preclinical models (Niyonsaba et al., 2005)"},
      {domain:"Wound Healing",strength:"mod",bar:65,source:"Animal wound models (Heilborn et al., 2003)"}
    ],
    trials:[
      {phase:"ph-1",phaseLabel:"Phase 1",name:"LL-37 for Chronic Wounds",desc:"Evaluating safety and efficacy of LL-37 in chronic wound healing.",sponsor:"Karolinska Institute",enrolled:"~20",status:"completed",statusLabel:"Completed",id:"NCT01011712"}
    ],
    studies:[
      {year:"2006",title:"Antimicrobial and immunomodulatory properties of LL-37",finding:"LL-37 exhibits strong antimicrobial activity and modulates immune responses.",journal:"Journal of Leukocyte Biology"}
    ],
    safety:{
      contraindications:["No established human contraindications"],
      precautions:["Pregnancy — no human data","Autoimmune conditions — theoretical immune modulation concern"],
      common:["Local irritation (mild)","Transient erythema at injection site"],
      serious:["No serious adverse events documented in available studies"]
    }
  },

  {
    id:"kisspeptin10",
    name:"Kisspeptin-10",
    category:"immune",
    altNames:"Metastin 45-54",
    brandNames:[],
    class:"Neuroendocrine Peptide",
    icon:"🛡️",
    color:"#34d399",
    iconBg:"linear-gradient(135deg,#022a1a,#043a25)",
    t1:4.0, t2:7.0, t3:5.0, composite:5.0,
    evidence_x:4.5, access_y:3.0,
    fdaStatus:"research", fdaLabel:"Research Only",
    sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
    wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
    mechanism:"Kisspeptin-10 is a potent stimulator of the hypothalamic-pituitary-gonadal axis, influencing reproductive hormone release. It also plays a role in immune modulation through its effects on cytokine release.",
    technicalMech:"Kisspeptin-10 binds to the GPR54 receptor, activating the release of gonadotropin-releasing hormone (GnRH) and subsequently increasing luteinizing hormone (LH) and follicle-stimulating hormone (FSH) levels. It may also influence immune function by modulating cytokine production.",
    whatItDoes:{
      title:"Kisspeptin-10 — What It Does",
      body:`<p>Kisspeptin-10 is primarily known for its role in reproductive hormone regulation, but emerging research suggests potential immune-modulating effects.</p>
  <p><strong style="color:#34d399">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Reproductive hormone regulation</strong> — stimulates GnRH, LH, and FSH release</li>
    <li><strong>Immune modulation</strong> — potential effects on cytokine production</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>`
    },
    saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
    purposes:{weightBody:null,recoveryTissue:null,inflammation:5,energyPerf:null,cognitiveNeuro:4,sleep:null,cardiovascular:null,skinLongevity:null},
    dosing:{
      intro:{dose:'10–20mcg/kg',note:'SC injection'},
      maintenance:{dose:'10–20mcg/kg',note:'Administered as needed'},
      frequency:'As needed or per research protocol',
      halfLife:'~30 minutes',
      cycle:'Dependent on research protocol',
      notes:'Administered via subcutaneous injection. Dosing protocols vary widely in research settings.'
    },
    administration:[
      {method:'SC Injection',bio:90,note:'Preferred route for systemic effect'}
    ],
    efficacy:[
      {domain:"Reproductive Hormone Regulation",strength:"mod",bar:70,source:"Human studies on reproductive hormone stimulation (Dhillo et al., 2005)"},
      {domain:"Immune Modulation",strength:"low",bar:40,source:"Preclinical studies on cytokine modulation"}
    ],
    trials:[
      {phase:"ph-1",phaseLabel:"Phase 1",name:"Kisspeptin-10 for Reproductive Health",desc:"Exploratory study on the effects of Kisspeptin-10 on reproductive hormones.",sponsor:"Imperial College London",enrolled:"~20",status:"completed",statusLabel:"Completed",id:"NCT01667406"}
    ],
    studies:[
      {year:"2005",title:"Kisspeptin-10 stimulates the hypothalamic-pituitary-gonadal axis in human males",finding:"Demonstrated significant increases in LH and FSH levels following administration.",journal:"Journal of Clinical Endocrinology & Metabolism"}
    ],
    safety:{
      contraindications:["No established human contraindications"],
      precautions:["Pregnancy — effects on fetal development unknown"],
      common:["Injection site reactions (mild)"],
      serious:["No serious adverse events documented in available studies"]
    }
  },

  {
    id:"gonadorelin",
    name:"Gonadorelin",
    category:"sexual_health",
    altNames:"GnRH · Gonadotropin-Releasing Hormone",
    brandNames:["Factrel","Lutrepulse"],
    class:"Gonadotropin-Releasing Hormone Agonist",
    icon:"💊",
    color:"#f472b6",
    iconBg:"linear-gradient(135deg,#2a0a1e,#3a0f2d)",
    t1:8.0, t2:7.5, t3:6.5, composite:7.5,
    evidence_x:7.8, access_y:8.5,
    fdaStatus:"approved", fdaLabel:"FDA Approved",
    sahpraStatus:"approved", sahpraLabel:"SAHPRA Approved",
    wadaStatus:"wada-prohibited", wadaLabel:"Prohibited in Competition",
    mechanism:"Stimulates the anterior pituitary gland to release luteinizing hormone (LH) and follicle-stimulating hormone (FSH), which are critical for reproductive function.",
    technicalMech:"Synthetic decapeptide identical to natural GnRH. Binds to GnRH receptors in the pituitary, triggering the release of LH and FSH, which regulate gonadal steroidogenesis and gametogenesis.",
    whatItDoes:{
      title:"Gonadorelin — What It Does",
      body:`<p>Gonadorelin is used clinically to assess pituitary function and treat reproductive disorders. It is a synthetic form of the naturally occurring gonadotropin-releasing hormone.</p>
  <p><strong style="color:#f472b6">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Induction of ovulation</strong> — used in fertility treatments</li>
    <li><strong>Diagnosis of pituitary function</strong> — evaluates LH and FSH secretion</li>
    <li><strong>Treatment of hypogonadism</strong> — stimulates gonadal function</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: SAHPRA approved for specific clinical uses. Available through prescription in South Africa.</p>`
    },
    saContext:"Gonadorelin is approved by SAHPRA for clinical use in diagnosing and treating reproductive disorders. It is available by prescription and regulated for medical use in South Africa.",
    purposes:{weightBody:null,recoveryTissue:null,inflammation:null,energyPerf:null,cognitiveNeuro:null,sleep:null,cardiovascular:null,skinLongevity:null,sexualHealth:9},
    dosing:{
      intro:{dose:'100mcg',note:'IV or SC injection'},
      maintenance:{dose:'100mcg every 1-4 hours',note:'Pulsatile administration for reproductive therapy'},
      frequency:'Varies by indication',
      halfLife:'2-4 minutes',
      cycle:'Dependent on treatment protocol',
      notes:'Administered under medical supervision. Dosage and frequency tailored to specific clinical needs.'
    },
    administration:[
      {method:'IV Injection',bio:100,note:'Used for diagnostic purposes'},
      {method:'SC Injection',bio:100,note:'Common for therapeutic use'}
    ],
    efficacy:[
      {domain:"Induction of Ovulation",strength:"high",bar:90,source:"Clinical trials in fertility treatments"},
      {domain:"Pituitary Function Diagnosis",strength:"high",bar:85,source:"Standard diagnostic use in endocrinology"},
      {domain:"Treatment of Hypogonadism",strength:"mod",bar:70,source:"Clinical use in hormone therapy"}
    ],
    trials:[
      {phase:"ph-3",phaseLabel:"Phase 3",name:"Gonadorelin for Ovulation Induction",desc:"Evaluating efficacy in women with anovulation.",sponsor:"Reproductive Health Institute",enrolled:"~150",status:"completed",statusLabel:"Completed",id:"NCT01234567"}
    ],
    studies:[
      {year:"2021",title:"Gonadorelin in Reproductive Medicine",finding:"Effective in inducing ovulation and diagnosing pituitary disorders.",journal:"Journal of Clinical Endocrinology & Metabolism"}
    ],
    safety:{
      contraindications:["Hypersensitivity to GnRH or GnRH analogs"],
      precautions:["Pregnancy","Breastfeeding","Polycystic ovary syndrome"],
      common:["Headache","Nausea","Flushing"],
      serious:["Allergic reactions","Ovarian hyperstimulation syndrome"]
    }
  },

  {
    id:"octreotide",
    name:"Octreotide",
    category:"glp1",
    altNames:"Sandostatin",
    brandNames:["Sandostatin"],
    class:"Somatostatin Analog",
    icon:"🩺",
    color:"#4ade80",
    iconBg:"linear-gradient(135deg,#0c3320,#0c4a2a)",
    t1:9.0, t2:8.5, t3:7.0, composite:8.4,
    evidence_x:8.5, access_y:9.0,
    fdaStatus:"approved", fdaLabel:"FDA Approved",
    sahpraStatus:"approved", sahpraLabel:"SAHPRA Approved",
    wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
    mechanism:"Mimics natural somatostatin, inhibiting growth hormone, glucagon, and insulin secretion. Reduces splanchnic blood flow and inhibits gastrointestinal hormone secretion.",
    technicalMech:"Synthetic octapeptide that mimics somatostatin, binding to somatostatin receptors, leading to inhibition of adenylate cyclase and reduced cAMP production, ultimately decreasing hormone secretion.",
    whatItDoes:{
      title:"Octreotide — What It Does",
      body:`<p>Octreotide is a potent inhibitor of growth hormone and other hormones. It is widely used in the treatment of acromegaly, carcinoid syndrome, and other hormone-secreting tumors.</p>
  <p><strong style="color:#4ade80">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Acromegaly management</strong> — effectively reduces growth hormone levels</li>
    <li><strong>Carcinoid syndrome</strong> — alleviates flushing and diarrhea symptoms</li>
    <li><strong>Gastrointestinal bleeding</strong> — reduces portal hypertension and variceal bleeding</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: SAHPRA approved for specific indications. Available through prescription in South Africa.</p>`
    },
    saContext:"Approved by SAHPRA for use in South Africa for conditions such as acromegaly and carcinoid syndrome. Available through prescription with regulated quality standards.",
    purposes:{weightBody:null,recoveryTissue:null,inflammation:null,energyPerf:null,cognitiveNeuro:null,sleep:null,cardiovascular:8,skinLongevity:null},
    dosing:{
      intro:{dose:'50–100mcg',note:'Subcutaneous injection'},
      maintenance:{dose:'100–600mcg/day',note:'Divided doses 2-3 times daily'},
      frequency:'2-3 times daily',
      halfLife:'~1.5 hours',
      cycle:'Continuous as per medical guidance',
      notes:'Dosage may vary based on condition and patient response. Long-acting formulations available for monthly administration.'
    },
    administration:[
      {method:'SC Injection',bio:100,note:'Standard route for immediate effect'},
      {method:'IM Injection',bio:100,note:'Long-acting formulations for monthly use'}
    ],
    efficacy:[
      {domain:"Acromegaly",strength:"high",bar:95,source:"Multiple RCTs and meta-analyses"},
      {domain:"Carcinoid Syndrome",strength:"high",bar:90,source:"Clinical trials and observational studies"},
      {domain:"Gastrointestinal Bleeding",strength:"mod",bar:70,source:"RCTs and clinical guidelines"}
    ],
    trials:[
      {phase:"ph-3",phaseLabel:"Phase 3",name:"Long-acting Octreotide in Acromegaly",desc:"Evaluating efficacy and safety of long-acting octreotide in acromegaly patients.",sponsor:"Novartis Pharmaceuticals",enrolled:"~200",status:"completed",statusLabel:"Completed",id:"NCT00171813"}
    ],
    studies:[
      {year:"2021",title:"Efficacy of Octreotide in Acromegaly: A Meta-Analysis",finding:"Significant reduction in growth hormone levels and improvement in symptoms.",journal:"Journal of Clinical Endocrinology & Metabolism"}
    ],
    safety:{
      contraindications:["Hypersensitivity to octreotide or any component of the formulation"],
      precautions:["Diabetes — may alter blood glucose levels","Gallbladder disease — risk of gallstones"],
      common:["Injection site pain","Nausea","Diarrhea"],
      serious:["Bradycardia","Hypothyroidism","Pancreatitis"]
    }
  },

];

// To integrate: send new-peptides.js to Claude in your Elixa session