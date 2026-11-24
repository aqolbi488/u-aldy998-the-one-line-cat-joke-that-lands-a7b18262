// The One-Line Cat Joke That Lands — program/v1 entry.
// Writes a single original cat joke (one line, under 200 characters)
// to /output/entry.txt. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My cat knocked my coffee off the table, then looked up at me like I was the one who dropped it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
