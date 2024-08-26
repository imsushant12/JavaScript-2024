// Task-1:
const {
  addTwoNumbers,
  Person,
  thirdTask,
} = require("./Day_13_Solution_Extra_Module.js");

console.log(addTwoNumbers(10, 20));

// Task-2:
console.log(Person.greet());

// Task-3:
console.log(addTwoNumbers(22, 24));
console.log(thirdTask());

// Task-4:
// import helloDefaultExport from "./Day_13_Solution_Extra_Module2.js";
// console.log(helloDefaultExport());

// Task-5:
const task5Object = require("./Day_13_Solution_Extra_Module3.js");

console.log(task5Object.name);
console.log(task5Object.title);
console.log(task5Object.greeting());

// Task-6:
// npm i lodash
const lodash = require("lodash");
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

const sortedNumbers = lodash.sortBy(numbers);
console.log(sortedNumbers);

// Task-7:
// npm i axios
const axios = require("axios");
axios.get("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response.data.name);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });