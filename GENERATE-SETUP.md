# How to Run the Peptide Generator

## One-time setup (~5 minutes)

**Step 1 — Get an OpenAI API key**
1. Go to platform.openai.com and sign in (separate from ChatGPT)
2. Click your profile → "API keys" → "Create new secret key"
3. Copy the key (starts with `sk-...`) — you only see it once
4. Add a small credit balance: Billing → Add payment method → load $5–10
   (18 peptides at GPT-4o pricing ≈ $1.50 total)

**Step 2 — Open Terminal on your Mac**
Press `⌘ Space` → type "Terminal" → Enter

**Step 3 — Navigate to the project folder**
```
cd "/Users/brandondienar/Documents/Claude/Projects/Peptide Dashboard"
```

**Step 4 — Install the OpenAI library**
```
npm install openai
```

**Step 5 — Run the generator**
Replace `sk-your-key-here` with your actual key:
```
OPENAI_API_KEY=sk-your-key-here node generate-peptides.js
```

## What happens

The script runs for about 2–3 minutes, generating each peptide one by one.
You'll see live progress in the Terminal window.

When it finishes, a file called `new-peptides.js` appears in this folder.

## Final step — integrate into the dashboard

Open your Elixa session with Claude and say:

> "Integrate new-peptides.js into the dashboard"

Claude will read the file, validate all the objects, and add them to the dashboard in one shot.

## Troubleshooting

**"Cannot find module 'openai'"** → Run `npm install openai` again

**"401 Unauthorized"** → Your API key is wrong or expired — regenerate at platform.openai.com

**"429 Too Many Requests"** → Increase `DELAY_MS` in generate-peptides.js from 2000 to 4000

**A peptide shows ⚠ warning** → The object generated but may have a missing field.
Still send new-peptides.js to Claude — Claude will spot and fix any gaps during integration.
