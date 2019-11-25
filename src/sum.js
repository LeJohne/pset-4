const readlineSync = require("readline-Sync");

let sum = 0;
let a = 0;

console.log(""); //maybe add /n

do{
  lowBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
} while (lowBound < Number.MIN_SAFE_INTEGER || upperBound > Number.MAa_SAFE_INTEGER || lowBound >= upperBound || Number.isNaN(lowBound) || Number.isNaN(upperBound) || lowBound % 1 != 0 || upperBound % 1 != 0)

for (let a = lowBound; a <= upperBound; a++) {
  if (lowBound % 2 === 0){
    for (a = lowBound; a <= upperBound; a+=2){
      sum = a + sum;
    }
  }
}
if (lowBound % 2 !== 0){
  for (a = lowBound + 1; a <= upperBound; a+=2){
    sum = a + sum;
  }
}
sum = sum.toLocaleString("en");
console.log("\n" + sum + "." + "\n");
