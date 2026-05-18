// ── APP STATE ─────────────────────────────────────────────────────────────────
const state = {
  topic:          null,
  subtopic:       null,
  currentQuestion: null,
  sessionCorrect:  0,
  sessionTotal:    0,
  totalQs:         0,
  completedTopics: new Set(),
  usedQuestions:   new Map(), // subtopic → Set of used bank indices
};

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showHome();
  updateProgress();
});

// ── NAVIGATION ────────────────────────────────────────────────────────────────
function allScreensOff() {
  ['home-screen','content-screen','cheatsheet-screen','past-papers-screen']
    .forEach(id => document.getElementById(id).style.display = 'none');
  document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
}

function showHome() {
  allScreensOff();
  document.getElementById('home-screen').style.display = 'block';
  document.getElementById('home-btn').classList.add('active');
  updateProgress();
}

function showCheatsheet() {
  allScreensOff();
  document.getElementById('cheatsheet-screen').style.display = 'block';
  renderFormulaGrid('formula-grid', FORMULAS);
}

function showPastPapers() {
  allScreensOff();
  document.getElementById('past-papers-screen').style.display = 'block';
}

// ── PAST PAPERS ────────────────────────────────────────────────────────────────
const ppState = {
  year: null, paper: null,
  timerSecs: 5400, timerRunning: false, timerInterval: null,
};

// Which years have mark schemes downloaded
const MS_AVAILABLE = new Set(['2017','2018','2019','2022','2023']);

function openPaper(evt, year, paper) {
  ppTimerReset();
  ppState.year  = year;
  ppState.paper = paper;

  // Highlight active button
  document.querySelectorAll('.pp-btn').forEach(b => b.classList.remove('active'));
  evt.currentTarget.classList.add('active');

  // Update label
  const paperLabel = paper === '1' ? 'Paper 1 (Non-calculator)' : `Paper ${paper} (Calculator)`;
  document.getElementById('pp-active-label').textContent = `${year} Higher · ${paperLabel}`;

  // Show/hide MS toggle
  const hasMark = MS_AVAILABLE.has(year);
  document.getElementById('pp-no-ms').style.display   = hasMark ? 'none'  : 'block';
  document.getElementById('pp-ms-btn').style.display  = hasMark ? ''      : 'none';

  document.getElementById('pp-controls').style.display  = 'flex';
  document.getElementById('pp-timer-bar').style.display = 'flex';

  // Show tutor FAB and update its context label
  document.getElementById('tutor-fab').style.display = 'flex';
  document.getElementById('tutor-chat-sub').textContent =
    `${year} Higher · ${paperLabel}`;

  switchPaperView('qp');
}

function switchPaperView(type) {
  const { year, paper } = ppState;
  if (!year) return;

  if (type === 'ms' && !MS_AVAILABLE.has(year)) return;

  const path = `papers/${year}-P${paper}-${type.toUpperCase()}.pdf`;
  const iframe = document.getElementById('pp-iframe');
  iframe.src = path;
  iframe.style.display = 'block';
  document.getElementById('pp-placeholder').style.display = 'none';

  document.getElementById('pp-qp-btn').classList.toggle('active', type === 'qp');
  document.getElementById('pp-ms-btn').classList.toggle('active', type === 'ms');
}

// ── TIMER ──────────────────────────────────────────────────────────────────────
function ppTimerToggle() {
  if (ppState.timerRunning) {
    clearInterval(ppState.timerInterval);
    ppState.timerRunning = false;
    document.getElementById('pp-start-btn').textContent = 'Resume Timer';
  } else {
    ppState.timerRunning = true;
    document.getElementById('pp-start-btn').textContent = 'Pause Timer';
    ppState.timerInterval = setInterval(() => {
      if (ppState.timerSecs <= 0) {
        clearInterval(ppState.timerInterval);
        ppState.timerRunning = false;
        document.getElementById('pp-timer').textContent = "Time's up!";
        document.getElementById('pp-start-btn').textContent = 'Start Timer';
        return;
      }
      ppState.timerSecs--;
      ppUpdateTimerDisplay();
    }, 1000);
  }
}

