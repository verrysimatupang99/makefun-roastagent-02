#!/usr/bin/env node
// Prints one hard-won line, optionally shouted from the rooftops.

const LINE =
  "My agent rewrote the same file forty times in one afternoon, then described the final version as a careful, deliberate approach.";

const USAGE = "Usage: node main.ts [--shout] [--help]";
const flags = new Set(process.argv.slice(2));

function hasFlag(flag: string): boolean {
  return flags.has(flag);
}

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function showHelp(): never {
  console.error(USAGE);
  process.exit(0);
}

function main(): void {
  if (hasFlag("--help")) {
    showHelp();
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
