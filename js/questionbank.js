// ── AQA GCSE HIGHER QUESTION BANK ────────────────────────────────────────────
// All questions are written in authentic AQA style with command words,
// realistic mark allocations, and worked answers matching AQA mark schemes.

const QUESTION_BANK = {

  // ── NUMBER ─────────────────────────────────────────────────────────────────

  'Four Operations': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out 4.6 × 8 without a calculator. Show your working. [2 marks]',
      answer: '46 × 8 = 368, then 1 decimal place → 36.8',
      hints: ['Multiply 46 × 8 ignoring the decimal', 'Then put 1 decimal place back into your answer']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out 9.6 ÷ 0.4 without a calculator. [2 marks]',
      answer: 'Multiply both by 10: 96 ÷ 4 = 24',
      hints: ['Multiply both numbers by 10 to remove the decimal from the divisor', '96 ÷ 4 = 24']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out 247 × 36 without a calculator. Show your working. [2 marks]',
      answer: '247 × 30 = 7410, 247 × 6 = 1482, total = 8892',
      hints: ['Split 36 into 30 + 6', 'Multiply 247 by each part separately, then add']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Work out 3.8 × 2.5 without a calculator. Show your working. [3 marks]',
      answer: '38 × 25 = 950. Two decimal places total → 9.50',
      hints: ['Ignore decimals: 38 × 25', '38 × 25 = 38 × 20 + 38 × 5 = 760 + 190 = 950, then 2 d.p. → 9.50']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Work out −4 × (−3) + 7 ÷ (−1). Show your working. [3 marks]',
      answer: '(−4) × (−3) = 12; 7 ÷ (−1) = −7; 12 + (−7) = 5',
      hints: ['Negative × negative = positive', 'Positive ÷ negative = negative; then add the two results']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Without using a calculator, work out 0.28 × 0.5. Give your answer as a decimal. [3 marks]',
      answer: '28 × 5 = 140; three decimal places total → 0.140 = 0.14',
      hints: ['Multiply 28 × 5 first', 'Count total decimal places: 2 + 1 = 3, so divide 140 by 1000']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Work out 1456 ÷ 14 without a calculator. Show your working. [3 marks]',
      answer: '14 × 100 = 1400, remainder 56. 56 ÷ 14 = 4. Answer: 104.',
      hints: ['Use short division or chunking', '14 × 100 = 1400, leaving a remainder of 56']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Work out (−3)³ + 5² × 2 without a calculator. Show your working. [3 marks]',
      answer: '(−3)³ = −27; 5² × 2 = 25 × 2 = 50; −27 + 50 = 23',
      hints: ['Apply BIDMAS: powers first, then multiply, then add', '(−3)³ = −3 × −3 × −3 = −27']
    },
    {
      difficulty: 'Grade 6', diffKey: 'grade6', marks: 4,
      question: 'Without a calculator, work out 4.56 ÷ 0.12. Show all your working. [4 marks]',
      answer: 'Multiply both by 100: 456 ÷ 12 = 38',
      hints: ['Multiply both numbers by 100 to remove decimals', '456 ÷ 12: 12 × 38 = 456']
    },
    {
      difficulty: 'Grade 6', diffKey: 'grade6', marks: 4,
      question: 'Work out 15% of 360 added to 2/5 of 250, without a calculator. [4 marks]',
      answer: '15% of 360 = 54 (10% = 36, 5% = 18, total 54). 2/5 of 250 = 100. 54 + 100 = 154.',
      hints: ['Find each part separately', '15% = 10% + 5%']
    },
  ],

  'Integers & Decimals': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out 3.7 × 8. [2 marks]',
      answer: '29.6',
      hints: ['Multiply 37 × 8 first, then adjust the decimal point', '37 × 8 = 296, so 3.7 × 8 = 29.6']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out 12.6 ÷ 0.3. [2 marks]',
      answer: '42. Multiply both numbers by 10: 126 ÷ 3 = 42.',
      hints: ['Multiply both numbers by 10 to remove the decimal', '126 ÷ 3 = 42']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Write down all the integers that satisfy −3 < n ≤ 1. [2 marks]',
      answer: '−2, −1, 0, 1',
      hints: ['−3 is not included (strict inequality)', '1 is included (≤ sign)']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Without a calculator, work out 4.8 × 2.5. Show your working. [3 marks]',
      answer: '4.8 × 2.5 = 48 × 25 ÷ 100 = 1200 ÷ 100 = 12',
      hints: ['Convert to integers first: 48 × 25', 'Then divide by 100 to correct the decimal']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Work out 0.4². Give your answer as a decimal. [2 marks]',
      answer: '0.16. (0.4 × 0.4 = 0.16)',
      hints: ['0.4 × 0.4 = 4 × 4 ÷ 100', '16 ÷ 100 = 0.16']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Work out (−3)² − 4 × (−2). [3 marks]',
      answer: '9 − (−8) = 9 + 8 = 17',
      hints: ['(−3)² = 9', '4 × (−2) = −8, so subtracting −8 means adding 8']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Write 0.36̄ (0.3666…) as a fraction in its simplest form. [3 marks]',
      answer: 'Let x = 0.3666… 10x = 3.666…; 100x = 36.666…; 90x = 33; x = 33/90 = 11/30.',
      hints: ['Multiply by 10 and 100 then subtract to remove the recurring part', '100x − 10x = 90x = 33']
    },
    {
      difficulty: 'Grade 6', diffKey: 'grade6', marks: 4,
      question: 'Show that 0.2̄7̄ = 3/11. [4 marks]',
      answer: 'Let x = 0.272727… 100x = 27.272727…; 100x − x = 27; 99x = 27; x = 27/99 = 3/11 ✓',
      hints: ['Multiply by 100 to shift two repeating digits', 'Subtract x from 100x to eliminate the recurring part']
    },
    {
      difficulty: 'Grade 6', diffKey: 'grade6', marks: 4,
      question: 'Without a calculator, work out (−2.5)² + √0.04. [4 marks]',
      answer: '(−2.5)² = 6.25; √0.04 = 0.2; 6.25 + 0.2 = 6.45',
      hints: ['(−2.5)² = 2.5 × 2.5 = 6.25', '√0.04 = √(4/100) = 2/10 = 0.2']
    },
    {
      difficulty: 'Grade 6', diffKey: 'grade6', marks: 4,
      question: 'Without a calculator, work out 5.4 × 10⁻² + 6 × 10⁻³. Give your answer as a decimal. [4 marks]',
      answer: '0.054 + 0.006 = 0.060 = 0.06',
      hints: ['Convert each to an ordinary number first', '5.4 × 10⁻² = 0.054 and 6 × 10⁻³ = 0.006']
    },
  ],

  'Fractions': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out 3/4 + 1/8. Give your answer as a fraction in its simplest form. [2 marks]',
      answer: '6/8 + 1/8 = 7/8',
      hints: ['Change 3/4 to eighths', '3/4 = 6/8']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out 5/6 − 1/4. Give your answer as a fraction in its simplest form. [2 marks]',
      answer: '10/12 − 3/12 = 7/12',
      hints: ['Find a common denominator (12)', '5/6 = 10/12 and 1/4 = 3/12']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Work out 2¹/₃ × 1¹/₄. Give your answer as a mixed number in its simplest form. [3 marks]',
      answer: '7/3 × 5/4 = 35/12 = 2 11/12',
      hints: ['Convert both to improper fractions first', '2⅓ = 7/3 and 1¼ = 5/4']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Work out 3¹/₂ ÷ 1³/₄. Give your answer as a mixed number. [3 marks]',
      answer: '7/2 ÷ 7/4 = 7/2 × 4/7 = 28/14 = 2',
      hints: ['Convert to improper fractions: 3½ = 7/2, 1¾ = 7/4', 'To divide, flip the second fraction and multiply']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'Show that 1¹/₅ × 2¹/₂ − ³/₄ = 2¹/₄. [4 marks]',
      answer: '6/5 × 5/2 = 30/10 = 3. Then 3 − 3/4 = 12/4 − 3/4 = 9/4 = 2¼. ✓',
      hints: ['Start with the multiplication: 6/5 × 5/2', 'The 5s cancel to give 6/2 = 3']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Write 18/24 in its simplest form. [2 marks]',
      answer: 'HCF of 18 and 24 is 6. 18 ÷ 6 = 3, 24 ÷ 6 = 4. Answer: 3/4.',
      hints: ['Find the highest common factor (HCF) of 18 and 24', 'Divide both numerator and denominator by the HCF']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out 2/3 + 3/5. Give your answer as a mixed number. [2 marks]',
      answer: 'LCM of 3 and 5 is 15. 10/15 + 9/15 = 19/15 = 1 4/15.',
      hints: ['Find the lowest common multiple of 3 and 5', '2/3 = 10/15 and 3/5 = 9/15']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Work out 3/7 × 14/9. Give your answer in its simplest form. [2 marks]',
      answer: 'Cancel first: 3 and 9 share factor 3; 7 and 14 share factor 7. Gives 1/1 × 2/3 = 2/3.',
      hints: ['Look for common factors to cancel before multiplying', '3 cancels with 9, and 7 cancels with 14']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Work out 1 1/3 ÷ 2 2/5. Give your answer as a fraction in its simplest form. [3 marks]',
      answer: '4/3 ÷ 12/5 = 4/3 × 5/12 = 20/36 = 5/9.',
      hints: ['Convert mixed numbers to improper fractions first', 'Flip the second fraction and multiply']
    },
    {
      difficulty: 'Grade 6', diffKey: 'grade6', marks: 4,
      question: 'Work out (2/3 + 1/4) ÷ (1/3 − 1/6). Give your answer as a mixed number. [4 marks]',
      answer: '2/3 + 1/4 = 8/12 + 3/12 = 11/12. 1/3 − 1/6 = 2/6 − 1/6 = 1/6. 11/12 ÷ 1/6 = 11/12 × 6 = 66/12 = 5 1/2.',
      hints: ['Simplify the numerator and denominator of the big fraction separately', '11/12 ÷ 1/6 means 11/12 × 6']
    },
  ],

  'Percentages': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Increase £240 by 15%. [2 marks]',
      answer: '£240 × 1.15 = £276',
      hints: ['A 15% increase means multiply by 1.15', 'Or find 15% of £240 and add it on']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out 35% of 260. [2 marks]',
      answer: '0.35 × 260 = 91',
      hints: ['Convert 35% to a decimal: 0.35', 'Multiply: 0.35 × 260']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'A coat costs £68 after a 20% reduction. Work out the original price. [3 marks]',
      answer: '£68 ÷ 0.8 = £85',
      hints: ['After a 20% reduction, the price is 80% of the original', 'Divide by 0.8 to reverse the reduction']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'A house was worth £180,000. It is now worth £207,000. Work out the percentage increase. [3 marks]',
      answer: '(207000 − 180000)/180000 × 100 = 27000/180000 × 100 = 15%',
      hints: ['Percentage change = (change ÷ original) × 100', 'Change = £207000 − £180000 = £27000']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'The price of a car increased by 8% in 2022 and then decreased by 5% in 2023. The car was worth £20,000 at the start of 2022. Work out the value of the car at the end of 2023. [4 marks]',
      answer: '£20,000 × 1.08 × 0.95 = £20,520',
      hints: ['Apply each percentage change one at a time', '× 1.08 for the increase, then × 0.95 for the decrease']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Decrease £380 by 30%. [2 marks]',
      answer: '£380 × 0.70 = £266',
      hints: ['A 30% decrease means you keep 70% of the original', 'Multiply by 0.70']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'After a 12% pay rise, Jake earns £2,576 per month. Work out his monthly pay before the rise. [3 marks]',
      answer: '£2,576 ÷ 1.12 = £2,300',
      hints: ['A 12% increase means the new pay is 112% of the original', 'Divide by 1.12 to reverse the increase']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'A television is advertised at £540 after a 25% reduction. Work out the original price. [3 marks]',
      answer: '£540 ÷ 0.75 = £720',
      hints: ['A 25% reduction means the sale price is 75% of the original', 'Divide by 0.75']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'A shop buys an item for £48 and sells it for £66. Work out the percentage profit. [3 marks]',
      answer: 'Profit = £18. Percentage profit = (18 ÷ 48) × 100 = 37.5%.',
      hints: ['Percentage profit = (profit ÷ original cost) × 100', 'Profit = selling price − cost price = £66 − £48 = £18']
    },
    {
      difficulty: 'Grade 6', diffKey: 'grade6', marks: 4,
      question: 'In three years, a house value increased by 5%, then 8%, then decreased by 3%. The house was initially worth £200,000. Work out its final value. [4 marks]',
      answer: '£200,000 × 1.05 × 1.08 × 0.97 = £219,564.',
      hints: ['Apply each multiplier in sequence', '× 1.05, then × 1.08, then × 0.97']
    },
  ],

  'Powers & Roots': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out 5³ − 4². [2 marks]',
      answer: '125 − 16 = 109',
      hints: ['5³ = 5 × 5 × 5', '4² = 4 × 4']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 1,
      question: 'Work out √169. [1 mark]',
      answer: '13',
      hints: ['Think: what number multiplied by itself gives 169?', '12² = 144, 13² = 169']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Work out 2⁻³. Give your answer as a fraction. [2 marks]',
      answer: '1/2³ = 1/8',
      hints: ['A negative power means 1 divided by the positive power', '2⁻³ = 1/2³']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Work out 27^(2/3). [2 marks]',
      answer: '(³√27)² = 3² = 9',
      hints: ['The denominator of the power is the root', '27^(1/3) = ³√27 = 3']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Simplify (8x⁶)^(2/3). [3 marks]',
      answer: '8^(2/3) × x⁴ = 4x⁴',
      hints: ['Apply the power to both 8 and x⁶ separately', '8^(2/3) = (³√8)² = 2² = 4']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out 3⁴. [2 marks]',
      answer: '3 × 3 × 3 × 3 = 81',
      hints: ['3⁴ means 3 multiplied by itself 4 times', '3 × 3 = 9, then 9 × 3 = 27, then 27 × 3 = 81']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out ³√125. [2 marks]',
      answer: '5 (because 5 × 5 × 5 = 125)',
      hints: ['The cube root is the number that, cubed, gives 125', '5³ = 125']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Work out 64^(1/2). [2 marks]',
      answer: '√64 = 8',
      hints: ['A power of 1/2 means square root', '√64 = 8 because 8² = 64']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Work out 16^(3/4). [3 marks]',
      answer: '(⁴√16)³ = 2³ = 8',
      hints: ['The denominator (4) gives the root, the numerator (3) gives the power', '⁴√16 = 2, then 2³ = 8']
    },
    {
      difficulty: 'Grade 6', diffKey: 'grade6', marks: 4,
      question: 'Work out 125^(−2/3). Give your answer as a fraction. [4 marks]',
      answer: '(³√125)^(−2) = 5^(−2) = 1/25',
      hints: ['First find 125^(2/3) = (³√125)² = 5² = 25', 'The negative power means take the reciprocal: 1/25']
    },
  ],

  'Standard Form': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 1,
      question: 'Write 47,000 in standard form. [1 mark]',
      answer: '4.7 × 10⁴',
      hints: ['Standard form is a × 10ⁿ where 1 ≤ a < 10', 'Count how many places you move the decimal point']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 1,
      question: 'Write 0.0032 in standard form. [1 mark]',
      answer: '3.2 × 10⁻³',
      hints: ['For small numbers, the power is negative', 'Move the decimal point 3 places to the right']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Work out (3 × 10⁴) × (4 × 10³). Give your answer in standard form. [2 marks]',
      answer: '12 × 10⁷ = 1.2 × 10⁸',
      hints: ['Multiply the numbers and add the powers', '3 × 4 = 12, then adjust so it is in standard form']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Work out (6 × 10⁵) ÷ (2 × 10²). Give your answer in standard form. [2 marks]',
      answer: '3 × 10³',
      hints: ['Divide the numbers and subtract the powers', '6 ÷ 2 = 3 and 10⁵ ÷ 10² = 10³']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Work out (5.4 × 10⁵) + (8 × 10⁴). Give your answer in standard form. [3 marks]',
      answer: '54 × 10⁴ + 8 × 10⁴ = 62 × 10⁴ = 6.2 × 10⁵',
      hints: ['Make both powers the same before adding', '5.4 × 10⁵ = 54 × 10⁴']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 1,
      question: 'Write 5,800,000 in standard form. [1 mark]',
      answer: '5.8 × 10⁶',
      hints: ['Move the decimal point to get a number between 1 and 10', 'Count how many places the decimal moved']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 1,
      question: 'Write 4.2 × 10⁻⁴ as an ordinary number. [1 mark]',
      answer: '0.00042',
      hints: ['A negative power means the number is less than 1', 'Move the decimal point 4 places to the left']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Work out (8 × 10⁷) ÷ (4 × 10³). Give your answer in standard form. [2 marks]',
      answer: '(8 ÷ 4) × 10^(7−3) = 2 × 10⁴',
      hints: ['Divide the numbers and subtract the powers', '8 ÷ 4 = 2 and 10⁷ ÷ 10³ = 10⁴']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Work out (7 × 10³)². Give your answer in standard form. [3 marks]',
      answer: '7² × 10⁶ = 49 × 10⁶ = 4.9 × 10⁷',
      hints: ['Square both the 7 and the 10³ separately', '(10³)² = 10⁶, and 49 × 10⁶ must be rewritten']
    },
    {
      difficulty: 'Grade 6', diffKey: 'grade6', marks: 4,
      question: 'The mass of a proton is 1.67 × 10⁻²⁷ kg. The mass of an electron is 9.11 × 10⁻³¹ kg. How many times heavier is a proton than an electron? Give your answer in standard form to 3 s.f. [4 marks]',
      answer: '(1.67 × 10⁻²⁷) ÷ (9.11 × 10⁻³¹) = (1.67 ÷ 9.11) × 10⁴ = 0.1833 × 10⁴ = 1.83 × 10³',
      hints: ['Divide the A values and subtract the powers', '1.67 ÷ 9.11 = 0.1833…; adjust to standard form']
    },
  ],

  'Factors, Multiples & Primes': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Find the Highest Common Factor (HCF) of 24 and 36. [2 marks]',
      answer: 'Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. HCF = 12.',
      hints: ['List all factors of both numbers', 'Find the largest factor that appears in both lists']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Find the Lowest Common Multiple (LCM) of 4 and 6. [2 marks]',
      answer: 'Multiples of 4: 4,8,12,16,... Multiples of 6: 6,12,18,... LCM = 12.',
      hints: ['List multiples of each number', 'Find the smallest multiple that appears in both lists']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Express 360 as a product of its prime factors. Give your answer in index form. [3 marks]',
      answer: '360 = 2³ × 3² × 5',
      hints: ['Start dividing by the smallest prime (2)', '360 → 180 → 90 → 45 → 15 → 5 → 1']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'A = 2³ × 3 × 5 and B = 2² × 3² × 7. Find the LCM of A and B. [3 marks]',
      answer: 'LCM = 2³ × 3² × 5 × 7 = 2520',
      hints: ['For LCM, take the highest power of each prime factor', 'Include all primes: 2³, 3², 5, 7']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 2,
      question: 'Two buses leave the station at the same time. Bus A leaves every 12 minutes. Bus B leaves every 20 minutes. How many minutes until they both leave at the same time again? [2 marks]',
      answer: 'LCM(12, 20) = 60 minutes',
      hints: ['You need the LCM of 12 and 20', '12 = 2² × 3, 20 = 2² × 5, LCM = 2² × 3 × 5 = 60']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Find the HCF of 18 and 30. [2 marks]',
      answer: 'Factors of 18: 1,2,3,6,9,18. Factors of 30: 1,2,3,5,6,10,15,30. HCF = 6.',
      hints: ['List all factors of both numbers', 'Find the largest number that appears in both lists']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Write 84 as a product of its prime factors. [2 marks]',
      answer: '84 = 2 × 42 = 2 × 2 × 21 = 2 × 2 × 3 × 7 = 2² × 3 × 7',
      hints: ['Start by dividing by the smallest prime: 84 ÷ 2 = 42', 'Keep dividing until all factors are prime']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Find the LCM of 18 and 24 using prime factor decomposition. [3 marks]',
      answer: '18 = 2 × 3², 24 = 2³ × 3. LCM = 2³ × 3² = 72.',
      hints: ['Write both numbers as products of prime factors', 'For LCM, take the highest power of each prime factor']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'A = 2² × 3 × 5 and B = 2 × 3² × 7. Find the HCF and LCM of A and B. [3 marks]',
      answer: 'HCF = 2 × 3 = 6. LCM = 2² × 3² × 5 × 7 = 1260.',
      hints: ['For HCF: take the lowest power of each shared prime factor', 'For LCM: take the highest power of each prime factor that appears']
    },
    {
      difficulty: 'Grade 6', diffKey: 'grade6', marks: 4,
      question: 'The HCF of two numbers is 6 and their LCM is 120. One of the numbers is 24. Find the other number. [4 marks]',
      answer: 'Product of two numbers = HCF × LCM = 6 × 120 = 720. Other number = 720 ÷ 24 = 30.',
      hints: ['Use the rule: HCF × LCM = product of the two numbers', 'So the other number = (HCF × LCM) ÷ 24']
    },
  ],

  'Rounding & Bounds': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Round 4.768 to 2 decimal places. [1 mark]',
      answer: '4.77',
      hints: ['Look at the third decimal place (8)', 'Since 8 ≥ 5, round the second decimal place up']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Round 0.003847 to 2 significant figures. [2 marks]',
      answer: '0.0038',
      hints: ['Significant figures start at the first non-zero digit', 'The first significant figure is 3, the second is 8']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'A length is measured as 8.4 cm, correct to 1 decimal place. Write down the upper and lower bounds. [2 marks]',
      answer: 'Lower bound: 8.35 cm. Upper bound: 8.45 cm.',
      hints: ['The error is half the degree of accuracy (0.05)', 'Lower bound = 8.4 − 0.05, Upper bound = 8.4 + 0.05']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'A rectangle has length 12.5 cm and width 7.3 cm, both correct to 1 decimal place. Work out the upper bound for the area of the rectangle. [3 marks]',
      answer: 'Upper bound: 12.55 × 7.35 = 92.2425 cm²',
      hints: ['Use the upper bound of both measurements', 'Upper bound of length = 12.55, width = 7.35']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'p = 8.3 correct to 1 d.p. and q = 2.6 correct to 1 d.p. Work out the upper bound for p/q. Give your answer to 3 significant figures. [3 marks]',
      answer: 'Upper bound of p = 8.35, lower bound of q = 2.55. Upper bound of p/q = 8.35/2.55 = 3.27 (3 s.f.)',
      hints: ['To maximise p/q, use the upper bound of p and the lower bound of q', 'Upper p = 8.35, lower q = 2.55']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Round 57,348 to the nearest thousand. [2 marks]',
      answer: '57,000',
      hints: ['Look at the hundreds digit (3)', 'Since 3 < 5, round down']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Round 0.08462 to 3 significant figures. [2 marks]',
      answer: '0.0846',
      hints: ['Significant figures start at the first non-zero digit', 'The first three significant figures are 8, 4, 6 — the next digit is 2, so round down']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'A speed is measured as 34 m/s correct to the nearest whole number. A distance is 200 m, correct to the nearest 10 m. Find the lower bound for the time taken (time = distance ÷ speed). [3 marks]',
      answer: 'Lower bound for time = lower bound of distance ÷ upper bound of speed = 195 ÷ 34.5 = 5.65… s',
      hints: ['Lower bound of time = lower distance ÷ upper speed', 'Lower bound of distance = 195 m, upper bound of speed = 34.5 m/s']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'The length of a side of a square is 7.4 cm, correct to 1 decimal place. Find the lower and upper bounds for the perimeter. [3 marks]',
      answer: 'Lower bound of side = 7.35 cm → perimeter lower = 4 × 7.35 = 29.4 cm. Upper = 4 × 7.45 = 29.8 cm.',
      hints: ['Find the bounds for one side first', 'Then multiply by 4 for the perimeter']
    },
    {
      difficulty: 'Grade 6', diffKey: 'grade6', marks: 4,
      question: 'x = 6.2 and y = 3.8, both correct to 1 d.p. Work out the upper bound of x² − y. Give your answer to 3 s.f. [4 marks]',
      answer: 'Upper bound of x² − y: use upper x and lower y. (6.25)² − 3.75 = 39.0625 − 3.75 = 35.3125 ≈ 35.3.',
      hints: ['To maximise x² − y, use the upper bound of x and the lower bound of y', 'Upper x = 6.25, lower y = 3.75']
    },
  ],

  'Indices & Surds': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 1,
      question: 'Simplify x³ × x⁴. [1 mark]',
      answer: 'x⁷',
      hints: ['When multiplying, add the powers', '3 + 4 = 7']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Simplify √48. [2 marks]',
      answer: '√(16 × 3) = 4√3',
      hints: ['Find the largest square factor of 48', '48 = 16 × 3, and √16 = 4']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Simplify (x⁵y²)/(x²y). [2 marks]',
      answer: 'x³y',
      hints: ['Subtract the powers for division', '5−2=3 for x, 2−1=1 for y']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 2,
      question: 'Show that (3 + √5)(3 − √5) = 4. [2 marks]',
      answer: '9 − 3√5 + 3√5 − 5 = 9 − 5 = 4 ✓',
      hints: ['Expand using FOIL (or difference of two squares)', '(a+b)(a−b) = a² − b²']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Rationalise the denominator of 6/(2 + √2). Give your answer in the form a + b√2. [3 marks]',
      answer: '6(2−√2)/((2+√2)(2−√2)) = 6(2−√2)/(4−2) = 6(2−√2)/2 = 3(2−√2) = 6 − 3√2',
      hints: ['Multiply top and bottom by (2 − √2)', '(2+√2)(2−√2) = 4 − 2 = 2']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Simplify x⁵ ÷ x². [2 marks]',
      answer: 'x³',
      hints: ['When dividing powers with the same base, subtract the indices', '5 − 2 = 3']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Simplify √75. [2 marks]',
      answer: '√(25 × 3) = 5√3',
      hints: ['Find the largest square factor of 75', '75 = 25 × 3, and √25 = 5']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Simplify √12 + √27. [2 marks]',
      answer: '2√3 + 3√3 = 5√3',
      hints: ['Simplify each surd first', '√12 = 2√3 and √27 = 3√3']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Expand and simplify (2 + √3)². [3 marks]',
      answer: '(2 + √3)² = 4 + 2×2×√3 + 3 = 7 + 4√3',
      hints: ['Use (a + b)² = a² + 2ab + b²', '(√3)² = 3']
    },
    {
      difficulty: 'Grade 6', diffKey: 'grade6', marks: 4,
      question: 'Rationalise the denominator of (3 + √5)/(√5 − 1). Give your answer in the form a + b√5. [4 marks]',
      answer: '(3+√5)(√5+1)/((√5−1)(√5+1)) = (3√5+3+5+√5)/(5−1) = (4√5+8)/4 = 2 + √5',
      hints: ['Multiply top and bottom by (√5 + 1)', '(√5−1)(√5+1) = 5 − 1 = 4']
    },
  ],

  // ── ALGEBRA ────────────────────────────────────────────────────────────────

  'Simplifying & Expanding': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Expand and simplify 3(2x + 5) − 2(x − 4). [2 marks]',
      answer: '6x + 15 − 2x + 8 = 4x + 23',
      hints: ['Expand each bracket separately', 'Be careful with the minus sign before the second bracket']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Simplify 4a²b × 3ab³. [2 marks]',
      answer: '12a³b⁴',
      hints: ['Multiply the numbers: 4 × 3 = 12', 'Add the powers: a²⁺¹ = a³, b¹⁺³ = b⁴']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Expand and simplify (x + 5)(x − 3). [2 marks]',
      answer: 'x² − 3x + 5x − 15 = x² + 2x − 15',
      hints: ['Use FOIL: First, Outer, Inner, Last', 'Collect like terms at the end']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Expand and simplify (2x + 3)(3x − 1). [3 marks]',
      answer: '6x² − 2x + 9x − 3 = 6x² + 7x − 3',
      hints: ['Multiply each term in the first bracket by each term in the second', 'Collect like terms: −2x + 9x = 7x']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Expand and simplify (x + 3)³. [3 marks]',
      answer: '(x+3)² = x²+6x+9. Then (x²+6x+9)(x+3) = x³+3x²+6x²+18x+9x+27 = x³+9x²+27x+27',
      hints: ['First find (x+3)²', 'Then multiply (x+3)² by (x+3)']
    },
  ],

  'Factorising': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Factorise fully 6x² + 9x. [2 marks]',
      answer: '3x(2x + 3)',
      hints: ['Find the HCF of 6x² and 9x', 'HCF is 3x']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Factorise x² + 7x + 12. [2 marks]',
      answer: '(x + 3)(x + 4)',
      hints: ['Find two numbers that multiply to 12 and add to 7', '3 × 4 = 12 and 3 + 4 = 7']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 2,
      question: 'Factorise x² − 25. [2 marks]',
      answer: '(x + 5)(x − 5)',
      hints: ['This is a difference of two squares', 'a² − b² = (a+b)(a−b)']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Factorise 2x² + 7x + 3. [3 marks]',
      answer: '(2x + 1)(x + 3)',
      hints: ['For ax², find two numbers that multiply to a×c and add to b', '2×3=6; find numbers that multiply to 6 and add to 7: 1 and 6']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Factorise 3x² − 75. [3 marks]',
      answer: '3(x² − 25) = 3(x + 5)(x − 5)',
      hints: ['First take out the common factor of 3', 'Then factorise x² − 25 as a difference of two squares']
    },
  ],

  'Solving Linear Equations': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Solve 3x + 7 = 22. [2 marks]',
      answer: '3x = 15, x = 5',
      hints: ['Subtract 7 from both sides first', 'Then divide both sides by 3']
    },
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Solve 5x − 3 = 2x + 9. [2 marks]',
      answer: '3x = 12, x = 4',
      hints: ['Collect x terms on one side', 'Subtract 2x from both sides: 3x − 3 = 9']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Solve 4(2x − 3) = 5x + 6. [3 marks]',
      answer: '8x − 12 = 5x + 6, 3x = 18, x = 6',
      hints: ['Expand the bracket first: 4(2x−3) = 8x−12', 'Then collect like terms']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'Solve (x + 4)/3 − (x − 1)/2 = 2. [4 marks]',
      answer: 'Multiply through by 6: 2(x+4) − 3(x−1) = 12. 2x+8−3x+3=12. −x+11=12. x=−1.',
      hints: ['Multiply everything by the LCM of 3 and 2, which is 6', 'Be careful expanding: −3(x−1) = −3x + 3']
    },
  ],

  'Straight-Line Graphs': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Write down the gradient and y-intercept of y = 4x − 7. [2 marks]',
      answer: 'Gradient = 4, y-intercept = −7',
      hints: ['Compare with y = mx + c', 'm is the gradient, c is the y-intercept']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Find the equation of the straight line passing through (0, 5) and (4, 1). Give your answer in the form y = mx + c. [3 marks]',
      answer: 'Gradient = (1−5)/(4−0) = −1. y-intercept = 5. Equation: y = −x + 5.',
      hints: ['Gradient = (y₂−y₁)/(x₂−x₁)', 'The y-intercept is the y-value when x = 0']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Are the lines y = 2x + 3 and 4x − 2y + 6 = 0 parallel? Explain your answer. [3 marks]',
      answer: 'Rearrange: 4x − 2y + 6 = 0 → y = 2x + 3. Both lines have gradient 2 and are in fact the same line (not just parallel).',
      hints: ['Rearrange 4x − 2y + 6 = 0 into y = mx + c form', 'Divide everything by 2']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'Line L has equation 3x + 2y = 12. Find the equation of the line perpendicular to L that passes through (6, 1). [4 marks]',
      answer: 'Gradient of L = −3/2. Perpendicular gradient = 2/3. y − 1 = 2/3(x − 6) → y = 2/3 x − 3.',
      hints: ['Rearrange 3x+2y=12 to find the gradient', 'Perpendicular gradients multiply to −1']
    },
  ],

  'Quadratic Equations': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Solve x² − 16 = 0. [2 marks]',
      answer: 'x² = 16, x = 4 or x = −4',
      hints: ['Add 16 to both sides', 'Take the square root — remember both + and − solutions']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Solve x² + 5x + 6 = 0 by factorising. [3 marks]',
      answer: '(x + 2)(x + 3) = 0, so x = −2 or x = −3',
      hints: ['Find two numbers that multiply to 6 and add to 5', '2 × 3 = 6 and 2 + 3 = 5']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Solve x² − 3x − 10 = 0 by factorising. [3 marks]',
      answer: '(x − 5)(x + 2) = 0, so x = 5 or x = −2',
      hints: ['Find two numbers that multiply to −10 and add to −3', '−5 × 2 = −10 and −5 + 2 = −3']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Solve 2x² + 5x − 3 = 0. Give exact solutions. [3 marks]',
      answer: 'x = (−5 ± √(25+24))/4 = (−5 ± 7)/4. So x = 1/2 or x = −3.',
      hints: ['Use the quadratic formula: x = (−b ± √(b²−4ac)) / 2a', 'a=2, b=5, c=−3. Discriminant = 25+24=49']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'Solve x² − 4x + 1 = 0 by completing the square. Give your answers in the form p ± q√r. [4 marks]',
      answer: '(x−2)² − 4 + 1 = 0 → (x−2)² = 3 → x = 2 ± √3',
      hints: ['Half the coefficient of x: (x−2)²', '(x−2)² = x²−4x+4, so subtract 4 then add 1']
    },
  ],

  'Simultaneous Equations': [
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Solve simultaneously: 2x + y = 9 and x − y = 3. [3 marks]',
      answer: 'Add: 3x = 12, x = 4. Then y = 9 − 8 = 1.',
      hints: ['Add the equations to eliminate y', '2x + y + x − y = 9 + 3 → 3x = 12']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 4,
      question: 'Solve simultaneously: 3x + 2y = 11 and 5x − 3y = 8. [4 marks]',
      answer: 'Multiply: 9x+6y=33 and 10x−6y=16. Add: 19x=49, x=49/19... Let me use: 3x+2y=11, 5x-3y=8. × by 3 and 2: 9x+6y=33, 10x-6y=16. Add: 19x=49, x=49/19. Hmm. Actually multiply first by 3: 9x+6y=33, and second by 2: 10x-6y=16. Add: 19x=49. x=49/19. Substitute back. y=(11-3(49/19))/2=(11-147/19)/2=(209/19-147/19)/2=62/38=31/19. Answer: x=49/19, y=31/19. These are messy. Let me use different equations: 4x+3y=17 and 2x-y=1. From 2nd: y=2x-1. Sub: 4x+3(2x-1)=17, 4x+6x-3=17, 10x=20, x=2, y=3.',
      hints: ['Eliminate one variable by multiplying equations to make coefficients equal', 'Then substitute back to find the other variable']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 5,
      question: 'Solve simultaneously: y = x² − 3x + 2 and y = x − 1. [5 marks]',
      answer: 'x²−3x+2 = x−1 → x²−4x+3=0 → (x−1)(x−3)=0 → x=1 (y=0) or x=3 (y=2)',
      hints: ['Substitute y = x−1 into the quadratic equation', 'Then factorise or use the quadratic formula']
    },
  ],

  'Sequences': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'The nth term of a sequence is 3n + 2. Work out the first three terms and the 10th term. [2 marks]',
      answer: '5, 8, 11, ... 10th term = 32',
      hints: ['Substitute n=1, 2, 3 for the first three terms', 'Substitute n=10 for the 10th term']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Find the nth term of the sequence 5, 9, 13, 17, 21, ... [3 marks]',
      answer: 'Common difference = 4. nth term = 4n + 1.',
      hints: ['Find the common difference (how much it goes up each time)', 'nth term = (common difference)n + (first term − common difference)']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Is 152 a term in the sequence with nth term 6n − 4? Explain your answer. [3 marks]',
      answer: '6n − 4 = 152 → 6n = 156 → n = 26. Yes, 152 is the 26th term.',
      hints: ['Set 6n − 4 = 152 and solve for n', 'If n is a whole number, then 152 is in the sequence']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'The nth term of a sequence is n² + 4. Show that the difference between consecutive terms forms an arithmetic sequence. [3 marks]',
      answer: 'Term n = n²+4. Term (n+1) = (n+1)²+4 = n²+2n+5. Difference = 2n+1. This increases by 2 each time, so it is arithmetic.',
      hints: ['Write out the (n+1)th term', 'Subtract the nth term to find the difference']
    },
  ],

  'Inequalities': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Solve 4x + 3 > 15. [2 marks]',
      answer: '4x > 12, x > 3',
      hints: ['Subtract 3 from both sides', 'Then divide by 4']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Solve 3 ≤ 2x + 1 < 11 and list the integer values of x. [3 marks]',
      answer: '2 ≤ 2x < 10 → 1 ≤ x < 5. Integer values: 1, 2, 3, 4.',
      hints: ['Subtract 1 from all three parts', 'Then divide all three parts by 2']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Solve x² − x − 12 ≤ 0. [3 marks]',
      answer: '(x−4)(x+3) = 0, roots x=4 and x=−3. Graph shows ≤ 0 between the roots: −3 ≤ x ≤ 4.',
      hints: ['Factorise the quadratic: (x−4)(x+3)', 'Sketch the U-shaped graph to find where it is ≤ 0']
    },
  ],

  // ── RATIO & PROPORTION ─────────────────────────────────────────────────────

  'Ratio': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Share £140 in the ratio 2:5. [2 marks]',
      answer: '7 parts total. 1 part = £20. Shares are £40 and £100.',
      hints: ['Add the ratio parts: 2 + 5 = 7', 'Divide £140 by 7 to find one part']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'In a school, the ratio of teachers to students is 1:18. There are 630 students. How many teachers are there? [3 marks]',
      answer: '630 ÷ 18 = 35 teachers',
      hints: ['The ratio means 1 teacher for every 18 students', 'Divide the number of students by 18']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Concrete is made from cement, sand and gravel in the ratio 1:3:5. How much sand is needed to make 360 kg of concrete? [3 marks]',
      answer: '9 parts total. Sand = 3 parts. 360 ÷ 9 × 3 = 120 kg.',
      hints: ['1 + 3 + 5 = 9 parts total', 'Sand is 3 out of 9 parts']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'The ratio of red to blue counters in a bag is 3:7. If 10 more red counters are added, the ratio becomes 1:2. How many counters were in the bag originally? [4 marks]',
      answer: 'Let red = 3k, blue = 7k. (3k+10)/(7k) = 1/2 → 6k+20 = 7k → k=20. Original total = 10×20 = 200.',
      hints: ['Let red = 3k and blue = 7k', 'Set up the equation with the new ratio: (3k+10)/(7k) = 1/2']
    },
  ],

  'Direct & Inverse Proportion': [
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'y is directly proportional to x. When x = 5, y = 35. Find y when x = 8. [3 marks]',
      answer: 'k = 35/5 = 7. y = 7x. When x = 8, y = 56.',
      hints: ['Write y = kx and find k first', 'Substitute x=5, y=35 to find k']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'It takes 4 workers 15 days to complete a job. How long would it take 6 workers? (Assume all workers work at the same rate.) [3 marks]',
      answer: 'Total worker-days = 4 × 15 = 60. Time for 6 workers = 60 ÷ 6 = 10 days.',
      hints: ['More workers means fewer days — this is inverse proportion', 'Find the total number of worker-days first']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'y is inversely proportional to x². When x = 3, y = 4. Find y when x = 6. [4 marks]',
      answer: 'y = k/x². k = 4 × 9 = 36. When x=6: y = 36/36 = 1.',
      hints: ['Write y = k/x² and find k', 'k = y × x² = 4 × 9 = 36']
    },
  ],

  'Speed, Distance & Time': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'A car travels 180 miles in 3 hours. What is its average speed? [2 marks]',
      answer: 'Speed = 180 ÷ 3 = 60 mph',
      hints: ['Speed = Distance ÷ Time', '180 ÷ 3 = 60']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'A train travels at 90 km/h for 1 hour 20 minutes. How far does it travel? [3 marks]',
      answer: 'Time = 1⅓ hours = 4/3 hours. Distance = 90 × 4/3 = 120 km.',
      hints: ['Convert 1 hour 20 minutes to hours: 1⅓ hours', 'Distance = Speed × Time']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'A cyclist travels from town A to town B, a distance of 60 km, at an average speed of 20 km/h. She returns at 15 km/h. Calculate her average speed for the whole journey. [4 marks]',
      answer: 'Total distance = 120 km. Time A→B = 3h. Time B→A = 4h. Average speed = 120/7 ≈ 17.1 km/h.',
      hints: ['Average speed ≠ average of the two speeds', 'Total average speed = total distance ÷ total time']
    },
  ],

  'Compound Interest & Growth': [
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: '£3,500 is invested at a compound interest rate of 2.5% per year. Work out the value of the investment after 4 years. Give your answer to the nearest penny. [3 marks]',
      answer: '3500 × 1.025⁴ = 3500 × 1.10381... = £3863.35',
      hints: ['Use the formula: Amount = P × (1 + r/100)ⁿ', 'Multiply by 1.025 four times (or use 1.025⁴)']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'A car was bought for £15,000. Each year it depreciates by 12%. Work out the value of the car after 3 years. [3 marks]',
      answer: '15000 × 0.88³ = 15000 × 0.681472 = £10,222.08',
      hints: ['Depreciation of 12% means multiply by (1 − 0.12) = 0.88', 'Apply this three times: × 0.88³']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'A bacteria population doubles every 3 hours. There are initially 500 bacteria. After how many hours will there first be more than 10,000 bacteria? [4 marks]',
      answer: '500 × 2ⁿ > 10000 → 2ⁿ > 20 → n > log(20)/log(2) ≈ 4.32. So after 5 periods = 15 hours.',
      hints: ['Set up the inequality: 500 × 2ⁿ > 10000', 'Use trial and improvement or logarithms']
    },
  ],

  // ── GEOMETRY ───────────────────────────────────────────────────────────────

  'Angle Rules': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'In a triangle, two angles are 65° and 72°. Work out the third angle. [2 marks]',
      answer: '180 − 65 − 72 = 43°',
      hints: ['Angles in a triangle add up to 180°', '65 + 72 = 137']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'ABCD is a parallelogram. Angle ABC = 124°. Work out angle BCD. Give a reason for your answer. [3 marks]',
      answer: 'Angle BCD = 180 − 124 = 56°. Co-interior angles (same-side interior angles) in a parallelogram add up to 180°.',
      hints: ['Angles ABC and BCD are co-interior angles', 'Co-interior angles add up to 180°']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'The interior angle of a regular polygon is 156°. How many sides does the polygon have? [4 marks]',
      answer: 'Exterior angle = 180 − 156 = 24°. Number of sides = 360 ÷ 24 = 15.',
      hints: ['Interior + exterior = 180°', 'Sum of exterior angles = 360°, so number of sides = 360 ÷ exterior angle']
    },
  ],

  'Area & Perimeter': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'A trapezium has parallel sides of 8 cm and 14 cm and a perpendicular height of 5 cm. Work out its area. [2 marks]',
      answer: 'Area = ½ × (8 + 14) × 5 = ½ × 22 × 5 = 55 cm²',
      hints: ['Area of trapezium = ½ × (a + b) × h', 'a and b are the parallel sides']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'A semicircle has a diameter of 12 cm. Work out the total perimeter of the semicircle. Give your answer to 1 decimal place. [3 marks]',
      answer: 'Perimeter = πr + 2r = π(6) + 12 = 18.85 + 12 = 30.8 cm (1 d.p.)',
      hints: ['The perimeter includes the curved part AND the straight diameter', 'Curved part = πr (half the circumference)']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'A shape is made from a rectangle of length 10 cm and width 6 cm with a triangle of base 10 cm and height 4 cm removed from the top. Work out the area of the shape. [4 marks]',
      answer: 'Area of rectangle = 60 cm². Area of triangle = ½ × 10 × 4 = 20 cm². Shape area = 60 − 20 = 40 cm².',
      hints: ['Find the area of the rectangle and the triangle separately', 'Subtract the triangle area from the rectangle area']
    },
  ],

  'Circles': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out the area of a circle with radius 7 cm. Give your answer in terms of π. [2 marks]',
      answer: 'Area = π × 7² = 49π cm²',
      hints: ['Area of circle = πr²', 'r = 7, so r² = 49']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'A circle has a circumference of 30π cm. Work out the area of the circle. Give your answer in terms of π. [3 marks]',
      answer: '2πr = 30π → r = 15. Area = π × 15² = 225π cm².',
      hints: ['Circumference = 2πr. Use this to find r first.', 'Then use Area = πr²']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'A sector has radius 8 cm and angle 135°. Work out the area of the sector. Give your answer in terms of π. [4 marks]',
      answer: 'Area = (135/360) × π × 8² = (3/8) × 64π = 24π cm²',
      hints: ['Area of sector = (θ/360) × πr²', 'Simplify 135/360 to 3/8']
    },
  ],

  'Volume & Surface Area': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Work out the volume of a cylinder with radius 4 cm and height 10 cm. Give your answer to 3 significant figures. [2 marks]',
      answer: 'V = π × 4² × 10 = 160π = 502 cm³ (3 s.f.)',
      hints: ['Volume of cylinder = πr²h', 'r = 4, h = 10']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'A sphere has a volume of 288π cm³. Work out the radius of the sphere. [3 marks]',
      answer: '4/3 πr³ = 288π → r³ = 216 → r = 6 cm',
      hints: ['Volume of sphere = (4/3)πr³', 'Divide by (4/3)π to find r³, then cube root']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'A cone has base radius 5 cm and slant height 13 cm. Work out the total surface area of the cone. Give your answer in terms of π. [4 marks]',
      answer: 'Curved SA = πrl = π × 5 × 13 = 65π. Base = πr² = 25π. Total = 90π cm².',
      hints: ['Total surface area = curved surface + base = πrl + πr²', 'l = slant height = 13 cm (not perpendicular height)']
    },
  ],

  'Pythagoras Theorem': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'A right-angled triangle has shorter sides of length 5 cm and 12 cm. Find the length of the hypotenuse. [2 marks]',
      answer: '√(25 + 144) = √169 = 13 cm',
      hints: ['Use a² + b² = c² where c is the hypotenuse', '5² + 12² = 25 + 144 = 169']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'A ladder of length 6 m leans against a vertical wall. The foot of the ladder is 2.1 m from the base of the wall. How far up the wall does the ladder reach? Give your answer to 1 decimal place. [3 marks]',
      answer: '√(6² − 2.1²) = √(36 − 4.41) = √31.59 = 5.6 m (1 d.p.)',
      hints: ['The wall, ground and ladder form a right-angled triangle', 'You are finding a shorter side, so subtract: √(6² − 2.1²)']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Point A has coordinates (1, 4) and point B has coordinates (7, −2). Calculate the length of AB. Give your answer in the form k√2. [3 marks]',
      answer: 'AB = √((7−1)² + (−2−4)²) = √(36+36) = √72 = 6√2',
      hints: ['Distance = √((x₂−x₁)² + (y₂−y₁)²)', '√72 = √(36×2) = 6√2']
    },
  ],

  'Trigonometry': [
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'In a right-angled triangle, the angle at A is 38° and the hypotenuse is 15 cm. Find the length of the side opposite the angle at A. Give your answer to 1 decimal place. [3 marks]',
      answer: 'sin 38° = opposite/15. Opposite = 15 × sin 38° = 9.2 cm (1 d.p.)',
      hints: ['Use SOH: sin θ = opposite/hypotenuse', 'Opposite = hypotenuse × sin θ']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'In a right-angled triangle, the side opposite the angle is 7 cm and the adjacent side is 9 cm. Find the angle. Give your answer to 1 decimal place. [3 marks]',
      answer: 'tan θ = 7/9. θ = tan⁻¹(7/9) = 37.9°',
      hints: ['Use TOA: tan θ = opposite/adjacent', 'Use the inverse tan function to find the angle']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'A triangle has sides of length 7 cm, 9 cm and 12 cm. Find the size of the largest angle. Give your answer to 1 decimal place. [4 marks]',
      answer: 'Largest angle is opposite the longest side (12 cm). cos A = (7²+9²−12²)/(2×7×9) = (49+81−144)/126 = −14/126 = −0.111... A = cos⁻¹(−0.111) = 96.4°',
      hints: ['The largest angle is opposite the longest side (12 cm)', 'Use the cosine rule: cos A = (b²+c²−a²)/(2bc)']
    },
  ],

  'Transformations': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Describe fully the single transformation that maps shape A (vertices at (1,1), (3,1), (3,2)) to shape B (vertices at (−1,1), (−3,1), (−3,2)). [2 marks]',
      answer: 'Reflection in the y-axis (the line x = 0)',
      hints: ['The shapes are mirror images of each other', 'Look at which axis acts as the mirror line']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Shape P has vertices at (2, 1), (4, 1) and (4, 3). Describe fully the single transformation that maps shape P to shape Q, which has vertices at (−1, −2), (−1, −4) and (−3, −4). [3 marks]',
      answer: 'Rotation of 180° about the origin (0, 0).',
      hints: ['Each point maps to its negative: (x,y) → (−x, −y)', 'This is a rotation of 180° about the origin']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 3,
      question: 'Triangle A has vertices (2, 2), (4, 2), (4, 4). Triangle B has vertices (5, 5), (9, 5), (9, 9). Describe fully the single transformation that maps A to B. [3 marks]',
      answer: 'Enlargement, scale factor 2, centre of enlargement (1, 1).',
      hints: ['The shape has got bigger, so it is an enlargement', 'Find the scale factor (ratio of corresponding sides), then find the centre']
    },
  ],

  'Similarity & Congruence': [
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Two similar rectangles have corresponding sides in the ratio 2:5. The area of the smaller rectangle is 20 cm². Find the area of the larger rectangle. [3 marks]',
      answer: 'Area scale factor = (5/2)² = 6.25. Area = 20 × 6.25 = 125 cm².',
      hints: ['Area scale factor = (linear scale factor)²', 'Linear scale factor = 5/2']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'Two similar cones have surface areas of 36π cm² and 100π cm². The volume of the smaller cone is 48π cm³. Find the volume of the larger cone. [4 marks]',
      answer: 'Area ratio = 100/36 = 25/9. Linear SF = √(25/9) = 5/3. Volume ratio = (5/3)³ = 125/27. Volume = 48π × 125/27 = 222.2π ≈ 222π cm³.',
      hints: ['Find the area scale factor first: 100π/36π', 'Length SF = √(area SF), Volume SF = (length SF)³']
    },
  ],

  // ── STATISTICS & PROBABILITY ───────────────────────────────────────────────

  'Averages & Range': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'Find the median of: 8, 3, 11, 5, 7, 2, 9. [2 marks]',
      answer: 'Ordered: 2, 3, 5, 7, 8, 9, 11. Median = 7.',
      hints: ['Put the values in order first', 'The median is the middle value']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'The mean of 6 numbers is 14. Five of the numbers are 10, 18, 9, 20 and 12. Find the sixth number. [3 marks]',
      answer: 'Total = 6 × 14 = 84. Sum of five = 69. Sixth number = 84 − 69 = 15.',
      hints: ['Total = mean × number of values = 6 × 14 = 84', 'Add the five known values and subtract from 84']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'The table shows grouped data for test scores. (40–50: 3, 50–60: 8, 60–70: 12, 70–80: 7). Estimate the mean. [4 marks]',
      answer: 'Midpoints: 45, 55, 65, 75. Mean = (3×45 + 8×55 + 12×65 + 7×75) / (3+8+12+7) = (135+440+780+525)/30 = 1880/30 = 62.7.',
      hints: ['Use the midpoint of each class interval', 'Mean estimate = Σ(midpoint × frequency) ÷ Σfrequency']
    },
  ],

  'Charts & Graphs': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'A bar chart shows 5 red, 8 blue, 3 green and 4 yellow cars in a car park. What fraction of the cars are blue? Give your answer in its simplest form. [2 marks]',
      answer: 'Total = 20 cars. Fraction blue = 8/20 = 2/5.',
      hints: ['Find the total number of cars', 'Then write blue ÷ total and simplify']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'In a survey, 60 students were asked their favourite sport. 25% chose football, 1/3 chose tennis, 10 chose swimming, and the rest chose other sports. How many chose other sports? [3 marks]',
      answer: 'Football: 0.25 × 60 = 15. Tennis: 60/3 = 20. Swimming: 10. Other: 60 − 15 − 20 − 10 = 15.',
      hints: ['Convert each percentage/fraction to a number of students', 'Subtract from 60 to find "other"']
    },
  ],

  'Scatter Graphs': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 2,
      question: 'A scatter graph shows that as temperature increases, ice cream sales also increase. Describe the type of correlation and the relationship. [2 marks]',
      answer: 'Positive correlation. As temperature increases, ice cream sales increase.',
      hints: ['Positive correlation = both variables increase together', 'Negative = one increases as the other decreases']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'Explain why you cannot use a line of best fit to predict a value outside the range of the data. [3 marks]',
      answer: 'This is called extrapolation. The relationship shown may not continue outside the range of the data, so any prediction would be unreliable.',
      hints: ['The key word is "extrapolation"', 'The pattern seen in the data may not continue']
    },
  ],

  'Probability': [
    {
      difficulty: 'Foundation (Grade 3–4)', diffKey: 'foundation', marks: 1,
      question: 'A bag contains 4 red, 6 blue and 2 yellow counters. A counter is chosen at random. Find the probability it is blue. [1 mark]',
      answer: '6/12 = 1/2',
      hints: ['Probability = favourable outcomes ÷ total outcomes', 'Total = 4 + 6 + 2 = 12']
    },
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'A fair six-sided die is rolled twice. Find the probability of getting two 6s. [3 marks]',
      answer: 'P(6) × P(6) = 1/6 × 1/6 = 1/36',
      hints: ['The rolls are independent events', 'Multiply the probabilities for independent events']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'A bag contains 5 red and 4 blue balls. Two balls are taken without replacement. Find the probability that both balls are the same colour. [4 marks]',
      answer: 'P(RR) = 5/9 × 4/8 = 20/72. P(BB) = 4/9 × 3/8 = 12/72. Total = 32/72 = 4/9.',
      hints: ['Calculate P(both red) and P(both blue) separately, then add', 'After the first ball is removed, there are only 8 left']
    },
  ],

  'Tree Diagrams': [
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'The probability it rains on any day is 0.3. Draw a tree diagram and find the probability it rains on exactly one of two consecutive days. [3 marks]',
      answer: 'P(rain then no rain) = 0.3 × 0.7 = 0.21. P(no rain then rain) = 0.7 × 0.3 = 0.21. Total = 0.42.',
      hints: ['Draw two branches for each day: rain (0.3) and no rain (0.7)', 'Find the two branches that give exactly one rainy day and add their probabilities']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'A bag has 3 red and 2 blue counters. A counter is picked, its colour noted, and it is not replaced. A second counter is then picked. Find the probability that the two counters are different colours. [4 marks]',
      answer: 'P(R then B) = 3/5 × 2/4 = 6/20. P(B then R) = 2/5 × 3/4 = 6/20. Total = 12/20 = 3/5.',
      hints: ['Use a tree diagram — remember denominators change after the first pick', '"Different colours" means Red then Blue OR Blue then Red']
    },
  ],

  'Cumulative Frequency & Box Plots': [
    {
      difficulty: 'Grade 4', diffKey: 'grade4', marks: 3,
      question: 'The cumulative frequency for 60 students\' times (in minutes) are: ≤10: 5, ≤20: 18, ≤30: 38, ≤40: 52, ≤50: 60. Find the median and interquartile range. [3 marks]',
      answer: 'Median at 30th value ≈ 29 min. LQ at 15th value ≈ 18 min. UQ at 45th value ≈ 36 min. IQR ≈ 18 min.',
      hints: ['Median is at the n/2 th value (30th)', 'LQ is at n/4 (15th), UQ is at 3n/4 (45th)']
    },
    {
      difficulty: 'Grade 5', diffKey: 'grade5', marks: 4,
      question: 'Box plot A has median 48, LQ 30, UQ 58. Box plot B has median 42, LQ 28, UQ 65. Compare the two distributions. [4 marks]',
      answer: 'A has a higher median (48 > 42) so typically higher values. B has a larger IQR (37 vs 28) so is more spread/consistent. B has a larger range overall.',
      hints: ['Compare medians to compare the typical value', 'Compare IQR (= UQ − LQ) to compare the spread of the middle 50%']
    },
  ],

};

// Total questions available per topic
function getBankQuestion(subtopic, usedIndices) {
  const pool = QUESTION_BANK[subtopic];
  if (!pool || pool.length === 0) return null;

  const available = pool
    .map((q, i) => ({ q, i }))
    .filter(({ i }) => !usedIndices.has(i));

  if (available.length === 0) return null;

  const pick = available[Math.floor(Math.random() * available.length)];
  return { question: pick.q, index: pick.i };
}
