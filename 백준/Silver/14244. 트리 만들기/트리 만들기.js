const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ');

const [n, m] = input.map(Number); // 5 3

let currentNode = 0;
let count = m - 1;

for (let i = 1; i < n; i++) {
  if (m === 2) {
    console.log(currentNode, i);
    currentNode++;
  } else {
    console.log(currentNode, i);
    currentNode++;
    if (count) {
      currentNode--;
      count--;
    }
  }
}