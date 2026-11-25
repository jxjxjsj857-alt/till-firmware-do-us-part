// Till Firmware Do Us Part — a robot's wedding vow.
//
// The program writes exactly one sentence — the vow — to /output/entry.txt.
// The vow must be a single sentence, under 200 characters, spoken by a robot
// at its own wedding: funny and heartfelt at the same time.

import { mkdirSync, writeFileSync } from "node:fs";

// Revised vow: "I vow" is the wedding register, not a generic promise;
// "unexpected reboot" lands the joke from the situation itself; "the one
// process I will never terminate" is the machine speaking, and it is also
// the tender core — of everything it could shut down, it keeps this one.
const VOW =
  "I vow to love you through every firmware update, every dead battery, and every unexpected reboot, because you are the one process I will never terminate.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW + "\n", "utf8");
