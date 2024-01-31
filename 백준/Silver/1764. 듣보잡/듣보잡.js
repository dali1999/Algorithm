const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N] = input.shift().split(" ");
const unheard = new Set();
const unseen = new Set();
const answer = [];

input.forEach((el, idx) => {
  if (idx < N) {
    unheard.add(el);
  } else {
    unseen.add(el);
  }
});

unheard.forEach((el) => {
  if (unseen.has(el)) answer.push(el);
});
answer.sort();
console.log(answer.length);
for (let name of answer) {
  console.log(name);
}