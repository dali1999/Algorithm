const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [[N], requests, [M]] = input;
requests.sort((a, b) => a - b);

function binarySearch(requests, M) {
  let start = 1;
  let end = requests[N - 1];
  let result = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const sum = requests.reduce((acc, request) => acc + Math.min(request, mid), 0);

    if (sum <= M) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

console.log(binarySearch(requests, M));