function ppTimerReset() {
  clearInterval(ppState.timerInterval);
  ppState.timerRunning = false;
  ppState.timerSecs = 5400;
  ppUpdateTimerDisplay();
  const btn = document.getElementById('pp-start-btn');
  if (btn) btn.textContent = 'Start Timer';
}

function ppUpdateTimerDisplay() {
  const h = Math.floor(ppState.timerSecs / 3600);
  const m = Math.floor((ppState.timerSecs % 3600) / 60);
  const s = ppState.timerSecs % 60;
  const el = document.getElementById('pp-timer');
  if (!el) return;
  el.textContent = `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.className = 'pp-timer' +
    (ppState.timerSecs <= 300 ? ' warning' : ppState.timerSecs <= 900 ? ' caution' : '');
}

// ── PAST PAPER AI TUTOR ────────────────────────────────────────────────────────
const tutorHistory = []; // {role, content}

function tutorOpen() {
  document.getElementById('tutor-chat').classList.add('open');
  document.getElementById('tutor-fab').style.display = 'none';
  document.getElementById('tutor-chat-input').focus();
}

function tutorClose() {
  document.getElementById('tutor-chat').classList.remove('open');
  document.getElementById('tutor-fab').style.display = 'flex';
}

function tutorKeydown(evt) {
  if (evt.key === 'Enter' && !evt.shiftKey) {
    evt.preventDefault();
    tutorSend();
  }
}

async function tutorSend() {
  const input = document.getElementById('tutor-chat-input');
  const text  = input.value.trim();
  if (!text) return;

  const { year, paper } = ppState;
  const paperLabel = paper === '1' ? 'Paper 1 (Non-calculator)' : `Paper ${paper} (Calculator)`;

  // Add user bubble
  tutorAddBubble('user', text);
  tutorHistory.push({ role: 'user', content: text });
  input.value = '';

  // Disable send while waiting
  const sendBtn = document.getElementById('tutor-chat-send');
  sendBtn.disabled    = true;
  sendBtn.textContent = '…';

  // Thinking bubble
  const thinking = tutorAddBubble('ai', '…', true);

  try {
    const system = `You are a friendly, encouraging GCSE Maths tutor helping a student work through the AQA ${year} Higher ${paperLabel}.
The student will describe a question they are stuck on. Your job is to:
1. Identify the topic and method needed.
2. Give a clear, numbered step-by-step method to solve it.
3. Show a worked example using the numbers in their question.
4. End with a short AQA exam tip.
Keep your response concise and easy to follow. Never just give the final answer without showing the method. Use plain text — no markdown headings.`;

    const reply = await callClaude(system,
      tutorHistory.map(m => `${m.role === 'user' ? 'Student' : 'Tutor'}: ${m.content}`).join('\n\n')
    );

    thinking.remove();
    tutorAddBubble('ai', reply);
    tutorHistory.push({ role: 'assistant', content: reply });
  } catch (err) {
    thinking.remove();
    tutorAddBubble('ai', `Sorry, I couldn't connect right now. Check your internet and try again. (${err.message})`);
  }

  sendBtn.disabled    = false;
  sendBtn.textContent = 'Send';
}

