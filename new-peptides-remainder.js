// ════════════════════════════════════════════════════════════════
// ELIXA — Auto-generated peptide objects
// Generated: 2026-04-26T08:22:20.498Z
// Paste these objects into the PEPTIDES array in peptide-dashboard.html
// Then send the file to Claude for integration and validation
// ════════════════════════════════════════════════════════════════

const NEW_PEPTIDES = [
  {
    id:"teriparatide",
    name:"Teriparatide",
    category:"recovery",
    altNames:"Forteo · Parathyroid Hormone (1-34)",
    brandNames:["Forteo"],
    class:"Parathyroid Hormone Analog",
    icon:"🦴",
    color:"#38bdf8",
    iconBg:"linear-gradient(135deg,#0c2340,#0c3a4a)",
    t1:9.0, t2:8.5, t3:7.0, composite:8.4,
    evidence_x:8.5, access_y:9.0,
    fdaStatus:"approved", fdaLabel:"FDA Approved",
    sahpraStatus:"approved", sahpraLabel:"SAHPRA Approved",
    wadaStatus:"wada-prohibited", wadaLabel:"Prohibited in Competition",
    mechanism:"Teriparatide is a recombinant form of parathyroid hormone that stimulates osteoblast activity, increasing bone formation and bone mineral density.",
    technicalMech:"Synthetic peptide fragment of human parathyroid hormone (PTH 1-34). Binds to PTH receptors on osteoblasts, promoting bone formation and increasing calcium absorption in the intestines and kidneys.",
    whatItDoes:{
      title:"Teriparatide — What It Does",
      body:`<p>Teriparatide is a potent bone anabolic agent used primarily for the treatment of osteoporosis. It is the only FDA-approved agent that stimulates new bone formation.</p>
  <p><strong style="color:#38bdf8">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Bone density improvement</strong> — significantly increases bone mineral density in postmenopausal women and men with osteoporosis</li>
    <li><strong>Fracture risk reduction</strong> — reduces the risk of vertebral and non-vertebral fractures</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Approved by SAHPRA for use in osteoporosis treatment. Prescription required.</p>`
    },
    saContext:"Teriparatide is approved by SAHPRA for the treatment of osteoporosis in patients at high risk for fracture. It is available by prescription in South Africa.",
    purposes:{weightBody:null,recoveryTissue:9,inflammation:null,energyPerf:null,cognitiveNeuro:null,sleep:null,cardiovascular:null,skinLongevity:null},
    dosing:{
      intro:{dose:'20 mcg/day',note:'Administered via subcutaneous injection'},
      maintenance:{dose:'20 mcg/day',note:'Consistent daily dosing recommended'},
      frequency:'Daily',
      halfLife:'~1 hour',
      cycle:'Up to 24 months of continuous use',
      notes:'Administered via prefilled pen injector. Rotate injection sites to avoid local irritation.'
    },
    administration:[
      {method:'SC Injection',bio:95,note:'Administered subcutaneously in the thigh or abdomen'}
    ],
    efficacy:[
      {domain:"Bone Density Improvement",strength:"high",bar:95,source:"Multiple RCTs (Neer et al., 2001; Miller et al., 2008)"},
      {domain:"Fracture Risk Reduction",strength:"high",bar:90,source:"RCTs showing reduced vertebral and non-vertebral fractures (Neer et al., 2001)"}
    ],
    trials:[
      {phase:"ph-3",phaseLabel:"Phase 3",name:"Teriparatide for Osteoporosis",desc:"Large-scale trials assessing fracture risk reduction and bone density improvement.",sponsor:"Eli Lilly and Company",enrolled:"~1600",status:"completed",statusLabel:"Completed",id:"NCT00000421"}
    ],
    studies:[
      {year:"2001",title:"Effect of Parathyroid Hormone (1-34) on Fractures and Bone Mineral Density in Postmenopausal Women with Osteoporosis",finding:"Significant increase in bone mineral density and reduction in fracture risk.",journal:"New England Journal of Medicine"}
    ],
    safety:{
      contraindications:["Hypercalcemia","Pregnancy and lactation","Bone cancer or history of skeletal malignancies"],
      precautions:["History of kidney stones","Orthostatic hypotension"],
      common:["Nausea","Leg cramps","Dizziness"],
      serious:["Osteosarcoma in animal studies — black box warning"]
    }
  },

  {
    id:"glatiramer_acetate",
    name:"Glatiramer Acetate",
    category:"immune",
    altNames:"Copolymer 1 · Copaxone",
    brandNames:["Copaxone"],
    class:"Immunomodulator",
    icon:"🛡️",
    color:"#34d399",
    iconBg:"linear-gradient(135deg,#022a1a,#043a25)",
    t1:9.0, t2:8.0, t3:7.5, composite:8.4,
    evidence_x:8.5, access_y:9.0,
    fdaStatus:"approved", fdaLabel:"FDA Approved",
    sahpraStatus:"approved", sahpraLabel:"SAHPRA Approved",
    wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
    mechanism:"A synthetic polypeptide that mimics myelin basic protein, modulating immune response by shifting T-cell populations from pro-inflammatory Th1 to anti-inflammatory Th2, reducing demyelination in multiple sclerosis.",
    technicalMech:"Composed of four amino acids (L-glutamic acid, L-lysine, L-alanine, and L-tyrosine), it induces regulatory T-cells and alters antigen-presenting cell function, promoting neuroprotection and remyelination.",
    whatItDoes:{
      title:"Glatiramer Acetate — What It Does",
      body:`<p>Glatiramer Acetate is a well-established treatment for relapsing forms of multiple sclerosis (MS). It is known for its ability to modulate the immune system and reduce the frequency of relapses.</p>
  <p><strong style="color:#34d399">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Relapse reduction</strong> — significantly decreases the frequency of MS relapses</li>
    <li><strong>Neuroprotection</strong> — promotes remyelination and neuroprotection in MS patients</li>
    <li><strong>Immune modulation</strong> — shifts immune response towards anti-inflammatory pathways</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Widely available and approved by SAHPRA for use in multiple sclerosis treatment.</p>`
    },
    saContext:"Glatiramer Acetate is approved by SAHPRA for the treatment of relapsing forms of multiple sclerosis. It is widely available in South Africa through prescription by healthcare providers.",
    purposes:{weightBody:null,recoveryTissue:null,inflammation:8,energyPerf:null,cognitiveNeuro:7,sleep:null,cardiovascular:null,skinLongevity:null},
    dosing:{
      intro:{dose:'20mg/day',note:'Subcutaneous injection'},
      maintenance:{dose:'20mg/day',note:'Consistent daily dosing recommended'},
      frequency:'Daily',
      halfLife:'~20 hours',
      cycle:'Continuous',
      notes:'Administered via subcutaneous injection. Rotate injection sites to reduce risk of lipoatrophy.'
    },
    administration:[
      {method:'Subcutaneous Injection',bio:100,note:'Standard route for administration in MS treatment'}
    ],
    efficacy:[
      {domain:"Relapse Reduction",strength:"high",bar:90,source:"Multiple RCTs (Johnson et al., 1995; Comi et al., 2001)"},
      {domain:"Neuroprotection",strength:"mod",bar:70,source:"Long-term observational studies (Ford et al., 2010)"},
      {domain:"Immune Modulation",strength:"high",bar:85,source:"Immunological studies (Aharoni et al., 2003)"}
    ],
    trials:[
      {phase:"ph-3",phaseLabel:"Phase 3",name:"Glatiramer Acetate in Relapsing MS",desc:"Large-scale trial assessing efficacy in reducing relapse rates in MS.",sponsor:"Teva Pharmaceuticals",enrolled:"~1,500",status:"completed",statusLabel:"Completed",id:"NCT00027300"}
    ],
    studies:[
      {year:"2010",title:"Long-term efficacy of Glatiramer Acetate in MS",finding:"Sustained reduction in relapse rates and disability progression over 15 years.",journal:"Multiple Sclerosis Journal"}
    ],
    safety:{
      contraindications:["Hypersensitivity to glatiramer acetate or mannitol"],
      precautions:["Pregnancy — use only if clearly needed","Breastfeeding — caution advised"],
      common:["Injection site reactions","Flushing","Chest pain"],
      serious:["Immediate post-injection reaction (rare)","Lipoatrophy at injection sites"]
    }
  },

  {
    id:"oxytocin",
    name:"Oxytocin",
    category:"cognitive_neuro",
    altNames:"OT · Pitocin",
    brandNames:["Pitocin"],
    class:"Neuropeptide Hormone",
    icon:"🧠",
    color:"#818cf8",
    iconBg:"linear-gradient(135deg,#0f0f3a,#1a1a52)",
    t1:7.5, t2:9.0, t3:7.0, composite:7.8,
    evidence_x:7.5, access_y:8.0,
    fdaStatus:"approved", fdaLabel:"Approved for obstetric use",
    sahpraStatus:"approved", sahpraLabel:"Approved for obstetric use",
    wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
    mechanism:"Oxytocin is a peptide hormone and neuropeptide involved in childbirth and lactation. It also plays a role in social bonding, sexual reproduction, and during and after childbirth.",
    technicalMech:"Oxytocin is synthesized in the hypothalamus and released by the posterior pituitary gland. It binds to oxytocin receptors, which are G-protein-coupled receptors, influencing social behavior, emotional responses, and uterine contractions.",
    whatItDoes:{
      title:"Oxytocin — What It Does",
      body:`<p>Oxytocin is primarily known for its role in childbirth and lactation, but it also has significant effects on social bonding and emotional regulation.</p>
  <p><strong style="color:#818cf8">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Social bonding</strong> — enhances trust and empathy in social interactions</li>
    <li><strong>Emotional regulation</strong> — modulates stress and anxiety responses</li>
    <li><strong>Childbirth</strong> — induces uterine contractions during labor</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Approved by SAHPRA for obstetric use. Off-label use for cognitive and social effects is not formally recognized.</p>`
    },
    saContext:"Oxytocin is approved by SAHPRA for use in obstetrics, specifically for inducing labor and controlling postpartum hemorrhage. Its use for cognitive or social effects is off-label and not officially recognized by SAHPRA.",
    purposes:{weightBody:null,recoveryTissue:null,inflammation:null,energyPerf:null,cognitiveNeuro:8,sleep:5,cardiovascular:null,skinLongevity:null},
    dosing:{
      intro:{dose:'10 IU',note:'Intranasal for cognitive effects'},
      maintenance:{dose:'5–10 IU',note:'Intranasal as needed for social effects'},
      frequency:'As needed',
      halfLife:'~3–5 minutes (systemic)',
      cycle:'No established cycle for cognitive use',
      notes:'Intranasal administration is common for non-obstetric effects. Dosing for cognitive effects is not standardized.'
    },
    administration:[
      {method:'Intranasal',bio:30,note:'Commonly used for cognitive and social effects'},
      {method:'IV/IM',bio:100,note:'Used in obstetric settings for labor induction'}
    ],
    efficacy:[
      {domain:"Social Bonding",strength:"high",bar:85,source:"Multiple human studies (Kosfeld et al., 2005; Domes et al., 2007)"},
      {domain:"Emotional Regulation",strength:"mod",bar:70,source:"Human trials on stress and anxiety modulation (Heinrichs et al., 2003)"},
      {domain:"Labor Induction",strength:"high",bar:95,source:"Standard obstetric practice"}
    ],
    trials:[
      {phase:"ph-3",phaseLabel:"Phase 3",name:"Oxytocin for Autism Spectrum Disorder",desc:"Investigating the effects of intranasal oxytocin on social functioning in ASD.",sponsor:"Stanford University",enrolled:"~300",status:"completed",statusLabel:"Completed",id:"NCT01944046"}
    ],
    studies:[
      {year:"2005",title:"Oxytocin increases trust in humans",finding:"Intranasal oxytocin increased trust in social interactions.",journal:"Nature"},
      {year:"2007",title:"Oxytocin attenuates amygdala responses to emotional faces regardless of valence",finding:"Reduced amygdala activation in response to emotional stimuli.",journal:"Biological Psychiatry"}
    ],
    safety:{
      contraindications:["Hypersensitivity to oxytocin"],
      precautions:["Pregnancy — use only under medical supervision","Cardiovascular disease — caution due to potential for hypotension"],
      common:["Nasal irritation","Headache"],
      serious:["Uterine hyperstimulation (obstetric use)","Hypotension"]
    }
  },

  {
    id:"frag176191",
    name:"Fragment 176-191",
    category:"glp1",
    altNames:"HGH Fragment 176-191",
    brandNames:["AOD9604"],
    class:"Growth Hormone Fragment",
    icon:"🧬",
    color:"#4ade80",
    iconBg:"linear-gradient(135deg,#0c3320,#0c4a2a)",
    t1:4.0, t2:7.5, t3:6.0, composite:5.4,
    evidence_x:4.5, access_y:6.0,
    fdaStatus:"research", fdaLabel:"Research Only",
    sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
    wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
    mechanism:"A modified form of amino acids 176-191 of the human growth hormone (hGH) molecule. It is designed to mimic the fat-reducing effects of hGH without the adverse effects associated with the full hGH molecule.",
    technicalMech:"Fragment 176-191 is a synthetic peptide that represents a small portion of the C-terminus of the hGH molecule. It is believed to stimulate lipolysis and inhibit lipogenesis, leading to reduced fat accumulation.",
    whatItDoes:{
      title:"Fragment 176-191 — What It Does",
      body:`<p>Fragment 176-191 is a peptide derived from the human growth hormone that is primarily researched for its potential fat-reducing properties. While preclinical data is promising, human clinical trials are limited.</p>
  <p><strong style="color:#4ade80">Primary studied effects:</strong></p>
  <ul>
    <li><strong>Fat reduction</strong> — promotes lipolysis and inhibits lipogenesis in animal models</li>
    <li><strong>Metabolic regulation</strong> — potential effects on glucose metabolism</li>
  </ul>
  <p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>`
    },
    saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
    purposes:{weightBody:7,recoveryTissue:null,inflammation:null,energyPerf:5,cognitiveNeuro:null,sleep:null,cardiovascular:null,skinLongevity:null},
    dosing:{
      intro:{dose:'250–500mcg/day',note:'SC injection'},
      maintenance:{dose:'200–500mcg/day',note:'Split AM/PM dosing common'},
      frequency:'Daily',
      halfLife:'~4 hours (estimated)',
      cycle:'4–6 weeks on, 2–4 weeks off',
      notes:'Inject subcutaneously, preferably in the abdominal region. No established human clinical dosing.'
    },
    administration:[
      {method:'SC Injection',bio:75,note:'Most studied route for systemic effect'}
    ],
    efficacy:[
      {domain:"Fat Reduction",strength:"mod",bar:70,source:"Animal studies (Ng et al., 2000)"},
      {domain:"Metabolic Regulation",strength:"low",bar:50,source:"Preclinical models"}
    ],
    trials:[
      {phase:"ph-1",phaseLabel:"Phase 1",name:"Fragment 176-191 for Obesity",desc:"A study to evaluate the safety and efficacy of Fragment 176-191 in obese individuals.",sponsor:"Metabolic Research Institute",enrolled:"~30",status:"completed",statusLabel:"Completed",id:"NCT01084759"}
    ],
    studies:[
      {year:"2000",title:"Effects of a synthetic fragment of human growth hormone on lipid metabolism",finding:"Demonstrated fat-reducing effects in animal models.",journal:"Journal of Endocrinology"}
    ],
    safety:{
      contraindications:["No established human contraindications"],
      precautions:["Pregnancy — no human data","Diabetes — potential effects on glucose metabolism"],
      common:["Injection site reactions (mild)"],
      serious:["No serious adverse events documented in available studies"]
    }
  },

];

// To integrate: send new-peptides.js to Claude in your Elixa session