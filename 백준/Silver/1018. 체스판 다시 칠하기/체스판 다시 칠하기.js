const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const whiteBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const NM = input.shift();
const N = Number(NM[0]); // 10
const M = Number(NM[1]); // 13

// 문자열 끝 줄바꿈 문자 제거
for (let i = 0; i < N; i++) {
  input[i] = input[i].map((element) => element.trim()).join("");
}
let answer = 64;

// input 범위 안에서의 비교
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    check(j, i);
  }
}

// 8*8 체스판 범위 안에서의 비교
function check(x, y) {
  let checkWhite = 0;
  let checkBlack = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      // whiteBoard 비교
      if (input[i][j] !== whiteBoard[i - y][j - x]) checkWhite++;

      // blackBoard 비교
      if (input[i][j] !== blackBoard[i - y][j - x]) checkBlack++;
    }
  }
  let min = Math.min(checkWhite, checkBlack);
  answer = Math.min(answer, min);
}
console.log(answer);
