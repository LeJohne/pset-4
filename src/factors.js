const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 1;

let a = 0;
let positive = Number(readlineSync.question("\nPositive integer: "));
let factor = "\n";

if (positive == 1) {
  console.log("\n1.\n");
  a = 2;
}
while (positive > MAX || positive < MIN || Number.isInteger(positive) == false || Number.isNaN(positive) == true) {
  positive = Number(readlineSync.question("Positive integer: "));
}

for (let x = 1; x <= positive/2; x++) {
  remainder = positive % x;
  if (remainder == 0) {
    if (factor.includes(", " + x + ", ") == true) {
      break;
    }
    else {
      if (positive / x == x) {
        factor = factor + x + ".";
        a = 1;
      }
      else {
          factor = factor + x + ", " + (positive / x) + ", ";
      }
    }
  }
}

if (a == 0) {
  comma = factor.lastIndexOf(",");
  factor = factor.slice(1, comma);
  factor = factor + ".";
  console.log("\n" + factor + "\n");
}
else if (a == 1) {
console.log(factor + "\n");
}
