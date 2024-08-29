// Task-1:
function firstFunction() {
  let outerFunctionVariable = 100;
  function secondFunction() {
    console.log(outerFunctionVariable);
  }
  return secondFunction;
}

const firstFun = firstFunction();
firstFun();

// Task-2:
function closureFunction() {
  let privateCounter = 0;
  return function () {
    privateCounter += 1;
    console.log(privateCounter);
  };
}
const closureFun = closureFunction();
closureFun();

// Task-3:
function uniqueIDGenerator() {
  let lastID = 0;
  return function () {
    lastID += 1;
    return lastID;
  };
}

const generateID = uniqueIDGenerator();
console.log(generateID());
console.log(generateID());

// Task-4:
function createGreeting(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}
const greetMe = createGreeting("Tom");
greetMe();

// Task-5:
let functionArray = [];

for (let i = 0; i < 5; i++) {
  functionArray.push(function () {
    console.log(i);
  });
}
functionArray[0]();
functionArray[1]();
functionArray[2]();
functionArray[3]();
functionArray[4]();

// Using IIFEs:
let functionArrayTwo = [];

for (let i = 0; i < 5; i++) {
  (function (index) {
    functionArrayTwo.push(function () {
      console.log(index);
    });
  })(i);
}

functionArrayTwo[0]();
functionArrayTwo[1]();
functionArrayTwo[2]();
functionArrayTwo[3]();
functionArrayTwo[4]();

// Task-6:
const simpleFunction = require("./Day_15_Extra_Module.js");
let myArrayModule = simpleFunction();

myArrayModule.list();
myArrayModule.add(4);
myArrayModule.list();
myArrayModule.add(5);
myArrayModule.list();
myArrayModule.remove();
myArrayModule.list();

// Task-7:
function memorizeFunction(fn) {
  const cache = {};
  return function (arg) {
    if (arg in cache) {
      return cache[arg];
    } else {
      const result = fn(arg);
      cache[arg] = result;
      return result;
    }
  };
}


// Task-8:
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));


// Task-7:
const memoizedFactorial = memorizeFunction(factorial);
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(5)); 