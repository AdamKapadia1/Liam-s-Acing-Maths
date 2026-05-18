// ── PRE-WRITTEN LESSON BANK ───────────────────────────────────────────────────
// Content aligned with AQA GCSE Higher specification and the CGP
// "GCSE Maths AQA Complete Revision & Practice: Higher" structure:
//   concept → key formula → step-by-step method → worked example → exam tip

const LESSON_BANK = {

  'Four Operations': `
<h3>Four Operations: ＋ − × ÷</h3>
<p>The four operations — <strong>addition, subtraction, multiplication and division</strong> — underpin every topic in GCSE Maths. You must be confident applying all four to integers, decimals and negative numbers, especially on <strong>Paper 1 (non-calculator)</strong>.</p>

<h4>Addition &amp; Subtraction</h4>
<p>Use the <strong>column method</strong>: line up digits by place value (ones under ones, tenths under tenths). Always carry or borrow carefully.</p>
<div class="formula">e.g. 34.7 + 8.56 → align: 34.70 + 08.56 = 43.26</div>
<p>With <strong>negative numbers</strong>: adding a negative = subtracting; subtracting a negative = adding.</p>
<div class="formula">5 − (−3) = 5 + 3 = 8 &nbsp;&nbsp;|&nbsp;&nbsp; −4 + (−2) = −6</div>

<h4>Multiplication — Non-Calculator</h4>
<p>Use <strong>long multiplication</strong> for large integers. For decimals:</p>
<ol>
  <li>Ignore the decimal points and multiply as whole numbers.</li>
  <li>Count the total decimal places in both original numbers.</li>
  <li>Insert that many decimal places into the answer.</li>
</ol>
<div class="formula">3.6 × 2.4 → 36 × 24 = 864 → 2 d.p. total → 8.64</div>

<h4>Division — Non-Calculator</h4>
<p>Use the <strong>bus stop method</strong> (short division) for integers and decimals. To divide by a decimal:</p>
<ol>
  <li>Multiply both the dividend and divisor by a power of 10 to make the divisor a whole number.</li>
  <li>Divide as normal.</li>
</ol>
<div class="formula">7.2 ÷ 0.4 → multiply both by 10 → 72 ÷ 4 = 18</div>

<h4>Calculator Questions (Papers 2 &amp; 3)</h4>
<p>On calculator papers, focus on <strong>inputting correctly</strong>: use brackets for fractions (e.g. (3 + 4) ÷ 5), and double-check negative number inputs. Show the calculation you typed in your working.</p>

<div class="tip"><strong>AQA Exam Tip:</strong> In non-calculator questions, always show the full column method or bus stop working — method marks are awarded even if the final answer is wrong. Watch out for dividing by decimals: "÷ 0.5" is the same as "× 2".</div>`,

  'Integers & Decimals': `
<h3>Integers & Decimals</h3>
<p>An <strong>integer</strong> is any whole number (positive, negative or zero). A <strong>decimal</strong> is any number with digits after a decimal point. You need to be confident multiplying and dividing decimals without a calculator (Paper 1).</p>

<h4>Multiplying Decimals</h4>
<ol>
  <li>Ignore the decimal points and multiply as integers.</li>
  <li>Count the total number of decimal places in both numbers.</li>
  <li>Put that many decimal places back into your answer.</li>
</ol>
<div class="formula">e.g. 2.4 × 0.3 → 24 × 3 = 72 → 2 d.p. total → 0.72</div>

<h4>Dividing Decimals</h4>
<ol>
  <li>Multiply both numbers by a power of 10 to remove the decimal from the divisor.</li>
  <li>Then divide normally.</li>
</ol>
<div class="formula">e.g. 4.8 ÷ 0.6 → multiply both by 10 → 48 ÷ 6 = 8</div>

<h4>Order of Operations (BIDMAS)</h4>
<p>Always work in this order: <strong>B</strong>rackets → <strong>I</strong>ndices → <strong>D</strong>ivision/<strong>M</strong>ultiplication (left to right) → <strong>A</strong>ddition/<strong>S</strong>ubtraction (left to right).</p>

<div class="tip"><strong>AQA Exam Tip:</strong> On Paper 1 (non-calculator), show clear working when multiplying or dividing decimals — method marks are available even if your final answer is wrong. Negative signs are a common trap: (−3)² = 9 but −3² = −9.</div>`,

  'Fractions': `
<h3>Fractions</h3>
<p>A fraction represents a part of a whole. The <strong>numerator</strong> is the top number; the <strong>denominator</strong> is the bottom number. Always simplify fractions by dividing top and bottom by their HCF.</p>

<h4>Adding and Subtracting Fractions</h4>
<ol>
  <li>Find a common denominator (usually the LCM of both denominators).</li>
  <li>Convert each fraction to the common denominator.</li>
  <li>Add or subtract the numerators. Keep the denominator the same.</li>
  <li>Simplify if possible.</li>
</ol>
<div class="formula">3/4 + 1/6 = 9/12 + 2/12 = 11/12</div>

<h4>Multiplying Fractions</h4>
<ol>
  <li>Convert any mixed numbers to improper fractions.</li>
  <li>Multiply numerators together, then denominators together.</li>
  <li>Cancel/simplify before or after multiplying.</li>
</ol>
<div class="formula">2/3 × 3/5 = 6/15 = 2/5</div>

<h4>Dividing Fractions</h4>
<ol>
  <li>Keep the first fraction the same.</li>
  <li>Flip (reciprocal) the second fraction.</li>
  <li>Multiply.</li>
</ol>
<div class="formula">3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2 = 1½</div>

<div class="tip"><strong>AQA Exam Tip:</strong> "Show that" questions involving fractions require every line of working — the final answer alone scores zero. Always convert mixed numbers to improper fractions before multiplying or dividing.</div>`,

  'Percentages': `
<h3>Percentages</h3>
<p>A percentage is a fraction out of 100. The most efficient method for percentage calculations is using a <strong>multiplier</strong>.</p>

<h4>Key Multipliers</h4>
<div class="formula">Increase by r%: multiply by (1 + r/100)
Decrease by r%: multiply by (1 − r/100)</div>

<h4>Finding a Percentage of an Amount</h4>
<p>Convert the percentage to a decimal and multiply: 35% of 240 = 0.35 × 240 = 84.</p>

<h4>Reverse Percentages</h4>
<ol>
  <li>Identify the multiplier used (e.g. after 20% decrease, multiplier = 0.8).</li>
  <li>Divide by the multiplier to find the original.</li>
</ol>
<div class="formula">Sale price £68 after 20% off → £68 ÷ 0.8 = £85 original</div>

<h4>Percentage Change</h4>
<div class="formula">% change = (change ÷ original) × 100</div>

<h4>Worked Example</h4>
<p>A jacket costs £120. It is reduced by 15% in a sale. Work out the sale price.</p>
<p>Multiplier = 1 − 0.15 = 0.85. Sale price = £120 × 0.85 = <strong>£102</strong>.</p>

<div class="tip"><strong>AQA Exam Tip:</strong> For reverse percentages, never subtract the percentage from the sale/reduced price — always divide by the multiplier. This is the most common mistake on AQA papers.</div>`,

  'Powers & Roots': `
<h3>Powers & Roots</h3>
<p>A <strong>power</strong> (or index) tells you how many times to multiply a number by itself. A <strong>root</strong> is the inverse operation.</p>

<h4>Key Laws of Indices</h4>
<div class="formula">aᵐ × aⁿ = aᵐ⁺ⁿ
aᵐ ÷ aⁿ = aᵐ⁻ⁿ
(aᵐ)ⁿ = aᵐⁿ
a⁰ = 1
a⁻ⁿ = 1/aⁿ
a^(1/n) = ⁿ√a
a^(m/n) = (ⁿ√a)ᵐ</div>

<h4>Fractional Indices</h4>
<ol>
  <li>The <strong>denominator</strong> tells you the root to take.</li>
  <li>The <strong>numerator</strong> tells you the power to raise to.</li>
</ol>
<div class="formula">27^(2/3) = (³√27)² = 3² = 9</div>

<h4>Negative Indices</h4>
<div class="formula">4⁻² = 1/4² = 1/16</div>

<div class="tip"><strong>AQA Exam Tip:</strong> Learn the square numbers to 15² = 225 and cube numbers to 5³ = 125 for Paper 1. With fractional indices, always do the root first, then the power — this keeps the numbers smaller and easier to work with.</div>`,

  'Standard Form': `
<h3>Standard Form</h3>
<p>Standard form is used to write very large or very small numbers in the form <strong>A × 10ⁿ</strong>, where <strong>1 ≤ A &lt; 10</strong> and n is an integer.</p>

<h4>Converting to Standard Form</h4>
<ol>
  <li>Write the significant digits with one digit before the decimal point (this gives A).</li>
  <li>Count how many places the decimal point moved — this gives n.</li>
  <li>If the original number is large (≥ 10), n is positive. If small (&lt; 1), n is negative.</li>
</ol>
<div class="formula">47,000 = 4.7 × 10⁴   |   0.0032 = 3.2 × 10⁻³</div>

<h4>Calculations in Standard Form</h4>
<p><strong>Multiplying:</strong> multiply the A values and add the powers.</p>
<div class="formula">(3 × 10⁴) × (2 × 10³) = 6 × 10⁷</div>
<p><strong>Dividing:</strong> divide the A values and subtract the powers.</p>
<div class="formula">(8 × 10⁶) ÷ (4 × 10²) = 2 × 10⁴</div>
<p><strong>Adding/Subtracting:</strong> make the powers equal first, then add/subtract the A values.</p>
<div class="formula">(5 × 10⁵) + (3 × 10⁴) = (50 × 10⁴) + (3 × 10⁴) = 53 × 10⁴ = 5.3 × 10⁵</div>

<div class="tip"><strong>AQA Exam Tip:</strong> After multiplying, check your answer is still in standard form (A must be between 1 and 10). If you get 12 × 10⁵, adjust to 1.2 × 10⁶.</div>`,

  'Factors, Multiples & Primes': `
<h3>Factors, Multiples & Primes</h3>
<p>A <strong>factor</strong> of n divides into n exactly. A <strong>multiple</strong> of n is in n's times table. A <strong>prime</strong> has exactly two factors: 1 and itself.</p>

<h4>Prime Factor Decomposition</h4>
<ol>
  <li>Draw a factor tree, splitting the number into two factors each time.</li>
  <li>Circle the prime numbers at the end of each branch.</li>
  <li>Write the answer in index form.</li>
</ol>
<div class="formula">360 = 2³ × 3² × 5</div>

<h4>HCF and LCM using Prime Factors</h4>
<p><strong>HCF (Highest Common Factor):</strong> multiply the prime factors shared by both numbers, using the lower power.</p>
<p><strong>LCM (Lowest Common Multiple):</strong> multiply all prime factors from both numbers, using the higher power.</p>
<div class="formula">A = 2³ × 3 × 5,  B = 2 × 3² × 7
HCF = 2 × 3 = 6
LCM = 2³ × 3² × 5 × 7 = 2520</div>

<div class="tip"><strong>AQA Exam Tip:</strong> HCF and LCM questions often appear in context — e.g. "when do two events next coincide?" always means LCM. "Largest tile that fits" always means HCF. Spotting the context is the key skill.</div>`,

  'Rounding & Bounds': `
<h3>Rounding & Bounds</h3>
<p><strong>Rounding</strong> reduces a number to a given number of decimal places (d.p.) or significant figures (s.f.). <strong>Error intervals</strong> and <strong>bounds</strong> show the range of values a rounded number could represent.</p>

<h4>Significant Figures</h4>
<ol>
  <li>The first significant figure is the first non-zero digit.</li>
  <li>Count from there for the required number of s.f.</li>
  <li>Round based on the next digit (≥ 5 rounds up).</li>
</ol>
<div class="formula">0.003847 to 2 s.f. = 0.0038</div>

<h4>Upper and Lower Bounds</h4>
<p>If a measurement is given to a degree of accuracy, the actual value lies within half a unit either side.</p>
<div class="formula">x = 8.4 cm (to 1 d.p.) → 8.35 ≤ x &lt; 8.45</div>

<h4>Bounds in Calculations</h4>
<ul>
  <li>To find the <strong>upper bound</strong> of a sum or product → use upper bounds of both values.</li>
  <li>To find the <strong>upper bound</strong> of a quotient (a ÷ b) → use upper bound of a and <em>lower</em> bound of b.</li>
</ul>

<div class="tip"><strong>AQA Exam Tip:</strong> Always use strict inequality for the upper bound: write 8.35 ≤ x &lt; 8.45, not ≤ 8.45. For division, remember: to maximise the result, divide by the smallest possible value.</div>`,

  'Indices & Surds': `
<h3>Indices & Surds</h3>
<p>A <strong>surd</strong> is a root that cannot be simplified to a whole number or fraction, e.g. √2, √5, √3. Surds are exact — always leave answers as surds unless told otherwise.</p>

<h4>Laws of Indices (recap)</h4>
<div class="formula">xᵃ × xᵇ = xᵃ⁺ᵇ   |   xᵃ ÷ xᵇ = xᵃ⁻ᵇ   |   (xᵃ)ᵇ = xᵃᵇ</div>

<h4>Simplifying Surds</h4>
<ol>
  <li>Find the largest square factor of the number under the root.</li>
  <li>Split and simplify.</li>
</ol>
<div class="formula">√72 = √(36 × 2) = 6√2</div>

<h4>Expanding Brackets with Surds</h4>
<div class="formula">(3 + √5)(3 − √5) = 9 − 3√5 + 3√5 − 5 = 4</div>
<p>This is the <strong>difference of two squares</strong> — very useful for rationalising denominators.</p>

<h4>Rationalising the Denominator</h4>
<p>Remove surds from the denominator by multiplying top and bottom by the conjugate.</p>
<div class="formula">6/(2 + √2) × (2 − √2)/(2 − √2) = 6(2 − √2)/2 = 6 − 3√2</div>

<div class="tip"><strong>AQA Exam Tip:</strong> "Give your answer in the form a + b√c" tells you to rationalise and collect terms. "Show that" surd questions require every line of working shown clearly.</div>`,

  'Simplifying & Expanding': `
<h3>Simplifying & Expanding</h3>
<p>Algebra uses letters to represent unknown values. <strong>Like terms</strong> have identical letter parts and can be collected together.</p>

<h4>Collecting Like Terms</h4>
<div class="formula">3x² + 2x − x² + 5x = 2x² + 7x</div>

<h4>Expanding a Single Bracket</h4>
<p>Multiply every term inside the bracket by the term outside.</p>
<div class="formula">3(2x − 5) = 6x − 15</div>

<h4>Expanding Double Brackets (FOIL)</h4>
<ol>
  <li><strong>F</strong>irst: multiply the first terms.</li>
  <li><strong>O</strong>uter: multiply the outer terms.</li>
  <li><strong>I</strong>nner: multiply the inner terms.</li>
  <li><strong>L</strong>ast: multiply the last terms.</li>
  <li>Collect like terms.</li>
</ol>
<div class="formula">(x + 3)(x − 5) = x² − 5x + 3x − 15 = x² − 2x − 15</div>

<h4>Expanding Triple Brackets</h4>
<p>Expand two of the brackets first, then multiply the result by the third bracket.</p>

<div class="tip"><strong>AQA Exam Tip:</strong> Watch signs carefully when expanding. (x − 3)² ≠ x² − 9 — you must write it as (x−3)(x−3) and expand fully. This is the most common algebraic error on AQA papers.</div>`,

  'Factorising': `
<h3>Factorising</h3>
<p>Factorising is the reverse of expanding — you write an expression as a product of its factors. Always check your answer by expanding back out.</p>

<h4>Common Factor</h4>
<ol>
  <li>Find the HCF of all terms (numbers and letters).</li>
  <li>Place it outside the bracket and divide each term by it inside.</li>
</ol>
<div class="formula">6x² + 9x = 3x(2x + 3)</div>

<h4>Difference of Two Squares</h4>
<div class="formula">a² − b² = (a + b)(a − b)
e.g. x² − 25 = (x + 5)(x − 5)</div>

<h4>Factorising x² + bx + c</h4>
<ol>
  <li>Find two numbers that <strong>multiply</strong> to c and <strong>add</strong> to b.</li>
  <li>Write as two brackets.</li>
</ol>
<div class="formula">x² + 7x + 12 → factors of 12 that add to 7: 3 and 4 → (x + 3)(x + 4)</div>

<h4>Factorising ax² + bx + c (a ≠ 1)</h4>
<ol>
  <li>Multiply a × c. Find two numbers that multiply to (a × c) and add to b.</li>
  <li>Split the middle term and factorise by grouping.</li>
</ol>
<div class="formula">2x² + 7x + 3: a×c = 6. Factors: 1 and 6. → 2x² + x + 6x + 3 = x(2x+1) + 3(2x+1) = (x+3)(2x+1)</div>

<div class="tip"><strong>AQA Exam Tip:</strong> If a question says "solve by factorising", the examiners expect you to factorise — using the quadratic formula instead will usually not earn full marks.</div>`,

  'Solving Linear Equations': `
<h3>Solving Linear Equations</h3>
<p>To solve an equation, perform the same operation to both sides until x is isolated. Think of the equation as a balance — whatever you do to one side, do to the other.</p>

<h4>Method</h4>
<ol>
  <li>Expand any brackets.</li>
  <li>Collect all x terms on one side, numbers on the other.</li>
  <li>Divide to find x.</li>
</ol>
<div class="formula">5(2x − 3) = 4x + 9
10x − 15 = 4x + 9
6x = 24
x = 4</div>

<h4>Equations with Fractions</h4>
<ol>
  <li>Multiply every term by the LCM of the denominators to clear fractions.</li>
  <li>Then solve normally.</li>
</ol>
<div class="formula">(x+4)/3 − (x−1)/2 = 2
Multiply by 6: 2(x+4) − 3(x−1) = 12
2x + 8 − 3x + 3 = 12 → −x = 1 → x = −1</div>

<h4>Setting Up Equations</h4>
<p>When given a word problem, define your variable, write the equation, then solve.</p>

<div class="tip"><strong>AQA Exam Tip:</strong> Check your answer by substituting back into the original equation. When dealing with fractions, expand the numerator carefully — a missed negative sign here is the most common error.</div>`,

  'Straight-Line Graphs': `
<h3>Straight-Line Graphs</h3>
<p>Any straight line can be written in the form <strong>y = mx + c</strong>, where m is the gradient and c is the y-intercept.</p>

<h4>Gradient</h4>
<div class="formula">m = (y₂ − y₁) / (x₂ − x₁) = rise / run</div>
<p>A positive gradient slopes upward left to right. Negative slopes downward.</p>

<h4>Finding the Equation of a Line</h4>
<ol>
  <li>Calculate the gradient using two points.</li>
  <li>Substitute one point and m into y = mx + c to find c.</li>
</ol>
<div class="formula">Through (2, 5) and (6, 13): m = (13−5)/(6−2) = 2. Using (2,5): 5 = 2(2) + c → c = 1. Line: y = 2x + 1</div>

<h4>Parallel and Perpendicular Lines</h4>
<ul>
  <li><strong>Parallel lines</strong> have equal gradients.</li>
  <li><strong>Perpendicular lines</strong>: gradients multiply to −1 (negative reciprocal).</li>
</ul>
<div class="formula">If m = 3, the perpendicular gradient is −1/3</div>

<div class="tip"><strong>AQA Exam Tip:</strong> If the equation is given as ax + by = c (e.g. 2x + 3y = 12), rearrange to y = mx + c form first before reading off the gradient. Perpendicular gradient questions appear regularly at Grade 5.</div>`,

  'Quadratic Equations': `
<h3>Quadratic Equations</h3>
<p>A quadratic equation has the form <strong>ax² + bx + c = 0</strong>. There are three methods to solve them: factorising, completing the square, and the quadratic formula.</p>

<h4>Method 1: Factorising</h4>
<div class="formula">x² + 5x + 6 = 0 → (x + 2)(x + 3) = 0 → x = −2 or x = −3</div>

<h4>Method 2: Quadratic Formula</h4>
<div class="formula">x = (−b ± √(b² − 4ac)) / 2a</div>
<p>Use when the equation cannot be factorised or when asked for decimal/surd answers.</p>

<h4>Method 3: Completing the Square</h4>
<ol>
  <li>Write x² + bx as (x + b/2)² − (b/2)².</li>
  <li>Rearrange to solve.</li>
</ol>
<div class="formula">x² − 4x + 1 = 0 → (x−2)² − 4 + 1 = 0 → (x−2)² = 3 → x = 2 ± √3</div>

<h4>The Discriminant</h4>
<div class="formula">b² − 4ac > 0 → two solutions
b² − 4ac = 0 → one (repeated) solution
b² − 4ac &lt; 0 → no real solutions</div>

<div class="tip"><strong>AQA Exam Tip:</strong> Always rearrange to ax² + bx + c = 0 before applying any method. If asked to "give answers to 2 d.p.", use the quadratic formula. If asked for "exact" answers, use completing the square or surds.</div>`,

  'Simultaneous Equations': `
<h3>Simultaneous Equations</h3>
<p>Simultaneous equations are two equations with two unknowns that are both true at the same time. There are two main methods: <strong>elimination</strong> and <strong>substitution</strong>.</p>

<h4>Method 1: Elimination</h4>
<ol>
  <li>Multiply equations to make the coefficient of one variable equal in both.</li>
  <li>Add or subtract the equations to eliminate that variable.</li>
  <li>Solve for the remaining variable, then substitute back.</li>
</ol>
<div class="formula">3x + 2y = 11  [×3] → 9x + 6y = 33
2x − 3y = 1   [×2] → 4x − 6y = 2
Adding: 13x = 35 → x = 35/13...</div>

<h4>Method 2: Substitution (useful when one equation is linear)</h4>
<ol>
  <li>Rearrange one equation to make x or y the subject.</li>
  <li>Substitute into the other equation.</li>
</ol>

<h4>Quadratic Simultaneous Equations</h4>
<p>If one equation is quadratic, always use substitution. Substituting the linear into the quadratic gives a quadratic to solve.</p>
<div class="formula">y = x + 3 and y = x² − 1 → x + 3 = x² − 1 → x² − x − 4 = 0</div>

<div class="tip"><strong>AQA Exam Tip:</strong> With quadratic simultaneous equations there are usually two pairs of solutions — make sure you find both and pair them correctly (the x and y values that satisfy both equations together).</div>`,

  'Sequences': `
<h3>Sequences</h3>
<p>A <strong>sequence</strong> is an ordered list of numbers following a rule. The rule connecting position n to the term value is called the <strong>nth term</strong>.</p>

<h4>Arithmetic Sequences (Linear nth Term)</h4>
<ol>
  <li>Find the <strong>common difference</strong> d (what you add each time).</li>
  <li>nth term = dn + (first term − d).</li>
</ol>
<div class="formula">3, 7, 11, 15, ... → d = 4. nth term = 4n + (3 − 4) = 4n − 1</div>

<h4>Is a Value in the Sequence?</h4>
<p>Set the nth term equal to the value and solve for n. If n is a positive integer, the value is in the sequence.</p>

<h4>Quadratic Sequences</h4>
<p>Second differences are constant. The nth term contains n².</p>
<ol>
  <li>Find the second differences — half this value is the coefficient of n².</li>
  <li>Subtract the n² part from the sequence and find the remaining linear nth term.</li>
</ol>
<div class="formula">Sequence: 3, 8, 15, 24, 35 → 2nd diff = 2 → coefficient of n² is 1
Subtract n²: 2, 4, 6, 8, 10 → linear part = 2n
nth term = n² + 2n</div>

<div class="tip"><strong>AQA Exam Tip:</strong> Show the second differences clearly in your working for quadratic sequences — this earns method marks. Don't confuse arithmetic sequences (constant first difference) with geometric sequences (constant ratio).</div>`,

  'Inequalities': `
<h3>Inequalities</h3>
<p>Inequalities show a range of values rather than one exact answer. Solve them just like equations — but if you multiply or divide by a <strong>negative number</strong>, flip the inequality sign.</p>

<h4>Linear Inequalities</h4>
<div class="formula">3x + 1 > 10 → 3x > 9 → x > 3</div>
<p>On a number line: open circle ○ means the value is <em>not</em> included (&lt; or &gt;); closed circle ● means it <em>is</em> included (≤ or ≥).</p>

<h4>Double Inequalities</h4>
<p>Perform the same operation on all three parts simultaneously.</p>
<div class="formula">2 ≤ 3x + 5 &lt; 14 → −3 ≤ 3x &lt; 9 → −1 ≤ x &lt; 3
Integer values: −1, 0, 1, 2</div>

<h4>Quadratic Inequalities</h4>
<ol>
  <li>Solve the quadratic equation to find the critical values.</li>
  <li>Sketch the parabola to see where the quadratic is positive or negative.</li>
  <li>For ax² + bx + c ≤ 0 (U-shape), the solution is between the roots.</li>
</ol>
<div class="formula">x² − x − 6 ≤ 0 → (x−3)(x+2) ≤ 0 → −2 ≤ x ≤ 3</div>

<div class="tip"><strong>AQA Exam Tip:</strong> When listing integer values, always recheck your inequality — an off-by-one error on the boundary is easy to make. For quadratic inequalities, always sketch the graph first.</div>`,

  'Ratio': `
<h3>Ratio</h3>
<p>A ratio compares quantities of the same kind. Ratios can be simplified by dividing all parts by the HCF, just like fractions.</p>

<h4>Sharing in a Ratio</h4>
<ol>
  <li>Add the ratio parts to find the total number of shares.</li>
  <li>Divide the total amount by the total shares to find one share.</li>
  <li>Multiply one share by each ratio part.</li>
</ol>
<div class="formula">Share £200 in ratio 3:2:5
Total parts = 10. One share = £20.
Shares: £60, £40, £100.</div>

<h4>Using Ratios with One Known Value</h4>
<p>Find the value of one part, then scale up.</p>
<div class="formula">Ratio of boys to girls = 3:4. There are 12 boys.
1 part = 4. Girls = 4 × 4 = 16. Total = 28.</div>

<h4>Combining Ratios</h4>
<p>To combine A:B and B:C into A:B:C, make the B values equal by finding the LCM.</p>

<div class="tip"><strong>AQA Exam Tip:</strong> Always check whether a question is asking for one of the shares or the total. "How many altogether?" requires adding both shares. Ratio questions often appear in multi-step problem-solving contexts (AO3).</div>`,

  'Direct & Inverse Proportion': `
<h3>Direct & Inverse Proportion</h3>
<p>Two quantities are in <strong>direct proportion</strong> if doubling one doubles the other. They are in <strong>inverse proportion</strong> if doubling one halves the other.</p>

<h4>Direct Proportion</h4>
<div class="formula">y ∝ x → y = kx
Find k: substitute a known pair.
Then find any unknown.</div>
<p>Example: y = kx. When x = 4, y = 20 → k = 5. When x = 7, y = 35.</p>

<h4>Inverse Proportion</h4>
<div class="formula">y ∝ 1/x → y = k/x
y ∝ 1/x² → y = k/x²</div>
<p>Example: y = k/x². When x = 3, y = 8 → k = 72. When x = 6, y = 72/36 = 2.</p>

<h4>Graphs</h4>
<ul>
  <li>Direct proportion: straight line through the origin.</li>
  <li>Inverse proportion: a curve (reciprocal graph).</li>
</ul>

<div class="tip"><strong>AQA Exam Tip:</strong> Always state the formula (e.g. y = kx²) before substituting — this earns a method mark. Don't confuse direct (y = kx) with directly proportional to the square (y = kx²).</div>`,

  'Speed, Distance & Time': `
<h3>Speed, Distance & Time</h3>
<p>The three quantities are linked by a triangle — cover the quantity you want and read off the formula.</p>

<div class="formula">Speed = Distance ÷ Time
Distance = Speed × Time
Time = Distance ÷ Speed</div>

<h4>Units</h4>
<p>Check that units are consistent. Convert minutes to hours by dividing by 60 before substituting.</p>
<div class="formula">90 minutes = 90/60 = 1.5 hours</div>

<h4>Average Speed</h4>
<p>Average speed for a whole journey = <strong>total distance ÷ total time</strong>.</p>
<div class="formula">Journey A→B: 60 km at 30 km/h (takes 2h)
Journey B→A: 60 km at 60 km/h (takes 1h)
Total: 120 km in 3h → average speed = 40 km/h</div>
<p><em>Note: 40 ≠ average of 30 and 60 (45). Always use total distance ÷ total time.</em></p>

<h4>Density and Pressure</h4>
<div class="formula">Density = Mass ÷ Volume
Pressure = Force ÷ Area</div>

<div class="tip"><strong>AQA Exam Tip:</strong> Average speed is one of AQA's favourite trick questions. Never average the speeds — always use total distance ÷ total time. Show time calculations in your working.</div>`,

  'Compound Interest & Growth': `
<h3>Compound Interest & Growth</h3>
<p>With <strong>compound interest</strong>, interest is added to the total at the end of each period, so the next period's interest is calculated on the new (larger) total — interest earns interest.</p>

<h4>Compound Interest Formula</h4>
<div class="formula">Amount = P × (1 + r/100)ⁿ
P = principal (starting amount)
r = annual interest rate (%)
n = number of years</div>

<h4>Depreciation (Reducing Value)</h4>
<div class="formula">Value = P × (1 − r/100)ⁿ</div>
<p>Example: Car bought for £12,000, depreciates 15% per year.</p>
<div class="formula">After 3 years: 12000 × 0.85³ = £7,373.25</div>

<h4>Growth and Decay in Context</h4>
<p>Populations, bacteria, radioactive decay — all use the same structure. Identify whether it grows (multiply by > 1) or decays (multiply by < 1).</p>

<div class="tip"><strong>AQA Exam Tip:</strong> Use the formula with the multiplier raised to the power — do not calculate year by year as you are likely to make arithmetic errors. Round money to the nearest penny (2 d.p.) only at the very end.</div>`,

  'Angle Rules': `
<h3>Angle Rules</h3>
<p>AQA expects you to state the geometric reason whenever you find an angle — a numerical answer alone will not score full marks.</p>

<h4>Key Angle Facts</h4>
<div class="formula">Angles on a straight line add to 180°
Angles around a point add to 360°
Vertically opposite angles are equal
Angles in a triangle add to 180°
Angles in a quadrilateral add to 360°</div>

<h4>Parallel Line Angles</h4>
<ul>
  <li><strong>Alternate angles</strong> are equal (Z angles).</li>
  <li><strong>Corresponding angles</strong> are equal (F angles).</li>
  <li><strong>Co-interior (same-side) angles</strong> add to 180° (C angles).</li>
</ul>

<h4>Polygons</h4>
<div class="formula">Sum of interior angles of n-sided polygon = (n − 2) × 180°
Exterior angle of regular n-gon = 360° ÷ n
Interior + Exterior = 180°</div>

<h4>Circle Theorems (Higher)</h4>
<ul>
  <li>Angle at centre = 2 × angle at circumference (same arc).</li>
  <li>Angles in the same segment are equal.</li>
  <li>Angle in a semicircle = 90°.</li>
  <li>Opposite angles in a cyclic quadrilateral add to 180°.</li>
  <li>Tangent to circle is perpendicular to radius.</li>
</ul>

<div class="tip"><strong>AQA Exam Tip:</strong> "Give reasons for your answer" means you must write the geometric rule in words. "Angles in the same segment are equal" scores a mark — "because they're the same" does not.</div>`,

  'Area & Perimeter': `
<h3>Area & Perimeter</h3>
<p><strong>Perimeter</strong> is the total distance around the outside (add all sides). <strong>Area</strong> is the amount of space inside a 2D shape.</p>

<h4>Key Formulae</h4>
<div class="formula">Rectangle: A = l × w
Triangle: A = ½ × b × h
Parallelogram: A = b × h
Trapezium: A = ½(a + b) × h
(a and b are the parallel sides)</div>

<h4>Compound Shapes</h4>
<ol>
  <li>Split the shape into standard shapes (rectangles, triangles, etc.).</li>
  <li>Calculate each area separately.</li>
  <li>Add (or subtract if a section is removed).</li>
</ol>

<h4>Units</h4>
<p>Area is always in square units. If you convert lengths, remember: 1 m² = 10,000 cm².</p>

<div class="tip"><strong>AQA Exam Tip:</strong> The height in the triangle and trapezium formulae must be the <em>perpendicular</em> height — not a slant side. Draw a sketch and mark the perpendicular height before substituting.</div>`,

  'Circles': `
<h3>Circles</h3>
<p>Learn these formulae — they are <strong>not given</strong> in the AQA exam.</p>

<div class="formula">Circumference = 2πr = πd
Area = πr²</div>

<h4>Arc Length and Sector Area</h4>
<div class="formula">Arc length = (θ/360) × 2πr
Sector area = (θ/360) × πr²
(θ = angle at the centre in degrees)</div>

<h4>Segment Area</h4>
<div class="formula">Segment area = Sector area − Triangle area</div>

<h4>Worked Example</h4>
<p>Find the arc length and area of a sector with radius 9 cm and angle 80°.</p>
<div class="formula">Arc = (80/360) × 2π × 9 = 4π cm
Sector area = (80/360) × π × 81 = 18π cm²</div>

<div class="tip"><strong>AQA Exam Tip:</strong> "Give your answer in terms of π" means leave π in the answer (don't multiply out). This gives an exact answer and is simpler. Questions about compound shapes involving circles are common at Grade 5.</div>`,

  'Volume & Surface Area': `
<h3>Volume & Surface Area</h3>
<p>Volume is measured in cubic units (cm³, m³). Surface area is the total area of all faces, measured in square units.</p>

<h4>Key Volume Formulae</h4>
<div class="formula">Cuboid: V = l × w × h
Prism: V = area of cross-section × length
Cylinder: V = πr²h
Cone: V = ⅓πr²h
Sphere: V = 4/3 πr³
Pyramid: V = ⅓ × base area × height</div>

<h4>Key Surface Area Formulae</h4>
<div class="formula">Cylinder: SA = 2πr² + 2πrh
Cone: SA = πrl + πr²  (l = slant height)
Sphere: SA = 4πr²</div>

<h4>Worked Example</h4>
<p>A cone has base radius 5 cm and slant height 13 cm. Total SA = π(5)(13) + π(5²) = 65π + 25π = 90π cm².</p>

<div class="tip"><strong>AQA Exam Tip:</strong> For cones, you need the <em>slant height</em> l for surface area but the <em>perpendicular height</em> h for volume. If given one, use Pythagoras to find the other: l² = r² + h².</div>`,

  'Pythagoras Theorem': `
<h3>Pythagoras' Theorem</h3>
<p>In any right-angled triangle, the square of the hypotenuse (longest side) equals the sum of the squares of the other two sides.</p>

<div class="formula">a² + b² = c²   (c is the hypotenuse)</div>

<h4>Finding the Hypotenuse</h4>
<div class="formula">c = √(a² + b²)
e.g. a=6, b=8 → c = √(36+64) = √100 = 10</div>

<h4>Finding a Shorter Side</h4>
<div class="formula">a = √(c² − b²)
e.g. c=13, b=5 → a = √(169−25) = √144 = 12</div>

<h4>Distance Between Two Points</h4>
<div class="formula">d = √((x₂−x₁)² + (y₂−y₁)²)</div>

<h4>Pythagoras in 3D</h4>
<p>For a cuboid with length l, width w and height h, the space diagonal = √(l² + w² + h²).</p>

<div class="tip"><strong>AQA Exam Tip:</strong> Always identify the hypotenuse first — it is always opposite the right angle. If you get a non-integer answer, check whether the question asks for an exact value (leave as √n) or a decimal (round as specified).</div>`,

  'Trigonometry': `
<h3>Trigonometry</h3>
<p>Trigonometry links the angles and sides of right-angled triangles. Remember <strong>SOH CAH TOA</strong>.</p>

<div class="formula">sin θ = Opposite / Hypotenuse  (SOH)
cos θ = Adjacent / Hypotenuse  (CAH)
tan θ = Opposite / Adjacent    (TOA)</div>

<h4>Finding a Side</h4>
<ol>
  <li>Label the sides: O (opposite the angle), A (adjacent), H (hypotenuse).</li>
  <li>Choose the correct ratio.</li>
  <li>Substitute and solve.</li>
</ol>

<h4>Finding an Angle</h4>
<p>Use the inverse function: θ = sin⁻¹(O/H), θ = cos⁻¹(A/H), θ = tan⁻¹(O/A).</p>

<h4>Non-Right-Angled Triangles (Higher)</h4>
<div class="formula">Sine Rule:   a/sin A = b/sin B = c/sin C
Cosine Rule: a² = b² + c² − 2bc cos A
Area = ½ab sin C</div>

<div class="tip"><strong>AQA Exam Tip:</strong> Use the Sine Rule when you know an angle and its opposite side. Use the Cosine Rule when you know three sides or two sides and the included angle. The cosine rule for finding an angle is a frequent Higher question.</div>`,

  'Transformations': `
<h3>Transformations</h3>
<p>There are four types of transformation. To <strong>describe</strong> a transformation fully, you must give all the required information — a partial description will lose marks.</p>

<h4>Translation</h4>
<p>Describe with a column vector. The shape stays the same size and orientation.</p>
<div class="formula">Vector (3/−2) means 3 right, 2 down</div>

<h4>Reflection</h4>
<p>State the mirror line (e.g. "reflection in the line y = x"). Perpendicular distance from each point to the line is preserved.</p>

<h4>Rotation</h4>
<p>State the: angle, direction (clockwise or anticlockwise), and centre of rotation.</p>
<div class="formula">"Rotation of 90° clockwise about the point (2, 1)"</div>

<h4>Enlargement</h4>
<p>State the scale factor and centre of enlargement. If the scale factor is negative, the image appears on the opposite side of the centre.</p>
<div class="formula">Scale factor = image length / original length</div>

<div class="tip"><strong>AQA Exam Tip:</strong> "Describe fully" requires ALL elements. For rotation: centre, angle, direction. For enlargement: scale factor, centre. Missing any part loses a mark. Congruent shapes result from reflection, rotation, translation. Similar shapes result from enlargement.</div>`,

  'Similarity & Congruence': `
<h3>Similarity & Congruence</h3>
<p><strong>Congruent</strong> shapes are identical — same size and shape. <strong>Similar</strong> shapes have the same angles but different sizes — all lengths are in the same ratio (the scale factor).</p>

<h4>Congruence Conditions</h4>
<ul>
  <li><strong>SSS</strong> — three sides equal</li>
  <li><strong>SAS</strong> — two sides and the included angle equal</li>
  <li><strong>ASA/AAS</strong> — two angles and a side equal</li>
  <li><strong>RHS</strong> — right angle, hypotenuse and one side equal</li>
</ul>

<h4>Similar Shapes: Scale Factors</h4>
<div class="formula">Length scale factor = k
Area scale factor = k²
Volume scale factor = k³</div>

<h4>Worked Example</h4>
<p>Two similar cones: linear scale factor = 3:5. Area of small cone = 36π cm².</p>
<div class="formula">Area SF = (5/3)² = 25/9
Area of large cone = 36π × 25/9 = 100π cm²</div>

<div class="tip"><strong>AQA Exam Tip:</strong> The area/volume factor catches many students out. If lengths are in ratio 2:3, areas are in ratio 4:9 and volumes in ratio 8:27. Always establish the linear scale factor first, then square or cube it.</div>`,

  'Averages & Range': `
<h3>Averages & Range</h3>
<p>There are three averages: <strong>mean</strong>, <strong>median</strong> and <strong>mode</strong>. The <strong>range</strong> measures spread.</p>

<h4>Mean</h4>
<div class="formula">Mean = sum of values / number of values</div>
<p>To find a missing value: total = mean × n, then subtract the known values.</p>

<h4>Median</h4>
<p>The middle value when data is in order. For n values, the median is the ((n+1)/2)th value. For even n, average the two middle values.</p>

<h4>Estimated Mean from a Frequency Table</h4>
<ol>
  <li>Use the midpoint of each class interval.</li>
  <li>Multiply each midpoint by its frequency.</li>
  <li>Divide the total (Σfx) by the total frequency (Σf).</li>
</ol>
<div class="formula">Estimated mean = Σ(midpoint × frequency) / Σfrequency</div>

<h4>Interquartile Range (IQR)</h4>
<div class="formula">IQR = Upper Quartile (Q3) − Lower Quartile (Q1)</div>

<div class="tip"><strong>AQA Exam Tip:</strong> For grouped data, you can only "estimate" the mean — never say you're calculating it exactly. A common error is using class boundaries instead of midpoints.</div>`,

  'Charts & Graphs': `
<h3>Charts & Graphs</h3>
<p>AQA expects you to both <strong>read</strong> and <strong>draw</strong> a range of charts. Always label axes with units.</p>

<h4>Types of Chart</h4>
<ul>
  <li><strong>Bar chart:</strong> frequency on y-axis, categories on x-axis. Bars are equal width with gaps.</li>
  <li><strong>Frequency polygon:</strong> plot midpoints at the class frequencies and join with straight lines.</li>
  <li><strong>Histogram:</strong> frequency <em>density</em> on the y-axis (not frequency). Used for grouped data with unequal class widths.</li>
  <li><strong>Pie chart:</strong> angle = (frequency / total) × 360°.</li>
</ul>

<h4>Histograms</h4>
<div class="formula">Frequency density = Frequency / Class width
Frequency = Frequency density × Class width</div>

<div class="tip"><strong>AQA Exam Tip:</strong> In a histogram, area = frequency. The most common error is plotting frequency on the y-axis instead of frequency density. Always check the class widths before calculating.</div>`,

  'Scatter Graphs': `
<h3>Scatter Graphs</h3>
<p>Scatter graphs show the relationship between two variables. Each point represents one data item.</p>

<h4>Correlation</h4>
<ul>
  <li><strong>Positive correlation:</strong> as one variable increases, so does the other.</li>
  <li><strong>Negative correlation:</strong> as one increases, the other decreases.</li>
  <li><strong>No correlation:</strong> no clear pattern.</li>
</ul>
<p>Correlation can also be described as strong or weak depending on how closely the points follow a line.</p>

<h4>Line of Best Fit</h4>
<p>Draw a straight line with roughly equal numbers of points above and below it, passing through the mean point (x̄, ȳ).</p>

<h4>Interpolation vs Extrapolation</h4>
<ul>
  <li><strong>Interpolation:</strong> using the line of best fit within the data range — reliable.</li>
  <li><strong>Extrapolation:</strong> using the line outside the data range — unreliable, as the trend may not continue.</li>
</ul>

<div class="tip"><strong>AQA Exam Tip:</strong> "Correlation does not imply causation" — just because two things are correlated doesn't mean one causes the other. AQA often asks you to explain this. Also: a line of best fit does not have to pass through the origin.</div>`,

  'Probability': `
<h3>Probability</h3>
<p>Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain).</p>

<div class="formula">P(event) = number of favourable outcomes / total number of outcomes</div>

<h4>Key Rules</h4>
<div class="formula">P(A does not happen) = 1 − P(A)
P(A and B) = P(A) × P(B)   [if independent]
P(A or B) = P(A) + P(B)    [if mutually exclusive]</div>

<h4>Without Replacement</h4>
<p>If items are not replaced, the probability changes for the second pick — update the numerator and denominator accordingly.</p>

<h4>Relative Frequency (Experimental Probability)</h4>
<div class="formula">Relative frequency = number of successes / total trials</div>
<p>The more trials carried out, the closer the relative frequency gets to the theoretical probability.</p>

<div class="tip"><strong>AQA Exam Tip:</strong> For "without replacement" questions, the denominator decreases by 1 for the second pick. A very common mistake is forgetting to reduce the denominator — always think "how many are left in the bag?"</div>`,

  'Tree Diagrams': `
<h3>Tree Diagrams</h3>
<p>Tree diagrams show all possible outcomes of two or more events. Each branch shows one outcome and its probability.</p>

<h4>Rules</h4>
<ul>
  <li>Probabilities on branches from the same point <strong>must add up to 1</strong>.</li>
  <li>To find the probability of a combined outcome, <strong>multiply along the branches</strong>.</li>
  <li>To find the probability of multiple outcomes satisfying a condition, <strong>add the relevant products</strong>.</li>
</ul>

<h4>Worked Example</h4>
<p>A bag has 3 red and 2 blue counters. Pick two without replacement.</p>
<div class="formula">P(both same colour) = P(RR) + P(BB)
= (3/5 × 2/4) + (2/5 × 1/4)
= 6/20 + 2/20 = 8/20 = 2/5</div>

<div class="tip"><strong>AQA Exam Tip:</strong> Always write probabilities on every branch and check each set sums to 1. For "without replacement", the second set of branches will have different denominators from the first — this is the most common error on tree diagram questions.</div>`,

  'Cumulative Frequency & Box Plots': `
<h3>Cumulative Frequency & Box Plots</h3>
<p>These are used to analyse large sets of grouped data and compare distributions.</p>

<h4>Cumulative Frequency</h4>
<ol>
  <li>Add up the frequencies as you go through the table (running total).</li>
  <li>Plot cumulative frequency against the <strong>upper class boundary</strong>.</li>
  <li>Join the points with a smooth S-shaped curve.</li>
</ol>

<h4>Reading Quartiles from the Graph</h4>
<div class="formula">For n data items:
Median (Q2): read at n/2
Lower Quartile (Q1): read at n/4
Upper Quartile (Q3): read at 3n/4
IQR = Q3 − Q1</div>

<h4>Box Plots</h4>
<p>A box plot shows: minimum, Q1, median, Q3, maximum. The box shows the middle 50% of the data (the IQR).</p>

<h4>Comparing Distributions</h4>
<p>Always compare <strong>median</strong> (typical value) AND <strong>IQR or range</strong> (spread/consistency), using the context of the question.</p>

<div class="tip"><strong>AQA Exam Tip:</strong> When comparing two box plots, make two distinct comparisons: one about the average (median) and one about the spread (IQR). Use the context — don't just say "A has a higher median", say what that means for the data.</div>`,

};

function getLessonContent(subtopic) {
  return LESSON_BANK[subtopic] || null;
}
