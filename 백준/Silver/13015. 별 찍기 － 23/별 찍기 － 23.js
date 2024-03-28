const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const n = Number(input);

for (let i = 1; i <= n; i++) {
  if (i === 1) {
    console.log("*".repeat(n) + " ".repeat(2 * (n - 1) - 1) + "*".repeat(n));
  } else if (i !== n) {
    console.log(
      " ".repeat(i - 1) +
        "*" +
        " ".repeat(n - 2) +
        "*" +
        " ".repeat(2 * (n - i) - 1) +
        "*" +
        " ".repeat(n - 2) +
        "*"
    );
  } else {
    console.log(
      " ".repeat(i - 1) +
        "*" +
        " ".repeat(n - 2) +
        "*" +
        " ".repeat(n - 2) +
        "*"
    );
  }
}

for (let i = n - 1; i > 0; i--) {
  if (i === 1) {
    console.log("*".repeat(n) + " ".repeat(2 * (n - 1) - 1) + "*".repeat(n));
  } else {
    console.log(
      " ".repeat(i - 1) +
        "*" +
        " ".repeat(n - 2) +
        "*" +
        " ".repeat(2 * (n - i) - 1) +
        "*" +
        " ".repeat(n - 2) +
        "*"
    );
  }
}