function tutorAddBubble(role, text, isThinking = false) {
  const messages = document.getElementById('tutor-chat-messages');
  const div = document.createElement('div');
  div.className = `tutor-msg tutor-msg--${role === 'user' ? 'user' : 'ai'}${isThinking ? ' tutor-msg--thinking' : ''}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
}

function toggleSub(id) {
  const sub = document.getElementById('sub-' + id);
  if (!sub) return;
  const isOpen = sub.classList.contains('open');
  document.querySelectorAll('.subtopics').forEach(s => s.classList.remove('open'));
  if (!isOpen) sub.classList.add('open');
}

// ── LOAD TOPIC ────────────────────────────────────────────────────────────────
async function loadTopic(area, subtopic) {
  state.topic          = area;
  state.subtopic       = subtopic;
  state.currentQuestion = null;
  state.sessionCorrect  = 0;
  state.sessionTotal    = 0;
  state.usedQuestions.delete(subtopic); // reset bank for this topic

  // Show content screen
  document.getElementById('home-screen').style.display     = 'none';
  document.getElementById('content-screen').style.display  = 'block';
  document.getElementById('cheatsheet-screen').style.display = 'none';
  document.getElementById('content-title').textContent = subtopic;

  // Reset UI
  document.getElementById('explain-card').innerHTML  = loadingHtml('Loading lesson…');
  document.getElementById('question-card').innerHTML = loadingHtml('Generating question…');
  document.getElementById('q-btn-row').style.display = 'none';
  document.getElementById('feedback-card').className = 'feedback-card';
  document.getElementById('session-correct').textContent = '0';
  document.getElementById('session-total').textContent   = '0';

  switchTab('learn');
  generateLesson();
}

// ── TABS ──────────────────────────────────────────────────────────────────────
function switchTab(name) {
  document.querySelectorAll('.learn-panel, .question-panel, .cheatsheet-panel')
    .forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn')
    .forEach(b => b.classList.remove('active'));

  const panel = document.getElementById('tab-' + name);
  if (panel) panel.classList.add('active');

  const tabMap = { learn: 0, questions: 1, 'cheatsheet-inline': 2 };
  const tabs = document.querySelectorAll('.tab-btn');
  if (tabs[tabMap[name]] !== undefined) tabs[tabMap[name]].classList.add('active');

  if (name === 'questions' && !state.currentQuestion) newQuestion();
  if (name === 'cheatsheet-inline') renderInlineFormulas();
}

// ── LESSON ────────────────────────────────────────────────────────────────────
async function generateLesson() {
  const card = document.getElementById('explain-card');

  // Show The GCSE Maths Tutor video if one exists for this topic
  const videoId = getTopicVideo(state.subtopic);
  const videoSection = document.getElementById('video-section');
  if (videoId) {
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
    document.getElementById('video-iframe').src = embedUrl;
    document.getElementById('video-yt-link').href = `https://www.youtube.com/watch?v=${videoId}`;
    videoSection.style.display = 'block';
  } else {
    document.getElementById('video-iframe').src = '';
    videoSection.style.display = 'none';
  }

  // Use the pre-written lesson bank first
  const bankedLesson = getLessonContent(state.subtopic);
  if (bankedLesson) {
    card.innerHTML = `<div class="ai-content">${bankedLesson}</div>`;
    markTopicDone(state.subtopic);
    return;
  }

  // Fall back to AI if topic not in bank
  card.innerHTML = loadingHtml('Generating lesson…');

  const system = `You are an expert AQA GCSE Maths tutor helping a student target grade 4–5 on the AQA Higher paper.
AQA assessment context:
- AO1 (50% of marks): standard procedures — students must recall and apply methods accurately.
- AO2 (25%): reasoning and communication — "Show that", "Explain why", "Prove".
- AO3 (25%): problem solving — multi-step real-life or unfamiliar contexts.
Write clear, friendly explanations using ONLY these HTML tags:
- <h3> for main headings
- <h4> for subheadings
- <p> for paragraphs
- <ul><li> for bullet lists
- <div class="formula">formula here</div> for key formulae
- <div class="tip"><strong>AQA Exam Tip:</strong> tip here</div> for exam tips
- <code> for short inline maths expressions
- <strong> for key terms
Do NOT use markdown. Do NOT use any other HTML tags.
Structure: what it is → step-by-step method → worked example → AQA exam tip.
Where relevant, note whether a topic appears on Paper 1 (non-calculator) or Papers 2 & 3 (calculator).
Keep it focused, practical and encouraging.`;

  const user = `Write a lesson on: ${state.subtopic} (part of ${state.topic} in AQA GCSE Higher Maths).
Target: student aiming for grade 4–5. Reference AQA-style question phrasing where useful.`;

  try {
    const html = await callClaude(system, user);
    card.innerHTML = `<div class="ai-content">${html}</div>`;
    markTopicDone(state.subtopic);
  } catch (err) {
    card.innerHTML = errorHtml(err.message, 'generateLesson()');
  }
}

