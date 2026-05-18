# MathsPass — GCSE Higher Revision

AI-powered GCSE Maths revision site targeting Grade 4–5 on the Higher paper.
Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step.

---

## Project Structure

```
mathspass/
├── index.html          # Main HTML shell
├── css/
│   └── style.css       # All styles
├── js/
│   ├── topics.js       # Topic & subtopic data
│   ├── formulas.js     # Formula sheet data
│   ├── api.js          # Anthropic API communication
│   └── app.js          # App logic, state, rendering
└── README.md
```

---

## Running Locally

### Option 1 — VS Code Live Server (recommended)
1. Install the **Live Server** extension by Ritwick Dey
2. Right-click `index.html` → **Open with Live Server**
3. Opens at `http://127.0.0.1:5500`

### Option 2 — Python simple server
```bash
cd mathspass
python -m http.server 5500
# then open http://localhost:5500
```

### Option 3 — Open directly
Double-click `index.html`. Most features work, but the Anthropic API calls
require a proper HTTP origin (not `file://`) — use Live Server instead.

---

## API Key

The app calls the Anthropic Claude API to generate lessons and questions.

When running via **claude.ai artifacts**, the key is injected automatically.

When running **locally**, add your key to `js/api.js`:

```js
// In js/api.js — replace the getApiKey() function body:
function getApiKey() {
  return 'sk-ant-YOUR-KEY-HERE';
}
```

> ⚠️ Never commit a real API key to version control.
> Consider using a `.env` file + a simple Node proxy for production use.

---

## Topics Covered

| Area                    | Subtopics | Higher-only |
|-------------------------|-----------|-------------|
| Number                  | 8         | 1 (Indices & Surds) |
| Algebra                 | 8         | 2 (Quadratics, Simultaneous) |
| Ratio & Proportion      | 4         | 1 (Compound Interest) |
| Geometry & Measures     | 8         | 0 |
| Statistics & Probability| 6         | 1 (Cumulative Frequency) |

★ = Higher-only topics. For Grade 4–5, master non-★ topics first.

---

## Features

- **Learn tab** — AI-generated lesson with method, worked example and exam tip
- **Practice Questions tab** — Fresh AQA-style questions at Foundation / Grade 4 / Grade 5 difficulty, AI-marked with full worked solution
- **Formula Sheet** — All key formulae flagged: given in exam vs must memorise
- **Progress tracking** — Green dots as topics are completed, overall progress bar

---

## Extending the App

- **Add a topic**: Edit `js/topics.js` — add an entry to the relevant area, then add the corresponding button in `index.html`
- **Add a formula**: Edit `js/formulas.js` — add an object with `name`, `expr`, `note`, `mem`, and `tags`
- **Change the AI model**: Edit `API_CONFIG.model` in `js/api.js`
- **Style changes**: All CSS variables are in `:root` at the top of `css/style.css`
