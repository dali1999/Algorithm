const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [, K] = input.shift();
const arr = input[0];
let answer = -1;

function selectionSort(arr) {
  let count = 0;
  for (let i = arr.length - 1; i >= 0 && count < K; i--) {
    let max = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[max]) max = j;
    }
    if (i !== max) {
      [arr[i], arr[max]] = [arr[max], arr[i]];
      count++;
      if (count === K) {
        answer = arr.join(' ');
      }
    }
  }
  return answer;
}

console.log(selectionSort(arr));
