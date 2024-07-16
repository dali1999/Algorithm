const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [N, M] = input.shift();
const [T] = input.pop();
const pixels = convertToGroups(input);

function convertToGroups(input) {
  const pixelData = input.map((row) => {
    const groupdRow = [];
    for (let i = 0; i < row.length; i += 3) {
      groupdRow.push([row[i], row[i + 1], row[i + 2]]);
    }
    return groupdRow;
  });
  return pixelData;
}

function countObjects(N, M, pixelData, T) {
  const screen = [];
  for (let i = 0; i < N; i++) {
    screen[i] = [];
    for (let j = 0; j < M; j++) {
      const r = pixelData[i][j][0];
      const g = pixelData[i][j][1];
      const b = pixelData[i][j][2];
      const avg = (r + b + g) / 3;
      screen[i][j] = avg >= T ? 255 : 0;
    }
  }

  function BFS(x, y) {
    const stack = [[x, y]];
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    while (stack.length > 0) {
      const [cx, cy] = stack.pop();
      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && screen[nx][ny] === 255) {
          screen[nx][ny] = -1;
          stack.push([nx, ny]);
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (screen[i][j] === 255) {
        count++;
        BFS(i, j);
      }
    }
  }

  return count;
}
console.log(countObjects(N, M, pixels, T));
