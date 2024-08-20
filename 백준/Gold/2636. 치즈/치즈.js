const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

// 세로 가로
const [N, M] = input[0].split(" ").map((e) => +e);
const board = input.slice(1).map((e) => e.split(" "));

let time = 0;
let answer = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

// 녹일 치즈 후보 배열
let candidates = [];

while (true) {
  let visit = Array.from(Array(N), () => Array(M).fill(-1));
  dfs([0, 0], visit, candidates);

  if (!candidates.length) break;
  answer = getLeftCheezeCount(board);
  melt();
  time++;
}

console.log(time + "\n" + answer);

function getLeftCheezeCount(board) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "1") count++;
    }
  }
  return count;
}

function melt() {
  let meltingCheese = candidates.slice();
  candidates = []; // 다시 녹을 후보 초기화
  while (meltingCheese.length) {
    let [x, y] = meltingCheese.shift(); // 첫번째 뽑기
    board[x][y] = "0";
  }
}

function dfs(start, visit, candidates) {
  let [x, y] = start;
  if (board[x][y] === "1") return;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < N && ny < M && visit[nx][ny] === -1) {
      // 인접 부분 치즈면 가장 바깥 부분 치즈이므로 1시간 후 녹을 것
      if (board[nx][ny] === "1") {
        visit[nx][ny] = 1;
        candidates.push([nx, ny]);
      }
      // 인접 부분 치즈 아니면
      else {
        visit[nx][ny] = 0;
      }
      visit[nx][ny] = 0;
      dfs([nx, ny], visit, candidates);
    }
  }
}
