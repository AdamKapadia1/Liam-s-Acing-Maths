// ── TOPIC DATA ────────────────────────────────────────────────────────────────
// All GCSE Higher subtopics organised by area.
// higherOnly: true = only appears on Higher paper (★ in sidebar)

const TOPICS = {
  number: {
    label: 'Number',
    icon: '🔢',
    subtopics: [
      { id: 'Integers & Decimals',         higherOnly: false },
      { id: 'Fractions',                   higherOnly: false },
      { id: 'Percentages',                 higherOnly: false },
      { id: 'Powers & Roots',              higherOnly: false },
      { id: 'Standard Form',               higherOnly: false },
      { id: 'Factors, Multiples & Primes', higherOnly: false },
      { id: 'Rounding & Bounds',           higherOnly: false },
      { id: 'Indices & Surds',             higherOnly: true  },
    ]
  },
  algebra: {
    label: 'Algebra',
    icon: '📐',
    subtopics: [
      { id: 'Simplifying & Expanding',  higherOnly: false },
      { id: 'Factorising',              higherOnly: false },
      { id: 'Solving Linear Equations', higherOnly: false },
      { id: 'Straight-Line Graphs',     higherOnly: false },
      { id: 'Quadratic Equations',      higherOnly: true  },
      { id: 'Simultaneous Equations',   higherOnly: true  },
      { id: 'Sequences',                higherOnly: false },
      { id: 'Inequalities',             higherOnly: false },
    ]
  },
  ratio: {
    label: 'Ratio & Proportion',
    icon: '⚖️',
    subtopics: [
      { id: 'Ratio',                       higherOnly: false },
      { id: 'Direct & Inverse Proportion', higherOnly: false },
      { id: 'Speed, Distance & Time',      higherOnly: false },
      { id: 'Compound Interest & Growth',  higherOnly: true  },
    ]
  },
  geometry: {
    label: 'Geometry & Measures',
    icon: '📏',
    subtopics: [
      { id: 'Angle Rules',           higherOnly: false },
      { id: 'Area & Perimeter',      higherOnly: false },
      { id: 'Circles',               higherOnly: false },
      { id: 'Volume & Surface Area', higherOnly: false },
      { id: 'Pythagoras Theorem',    higherOnly: false },
      { id: 'Trigonometry',          higherOnly: false },
      { id: 'Transformations',       higherOnly: false },
      { id: 'Similarity & Congruence', higherOnly: false },
    ]
  },
  stats: {
    label: 'Statistics & Probability',
    icon: '📊',
    subtopics: [
      { id: 'Averages & Range',                  higherOnly: false },
      { id: 'Charts & Graphs',                   higherOnly: false },
      { id: 'Scatter Graphs',                    higherOnly: false },
      { id: 'Probability',                       higherOnly: false },
      { id: 'Tree Diagrams',                     higherOnly: false },
      { id: 'Cumulative Frequency & Box Plots',  higherOnly: true  },
    ]
  }
};

// Total topic count (used in progress calc)
const TOTAL_TOPICS = Object.values(TOPICS)
  .reduce((acc, area) => acc + area.subtopics.length, 0);
