const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

[n, x] = input;
x = x.split(" ").map((e) => Number(e));

const answer = [];
const setArr = Array.from(new Set([...x])).sort((a, b) => a - b);

const obj = {};
setArr.forEach((e, idx) => (obj[e] = idx));

for (let i = 0; i < Number(n); i++) {
  answer.push(obj[x[i]]);
}

console.log(answer.join(" "));