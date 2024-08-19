// Task-1:
const userName = "Sushant";
const greetingMessage = `Hi my name is ${userName}`;
console.log(greetingMessage);

// Task-2:
const multilineMessage = `
Hi my name is ${userName}.
I work at PwC, India.
I am 22 years old.
`;

console.log(multilineMessage);

// Task-3:
const numsArray = [1, 2, 3, 4, 5, 6];
let [first, second] = numsArray;
console.log(first, second);

// Task-4:
let book = {
  title: "Let Us C",
  author: "Yashavant Kanetkar",
  year: 2000,
};
let { title, author } = book;
console.log(title, author);

// Task-5:
const newArray = [...numsArray, 11, 12, 13];
console.log(newArray);

// Task-6:
function getSum(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
console.log(getSum(1, 2, 3, 6, 7, 8, 9));

// Task-7:
function prodOfTwo(num1, num2=1) {
  return num1*num2;
}
console.log(prodOfTwo(5));

// Task-8:
const newTitle = "C++";
const newAuthor = "R Balagruswami";
const newYear = 2005;

const newBook = {
  newTitle,
  newAuthor,
  newYear,

  getDetails() {
    return `The book titled "${this.newTitle}" was written by ${this.newAuthor} in the year ${this.newYear}.`;
  }
};
console.log(newBook);

// Task-9:
const property1 = 'name';
const property2 = 'age';
const property3 = 'company';

const user = {
  [property1]: "Sushant",
  [property2]: 22,
  [property3]: "PwC"
}

console.log(user);