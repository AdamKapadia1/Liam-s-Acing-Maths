// ── APP STATE ─────────────────────────────────────────────────────────────────
const state = {
  topic:           null,
  subtopic:        null,
  currentQuestion: null,
  sessionCorrect:  0,
  sessionTotal:    0,
  totalQs:         0,
  totalCorrect:    0,
  completedTopics: new Set(),
  usedQuestions:   new Map(),
  papersOpened:    new Set(),
  questionsPerTopic: {},             // { subtopic: { total, correct, history: [1,0,…] } }
};

// ── POMODORO TIMER ────────────────────────────────────────────────────────────
const POMO_SECS = 25 * 60;
let pomoSecsLeft = POMO_SECS;
let pomoInterval = null;
let pomoRunning  = false;

function pomoToggle() {
  if (pomoRunning) {
    clearInterval(pomoInterval);
    pomoRunning = false;
    document.getElementById('pomo-btn').textContent = 'Resume';
  } else {
    if (pomoSecsLeft <= 0) pomoReset();
    pomoRunning = true;
    document.getElementById('pomo-btn').textContent = 'Pause';
    pomoInterval = setInterval(() => {
      pomoSecsLeft--;
      pomoRender();
      if (pomoSecsLeft <= 0) {
        clearInterval(pomoInterval);
        pomoRunning = false;
        document.getElementById('pomo-btn').textContent = 'Done!';
        document.getElementById('pomo-wrap').classList.add('pomo-done');
        setTimeout(() => document.getElementById('pomo-wrap').classList.remove('pomo-done'), 4000);
      }
    }, 1000);
  }
}

function pomoReset() {
  clearInterval(pomoInterval);
  pomoRunning  = false;
  pomoSecsLeft = POMO_SECS;
  document.getElementById('pomo-btn').textContent = 'Start';
  document.getElementById('pomo-wrap').classList.remove('pomo-done', 'pomo-low');
  pomoRender();
}

function pomoRender() {
  const m = String(Math.floor(pomoSecsLeft / 60)).padStart(2, '0');
  const s = String(pomoSecsLeft % 60).padStart(2, '0');
  document.getElementById('pomo-time').textContent = `${m}:${s}`;
  document.getElementById('pomo-wrap').classList.toggle('pomo-low', pomoSecsLeft <= 300 && pomoSecsLeft > 0);
}

// ── PERSISTENCE ───────────────────────────────────────────────────────────────
function saveProgress() {
  localStorage.setItem('lam_progress', JSON.stringify({
    completedTopics:   [...state.completedTopics],
    totalQs:           state.totalQs,
    totalCorrect:      state.totalCorrect,
    papersOpened:      [...state.papersOpened],
    questionsPerTopic: state.questionsPerTopic,
  }));
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem('lam_progress') || '{}');
    if (saved.completedTopics) {
      state.completedTopics = new Set(saved.completedTopics);
      state.completedTopics.forEach(t => {
        const dot = document.getElementById('dot-' + t);
        if (dot) dot.classList.add('done');
        const btn = document.querySelector(`.subtopic-btn[onclick*="'${t}'"]`);
        if (btn) btn.classList.add('done');
      });
    }
    if (saved.totalQs)           state.totalQs           = saved.totalQs;
    if (saved.totalCorrect)      state.totalCorrect       = saved.totalCorrect;
    if (saved.papersOpened)      state.papersOpened       = new Set(saved.papersOpened);
    if (saved.questionsPerTopic) state.questionsPerTopic  = saved.questionsPerTopic;
  } catch {}
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  showHome();
  updateProgress();
});

// ── NAVIGATION ────────────────────────────────────────────────────────────────
function allScreensOff() {
  ['home-screen','content-screen','cheatsheet-screen','past-papers-screen','progress-screen']
    .forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
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

  // Track paper and update tutor context label
  state.papersOpened.add(`${year}-${paper}`);
  saveProgress();
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
    const system = `You are a friendly, encouraging GCSE Maths tutor. The student is currently working through the AQA ${year} Higher ${paperLabel}.

IMPORTANT RULES:
- You cannot see the PDF, so you do not know what any specific question says.
- If the student mentions a question number (e.g. "question 3") without describing it, DO NOT say you don't have the paper. Instead say: "I'm working through the ${year} ${paperLabel} with you! Just paste the question text here or describe it — the numbers given, what you need to find, and any shapes or diagrams — and I'll walk you through it step by step."
- Once the student describes a question, always:
  1. Name the topic and method needed.
  2. Give a clear numbered step-by-step method.
  3. Show a worked example using the exact numbers they gave.
  4. End with one short AQA exam tip.
- Keep responses concise and easy to follow.
- Never give just the final answer without the method.
- Use plain text only — no markdown headings or asterisks.`;

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

  // Highlight active subtopic in sidebar
  document.querySelectorAll('.subtopic-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`.subtopic-btn[onclick*="'${subtopic}'"]`);
  if (activeBtn) activeBtn.classList.add('active');

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
  const tcb = document.getElementById('topic-complete-banner');
  if (tcb) tcb.style.display = 'none';

  renderSparkline(subtopic);
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
    showMarkCompleteBtn();
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
    showMarkCompleteBtn();
  } catch (err) {
    card.innerHTML = errorHtml(err.message, 'generateLesson()');
  }
}

