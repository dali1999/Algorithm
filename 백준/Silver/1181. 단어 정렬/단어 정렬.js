let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const count = Number(input.shift());
let result = [];

// \r 제거
for (word in input) {
  input[word] = input[word].trim();
}

// 중복 제거
input = Array.from(new Set(input));

// 길이별 정렬
sortedInput = input.sort((a, b) => a.length - b.length);

// 같은 길이의 단어 간의 사전순 정렬
for (let i = 1; i <= sortedInput[sortedInput.length - 1].length; i++) {
  let temp = input.filter((e) => e.length === i).sort();
  result.push(...temp);
}

for (word in result) {
  console.log(result[word]);
}