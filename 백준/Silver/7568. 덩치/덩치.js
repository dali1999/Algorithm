const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, ...sizes] = input;
const rates = [];

for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 0; j < N; j++) {
    if (sizes[i][0] < sizes[j][0] && sizes[i][1] < sizes[j][1]) {
      count++;
    }
  }
  rates.push(count + 1);
}

console.log(rates.join(" "));
