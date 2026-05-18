// ── API MODULE ────────────────────────────────────────────────────────────────
// All requests go to the local proxy (server.js) which adds the API key and
// the required anthropic-version header before forwarding to Anthropic.
// Direct browser → Anthropic calls are blocked by CORS.

const API_CONFIG = {
  endpoint:  '/api/chat',
  model:     'claude-sonnet-4-6',
  maxTokens: 1000,
};

async function callClaude(systemPrompt, userPrompt) {
  const response = await fetch(API_CONFIG.endpoint, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model:      API_CONFIG.model,
      max_tokens: API_CONFIG.maxTokens,
      system:     systemPrompt,
      messages:   [{ role: 'user', content: userPrompt }],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `API error ${response.status}`);
  }

  const data = await response.json();
  const text = data.content?.[0]?.text;
  if (!text) throw new Error('Empty response from API');
  return text;
}

async function callClaudeJSON(systemPrompt, userPrompt) {
  const raw   = await callClaude(systemPrompt, userPrompt);
  const clean = raw.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}
