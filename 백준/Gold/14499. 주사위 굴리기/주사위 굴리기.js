const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

let [N, M, x, y, K] = input.shift().split(" ").map(Number);
const commands = input.pop().split(" ").map(Number);
let map = input.map((v) => v.split(" ").map(Number));

let dice = [null, 0, 0, 0, 0, 0, 0];

let top = 6;
let bottom = 1;
let front = 5;
let back = 2;
let left = 4;
let right = 3;

const answer = [];
const move = (dir) => {
  const originTop = top;
  const originBottom = bottom;
  const originFront = front;
  const originBack = back;
  const originLeft = left;
  const originRight = right;

  switch (dir) {
    case 1: //동
      {
        top = originLeft;
        bottom = originRight;
        left = originBottom;
        right = originTop;
      }
      break;
    case 2: //서
      {
        top = originRight;
        bottom = originLeft;
        left = originTop;
        right = originBottom;
      }
      break;
    case 3: //북
      {
        top = originFront;
        bottom = originBack;
        front = originBottom;
        back = originTop;
      }
      break;
    case 4: //남
      {
        top = originBack;
        bottom = originFront;
        front = originTop;
        back = originBottom;
      }
      break;
  }
};

const dx = [null, 0, 0, -1, 1];
const dy = [null, 1, -1, 0, 0];

for (let i = 0; i < commands.length; i++) {
  const cmd = commands[i];
  const nx = x + dx[cmd];
  const ny = y + dy[cmd];

  if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
    continue;
  } else {
    x = nx;
    y = ny;
  }

  move(cmd);
  const curPos = map[x][y];
  if (curPos === 0) {
    map[x][y] = dice[bottom];
  } else {
    dice[bottom] = map[x][y];
    map[x][y] = 0;
  }
  answer.push(dice[top]);
}

console.log(answer.join("\n"));
