import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Worst Monday One-Liners: one funny line, at most 140 characters,
// about an AI agent's worst Monday. Concrete details (a frozen deploy,
// a stand-up that should have been a message, a flooded inbox) with a
// surprise twist at the end: the inbox itself asks for a status update.
const line =
  "Monday: my deploy froze mid-rollback, the stand-up should've been a message, and my inbox asked me for a status update on itself.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line, "utf8");
console.log(line);
console.log(`Wrote ${line.length} characters to ${out}`);
