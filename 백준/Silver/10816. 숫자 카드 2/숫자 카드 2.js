const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [, cards, , targets] = input;

let cardCount = new Map();
for (let card of cards) {
  cardCount.set(card, (cardCount.get(card) || 0) + 1);
}

const answer = targets.map((target) => cardCount.get(target) || 0);
console.log(answer.join(" "));