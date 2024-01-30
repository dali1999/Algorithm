const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// N, M 제거
input.shift();
input.splice(1, 1);

// 상근이의 카드 중복제거, M개의 정수
let set = new Set(input[0].trim().split(" "));
let arrB = input[1].split(" ");

let answer = "";

for (let i = 0; i < arrB.length; i++) {
  if (set.has(arrB[i])) {
    answer += "1";
  } else {
    answer += "0";
  }
}

console.log(answer.split("").join(" "));