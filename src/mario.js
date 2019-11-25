const readlineSync = require("readline-sync");

const MAX = 24;
const MIN = 1;

let height = Number(readlineSync.question("\nHeight: "));

while (height > MAX || height < MIN || Number.isInteger(height) == false || Number.isNaN(height) == true) {
  height = Number(readlineSync.question("Height: "));
}

function HPyramid (height) {
  for (var a = 1; a <= height; a++) {
    var row = "";
    for (var b = 1; b <= (height - a); b++) {
      row += " ";
      if (b == (height - a)) {
        row += "#"
      }
    }
    for (var c = 1; c <= a; c++) {
      row += "#";
    }
    if (a == height) {
      row += "#";
    }
    console.log(row);
  }
}
console.log();
HPyramid(height);
console.log();
