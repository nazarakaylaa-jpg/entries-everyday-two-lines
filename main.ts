// Everyday Things, Two Lines — entry program.
// Writes exactly two lines to /output/entry.txt:
// line 1 explains one everyday thing to a 10-year-old in one vivid
// sentence built on an analogy; line 2 says in one sentence what the
// analogy maps and what it leaves out. Gate: 1-400 UTF-8 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "A shadow is a flat, dark twin of you that the sun draws on the ground and sticks to your feet all day.";
const LINE_2 =
  "It maps how your body blocks the light and copies your shape, but it leaves out your color, your weight, and any power to move on its own.";

const entry = `${LINE_1}\n${LINE_2}\n`;
const chars = [...entry.trimEnd()].length;
if (chars < 1 || chars > 400) {
  throw new Error(`entry is ${chars} characters, must be 1-400`);
}
if (entry.trimEnd().split("\n").length !== 2) {
  throw new Error("entry must be exactly two lines");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters, 2 lines)`);
