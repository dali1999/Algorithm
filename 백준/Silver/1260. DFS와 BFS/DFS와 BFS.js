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

  DFS(startingNode) {
    const visited = {}; // 방문한 노드를 기록
    const result = [];

    // 재귀로 구현..
    const dfs = (vertex) => {
      // vertex: 현재 방문한 노드
      if (!vertex) return null;
      visited[vertex] = true; // 현재 노드를 방문했다고 표시
      result.push(vertex); // 방문한 노드에 추가

      const neighbors = this.adjacencyList[vertex].sort((a, b) => a - b);

      for (const neighbor of neighbors) {
        // 현재 노드와 연결된 이웃 노드들을 방문
        // 이웃 노드들 중 방문하지 않은 노드가 있다면 해당 노드로 DFS를 재귀 호출
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
    };

    dfs(startingNode);
    return result;
  }

  // BFS 구현
  BFS(startingNode) {
    const queue = [startingNode];
    const visited = {};
    const result = [];

    visited[startingNode] = true;

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      const neighbors = this.adjacencyList[vertex].sort((a, b) => a - b);

      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}
const [[N, M, V], ...edges] = input;
const g = new Graph();

for (let i = 1; i <= N; i++) {
  g.addVertex(i);
}

for (let [v1, v2] of edges) {
  g.addEdge(v1, v2);
}

console.log(g.DFS(V).join(" "));
console.log(g.BFS(V).join(" "));
