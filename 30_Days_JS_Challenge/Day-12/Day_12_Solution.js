// Task-1:
try {
  const errorMessage = "Error from task one";
  throw new Error(errorMessage);
} catch (error) {
  console.log(error.message);
}

// Task-2:
function divideTwo(num1, num2) {
  if (num2 === 0) {
    throw new Error("Denominator cannot be zero");
  }
  return num1 / num2;
}

try {
  let num1 = 10;
  let num2 = 0;
  console.log(divideTwo(num1, num2));
} catch (error) {
  console.log(error.message);
}

// Task-3:
try {
  throw new Error("Error from third task");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finally always executes: Task-3");
}

// Task-4:
class ErrorClass extends Error {
  constructor(message) {
    super(message);
    this.errorMessage = message;
  }
  displayErrorMessage() {
    return this.errorMessage;
  }
}

let message = "Error message from class in the fourth task.";
let task4Object = new ErrorClass(message);
try {
  let errorMessage = task4Object.displayErrorMessage();
  throw errorMessage;
} catch (error) {
  console.log(error.message);
}

// Task-5:
try {
  let input = "";

  if (input.length === 0) {
    throw new Error("Error from fifth task");
  } else {
    console.log("User input is correct");
  }
} catch (error) {
  console.log(error.message);
}

// Task-6:
const task6Promise = new Promise((resolve, reject) => {
  let randomChoice = Math.random() < 0.5;

  if (randomChoice) {
    resolve("Task 6 Promise is resolved");
  } else {
    reject("Task 6 Promise is rejected");
  }
});
task6Promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

// Task-7:
async function task7Function() {
  try {
    let promiseObject = await new Promise((resolve, reject) => {
      let randomChoice = Math.random() < 0.5;

      if (randomChoice) {
        resolve("Task 7 Promise is resolved");
      } else {
        reject("Task 7 Promise is rejected");
      }
    });
    console.log(promiseObject);
  } catch (error) {
    console.log(error);
  }
}

task7Function();

// Task-8:
let url = "";
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error in fetching data in Task-8");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Task-9:
// Task-8:
async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error in fetching data in Task-8");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