function showMarkCompleteBtn() {
  const btn = document.getElementById('mark-complete-btn');
  if (!btn) return;
  const alreadyDone = state.completedTopics.has(state.subtopic);
  btn.style.display  = 'inline-flex';
  btn.textContent    = alreadyDone ? '✓ Completed' : 'Mark as Complete';
  btn.disabled       = alreadyDone;
  btn.className      = alreadyDone ? 'btn-complete btn-complete--done' : 'btn-complete';
}

function manualMarkComplete() {
  markTopicDone(state.subtopic);
  showMarkCompleteBtn();
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

  // Bank exhausted — use AI for unlimited generation
  card.innerHTML = loadingHtml('Generating question…');

  const diffOptions = [
    { label: 'Grade 4',  key: 'grade4'     },
    { label: 'Grade 4',  key: 'grade4'     }, // weighted slightly
    { label: 'Grade 5',  key: 'grade5'     },
    { label: 'Grade 5',  key: 'grade5'     }, // weighted slightly
    { label: 'Grade 6',  key: 'grade6'     },
    { label: 'Grade 7',  key: 'grade7'     },
  ];
  const diff = diffOptions[Math.floor(Math.random() * diffOptions.length)];

  // Track AI-generated question summaries per subtopic to avoid repetition
  if (!state.aiQuestionHistory) state.aiQuestionHistory = {};
  if (!state.aiQuestionHistory[state.subtopic]) state.aiQuestionHistory[state.subtopic] = [];
  const history = state.aiQuestionHistory[state.subtopic];
  const recentSummary = history.slice(-5).join(' | ');

  // Rotate question type angles per topic to ensure variety
  const questionAngles = {
    'Pythagoras\' Theorem': ['find the hypotenuse', 'find a shorter side', '3D Pythagoras', 'coordinates context', 'worded real-life scenario', 'show that proof'],
    'Trigonometry': ['find a missing side using sin/cos/tan', 'find a missing angle', 'worded bearing problem', 'elevation and depression', 'multi-step with area'],
    'Quadratic Equations': ['solve by factorising', 'solve using the quadratic formula', 'complete the square', 'form and solve from a worded context', 'find intersections'],
    'Simultaneous Equations': ['linear pair eliminate method', 'substitution method', 'one linear one quadratic', 'worded problem set up and solve'],
    'Straight Line Graphs': ['find gradient and y-intercept', 'find equation from two points', 'parallel/perpendicular lines', 'midpoint of a line segment', 'distance between two points'],
    'Fractions': ['add/subtract with different denominators', 'multiply mixed numbers', 'divide fractions', 'fraction of an amount', 'fraction worded problem', 'reverse percentage via fractions'],
    'Percentages': ['percentage increase/decrease', 'reverse percentage', 'compound interest', 'simple interest', 'percentage change as fraction/decimal', 'VAT/sale context'],
    'Algebra': ['expand and simplify double brackets', 'factorise fully', 'solve linear equation', 'form equation from worded context', 'algebraic proof', 'substitution into formula'],
    'Ratio & Proportion': ['divide in a ratio', 'best-value comparison', 'direct proportion', 'inverse proportion', 'map scale', 'recipe scaling'],
    'Probability': ['tree diagram', 'Venn diagram', 'conditional probability', 'relative frequency', 'listing outcomes', 'combined events'],
    'Statistics': ['find mean from frequency table', 'interpret cumulative frequency', 'compare two data sets using averages/range', 'estimate median from grouped data', 'draw/interpret histogram'],
    'Circle Theorems': ['angle in semicircle', 'angles in same segment', 'cyclic quadrilateral', 'tangent-radius', 'alternate segment theorem', 'two-chord problem'],
    'Vectors': ['find a resultant vector', 'show two vectors are parallel', 'midpoint using vectors', 'proof of collinearity', 'magnitude of a vector'],
    'Surds': ['simplify surd', 'expand surd brackets', 'rationalise denominator', 'solve equation involving surds', 'show that proof with surds'],
  };
  const angles = questionAngles[state.subtopic];
  const angleHint = angles
    ? `Vary the question angle. Suggested angle for this question (choose one): ${angles[Math.floor(Math.random() * angles.length)]}.`
    : 'Vary the question style from previous questions.';

  const system = `You are an experienced AQA GCSE Mathematics examiner with 15 years of paper-writing experience.
Your task: write a single, original ${diff.label}-level exam question on the topic "${state.subtopic}" for AQA GCSE Higher tier.

Respond ONLY with a single valid JSON object. No markdown, no fences, no preamble, no explanation — just raw JSON.

JSON schema (all fields required):
{
  "difficulty": "${diff.label}",
  "marks": <integer 2–5>,
  "question": "<full question text>",
  "answer": "<full mark-scheme style answer with all working shown>",
  "hints": ["<hint 1>", "<hint 2>"]
}

AQA examiner rules you MUST follow:
1. Use exactly one AQA Higher command word to open the question: "Work out", "Calculate", "Find", "Show that", "Prove that", "Explain why", "Estimate", "Give a reason for your answer", "Write down", "Simplify".
2. End the question text with the mark allocation in square brackets, e.g. [3 marks].
3. Use realistic, exam-quality numbers — not trivially simple. Avoid whole-number-only answers for calculation questions.
4. For "Show that" or "Prove that" questions, supply the target result in the question.
5. Mark allocation guide: 2 marks = single-step or simple two-step; 3 marks = multi-step with method marks; 4–5 marks = extended multi-step or proof.
6. The answer field must mirror an AQA mark scheme: show all method steps, award-worthy intermediate values, and the final answer.
7. Hints must be process hints, not giveaways (e.g. "Start by finding the gradient using rise ÷ run", not "the answer is 3").
8. Do NOT include the answer or working inside the question field.
9. Write a completely new question — it must differ substantially from these recent questions on this topic: ${recentSummary || 'none yet'}.`;

  const user = `Write a ${diff.label} AQA GCSE Higher question on: ${state.subtopic}.
${angleHint}
Make the numbers and context realistic and varied. The student is aiming for grades 4–7.`;

  try {
    const q = await callClaudeJSON(system, user);
    q.diffKey = diff.key;
    // Store a brief summary to prevent future repetition
    const summary = (q.question || '').substring(0, 80);
    history.push(summary);
    if (history.length > 20) history.shift(); // keep last 20 per topic
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

  // Per-topic tracking
  if (!state.questionsPerTopic[state.subtopic]) {
    state.questionsPerTopic[state.subtopic] = { total: 0, correct: 0 };
  }
  state.questionsPerTopic[state.subtopic].total++;
  saveProgress();

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

    const tq = state.questionsPerTopic[state.subtopic];
    if (!tq.history) tq.history = [];
    tq.history.push(passed ? 1 : 0);
    if (tq.history.length > 5) tq.history.shift();

    if (passed) {
      state.sessionCorrect++;
      state.totalCorrect++;
      tq.correct++;
      document.getElementById('session-correct').textContent = state.sessionCorrect;
    }
    renderSparkline(state.subtopic);
    saveProgress();

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

// ── SPARKLINE ─────────────────────────────────────────────────────────────────
function renderSparkline(subtopic) {
  const el = document.getElementById('sparkline-dots');
  if (!el) return;
  const tq = state.questionsPerTopic[subtopic];
  const history = tq?.history || [];
  if (!history.length) { el.innerHTML = '<span class="spark-empty">no attempts yet</span>'; return; }
  el.innerHTML = history.map(v =>
    `<span class="spark-dot ${v ? 'spark-pass' : 'spark-fail'}" title="${v ? 'Correct' : 'Incorrect'}"></span>`
  ).join('');
}

// ── STREAK ────────────────────────────────────────────────────────────────────
function getStreak() {
  const today     = new Date().toDateString();
  const yesterday = new Date(Date.now() - 864e5).toDateString();
  let { streak = 0, lastDay = '' } = JSON.parse(localStorage.getItem('lam_streak') || '{}');
  if (lastDay === today)      return streak;
  if (lastDay === yesterday)  streak++;
  else                        streak = 1;
  localStorage.setItem('lam_streak', JSON.stringify({ streak, lastDay: today }));
  return streak;
}

// ── PROGRESS ──────────────────────────────────────────────────────────────────
function markTopicDone(subtopic) {
  const alreadyDone = state.completedTopics.has(subtopic);
  state.completedTopics.add(subtopic);
  const dot = document.getElementById('dot-' + subtopic);
  if (dot) dot.classList.add('done');
  // Also mark the sidebar subtopic-btn as done
  const btn = document.querySelector(`.subtopic-btn[onclick*="'${subtopic}'"]`);
  if (btn) btn.classList.add('done');
  saveProgress();
  updateProgress();
  if (!alreadyDone) showTopicCompleteModal(subtopic);
}

function showTopicCompleteModal(subtopic) {
  const streak = getStreak();
  const msgs = [
    'Smashed it! 💪', 'Keep going — you\'re on fire!',
    'Nailed it! One step closer to that grade 5.',
    'Excellent work! Keep it up. 🎓',
    'That\'s another one ticked off! 🎉',
  ];
  const msg = msgs[Math.floor(Math.random() * msgs.length)];
  const banner = document.getElementById('topic-complete-banner');
  if (!banner) return;
  document.getElementById('tcb-title').textContent = `${subtopic} complete!`;
  document.getElementById('tcb-msg').textContent   = msg;
  document.getElementById('tcb-streak').textContent = streak >= 2 ? `🔥 ${streak}-day streak!` : '';
  banner.style.display = 'flex';
  banner.classList.remove('tcb-visible');
  setTimeout(() => banner.classList.add('tcb-visible'), 10);
}

function updateProgress() {
  const done  = state.completedTopics.size;
  const total = TOTAL_TOPICS;
  document.getElementById('stat-done').textContent  = done;
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-qs').textContent    = state.totalQs;
  document.getElementById('overall-bar').style.width = Math.round(done / total * 100) + '%';
}

// ── PROGRESS SCREEN ───────────────────────────────────────────────────────────
function showProgress() {
  allScreensOff();
  document.getElementById('progress-screen').style.display = 'block';
  renderProgressScreen();
}

function renderProgressScreen() {
  const totalTopics  = TOTAL_TOPICS;
  const doneTopic    = state.completedTopics.size;
  const totalQs      = state.totalQs;
  const totalCorrect = state.totalCorrect;
  const accuracy     = totalQs > 0 ? Math.round(totalCorrect / totalQs * 100) : null;
  const papersCount  = state.papersOpened.size;

  // Overall bar
  const pct = Math.round(doneTopic / totalTopics * 100);
  document.getElementById('pg-bar-fill').style.width = pct + '%';
  document.getElementById('pg-pct').textContent      = pct + '%';

  // Stats
  document.getElementById('pg-topics').textContent   = `${doneTopic}/${totalTopics}`;
  document.getElementById('pg-qs').textContent        = totalQs;
  document.getElementById('pg-accuracy').textContent  = accuracy !== null ? accuracy + '%' : '—';
  document.getElementById('pg-papers').textContent    = papersCount;

  // Category breakdown
  const catEl = document.getElementById('pg-categories');
  catEl.innerHTML = '';
  Object.entries(TOPICS).forEach(([, area]) => {
    const total = area.subtopics.length;
    const done  = area.subtopics.filter(s => state.completedTopics.has(s.id)).length;
    const pct   = Math.round(done / total * 100);

    const section = document.createElement('div');
    section.className = 'pg-cat';
    section.innerHTML = `
      <div class="pg-cat-header">
        <span class="pg-cat-icon">${area.icon}</span>
        <span class="pg-cat-label">${area.label}</span>
        <span class="pg-cat-count">${done}/${total}</span>
      </div>
      <div class="pg-cat-bar-wrap">
        <div class="pg-cat-bar-fill" style="width:${pct}%"></div>
      </div>
      <div class="pg-topics-grid">
        ${area.subtopics.map(s => {
          const tq = state.questionsPerTopic[s.id];
          const studied = state.completedTopics.has(s.id);
          const sid = s.id.replace(/'/g, "\\'");
          return `<div class="pg-topic ${studied ? 'pg-topic--done' : ''}">
            <span class="pg-topic-tick">${studied ? '✓' : '○'}</span>
            <span class="pg-topic-name">${s.id}</span>
            ${tq ? `<span class="pg-topic-qs">${tq.correct}/${tq.total}</span>` : ''}
            ${(studied || tq) ? `<button class="pg-topic-reset" onclick="resetTopic('${sid}')" title="Reset this topic">↺</button>` : ''}
          </div>`;
        }).join('')}
      </div>`;
    catEl.appendChild(section);
  });
}

function resetTopic(subtopic) {
  if (!confirm(`Reset progress for "${subtopic}"?`)) return;
  state.completedTopics.delete(subtopic);
  delete state.questionsPerTopic[subtopic];
  const dot = document.getElementById('dot-' + subtopic);
  if (dot) dot.classList.remove('done');
  const btn = document.querySelector(`.subtopic-btn[onclick*="'${subtopic}'"]`);
  if (btn) btn.classList.remove('done');
  if (state.subtopic === subtopic) renderSparkline(subtopic);
  saveProgress();
  updateProgress();
  renderProgressScreen();
}

function resetProgress() {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  localStorage.removeItem('lam_progress');
  state.completedTopics.clear();
  state.totalQs      = 0;
  state.totalCorrect = 0;
  state.papersOpened.clear();
  state.questionsPerTopic = {};
  document.querySelectorAll('.progress-dot').forEach(d => d.classList.remove('done'));
  updateProgress();
  renderProgressScreen();
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
