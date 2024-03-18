const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, M] = input.shift();
const [heights] = input;

function calculateCutTreesHeight(trees, cutHeight) {
  let totalHeight = 0;
  for (let tree of trees) {
    if (tree > cutHeight) {
      totalHeight += tree - cutHeight;
    }
  }
  return totalHeight;
}

function findMaxCutHeight(trees, required) {
  let maxCutHeight = 0;
  let min = 0;
  let max = Math.max(...trees);

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let cutLength = calculateCutTreesHeight(trees, mid);

    if (cutLength >= required) {
      maxCutHeight = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return maxCutHeight;
}

const maxCutHeight = findMaxCutHeight(heights, M);
console.log(maxCutHeight);
