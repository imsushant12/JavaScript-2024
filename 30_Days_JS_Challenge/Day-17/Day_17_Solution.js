// Task-1:
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Task-2:
class LinkedList {
  constructor() {
    this.head = null;
  }

  addNodeAtEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  removeNodeFromEnd() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }

  displayNodes() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

// Task-3:
class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.stack.length === 0) {
      console.log("-1: Empty Stack");
      return null;
    } else {
      return this.stack.pop();
    }
  }

  peek() {
    if (this.stack.length === 0) {
      console.log("-1: Empty Stack");
      return null;
    } else {
      return this.stack[this.stack.length - 1];
    }
  }
}

// Task-4:
const stack = new Stack();
const str = "Hello";
for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
}
let reversedStr = "";
while (stack.peek() !== null) {
  reversedStr += stack.pop();
}

console.log(reversedStr);

// Task-5:
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.queue.length === 0) {
      console.log("-1: Empty Queue");
      return null;
    } else {
      return this.queue.shift();
    }
  }

  front() {
    if (this.queue.length === 0) {
      console.log("-1: Empty Queue");
      return null;
    } else {
      return this.queue[0];
    }
  }
}

// Task-6:
const printerQueue = new Queue();
const printJobs = ["Print job 1", "Print job 2", "Print job 3"];

printJobs.forEach((job) => printerQueue.enqueue(job));

while (printerQueue.front() !== null) {
  console.log(`Processing: ${printerQueue.dequeue()}`);
}

// Task-7:
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Task-8:
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// Task-9:
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

// Task-10:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.bfs("A", "E"));
console.log(graph.bfs("A", "F"));
