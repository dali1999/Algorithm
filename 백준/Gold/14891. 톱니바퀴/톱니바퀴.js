const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let arr = input.slice(0, 4).map((e) => e.trim().split("").map(Number));
const N = input[4];
const command = input.slice(5).map((e) => e.split(" ").map(Number));

const rotateLeft = (boltNum, dir) => {
  let result = [];
  let bolt = arr[boltNum - 1];
  let leftBoltList = arr.slice(0, boltNum - 1);

  for (let i = leftBoltList.length - 1; i >= 0; i--) {
    let leftBolt = leftBoltList[i];
    let nextCur;

    // 왼쪽 볼트랑 극 다르면
    if (bolt[6] !== leftBolt[2]) {
      // 시계 방향
      if (dir === 1) {
        nextCur = [...leftBolt.slice(1), leftBolt[0]]; // 현재 볼트 시계로 돌면 왼쪽 볼트는 반시계로
        bolt = leftBolt;
        dir = -1; // 다른 방향으로 돌음
        result.push([i, nextCur]);
      }
      //반시계 방향
      else {
        nextCur = [leftBolt[7], ...leftBolt.slice(0, 7)];
        bolt = leftBolt;
        dir = 1;
        result.push([i, nextCur]);
      }
    } else {
      // 아니면 돌지 않음
      break;
    }
  }
  return result;
};

const rotateRight = (boltNum, dir) => {
  let result = [];
  let bolt = arr[boltNum - 1];
  let rightBoltList = arr.slice(boltNum);

  for (let i = 0; i < rightBoltList.length; i++) {
    let rightBolt = rightBoltList[i];
    let nextCur;

    // 오른쪽 볼트랑 극 다르면
    if (bolt[2] !== rightBolt[6]) {
      // 시계 방향
      if (dir === 1) {
        nextCur = [...rightBolt.slice(1), rightBolt[0]]; // 현재 볼트 시계로 돌면 왼쪽 볼트는 반시계로
        bolt = rightBolt;
        dir = -1; // 다른 방향으로 돌음
        result.push([i, nextCur]);
      }
      //반시계 방향
      else {
        nextCur = [rightBolt[7], ...rightBolt.slice(0, 7)];
        bolt = rightBolt;
        dir = 1;
        result.push([i, nextCur]);
      }
    } else {
      // 아니면 돌지 않음
      break;
    }
  }
  return result;
};

for (let i = 0; i < N; i++) {
  const [boltNum, dir] = command[i];
  const right = rotateRight(boltNum, dir);
  const left = rotateLeft(boltNum, dir);

  if (right.length > 0) {
    right.forEach((e) => {
      const [idx, a] = e;
      arr[boltNum + idx] = a;
    });
  }
  if (left.length > 0) {
    left.forEach((e) => {
      const [idx, a] = e;
      arr[idx] = a;
    });
  }

  if (dir === 1) {
    arr[boltNum - 1] = [arr[boltNum - 1][7], ...arr[boltNum - 1].slice(0, 7)];
  } else {
    arr[boltNum - 1] = [...arr[boltNum - 1].slice(1), arr[boltNum - 1][0]];
  }
}

console.log(
  `${arr.reduce((acc, cur, idx) => acc + (cur[0] === 1 ? 2 ** idx : 0), 0)}`
);
