// Task-1:
const string1 = "JavaScript is JavaScript";
const pattern1 = /JavaScript/g;
const match1 = string1.match(pattern1);
console.log(match1);

// Task-2:
const string2 = "JavaScript-Day-19";
const pattern2 = /[0-9]/g;
const match2 = string2.match(pattern2);
console.log(match2);

// Task-3:
const string3 = "Javascript is My Current favorite Language";
const pattern3 = /[A-Z][a-z]*/g;
const match3 = string3.match(pattern3);
console.log(match3);

// Task-4:
const string4 = "Hello 95 World65 98";
const pattern4 = /\d+/g;
const match4 = string4.match(pattern4);
console.log(match4);

// Task-5:
const string5 = "(123) 456-7890";
const pattern5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const match5 = string5.match(pattern5);
if (match5) {
  const [, areaCode, centralOfficeCode, lineNumber] = match5;
  console.log(`Area Code: ${areaCode}`);
  console.log(`Central Office Code: ${centralOfficeCode}`);
  console.log(`Line Number: ${lineNumber}`);
} else {
  console.log("No match found");
}

// Task-6:
const string6 = "example@domain.com";
const pattern6 = /^([^@]+)/;
const match6 = string6.match(pattern6);
console.log(match6[0]);

// Task-7:
const string7 = "JavaScript is a popular language";
const pattern7 = /^\w+/;
const match7 = string7.match(pattern7);
console.log(match7[0]);

// Task-8:
const string8 = "I love programming in JavaScript";
const pattern8 = /\w+$/;
const match8 = string8.match(pattern8);
console.log(match8[0]);

// Task-9:
const string9 = "Password123!";
const pattern9 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const match9 = string9.match(pattern9);
console.log(match9[0]);

// Task-10:
const string10 = "https://www.sushant.com";
const pattern10 =
  /^(https?:\/\/)?([\w.-]+)+[\w-]+(\.[a-z]{2,6})?(:\d{1,5})?(\/.*)?$/i;
const match10 = string10.match(pattern10);
console.log(match10[0]);
