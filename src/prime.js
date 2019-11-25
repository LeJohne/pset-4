const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let a = 0;

let positive = Number(readlineSync.question("\nNon-negative integer: "));

while (positive > MAX || positive <= MIN || Number.isInteger(positive) == false || Number.isNaN(positive) == true) {
  positive = Number(readlineSync.question("Non-negative integer: "));
}
if (positive === 1) {
  console.log("\nNot Prime.\n");
  a = 1;
}
for (let x = 2; x <= positive/2; x++) {
  remaining = positive % x;
  if (remaining == 0) {
    console.log("\nNot Prime.\n");
    a = 1;
    break;
  }
}
if (a == 0) {
  console.log("\nPrime.\n");
}
