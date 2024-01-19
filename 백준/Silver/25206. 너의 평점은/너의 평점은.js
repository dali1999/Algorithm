const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const GRADE_RATING = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let creditTotal = 0;
let mul = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i][2].trim() === "P") {
    continue;
  }
  creditTotal += Number(input[i][1]);
  mul += Number(input[i][1]) * GRADE_RATING[input[i][2].trim()];
}

const majorRating = (mul / creditTotal).toFixed(6);
console.log(majorRating);