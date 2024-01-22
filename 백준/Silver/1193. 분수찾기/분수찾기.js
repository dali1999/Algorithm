const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const sum = (n) => (n * (n + 1)) / 2;
let i = 1;

while (sum(i) < input) {
  i++;
}

let a = input - sum(i - 1);
let answer = (i + 1) % 2 === 1 ? [a, i + 1 - a] : [i + 1 - a, a];

console.log(answer.join("/"));