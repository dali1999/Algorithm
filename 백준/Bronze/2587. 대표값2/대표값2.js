const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const avg = input.reduce((acc, el) => acc + el, 0) / 5;
input.sort((a, b) => a - b);
const mid = input[Math.floor(input.length / 2)];

console.log(avg);
console.log(mid);