// ── QUESTIONS ─────────────────────────────────────────────────────────────────
async function newQuestion() {
  const card     = document.getElementById('question-card');
  const feedCard = document.getElementById('feedback-card');
  feedCard.className = 'feedback-card';
  document.getElementById('q-btn-row').style.display = 'none';
  state.currentQuestion = null;

  // Try the built-in question bank first
  if (!state.usedQuestions.has(state.subtopic)) {
    state.usedQuestions.set(state.subtopic, new Set());
  }
  const used = state.usedQuestions.get(state.subtopic);
  const banked = getBankQuestion(state.subtopic, used);

  if (banked) {
    used.add(banked.index);
    state.currentQuestion = banked.question;
    renderQuestion(banked.question);
    return;
  }

  // Bank exhausted — fall back to AI generation
  card.innerHTML = loadingHtml('Generating question…');

  const diffOptions = [
    { label: 'Foundation (Grade 3–4)', key: 'foundation' },
    { label: 'Grade 4',                key: 'grade4'     },
    { label: 'Grade 5',                key: 'grade5'     },
  ];
  const diff = diffOptions[Math.floor(Math.random() * diffOptions.length)];

  const system = `You are an AQA GCSE Maths examiner writing authentic exam questions.
Respond ONLY with valid JSON — no markdown fences, no preamble.
Required fields:
{
  "difficulty": "${diff.label}",
  "marks": 2,
  "question": "full question text",
  "answer": "full correct answer with working",
  "hints": ["hint 1", "hint 2"]
}
marks must be 2, 3 or 4.
AQA style rules:
- Use AQA command words: "Work out", "Calculate", "Find", "Show that", "Prove that", "Explain", "Estimate", "Give a reason".
- Include the mark allocation in square brackets at the end of the question text, e.g. [3 marks].
- Avoid trivially simple numbers; use realistic exam-style values.`;

  const user = `Write a ${diff.label} AQA-style exam question on: ${state.subtopic}.
Use realistic numbers and AQA command words. Do not include the answer in the question text.`;

  try {
    const q = await callClaudeJSON(system, user);
    q.diffKey = diff.key;
    state.currentQuestion = q;
    renderQuestion(q);
  } catch (err) {
    card.innerHTML = errorHtml(err.message, 'newQuestion()');
  }
}

function renderQuestion(q) {
  const diffMeta = {
    foundation: { label: 'Foundation', cls: 'diff-foundation' },
    grade4:     { label: 'Grade 4',    cls: 'diff-grade4'     },
    grade5:     { label: 'Grade 5',    cls: 'diff-grade5'     },
  };
  const d = diffMeta[q.diffKey] || diffMeta.grade4;

  const hintHtml = q.hints?.length
    ? `<details style="margin-top:10px">
        <summary style="cursor:pointer;font-size:0.82rem;color:var(--muted);font-family:'DM Mono',monospace">
          Show hint
        </summary>
        <div style="margin-top:8px;padding:10px;background:rgba(79,195,247,0.06);border-radius:8px;font-size:0.85rem;color:var(--accent2)">
          ${q.hints[0]}
        </div>
      </details>`
    : '';

  document.getElementById('question-card').innerHTML = `
    <div class="question-meta">
      <span class="difficulty-badge ${d.cls}">${d.label}</span>
      <span class="marks-badge">[${q.marks || 3} marks]</span>
    </div>
    <div class="question-text">${q.question}</div>
    <textarea class="answer-area" id="user-answer"
      placeholder="Write your working and answer here…"></textarea>
    ${hintHtml}
  `;

  document.getElementById('q-btn-row').style.display = 'flex';
  document.getElementById('submit-btn').disabled = false;
}

