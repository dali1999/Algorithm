const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const parentInfo = input[1].split(" ").map(Number);
const eraseNode = parseInt(input[2]);

let tree = [];
let cnt = 0;
let rootNode;

parentInfo.forEach((parentNode, idx) => {
  if (parentNode == -1) {
    rootNode = idx;
    return;
  }
  if (!tree[parentNode]) tree[parentNode] = [];
  tree[parentNode].push(idx);
});

const dfs = (node) => {
  if (rootNode == eraseNode) return 0;
  if (!tree[node]) {
    cnt++;
    return;
  }
  tree[node].forEach((nodeNum) => {
    if (nodeNum === eraseNode) {
      if (tree[node].length === 1) cnt++;
      return;
    }
    dfs(nodeNum);
  });
  return cnt;
};

console.log(dfs(rootNode));
