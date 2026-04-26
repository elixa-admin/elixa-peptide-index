/**
 * ELIXA PEPTIDE INDEX — Automated Peptide Generator
 * Uses OpenAI API to generate all remaining peptide data objects
 * in the exact format required by peptide-dashboard.html
 *
 * SETUP:
 *   1. Get an API key from platform.openai.com → API keys
 *   2. Run: npm install openai   (in this folder, in Terminal)
 *   3. Run: OPENAI_API_KEY=sk-... node generate-peptides.js
 *
 * OUTPUT: new-peptides.js — ready to send to Claude for integration
 */

const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');

// ─── CONFIG ────────────────────────────────────────────────────────────────
const API_KEY = process.env.OPENAI_API_KEY;
const MODEL   = 'gpt-4o';          // gpt-4o-mini is cheaper but less accurate
const DELAY_MS = 2000;             // pause between API calls (rate limit safety)
const OUT_FILE = path.join(__dirname, 'new-peptides.js');

if (!API_KEY) {
  console.error('\n❌  No API key found.');
  console.error('    Run: OPENAI_API_KEY=sk-your-key-here node generate-peptides.js\n');
  process.exit(1);
}

const client = new OpenAI({ apiKey: API_KEY });

// ─── REMAINING PEPTIDES TO GENERATE ────────────────────────────────────────
// Grouped by category. Add/remove as needed.
const PEPTIDES_TODO = [
  // Longevity
  { name: 'Epitalon',           category: 'longevity',       color: '#c084fc' },
  { name: 'MOTS-c',             category: 'longevity',       color: '#c084fc' },
  { name: 'Humanin',            category: 'longevity',       color: '#c084fc' },
  { name: 'Collagen Peptides',  category: 'longevity',       color: '#c084fc' },

  // Growth Hormone axis
  { name: 'GHRP-2',             category: 'gh_axis',         color: '#fbbf24' },
  { name: 'IGF-1 LR3',          category: 'gh_axis',         color: '#fbbf24' },
  { name: 'PEG-MGF',            category: 'gh_axis',         color: '#fbbf24' },
  { name: 'Follistatin',        category: 'gh_axis',         color: '#fbbf24' },

  // Cognitive & Neuro
  { name: 'Cerebrolysin',       category: 'cognitive_neuro', color: '#818cf8' },
  { name: 'VIP',                category: 'cognitive_neuro', color: '#818cf8' },

  // Immune & Repair
  { name: 'LL-37',              category: 'immune',          color: '#34d399' },
  { name: 'Kisspeptin-10',      category: 'immune',          color: '#34d399' },

  // Sexual Health
  { name: 'Gonadorelin',        category: 'sexual_health',   color: '#f472b6' },

  // Metabolic
  { name: 'Octreotide',         category: 'glp1',            color: '#4ade80' },
];

