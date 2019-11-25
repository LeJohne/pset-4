const readlineSync = require("readline-sync");

const MAX = 24;
const MIN = 1;

let height = Number(readlineSync.question("\nHeight: "));

while (height > MAX || height < MIN || Number.isInteger(height) == false || Number.isNaN(height) == true) {
  height = Number(readlineSync.question("Height: "));
}

function FullPyramid (height) {

  for (var a = 1; a <= height; a++) {
    var row = "";

    for (var b = 1; b <= (height - a + 1); b++) {
      if (b == (height - a + 1)) {
        row += "#"
      }
      else {
        row += " ";
      }
    }
    for (var c = 1; c <= a; c++) {
      row += "#";
      if (c == a) {
        row += "  #";
        for (var d = 1; d <= c; d++) {
          row += "#";
        }
      }
    }
    console.log(row);
  }
}
console.log();
FullPyramid(height);
console.log();
