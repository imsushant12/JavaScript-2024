// Task-1:
let firstArray = [1, 2, 3, 4, 5];
console.log(firstArray);

// Task-2:
console.log(firstArray[0], firstArray[firstArray.length - 1]);

// Task-3:
firstArray.push(6);
console.log(firstArray);

// Task-4:
firstArray.pop();
console.log(firstArray);

// Task-5:
firstArray.shift();
console.log(firstArray);

// Task-6:
firstArray.unshift(1);
console.log(firstArray);

// Task-7:
const doubledArray = firstArray.map((num) => num ** 2);

console.log(doubledArray);

// Task-8:
const evenArray = firstArray.filter((num) => num % 2 === 0);

console.log(evenArray);

// Task-9:
const sumOfArray = firstArray.reduce((currSum, num) => currSum + num, 0);

console.log(sumOfArray);

// Task-10:
for (let i = 0; i < firstArray.length; i++) {
  console.log(firstArray[i]);
}

// Task-11:
firstArray.forEach((element) => {
  console.log(element);
});

// Task-12:
let matrixArray = [];
for (let i = 1; i < 6; i++) {
  currentArray = [];
  for (let j = 0; j < i; j++) {
    currentArray.push(j);
  }
  matrixArray.push(currentArray);
}

console.log(matrixArray);

// Task-13:
console.log(matrixArray[2][2]);