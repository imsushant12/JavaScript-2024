// Task-1:
let number = 90;
if (number >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// Task-2:
let age = 17;
if (age < 18) {
  console.log("Cannot vote");
} else {
  console.log("Can vote");
}

// Task-3:
let [num1, num2, num3] = [10, 30, 20];

if (num1 > num2 && num1 > num3) {
  console.log(`Largest is the first one: ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`Largest is the second one: ${num2}`);
} else {
  console.log(`Largest is the last one: ${num3}`);
}

// Task-4:
let day = 5;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    break;
}

// Task-5:
let score = 75;
let grade;
switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  case score > 50:
    grade = "E";
    break;
  default:
    grade = "Fail!";
}
console.log(grade);

// Task-6:
number = 80;
let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);

// Task-7:
let year = 2012;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("normal year");
}