// ─── SCHEMA (shown to GPT as the required format) ──────────────────────────
const SCHEMA_EXAMPLE = `
{
  id:"bpc157",
  name:"BPC-157",
  category:"recovery",
  altNames:"Body Protection Compound 157 · PL 14736",
  brandNames:["PL 14736"],
  class:"Gastric Pentadecapeptide",
  icon:"🩺",
  color:"#38bdf8",
  iconBg:"linear-gradient(135deg,#0c2340,#0c3a4a)",
  t1:2.0, t2:8.8, t3:8.5, composite:5.3,
  evidence_x:3.2, access_y:7.5,
  fdaStatus:"research", fdaLabel:"Research Only",
  sahpraStatus:"grey", sahpraLabel:"Grey Market SA",
  wadaStatus:"wada-ok", wadaLabel:"Not Prohibited",
  mechanism:"Derived from a protective protein in gastric juice. Promotes tissue healing via VEGF-driven angiogenesis, modulates nitric oxide synthesis, and activates tendon fibroblast migration — with remarkable gut-protective effects.",
  technicalMech:"Synthetic 15-amino-acid fragment of human gastric juice protein. Promotes angiogenesis (VEGF upregulation), activates FAK-paxillin pathway for tendon/ligament repair, modulates NO synthase, upregulates GH receptor expression.",
  whatItDoes:{
    title:"BPC-157 — What It Does",
    body:\`<p>BPC-157 is the most community-popular recovery peptide. Nearly all evidence is preclinical with exceptionally consistent findings, but human clinical trial data remains very limited.</p>
<p><strong style="color:#38bdf8">Primary studied effects:</strong></p>
<ul>
  <li><strong>Tendon & ligament healing</strong> — accelerated repair in rat Achilles models</li>
  <li><strong>GI mucosal protection</strong> — strongly protective in IBD/leaky gut animal models</li>
  <li><strong>Anti-inflammatory</strong> — COX-2 and nitric oxide modulation</li>
</ul>
<p style="color:#94a3b8;font-size:.75rem;margin-top:10px">⚠ SA context: Not SAHPRA registered. Available through grey-market vendors. Source quality varies significantly.</p>\`
  },
  saContext:"Not formally or officially available in South Africa due to non-SAHPRA approval status. Available through grey-market research peptide vendors as an unscheduled compound. No SAHPRA-approved product exists as of April 2026.",
  purposes:{weightBody:null,recoveryTissue:9,inflammation:8,energyPerf:5,cognitiveNeuro:4,sleep:null,cardiovascular:null,skinLongevity:4},
  dosing:{
    intro:{dose:'250–500mcg/day',note:'Oral or SC injection'},
    maintenance:{dose:'200–500mcg/day',note:'Split AM/PM dosing common'},
    frequency:'Daily or twice daily',
    halfLife:'~4 hours (estimated)',
    cycle:'4–6 weeks on, 2–4 weeks off',
    notes:'Oral: take on empty stomach. SC: inject near injury site preferred by community. No established human clinical dosing.'
  },
  administration:[
    {method:'SC Injection',bio:75,note:'Most studied route for systemic and local effect'},
    {method:'Oral',bio:15,note:'Stable to stomach acid — meaningful but reduced oral absorption'}
  ],
  efficacy:[
    {domain:"GI Mucosal Healing",strength:"high",bar:90,source:"Multiple rodent studies (Sikiric et al., 1993–2022, 30+ papers)"},
    {domain:"Tendon / Ligament Repair",strength:"high",bar:85,source:"Rat Achilles models (Chang et al., 2011)"},
    {domain:"Anti-Inflammatory",strength:"mod",bar:65,source:"Rodent NSAID/ethanol models"}
  ],
  trials:[
    {phase:"ph-2",phaseLabel:"Phase 2",name:"BPC-157 for IBD — Zagreb",desc:"First registered human observational study. Oral BPC-157 for inflammatory bowel disease.",sponsor:"Zagreb Clinical Hospital",enrolled:"~60",status:"recruiting",statusLabel:"Recruiting",id:"NCT pending"}
  ],
  studies:[
    {year:"2022",title:"BPC-157 — 30 years of research (review)",finding:"Consistent healing effects across GI, musculoskeletal, and neural tissues in rodent models. Human data absent.",journal:"Current Pharmaceutical Design"}
  ],
  safety:{
    contraindications:["No established human contraindications"],
    precautions:["Pregnancy — no human data","Cancer history — theoretical angiogenesis concern"],
    common:["Injection site reactions (mild)","Nausea at high oral doses (rare)"],
    serious:["No serious adverse events documented in available studies"]
  }
}`;

// ─── SYSTEM PROMPT ──────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are a biomedical research data assistant generating accurate peptide data for the Elixa Peptide Index — an evidence-based research platform.

CRITICAL RULES:
1. Only use data from PubMed, ClinicalTrials.gov, FDA.gov, EMA, TGA, SAHPRA, WADA published sources.
2. NEVER fabricate DOI links, NCT numbers, or enrollment figures. If unsure of a DOI, omit the doi field entirely.
3. Use null (not 0) in purposes when a domain is not applicable.
4. composite score MUST equal (t1 × 0.50) + (t2 × 0.25) + (t3 × 0.25) rounded to 1 decimal.
5. Output ONLY the raw JavaScript object — no markdown fences, no explanation, no comments. Start with { and end with }.
6. The body field in whatItDoes must use valid HTML (backtick template literal syntax).
7. saContext must always mention SAHPRA specifically.

SCORING GUIDE:
t1 (human clinical): 9-10=multiple large RCTs/FDA approved, 7-8=Phase 2-3 data, 4-6=small human trials, 1-3=minimal human data, 0-1=no human trials
t2 (preclinical): 8-10=extensive animal/lab data, 5-7=good coverage, 2-4=limited, 0-2=sparse
t3 (community): 8-10=widely used consistent reports, 5-7=moderate use, 2-4=limited, 0-2=rare

EVIDENCE_X (landscape): 0-10 overall research strength (left=weak, right=strong)
ACCESS_Y (landscape): 0-10 regulatory approval access (0=none, 10=widely approved)

CATEGORY COLOURS:
glp1=#4ade80, recovery=#38bdf8, gh_axis=#fbbf24, longevity=#c084fc, cognitive_neuro=#818cf8, sexual_health=#f472b6, immune=#34d399

ICON_BG gradients (dark shade of category colour):
#4ade80 → linear-gradient(135deg,#0c3320,#0c4a2a)
#38bdf8 → linear-gradient(135deg,#0c2340,#0c3a4a)
#fbbf24 → linear-gradient(135deg,#2a1a00,#3a2800)
#c084fc → linear-gradient(135deg,#1e0a3a,#2d0f52)
#818cf8 → linear-gradient(135deg,#0f0f3a,#1a1a52)
#f472b6 → linear-gradient(135deg,#2a0a1e,#3a0f2d)
#34d399 → linear-gradient(135deg,#022a1a,#043a25)

