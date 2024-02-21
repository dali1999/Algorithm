const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // 정점 추가
  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }
  // 간선 추가
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

const [computerCount, , ...edges] = input;
const g = new Graph();
let visited = [];
let needVisit = [1];

for (let i = 1; i <= computerCount; i++) {
  g.addVertex(i); //adjacencyList: { '1': [], '2': [], '3': [], '4': [], '5': [], '6': [] }
}

for (let edge of edges) {
  // console.log(edge[0], edge[1]);
  g.addEdge(edge[0], edge[1]);
}

for (let i = 1; i <= computerCount; i++) {
  if (g.adjacencyList[i].includes(1)) {
  }
}

while (needVisit.length !== 0) {
  const node = needVisit.shift(); // FIFO, 첫노드 제거 후 node 에 할당

  // 탐색된 적 없으면
  if (!visited.includes(node)) {
    visited.push(node);

    // 큐에 방문하지 않은 이웃들 넣기
    for (let neighbor of g.adjacencyList[node]) {
      // 각 이웃이 아직 방문되지 않았고, 방문 대기열에 없으면
      if (!visited.includes(neighbor) && !needVisit.includes(neighbor)) {
        // 나중에 탐색되어야 함
        needVisit.push(neighbor);
      }
    }
  }
}

console.log(visited.length - 1);
