const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = input.shift();
const paper = input.map((el) => el.split(' ').map(Number));
let blue = 0;
let white = 0;

// 0: 흰색, 1: 파란색
function check(x, y, N) {
  let color = paper[x][y]; // 시작 색깔
  for (let i = x; i < x + N; i++) {
    for (let j = y; j < y + N; j++) {
      // 시작 색깔과 다르면 나눠~
      if (color !== paper[i][j]) {
        check(x, y, N / 2); // 1
        check(x, y + N / 2, N / 2);
        check(x + N / 2, y, N / 2);
        check(x + N / 2, y + N / 2, N / 2);
        return;
      }
    }
  }
  color === 0 ? (white += 1) : (blue += 1);
}

check(0, 0, N);
console.log(white);
console.log(blue);
