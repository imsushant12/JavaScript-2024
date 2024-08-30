// Task-1:
function factorial(num) {
  return num > 0 ? num * factorial(num - 1) : 1;
}
console.log(factorial(5));

// Task-2:
function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(5));
console.log(fibonacci(6));

// Task-3:
let numbers = [1, 9, 3, 4, 10, 6, 7, 5, 2, 8];
function calculateSum(numbers, length) {
  if (length === 0) {
    return numbers[0];
  } else {
    return numbers[length] + calculateSum(numbers, length - 1);
  }
}

console.log(calculateSum(numbers, numbers.length - 1));

// Task-4:
function getMaximum(numbers, length) {
  if (length === 1) {
    return numbers[0];
  }

  const maxOfRest = getMaximum(numbers, length - 1);

  return Math.max(numbers[length - 1], maxOfRest);
}

console.log(getMaximum(numbers, numbers.length));

// Task-5:
let string = "start";
function reverseString(string, length) {
  if (length === 0) {
    return string[length];
  }
  return (string[length] += reverseString(string, length - 1));
}

console.log(reverseString(string, string.length - 1));

// Task-6:
string = "momos";
function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }
  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, -1));
  } else {
    return false;
  }
}

console.log(isPalindrome(string));

// Task-7:
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(sortedArray, 5));

// Task-8:
function countOccurrences(arr, target, index = 0) {
  if (index >= arr.length) {
    return 0;
  }

  const count = arr[index] === target ? 1 : 0;
  return count + countOccurrences(arr, target, index + 1);
}

numbers = [1, 2, 1, 4, 5, 1, 9, 10, 1];
console.log(countOccurrences(numbers, 1));

// Task-9:
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrderTraversal(node) {
  if (node === null) {
    return;
  }

  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

const root1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

inOrderTraversal(root1);

// Task-10:
function calculateDepth(node) {
  if (node === null) {
    return 0;
  }

  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

const root2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log(calculateDepth(root2));
