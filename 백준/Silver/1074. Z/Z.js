const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, r, c] = input;

function zOrder(n, r, c) {
  // 더 못쪼개면 종료
  if (n === 0) return 0;

  // 현재의 절반
  const mid = Math.pow(2, n - 1);

  //각 사분면의 요소 개수
  const size = mid * mid;

  // 1
  if (r < mid && c < mid) {
    return zOrder(n - 1, r, c);
  }
  // 2
  else if (r < mid && c >= mid) {
    return size + zOrder(n - 1, r, c - mid);
  }
  // 3
  else if (r >= mid && c < mid) {
    return 2 * size + zOrder(n - 1, r - mid, c);
  }
  // 4
  else {
    return 3 * size + zOrder(n - 1, r - mid, c - mid);
  }
}

const result = zOrder(N, r, c);
console.log(result);
