const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let map = input.map((v) => v.split(""));

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

function BFS(x, y, visit) {
  let queue = [];
  visit[x][y] = 0;

  queue.push([x, y]);
  while (queue.length) {
    let [cx, cy] = queue.shift();
    for (let di = 0; di < 4; di++) {
      let nx = cx + dx[di];
      let ny = cy + dy[di];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visit[nx][ny] !== -1 || map[nx][ny] === "W") continue;
      visit[nx][ny] = visit[cx][cy] + 1;
      queue.push([nx, ny]);
    }
  }
  return Math.max(...visit.flat());
}

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === "L") {
      let visit = new Array(n).fill().map((v) => new Array(m).fill(-1));
      let temp = BFS(i, j, visit);
      answer = Math.max(answer, temp);
    }
  }
}
console.log(answer);
