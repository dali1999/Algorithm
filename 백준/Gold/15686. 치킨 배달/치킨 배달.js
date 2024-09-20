const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split(" ").map(Number));
const houses = [];
const chickens = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) houses.push([i, j]);
    else if (map[i][j] === 2) chickens.push([i, j]);
  }
}

// 도시의치킨 거리를 계산하는 함수
// 현재 선택된 치킨집(visited 배열에서 true인 치킨집들)을 기준으로 계산
function calculateCityChickenDistance() {
  let totalDistance = 0;

  // 모든 집에 대해 가장 가까운 치킨집과의 거리를 계산
  for (const [houseX, houseY] of houses) {
    let minDistance = Infinity;

    // 선택된 치킨집들에 대해서만 최소 거리를 구한다
    for (let j = 0; j < chickens.length; j++) {
      if (visited[j]) {
        const [chickenX, chickenY] = chickens[j];
        const distance =
          Math.abs(houseX - chickenX) + Math.abs(houseY - chickenY);
        minDistance = Math.min(minDistance, distance); // 가장 가까운 치킨집 거리 선택
      }
    }
    totalDistance += minDistance; // 각 집의 최소 치킨 거리를 전체 거리에 더한다.
  }
  return totalDistance; // 도시의 총 치킨 거리 반환
}

const visited = new Array(chickens.length).fill(false);

let answer = Infinity;

// M개의 치킨집을 선정하는 모든 조합을 탐색
function dfs(start, selectedCount) {
  if (selectedCount === M) {
    // M개의 치킨집을 선택한 경우, 도시의 치킨 거리를 계산하고 최소값을 갱신
    answer = Math.min(answer, calculateCityChickenDistance());
    return;
  }

  // DFS를 통해 현재 인덱스 이후의 치킨집을 선택
  for (let i = start; i < chickens.length; i++) {
    if (!visited[i]) {
      visited[i] = true; // i번째 치킨집 선택
      dfs(i, selectedCount + 1); // 다음 치킨집 선택을 재귀적으로 진행
      visited[i] = false; // 선택을 취소하고 다음 조합을 탐색
    }
  }
}

dfs(0, 0);
console.log(answer);