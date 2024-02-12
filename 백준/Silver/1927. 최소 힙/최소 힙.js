const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MinHeap {
  constructor() {
    this.arr = [];
  }

  print() {
    return this.arr;
  }
  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }

  insert(el) {
    this.arr.push(el);
    this.bubbleUp();
  }

  delete() {
    if (this.arr.length === 1) {
      return this.arr.pop();
    } else if (this.arr.length === 0) {
      return 0;
    }

    const el = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.bubbleDown();
    return el;
  }

  bubbleUp() {
    let idx = this.arr.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (idx > 0 && this.arr[idx] < this.arr[parentIdx]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  bubbleDown() {
    let idx = 0;
    let leftIdx = idx * 2 + 1;
    let rightIdx = idx * 2 + 2;

    while (
      (this.arr[leftIdx] && this.arr[leftIdx] < this.arr[idx]) ||
      (this.arr[rightIdx] && this.arr[rightIdx] < this.arr[idx])
    ) {
      let smallerIdx = leftIdx;
      if (this.arr[rightIdx] && this.arr[rightIdx] < this.arr[smallerIdx]) {
        smallerIdx = rightIdx;
      }

      this.swap(idx, smallerIdx);
      idx = smallerIdx;
      leftIdx = idx * 2 + 1;
      rightIdx = idx * 2 + 2;
    }
  }
}

input.shift();
let result = [];

const heap = new MinHeap();
for (let num of input) {
  if (num !== 0) {
    heap.insert(num);
  } else {
    result.push(heap.delete());
  }
}

console.log(result.join("\n"));
