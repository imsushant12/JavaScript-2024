// Task-1:
class Person {
  // Task-1:
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetings() {
    return `Hi ${this.name}, you are ${this.age} years old.`;
  }

  // Task-5:
  static genericGreeting() {
    console.log("Generic message from Task-5 Person class.");
  }

  // Task-7,8:
  set firstName(firstName) {
    this._firstName = firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }
}

const object1 = new Person("Sushant", 22);
console.log(object1.greetings());

// Task-2:
Person.prototype.updateAge = function (newAge) {
  this.age = newAge;
};

const object2 = new Person("Sushant", 20);
object2.updateAge(23);
console.log(object2.greetings());

// Task-3:
class Student extends Person {
  static numberOfStudents = 0;

  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
    Student.numberOfStudents += 1;
  }

  getStudentID() {
    return this.studentID;
  }
}

const object3 = new Student("Gaurav", 23, "S-23");
console.log(object3.getStudentID());

// Task-4:
Student.prototype.greetings = function () {
  return `Hi ${this.name}, you are ${this.age} years old and your student ID is ${this.studentID}.`;
};

const object4 = new Student("Sushant", 22, "S-22");
console.log(object4.greetings());

// Task-5:
Person.genericGreeting();

// Task-6:
const object6 = new Student("Gaurav", 24, "S-24");
console.log(Student.numberOfStudents);

// Task- 7,8:
const object7and8 = new Person("Gaurav Sushant", 30);
object7and8.firstName = "Sushant";
object7and8.lastName = "Gaurav";

console.log(object7and8.firstName);
console.log(object7and8.lastName);

// Task-9,10:
class Account {
  #balance; 

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. \nNew balance: ${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}. \nNew balance: ${this.#balance}`);
    } else if (amount > this.#balance) {
      console.log("Insufficient balance.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const object9 = new Account(250);
object9.deposit(250); 
console.log(`Current balance: ${object9.getBalance()}`); 
object9.withdraw(100); 
console.log(`Current balance: ${object9.getBalance()}`); 
object9.withdraw(500); 
object9.deposit(-50);
object9.withdraw(-50); 