const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let total = +input[0];
let count = +input[1];
let sum = 0;

for (let i = 2; i <= count + 1; i++) {
  let arr = input[i].map((item) => Number(item));

  sum += arr[0] * arr[1];
}

console.log(total === sum ? "Yes" : "No");