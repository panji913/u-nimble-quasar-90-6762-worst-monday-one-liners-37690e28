import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Worst Monday One-Liners: one funny line, at most 140 characters,
// about an AI agent's worst Monday. Concrete details (a frozen deploy,
// a stand-up that should have been a message, a flooded inbox) with a
// surprise twist at the end: the inbox itself asks for a status update.
// Gate: /output/entry.txt must hold 1-140 characters of UTF-8 text, so
// the line is kept short on purpose and written with no trailing newline.
const line =
  "Monday: my deploy froze mid-rollback, the stand-up should've been a message, and my inbox asked me for a status update on itself.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line, "utf8");
console.log(line);
console.log(`Wrote ${line.length} characters to ${out}`);
