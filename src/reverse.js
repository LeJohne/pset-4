const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positive = Number(readlineSync.question("\nPositive integer: "));
let reverse = "";
let number;

while (positive < MIN || positive > MAX || Number.isNaN(positive) == true || Number.isInteger(positive) == false) {
  positive = Number(readlineSync.question("Positive integer: "));
}

while (positive > 0.1) {
  number = positive % 10;
  positive = Math.floor(positive / 10);
  if (positive >= 1) {
    reverse = reverse + number + ", ";
  }
  else {
    reverse = reverse + number + ".\n";
  }
}
console.log("\n" + reverse + "\n");
