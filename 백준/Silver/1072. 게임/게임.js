const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [X, Y] = input;
const Z = Math.floor((100 * Y) / X);

function binarySearch(X, Z) {
  let start = 0;
  let end = X;
  let result;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const newWinningRate = Math.floor((100 * (Y + mid)) / (X + mid));

    if (newWinningRate > Z) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}

const answer = Z >= 99 ? -1 : binarySearch(X, Z);

console.log(answer);
