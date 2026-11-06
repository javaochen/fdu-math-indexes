/* Run after build: node tests/exercises_math.cjs. Uses the bundled KaTeX. */
const fs = require('node:fs');
const path = require('node:path');
const katex = require('../site/vendor/katex/katex.min.js');
const dataDir = path.join(__dirname, '../site/data');
const errors = [];
let questions = 0, formulas = 0;
for (const file of fs.readdirSync(dataDir).filter((name) => name.endsWith('-exercises.json'))) {
  const book = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf8'));
  for (const [sid, section] of Object.entries(book.sections)) {
    for (const item of section.items || []) {
      questions++;
      for (const match of item.src.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g)) {
        formulas++;
        try {
          katex.renderToString(match[1] ?? match[2], { displayMode: match[1] !== undefined,
            throwOnError: true, strict: false });
        } catch (error) { errors.push(`${book.book}/${sid}/${item.number}: ${error.message}`); }
      }
    }
  }
}
if (!questions) errors.push('No transcribed exercise questions found; run tools/build.py first.');
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`PASS: ${questions} exercise questions, ${formulas} formulas rendered by bundled KaTeX.`);
