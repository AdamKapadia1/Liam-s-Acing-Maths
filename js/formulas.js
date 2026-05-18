// ── FORMULA DATA ──────────────────────────────────────────────────────────────
// mem: true  = must memorise (not given in exam)
// mem: false = provided on the AQA formula sheet
// tags: used to filter relevant formulae per topic

const FORMULAS = [
  {
    name: 'Area of a Triangle',
    expr: 'A = ½ × base × height',
    note: 'Given in exam ✓',
    mem: false,
    tags: ['area', 'geometry', 'triangles']
  },
  {
    name: 'Area of a Trapezium',
    expr: 'A = ½(a + b)h',
    note: 'Given in exam ✓',
    mem: false,
    tags: ['area', 'geometry']
  },
  {
    name: 'Area of a Circle',
    expr: 'A = πr²',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['area', 'circles', 'geometry']
  },
  {
    name: 'Circumference of a Circle',
    expr: 'C = 2πr = πd',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['circles', 'geometry', 'perimeter']
  },
  {
    name: 'Volume of a Prism',
    expr: 'V = cross-sectional area × length',
    note: 'Given in exam ✓',
    mem: false,
    tags: ['volume', 'geometry']
  },
  {
    name: 'Volume of a Cylinder',
    expr: 'V = πr²h',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['volume', 'circles', 'geometry']
  },
  {
    name: 'Volume of a Cone',
    expr: 'V = ⅓πr²h',
    note: 'Given in exam ✓',
    mem: false,
    tags: ['volume', 'geometry']
  },
  {
    name: 'Volume of a Sphere',
    expr: 'V = 4/3 πr³',
    note: 'Given in exam ✓',
    mem: false,
    tags: ['volume', 'geometry']
  },
  {
    name: 'Surface Area of a Cylinder',
    expr: 'SA = 2πrh + 2πr²',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['surface area', 'circles', 'geometry']
  },
  {
    name: "Pythagoras' Theorem",
    expr: 'a² + b² = c²',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['pythagoras', 'geometry', 'triangles']
  },
  {
    name: 'Trigonometry — SOH',
    expr: 'sin θ = opposite / hypotenuse',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['trigonometry', 'geometry', 'angles']
  },
  {
    name: 'Trigonometry — CAH',
    expr: 'cos θ = adjacent / hypotenuse',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['trigonometry', 'geometry', 'angles']
  },
  {
    name: 'Trigonometry — TOA',
    expr: 'tan θ = opposite / adjacent',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['trigonometry', 'geometry', 'angles']
  },
  {
    name: 'Quadratic Formula',
    expr: 'x = (−b ± √(b²−4ac)) / 2a',
    note: 'Given in exam ✓',
    mem: false,
    tags: ['quadratic', 'algebra']
  },
  {
    name: 'Compound Interest',
    expr: 'A = P(1 + r/100)ⁿ',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['interest', 'ratio', 'growth']
  },
  {
    name: 'Speed',
    expr: 'Speed = Distance ÷ Time',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['speed', 'ratio', 'measures']
  },
  {
    name: 'Density',
    expr: 'Density = Mass ÷ Volume',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['density', 'ratio', 'measures']
  },
  {
    name: 'Pressure',
    expr: 'Pressure = Force ÷ Area',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['pressure', 'ratio', 'measures']
  },
  {
    name: 'Gradient of a Line',
    expr: 'm = (y₂ − y₁) / (x₂ − x₁)',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['algebra', 'graphs', 'straight-line']
  },
  {
    name: 'Equation of a Straight Line',
    expr: 'y = mx + c',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['algebra', 'graphs', 'straight-line']
  },
  {
    name: 'Arc Length',
    expr: 'L = (θ / 360) × 2πr',
    note: '⚠️ Must memorise (Higher)',
    mem: true,
    tags: ['circles', 'arc', 'geometry']
  },
  {
    name: 'Sector Area',
    expr: 'A = (θ / 360) × πr²',
    note: '⚠️ Must memorise (Higher)',
    mem: true,
    tags: ['circles', 'sector', 'geometry']
  },
  {
    name: 'Sine Rule',
    expr: 'a / sinA = b / sinB = c / sinC',
    note: 'Given in exam ✓',
    mem: false,
    tags: ['trigonometry', 'geometry', 'angles']
  },
  {
    name: 'Cosine Rule',
    expr: 'a² = b² + c² − 2bc cosA',
    note: 'Given in exam ✓',
    mem: false,
    tags: ['trigonometry', 'geometry', 'angles']
  },
  {
    name: 'nth Term (Arithmetic)',
    expr: 'nth term = a + (n − 1)d',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['algebra', 'sequences']
  },
  {
    name: 'Percentage Change',
    expr: '% change = (change / original) × 100',
    note: '⚠️ Must memorise',
    mem: true,
    tags: ['percentages', 'number']
  },
];

/**
 * Get formulas relevant to a given subtopic string.
 * Falls back to showing all formulas if no match.
 * @param {string} subtopic
 * @returns {Array}
 */
function getFormulasForTopic(subtopic) {
  if (!subtopic) return FORMULAS;
  const lower = subtopic.toLowerCase();
  const relevant = FORMULAS.filter(f =>
    f.tags.some(tag => lower.includes(tag) || tag.includes(lower.split(' ')[0]))
  );
  return relevant.length >= 2 ? relevant : FORMULAS;
}
