const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;

function calc(N, K) {
  let dp = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(0));

  for (let i = 0; i <= N; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i <= K; i++) {
    dp[i][i] = 1;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= Math.min(i, K); j++) {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % 10007;
    }
  }

  return dp[N][K];
}

const result = calc(N, K);
console.log(result);
