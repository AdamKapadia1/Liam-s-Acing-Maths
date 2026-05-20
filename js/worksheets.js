// ── WORKSHEET GENERATOR ────────────────────────────────────────────────────

const WS_SECS = 25 * 60;
let wsSecsLeft   = WS_SECS;
let wsInterval   = null;
let wsRunning    = false;

// ── TIMER ──────────────────────────────────────────────────────────────────
function wsTimerToggle() {
  const btn = document.getElementById('ws-timer-btn');
  if (wsRunning) {
    clearInterval(wsInterval);
    wsRunning = false;
    btn.textContent = 'Resume';
  } else {
    if (wsSecsLeft <= 0) wsTimerReset();
    wsRunning = true;
    btn.textContent = 'Pause';
    wsInterval = setInterval(() => {
      wsSecsLeft--;
      wsTimerRender();
      if (wsSecsLeft <= 0) {
        clearInterval(wsInterval);
        wsRunning = false;
        btn.textContent = 'Time Up!';
        document.getElementById('ws-timer-wrap').classList.add('pomo-done');
      }
    }, 1000);
  }
}

function wsTimerReset() {
  clearInterval(wsInterval);
  wsRunning  = false;
  wsSecsLeft = WS_SECS;
  const btn = document.getElementById('ws-timer-btn');
  if (btn) btn.textContent = 'Start';
  const wrap = document.getElementById('ws-timer-wrap');
  if (wrap) wrap.classList.remove('pomo-done', 'pomo-low');
  wsTimerRender();
}

function wsTimerRender() {
  const m = String(Math.floor(wsSecsLeft / 60)).padStart(2, '0');
  const s = String(wsSecsLeft % 60).padStart(2, '0');
  const el = document.getElementById('ws-timer-time');
  if (el) el.textContent = `${m}:${s}`;
  const wrap = document.getElementById('ws-timer-wrap');
  if (wrap) wrap.classList.toggle('pomo-low', wsSecsLeft <= 300 && wsSecsLeft > 0);
}

// ── GENERATE ───────────────────────────────────────────────────────────────
function generateWorksheet() {
  const topic = document.getElementById('ws-topic-select').value;
  if (!topic) {
    alert('Please select a topic first.');
    return;
  }

  const bank = QUESTION_BANK[topic] || [];
  if (!bank.length) {
    alert('No questions available for this topic yet.');
    return;
  }

  const diffOrder = { foundation: 0, grade4: 1, grade5: 2, grade6: 3 };
  const sorted = [...bank].sort((a, b) =>
    (diffOrder[a.diffKey] ?? 1) - (diffOrder[b.diffKey] ?? 1)
  );
  const questions = sorted.slice(0, 10);
  const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);

  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  // Build question HTML
  let qsHtml = '';
  questions.forEach((q, i) => {
    const n = i + 1;
    const lineCount = q.marks <= 2 ? 4 : q.marks === 3 ? 7 : 10;
    const linesHtml = Array(lineCount)
      .fill('<div class="ws-ans-line"></div>')
      .join('');
    qsHtml += `
      <div class="ws-question">
        <div class="ws-q-row">
          <span class="ws-q-num">Q${n}.</span>
          <span class="ws-q-text">${q.question}</span>
        </div>
        <div class="ws-ans-space">${linesHtml}</div>
      </div>`;
  });

  // Build mark scheme HTML
  let msHtml = '';
  questions.forEach((q, i) => {
    msHtml += `
      <div class="ws-ms-row">
        <span class="ws-ms-qn">Q${i + 1}</span>
        <span class="ws-ms-body">${q.answer}</span>
        <span class="ws-ms-m">[${q.marks} mark${q.marks !== 1 ? 's' : ''}]</span>
      </div>`;
  });

  const output = document.getElementById('ws-output');
  output.innerHTML = `
    <div class="ws-sheet" id="ws-sheet">

      <div class="ws-sheet-header">
        <div class="ws-sheet-title">${topic}</div>
        <div class="ws-sheet-sub">AQA GCSE Higher Mathematics — Practice Worksheet</div>
        <div class="ws-sheet-info">
          <div class="ws-info-name">
            <span class="ws-info-label">Name:</span>
            <span class="ws-info-underline"></span>
          </div>
          <div class="ws-info-row">
            <span class="ws-info-pill">📅 ${today}</span>
            <span class="ws-info-pill">⏱ Time Allowed: 25 mins</span>
            <span class="ws-info-pill">✏️ Total Marks: ${totalMarks}</span>
          </div>
        </div>
        <p class="ws-instructions">Answer <strong>all</strong> questions. Show all working clearly.
          Marks are awarded for method, not just the answer.</p>
      </div>

      <div class="ws-questions">${qsHtml}</div>

      <div class="ws-tally">
        <span class="ws-tally-label">Total</span>
        <span class="ws-tally-box">_____ / ${totalMarks}</span>
      </div>

    </div>

    <div class="ws-action-bar no-print">
      <button class="ws-action-btn ws-btn-scheme" onclick="toggleMarkScheme()">
        Show Mark Scheme
      </button>
      <button class="ws-action-btn ws-btn-print" onclick="window.print()">
        🖨 Print Worksheet
      </button>
    </div>

    <div class="ws-markscheme" id="ws-markscheme" style="display:none">
      <h3 class="ws-ms-heading">Mark Scheme — ${topic}</h3>
      ${msHtml}
    </div>`;

  output.style.display = 'block';
  output.scrollIntoView({ behavior: 'smooth', block: 'start' });
  wsTimerReset();
}

function toggleMarkScheme() {
  const ms  = document.getElementById('ws-markscheme');
  const btn = document.querySelector('.ws-btn-scheme');
  if (!ms || !btn) return;
  const hidden = ms.style.display === 'none';
  ms.style.display  = hidden ? 'block' : 'none';
  btn.textContent   = hidden ? 'Hide Mark Scheme' : 'Show Mark Scheme';
}
