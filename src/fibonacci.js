const readlineSync = require("readline-sync");
let positive = 0;
console.log("")

do {
  positive = Number(readlineSync.question("Non-negative integer: "));
} while (positive < 1 || positive > 78 || Number.isNaN(positive))

let current = 0;
let next = 1;
let previous = 0;
positive--;

while (positive > 0) {
  current = previous + next;
  previous = next;
  next = current;
  positive -= 1;
}

let current1 = current.toLocaleString("en")
console.log("\n" + current1 + ".");
console.log("\n");
