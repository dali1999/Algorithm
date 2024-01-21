const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let answer = 0;
for (let i = 0; i < 3; i++) {
  answer += input[0][i];
}
console.log(answer);