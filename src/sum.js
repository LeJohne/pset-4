const readlineSync = require("readline-Sync");

let sum = 0;
let x = 0;

console.log(""); //maybe add /n

let lowBound = Number(readlineSync.question("Lower bound: "));
let upperBound = Number(readlineSync.question("Upper bound: "));

do{
  lowBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
} while (lowBound < Number.MIN_SAFE_INTEGER || upperBound > Number.MAX_SAFE_INTEGER || lowBound >= upperBound || Number.isNaN(lowBound) || Number.isNaN(upperBound) || lowBound % 1 != 0 || upperBound % 1 != 0)

for (let x = lowBound; x <= upperBound; x++) {
  if (lowBound % 2 === 0){
    for (x = lowBound; x <= upperBound; x+=2){
      sum = x + sum;
    }
  }
}
if (lowBound % 2 !== 0){
  for (x = lowBound + 1; x <= upperBound; x+=2){
    sum = x + sum;
  }
}
sum = sum.toLocaleString("en");
console.log("\n" + sum + ".");
