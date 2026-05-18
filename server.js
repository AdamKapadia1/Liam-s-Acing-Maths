require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const path    = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const API_KEY = process.env.ANTHROPIC_API_KEY;

app.post('/api/chat', async (req, res) => {
  if (!API_KEY) {
    return res.status(500).json({
      error: { message: 'ANTHROPIC_API_KEY not set — add it to your .env file' }
    });
  }
  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type':      'application/json',
        'x-api-key':         API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(req.body),
    });
    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch (err) {
    res.status(500).json({ error: { message: err.message } });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`MathsPass proxy running → http://localhost:${PORT}`);
  console.log('Open index.html with Live Server and questions will now work.');
});
