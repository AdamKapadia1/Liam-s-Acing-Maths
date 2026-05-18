// ── THE GCSE MATHS TUTOR VIDEO IDs ───────────────────────────────────────────
// Real YouTube video IDs from The GCSE Maths Tutor channel (@TheGCSEMathsTutor).
// Embed URL: https://www.youtube.com/embed/<id>

const TOPIC_VIDEOS = {
  // Number
  'Integers & Decimals':              'K5FhK9Nc4bY', // Recurring Decimals as Fractions (Higher Only)
  'Fractions':                        'uXFMQvKnt4w', // Fractions, Decimals & Percentages Conversions
  'Percentages':                      'kLqvFDgdOKI', // Increase or Decrease by a Percentage
  'Powers & Roots':                   'wWsg1VVOhT4', // Laws of Indices – Part 1
  'Standard Form':                    '45eSDkQYGPE', // Standard Form Conversions
  'Factors, Multiples & Primes':      'lZaHbU_HGr0', // Product of Prime Factors
  'Rounding & Bounds':                'k8vPdaYARIY', // Bounds – Upper & Lower Bound Calculations
  'Indices & Surds':                  'Nfa9LxBzFr0', // Negative and Fractional Indices (Higher Only)

  // Algebra
  'Simplifying & Expanding':          'Bhjo0x5ow5k', // Expanding Double Brackets
  'Factorising':                      'CPzWzl3U5Gg', // Factorising Quadratics
  'Solving Linear Equations':         'BMOwI2Bidm0', // Solving Linear Equations
  'Straight-Line Graphs':             'bOzYAhsO-g4', // Straight-Line Graphs (y = mx + c)
  'Quadratic Equations':              'q64qaxLAR9U', // How to Use the Quadratic Formula
  'Simultaneous Equations':           '2jrgXG0XsCc', // Simultaneous Equations
  'Sequences':                        'uGLY2R-0TpU', // Nth Term of Linear Sequences
  'Inequalities':                     'YJYhHQGopMQ', // Solving Inequalities & Number Lines

  // Ratio & Proportion
  'Ratio':                            'bIzZWMWoq8c', // Ratio (all types)
  'Direct & Inverse Proportion':      'lAkRjwMo7NY', // Direct and Inverse Proportion
  'Speed, Distance & Time':           'vLyLlsR6Z7s', // Speed, Distance & Time (Non-Calculator)
  'Compound Interest & Growth':       'iKW1JYEVas4', // Compound Interest (Higher & Foundation)

  // Geometry
  'Angle Rules':                      'vDUetnTBwSo', // Angles in Parallel Lines
  'Area & Perimeter':                 'W4VvmdU5KK0', // Area & Perimeter of Compound Shapes
  'Circles':                          'YVSrlLcX4pQ', // Circles – Area & Circumference
  'Volume & Surface Area':            'YsFmwUQADvQ', // Volume & Surface Area of a Cylinder
  'Pythagoras Theorem':               'JCG4HHGVqiY', // Pythagoras Theorem
  'Trigonometry':                     'LhswRR8jmks', // Trigonometry – SOHCAHTOA for Angles
  'Transformations':                  'I9aRKwuq7s4', // Enlargements – Drawing & Describing
  'Similarity & Congruence':          'jP_GgZfXYiQ', // Congruent Triangle Proof

  // Statistics & Probability
  'Averages & Range':                 'X98Q4iK3IfA', // Averages from Frequency Tables
  'Charts & Graphs':                  'Dq-QHTyRNcc', // Histograms – Drawing & Interpreting
  'Scatter Graphs':                   'lNIy2P0Pmag', // Scatter Graphs
  'Probability':                      'h78FV6dRETI', // All of Probability (Foundation & Higher)
  'Tree Diagrams':                    'FSYxsHbKWzo', // Probability Trees – Dependent Events
  'Cumulative Frequency & Box Plots': 'heeYqUnkCV8', // Box Plots & Cumulative Frequency Graphs
};

function getTopicVideo(subtopic) {
  return TOPIC_VIDEOS[subtopic] || null;
}
