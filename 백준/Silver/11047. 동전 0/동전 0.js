const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let [N, K] = input.shift();
const coinValues = input.flatMap((arr) => arr);
let count = 0;

for (let i = N - 1; i >= 0; i--) {
  while (K >= coinValues[i]) {
    K -= coinValues[i];
    count++;
  }
}

console.log(count);
