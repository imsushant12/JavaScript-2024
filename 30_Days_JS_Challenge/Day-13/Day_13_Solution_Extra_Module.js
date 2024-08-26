// Task-1:
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// Task-2:
const Person = {
  name: "Sushant",
  title: "Gaurav",
  greet() {
    return `${this.name} ${this.title}`;
  },
};

// Task-3:
function thirdTask() {
    return "This is the third task's function."
}

module.exports = { addTwoNumbers, Person, thirdTask };