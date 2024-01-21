const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let arr = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;
for (let i = 1; i < input.length; i++) {
  let x = input[i][0];
  let y = input[i][1];

  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      if (arr[x + j][y + k] !== 0) {
        continue;
      }
      if (arr[x + j][y + k] === 0) {
        arr[x + j][y + k] = 1;
        count++;
      }
    }
  }
}
console.log(count);