Here is the EXACT format to use (copy all field names and structure):
${SCHEMA_EXAMPLE}`;

// ─── HELPERS ────────────────────────────────────────────────────────────────
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function log(msg) {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ${msg}`);
}

// Try to extract a valid JS object from GPT's response
function extractObject(text) {
  // Find first { and last }
  const start = text.indexOf('{');
  const end   = text.lastIndexOf('}');
  if (start === -1 || end === -1) return null;
  return text.slice(start, end + 1);
}

// Basic validation — check required fields exist
function validatePeptide(obj, name) {
  const required = ['id','name','category','mechanism','t1','t2','t3','composite',
                    'purposes','dosing','administration','efficacy','trials','studies','safety'];
  const missing = required.filter(k => !obj.includes(`${k}:`));
  if (missing.length) {
    log(`  ⚠  Missing fields for ${name}: ${missing.join(', ')}`);
    return false;
  }
  return true;
}

// ─── MAIN ───────────────────────────────────────────────────────────────────
async function generatePeptide(peptide) {
  const userPrompt = `Generate the Elixa Peptide Index data object for: ${peptide.name}

Category: ${peptide.category}
Color: ${peptide.color}

Research this compound thoroughly using your training data. Use only real, published evidence. Output only the JavaScript object — nothing else.`;

  log(`Generating: ${peptide.name}...`);

  try {
    const response = await client.chat.completions.create({
      model: MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user',   content: userPrompt }
      ],
      temperature: 0.2,   // low temp = more consistent, factual output
      max_tokens: 3000,
    });

    const raw = response.choices[0].message.content;
    const obj = extractObject(raw);

    if (!obj) {
      log(`  ❌  Could not extract object for ${peptide.name}`);
      return { name: peptide.name, status: 'failed', raw };
    }

    const valid = validatePeptide(obj, peptide.name);
    log(`  ${valid ? '✅' : '⚠ '} ${peptide.name} — ${obj.length} chars`);
    return { name: peptide.name, status: valid ? 'ok' : 'warning', obj };

  } catch (err) {
    log(`  ❌  API error for ${peptide.name}: ${err.message}`);
    return { name: peptide.name, status: 'error', error: err.message };
  }
}

async function main() {
  console.log('\n══════════════════════════════════════════════');
  console.log('  ELIXA PEPTIDE INDEX — Automated Generator');
  console.log(`  Model: ${MODEL}`);
  console.log(`  Peptides to generate: ${PEPTIDES_TODO.length}`);
  console.log('══════════════════════════════════════════════\n');

  const results  = [];
  const failed   = [];
  const outLines = [
    '// ════════════════════════════════════════════════════════════════',
    '// ELIXA — Auto-generated peptide objects',
    `// Generated: ${new Date().toISOString()}`,
    '// Paste these objects into the PEPTIDES array in peptide-dashboard.html',
    '// Then send the file to Claude for integration and validation',
    '// ════════════════════════════════════════════════════════════════',
    '',
    'const NEW_PEPTIDES = [',
  ];

  for (let i = 0; i < PEPTIDES_TODO.length; i++) {
    const peptide = PEPTIDES_TODO[i];
    log(`[${i + 1}/${PEPTIDES_TODO.length}] Starting ${peptide.name}`);

    const result = await generatePeptide(peptide);
    results.push(result);

    if (result.status === 'ok' || result.status === 'warning') {
      outLines.push('  ' + result.obj.replace(/\n/g, '\n  ') + ',');
      outLines.push('');
    } else {
      failed.push(peptide.name);
      outLines.push(`  // ❌ FAILED: ${peptide.name} — check error log`);
      outLines.push('');
    }

    // Pause between calls to respect rate limits
    if (i < PEPTIDES_TODO.length - 1) {
      log(`  Waiting ${DELAY_MS}ms before next call...`);
      await sleep(DELAY_MS);
    }
  }

  outLines.push('];');
  outLines.push('');
  outLines.push('// To integrate: send new-peptides.js to Claude in your Elixa session');

  // Write output file
  fs.writeFileSync(OUT_FILE, outLines.join('\n'), 'utf8');

  // Summary
  const ok   = results.filter(r => r.status === 'ok').length;
  const warn = results.filter(r => r.status === 'warning').length;
  const err  = results.filter(r => r.status === 'error' || r.status === 'failed').length;

  console.log('\n══════════════════════════════════════════════');
  console.log('  COMPLETE');
  console.log(`  ✅  Success:  ${ok}`);
  console.log(`  ⚠   Warning:  ${warn} (check output for missing fields)`);
  console.log(`  ❌  Failed:   ${err}${failed.length ? ' — ' + failed.join(', ') : ''}`);
  console.log(`  📄  Output:   new-peptides.js`);
  console.log('══════════════════════════════════════════════');
  console.log('\nNext step: open your Elixa Claude session and say:');
  console.log('"Integrate new-peptides.js into the dashboard"\n');
}

main().catch(err => {
  console.error('\n❌  Fatal error:', err.message);
  process.exit(1);
});
