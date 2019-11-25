const readlineSync = require("readline-sync");

const MIN = 1000000000000;
const MAX = 10000000000000000;

let ccnumber = Number(readlineSync.question("\nNumber: "));
let sum = 0;
let digit2;
let stringer = "";
let otherDigits = 0;

while (ccnumber < MIN || ccnumber >= MAX || Number.isInteger(ccnumber) == false || Number.isNaN(ccnumber) == true) {
  ccnumber = Number(readlineSync.question("Number: "));
}
ccnumber = String(ccnumber);
let numberLength = ccnumber.length;

//calculations
for (let a = numberLength - 2; a >= 0; a -= 2) {
  digit = ccnumber.charAt(a);
  digit = Number(digit);
  digit2 = digit * 2;
  digit2 = String(digit2);
  stringer = stringer + digit2;
}

for (let c = stringer.length + 1; c >= 0; c--) {
  digit = stringer.charAt(c);
  digit = Number(digit);
  sum = sum + digit;

}
for (let b = numberLength + 1; b >= 0; b -= 2) {
  digit = ccnumber.charAt(b);
  digit = Number(digit);
  otherDigits = otherDigits + digit;
}

checkSum = sum + otherDigits;
checkSum = String(checkSum);

//validations
let valid = (checkSum.endsWith("0") == true) ? true : false;

if (valid == true) {
  if (numberLength == 15 && ccnumber.startsWith("34") == true || ccnumber.startsWith("37") == true) {
    console.log("\nAmex.\n");
  }
  else if (numberLength == 13 || numberLength == 16 && ccnumber.startsWith("4") == true) {
    console.log("\nVisa.\n");
  }
  else {
    console.log("\nMastercard.\n");
  }
}
else {
  console.log("\nInvalid.\n");
}
