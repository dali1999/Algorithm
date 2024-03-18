const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [[N], requests, [M]] = input;
requests.sort((a, b) => a - b);

function binarySearch(arr, target) {
  let start = 1;
  let end = arr[N - 1];
  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;

    // 각 요청 범위 체크해서 더함
    for (const x of arr) {
      sum += Math.min(x, mid);
    }
    // 만족하면
    if (sum <= target) {
      result = mid;
      start = mid + 1;
    }
    // 만족 안하면
    else {
      end = mid - 1;
    }
  }
  return result;
}

console.log(binarySearch(requests, M));
