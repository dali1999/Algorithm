const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function countWoodPlanks(N, M, floor) {
  let horizontal = 0;
  let vertical = 0;

  for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 0; j < M; j++) {
      if (floor[i][j] === "-") {
        count++;
      } else {
        if (count > 0) {
          horizontal++;
          count = 0;
        }
      }
    }
    if (count > 0) {
      horizontal++;
    }
  }

  for (let j = 0; j < M; j++) {
    let count = 0;
    for (let i = 0; i < N; i++) {
      if (floor[i][j] === "|") {
        count++;
      } else {
        if (count > 0) {
          vertical++;
          count = 0;
        }
      }
    }
    if (count > 0) {
      vertical++;
    }
  }

  return horizontal + vertical;
}

const [N, M] = input.shift().split(" ").map(Number);
console.log(countWoodPlanks(N, M, input));
