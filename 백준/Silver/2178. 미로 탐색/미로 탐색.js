const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
let maze = input.map((el) => el.split("").map(Number));

const BFS = (n, m, arr) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let queue = [];
  queue.push({ x: 0, y: 0 });

  while (queue.length) {
    const target = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nextX = target.x + dx[i];
      const nextY = target.y + dy[i];

      if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) {
        continue;
      }

      if (arr[nextX][nextY] !== 1) {
        continue;
      }

      arr[nextX][nextY] = arr[target.x][target.y] + 1;
      queue.push({ x: nextX, y: nextY });
    }
  }
  return arr[n - 1][m - 1];
};

const answer = BFS(n, m, maze);
console.log(answer);