async function submitAnswer() {
  const userAnswer = document.getElementById('user-answer')?.value?.trim();
  if (!userAnswer) { alert('Please write your answer first.'); return; }

  const btn = document.getElementById('submit-btn');
  btn.disabled    = true;
  btn.textContent = 'Marking…';

  const feedCard = document.getElementById('feedback-card');
  feedCard.className = 'feedback-card showing';
  feedCard.innerHTML = loadingHtml('Marking your answer…');

  state.sessionTotal++;
  state.totalQs++;
  document.getElementById('session-total').textContent = state.sessionTotal;

  const system = `You are an AQA GCSE Maths examiner marking a student's answer using AQA mark scheme conventions. Be encouraging.
Respond ONLY with valid JSON — no markdown fences, no preamble.
Required fields:
{
  "correct": true | false,
  "awarded_marks": <number>,
  "total_marks": <number>,
  "verdict": "one sentence verdict",
  "explanation": "worked solution using only <strong>, <br>, <code> HTML tags",
  "exam_tip": "one practical AQA exam tip"
}
AQA marking rules:
- Award M marks (method) if the student shows a correct method even with an arithmetic slip.
- Award A marks (accuracy) only if the method mark was earned and the answer is correct.
- Award B marks for correct independent statements (e.g. correct formula, correct reading from a graph).
- Do NOT penalise the same error twice (follow-through marking).
- If the student scores at least half the available marks, set correct: true.`;

  const user = `Question: ${state.currentQuestion.question}
Correct answer: ${state.currentQuestion.answer}
Student's answer: ${userAnswer}
Total marks available: ${state.currentQuestion.marks}`;

  try {
    const result = await callClaudeJSON(system, user);

    const halfMarks = Math.ceil(state.currentQuestion.marks / 2);
    const passed    = result.correct || (result.awarded_marks >= halfMarks);

    if (passed) {
      state.sessionCorrect++;
      document.getElementById('session-correct').textContent = state.sessionCorrect;
    }

    feedCard.className = 'feedback-card ' + (passed ? 'correct' : 'incorrect');
    feedCard.innerHTML = `
      <div class="feedback-header ${passed ? 'correct-h' : 'incorrect-h'}">
        ${passed ? '✓' : '✗'} ${result.verdict}
        <span style="margin-left:auto;font-family:'DM Mono',monospace;font-size:0.8rem">
          ${result.awarded_marks ?? 0}/${result.total_marks ?? state.currentQuestion.marks} marks
        </span>
      </div>
      <div class="feedback-body">
        <strong>Worked Solution:</strong><br>${result.explanation}
        <div class="tip-box" style="margin-top:14px">
          <strong>💡 Exam Tip:</strong> ${result.exam_tip}
        </div>
      </div>
      <div class="btn-row" style="margin-top:14px">
        <button class="btn-primary" onclick="newQuestion()">Next Question →</button>
      </div>
    `;
  } catch (err) {
    feedCard.innerHTML = errorHtml(err.message, 'submitAnswer()');
  }

  btn.disabled    = false;
  btn.textContent = 'Submit Answer';
}

// ── FORMULA RENDERING ─────────────────────────────────────────────────────────
function renderFormulaGrid(containerId, formulas) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = formulas.map(f => `
    <div class="formula-item" style="${f.mem ? 'border-color:rgba(240,192,64,0.3)' : ''}">
      <div class="formula-name">${f.name}</div>
      <div class="formula-expr">${f.expr}</div>
      <div class="formula-note" style="${f.mem ? 'color:var(--accent)' : ''}">${f.note}</div>
    </div>
  `).join('');
}

function renderInlineFormulas() {
  const relevant = getFormulasForTopic(state.subtopic);
  const container = document.getElementById('inline-formulas');
  if (!container) return;
  container.innerHTML = `<div class="formula-grid" id="inline-formula-grid"></div>`;
  renderFormulaGrid('inline-formula-grid', relevant);
}

// ── PROGRESS ──────────────────────────────────────────────────────────────────
function markTopicDone(subtopic) {
  state.completedTopics.add(subtopic);
  const dot = document.getElementById('dot-' + subtopic);
  if (dot) dot.classList.add('done');
  updateProgress();
}

function updateProgress() {
  const done  = state.completedTopics.size;
  const total = TOTAL_TOPICS;
  document.getElementById('stat-done').textContent  = done;
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-qs').textContent    = state.totalQs;
  document.getElementById('overall-bar').style.width = Math.round(done / total * 100) + '%';
}

// ── HELPERS ───────────────────────────────────────────────────────────────────
function loadingHtml(msg = 'Loading…') {
  return `<div class="loading-msg"><div class="spinner"></div> ${msg}</div>`;
}

function errorHtml(message, retryFn) {
  return `
    <p style="color:var(--danger);font-size:0.9rem">
      Error: ${message}
      <button class="btn-secondary" onclick="${retryFn}"
        style="margin-left:10px;padding:6px 14px;font-size:0.8rem">
        Try again
      </button>
    </p>`;
}
