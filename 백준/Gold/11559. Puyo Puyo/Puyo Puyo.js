const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(""));

const dx = [0, 0, -1, 1]; // 상하좌우 방향
const dy = [1, -1, 0, 0]; // 상하좌우 방향

// 보드를 6x12로 설정 (12줄의 각 줄에 6개의 컬럼)
let board = Array.from(Array(12), () => Array(6).fill("."));

// 보드 입력 받기
for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 6; j++) {
    board[i][j] = input[i][j];
  }
}

// 뿌요 터뜨리는 함수
function puyo() {
  let exploded = false; // 터진 게 있는지 확인하는 플래그
  let visited = Array.from(Array(12), () => Array(6).fill(false)); // 방문 여부 체크

  // BFS로 같은 색 뿌요 그룹 찾기
  function bfs(x, y, color) {
    let queue = []; // 배열을 사용한 큐
    const sameColorPuyos = [[x, y]]; // 같은 색 뿌요 그룹
    visited[x][y] = true; // 방문 표시
    queue.push([x, y]); // 초기 좌표 큐에 추가

    while (queue.length > 0) {
      const [curX, curY] = queue.shift(); // 큐에서 좌표 꺼내기

      // 상하좌우 네 방향으로 탐색
      for (let dir = 0; dir < 4; dir++) {
        const nx = curX + dx[dir];
        const ny = curY + dy[dir];

        // 범위를 벗어나지 않고, 방문하지 않았으며, 같은 색의 뿌요일 때
        if (
          nx >= 0 &&
          nx < 12 &&
          ny >= 0 &&
          ny < 6 &&
          !visited[nx][ny] &&
          board[nx][ny] === color
        ) {
          visited[nx][ny] = true; // 방문 표시
          queue.push([nx, ny]); // 새로운 좌표 큐에 추가
          sameColorPuyos.push([nx, ny]); // 같은 색 뿌요 그룹에 추가
        }
      }
    }

    // 4개 이상이면 터뜨리기
    if (sameColorPuyos.length >= 4) {
      sameColorPuyos.forEach(([x, y]) => {
        board[x][y] = "."; // 터뜨리기
      });
      exploded = true; // 터뜨린 게 있음을 표시
    }
  }

  // 전체 보드를 순회하며 터뜨릴 그룹 찾기
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 6; j++) {
      if (board[i][j] !== "." && !visited[i][j]) {
        bfs(i, j, board[i][j]); // 같은 색 뿌요 그룹 탐색
      }
    }
  }

  return exploded; // 터뜨린 게 있었는지 반환
}

// 뿌요가 내려오는 함수 (중력 적용)
function applyGravity() {
  for (let col = 0; col < 6; col++) {
    let emptyRow = 11; // 가장 아래에서부터 시작

    // 아래에서부터 위로 올라가며 뿌요를 내린다
    for (let row = 11; row >= 0; row--) {
      if (board[row][col] !== ".") {
        if (row !== emptyRow) {
          board[emptyRow][col] = board[row][col]; // 뿌요를 내리기
          board[row][col] = "."; // 원래 위치는 빈칸으로 설정
        }
        emptyRow--; // 빈칸 위로 이동
      }
    }
  }
}

let chainCount = 0; // 연쇄 횟수

// 뿌요가 터지고, 내려오는 작업 반복
while (true) {
  const exploded = puyo(); // 뿌요 터뜨리기 시도

  if (!exploded) {
    break; // 더 이상 터질 뿌요가 없으면 종료
  }

  applyGravity(); // 중력 적용하여 뿌요 내리기
  chainCount++; // 연쇄 횟수 증가
}

console.log(chainCount); // 연쇄 횟수 출력
