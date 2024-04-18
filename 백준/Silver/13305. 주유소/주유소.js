const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let distance = input[1].split(" ").map(BigInt);
let price = input[2].split(" ").map(BigInt);
let totalPrice = price[0] * distance[0];

let minPrice = price[0];

for (let i = 1; i < price.length - 1; i++) {
  if (minPrice > price[i]) {
    minPrice = price[i];
  }
  totalPrice += minPrice * distance[i];
}

console.log(String(totalPrice));