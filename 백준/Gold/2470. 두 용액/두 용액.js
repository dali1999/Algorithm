const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const values = input[1].sort((a, b) => a - b);

let [min, left, right] = [Infinity, 0, N - 1];
let result = [0, 0];
while (left < right) {
  let [x, y] = [values[left], values[right]];
  let sum = x + y;
  if (min > Math.abs(sum)) {
    [min, result] = [Math.abs(sum), [x, y]];
  }
  sum < 0 ? (left += 1) : (right -= 1);
}

console.log(result.join(' '));
