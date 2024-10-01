const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const num = +input.shift();
const ingredients = input.map((v) => v.split(" ").map(Number));

function findMinDiff(num, ingredients) {
  let minDiff = Infinity;
  const selected = [];
  const visited = new Array(num).fill(false);

  // 백트래킹
  const calculateDifference = (depth, targetCount) => {
    if (selected.length === targetCount) {
      let totalSour = 1;
      let totalBitter = 0;

      // 선택된 재료의 신맛, 쓴맛 계산
      selected.forEach((index) => {
        totalSour *= ingredients[index][0];
        totalBitter += ingredients[index][1];
      });

      // 최소 차이 업데이트
      const currDiff = Math.abs(totalSour - totalBitter);
      minDiff = Math.min(minDiff, currDiff);

      return;
    }

    // 모든 조합으로 비교
    for (let i = depth; i < num; i++) {
      if (!visited[i]) {
        visited[i] = true;
        selected.push(i);
        calculateDifference(i + 1, targetCount);
        selected.pop();
        visited[i] = false;
      }
    }
  };

  for (let count = 1; count <= num; count++) {
    calculateDifference(0, count);
    if (minDiff === 0) break; // 0이면 최소이므로 반환~
  }

  return minDiff;
}

console.log(findMinDiff(num, ingredients));
