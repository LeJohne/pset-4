const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positive = Number(readlineSync.question("\nPositive integer: "));
let sum = 0;

while (positive < MIN || positive > MAX || Number.isNaN(positive) == true || Number.isInteger(positive) == false) {
  positive = Number(readlineSync.question("Positive integer: "));
}

while (positive > 0.1) {
  number = positive % 10;
  if (number % 2 != 0) {
    sum = sum + number
  }
  positive = Math.floor(positive / 10);
}
console.log("\n" + sum + "." + "\n");
