const readlineSync = require("readline-sync");

let average = 0
let sum = 0
let div = 0

console.log("");
do {
  positive = Number(readlineSync.question("Non-negative integer: "));
  if (positive >= 0 && positive < Number.MAX_SAFE_INTEGER && !Number.isNaN(positive) && positive % 1 == 0) {
    sum = positive + sum
    div += 1
  }
} while ((positive >= 0 && positive < Number.MAX_SAFE_INTEGER && positive % 1 == 0) || Number.isNaN(positive) || div == 0)

average  = sum / div
average = average.toLocaleString('en', {minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + average +  ".\n");
