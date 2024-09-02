// Task-1:
const arrayOne = [1, 3, 5, 2, 10, 9, 6, 8, 7, 4];
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort(arrayOne));

// Task-2:
function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
const arrayTwo = [1, 3, 5, 2, 10, 9, 6, 8, 7, 4];
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    swap(array, minimumIndex, i);
  }

  return array;
}

console.log(selectionSort(arrayTwo));

// Task-3:
const arrayThree = [1, 3, 5, 2, 10, 9, 6, 8, 7, 4];
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arrayThree));

// Task-4:
const arrayFour = [1, 3, 5, 2, 10, 9, 6, 8, 7, 4];
function linearSearch(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return `Found ${element} at index: ${i}`;
    }
  }
  return `${element} not found in the array`;
}

console.log(linearSearch(arrayFour, 10));

// Task-5:
const arrayFive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function binarySearch(array, element) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === element) {
      return `Found ${element} at index: ${mid}`;
    } else if (array[mid] < element) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return `${element} not found in the array`;
}

console.log(binarySearch(arrayFive, 4));

// Task-6:
const string = "Sushant";

function countOccurrences(string) {
  const characterCounts = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (characterCounts[char]) {
      characterCounts[char] += 1;
    } else {
      characterCounts[char] = 1;
    }
  }

  return characterCounts;
}

console.log(countOccurrences(string));

// Task-7:
const longString = "Sushant";
function longestSubString(string) {
  let maxLength = 0;
  let currentString = "";

  for (let char of string) {
    const index = currentString.indexOf(char);
    if (index !== -1) {
      currentString = currentString.slice(index + 1);
    }
    currentString += char;
    maxLength = Math.max(maxLength, currentString.length);
  }
  return maxLength;
}

console.log(longestSubString(longString));

// Task-8:
const arrayEight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function rotateArray(array, k) {
  const n = array.length;
  k = k % n;
  return array.slice(-k).concat(array.slice(0, n - k));
}

console.log(rotateArray(arrayEight, 3));

// Task-9:
const arrayNineFirst = [1, 2, 3, 4];
const arrayNineSecond = [4, 5, 6, 7];

function mergeSortedArrays(arrayOne, arrayTwo) {
  const answerArray = [];
  let i = 0;
  let j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] <= arrayTwo[j]) {
      answerArray.push(arrayOne[i]);
      i += 1;
    } else {
      answerArray.push(arrayTwo[j]);
      j += 1;
    }
  }

  while (i < arrayOne.length) {
    answerArray.push(arrayOne[i]);
    i += 1;
  }

  while (j < arrayTwo.length) {
    answerArray.push(arrayTwo[j]);
    j += 1;
  }

  return answerArray;
}

console.log(mergeSortedArrays(arrayNineFirst, arrayNineSecond));

// Task-10:
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

console.log(fibonacci(10));

// Task-11:
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array(n + 1)
    .fill()
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const capacity = 7;
console.log(knapsack(weights, values, capacity)); 