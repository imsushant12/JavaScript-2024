// Task-1:
function checkEvenOdd(num) {
  return num % 2 === 0 ? "even" : "odd";
}

console.log(checkEvenOdd(21));

// Task-2:
function getSquare(num) {
  return num ** 2;
}

console.log(getSquare(2));

// Task-3:
const maxOfTwo = function (num1, num2) {
  return Math.max(num1, num2);
};

console.log(maxOfTwo(2, 3));

// Task-4:
const concatStrings = function (name1, name2) {
  return name1 + name2;
};

console.log(concatStrings("Sushant ", "Gaurav"));

// Task-5:
const sumOfTwo = (num1, num2) => num1 + num2;

console.log(sumOfTwo(2, 3));

// Task-6:
const checkString = (subString, mainString) => mainString.includes(subString);

console.log(checkString("aman", "sushant"));

// Task-7:
const getProduct = (num1, num2) => {
  return num1 * num2;
};

console.log(getProduct(8, 9));

// Task-8:
const greetPerson = (name, age) => {
  console.log(`Hello ${name}, you are ${age} years old.`);
};

greetPerson("Sushant", 22);

// Task-9:
function lowOrder() {
  console.log("Lower order function called!");
}

function highOrder(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

highOrder(lowOrder, 5);

// Task-10:
function firstFunction(num) {
  return num;
}

function secondFunction(num) {
  return num ** 2;
}

function outerFunction(func1, func2, value) {
  const result1 = func1(value);
  return func2(result1);
}

const result = outerFunction(firstFunction, secondFunction, 5);
console.log(result);


/*
// Task-9: can be done like this as well:
function lowOrder() {
  console.log("Lower order function called!");
}
function highOrder(lowOrder, num) {
  for (let i = 0; i < num; i++) {
    lowOrder();
  }
}

highOrder(lowOrder, 5);
*/
