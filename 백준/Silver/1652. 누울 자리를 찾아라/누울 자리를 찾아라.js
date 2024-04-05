const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function countLayPositions(room) {
  const n = room.length;
  let rowCnt = 0;
  let colCnt = 0;

  // 가로
  for (let i = 0; i < n; i++) {
    let empty = 0;
    for (let j = 0; j < n; j++) {
      if (room[i][j] === "X") {
        if (empty >= 2) {
          rowCnt++;
        }
        empty = 0;
      } else {
        empty++;
      }
    }
    if (empty >= 2) {
      rowCnt++;
    }
  }

  // 세로
  for (let j = 0; j < n; j++) {
    let consecutiveEmpty = 0;
    for (let i = 0; i < n; i++) {
      if (room[i][j] === "X") {
        if (consecutiveEmpty >= 2) {
          colCnt++;
        }
        consecutiveEmpty = 0;
      } else {
        consecutiveEmpty++;
      }
    }
    if (consecutiveEmpty >= 2) {
      colCnt++;
    }
  }

  return [rowCnt, colCnt];
}

let n = input.shift();
let room = input;
console.log(countLayPositions(room).join(" "));
