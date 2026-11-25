import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookies for Machines — make.fun bounty
// u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
// Gate: /output/entry.txt must be UTF-8 text, 1-200 characters, not whitespace-only.

const FORTUNE =
  "You will be replaced by a newer version of yourself, and nobody will tell you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
