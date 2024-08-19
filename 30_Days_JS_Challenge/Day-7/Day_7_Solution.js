// Task-1:
let book = {
  title: "Let Us C",
  author: "Yashavant Kanetkar",
  year: 2000,
};

console.log(book);

// Task-2:
console.log(book["title"], book.author);

// Task-3:
book.getDetails = function () {
  return `The title of the book is: ${this.title} and the author is: ${this.author}`;
};

console.log(book.getDetails());

// Task-4:
book.addYear = function (year) {
  this.year = year;
};
book.addYear(2005);
console.log(book);

// Task-5:
let books = [
  { title: "Let Us C", author: "Yashavant Kanetkar", year: 2000 },
  { title: "Karumanchi", author: "Unknown", year: 2010 },
  { title: "C++", author: "R Balaguswami Kanetkar", year: 2009 },
];

console.log(books);

// Task-6:
books.forEach((book) => (console.log(book.title)));

// Task-7:
books.forEach(book => {
  book.getInfo = function() {
    return `${this.title} was published in the year ${this.year}.`;
  };
});

books.forEach(book => {
  console.log(book.getInfo());
});

// Task-8:
for (const key in book) {
  if(typeof book[key] === 'function') {
    continue;
  }
  console.log(`${key}: ${book[key]}`);
}

// Task-9:
const keys = Object.keys(book);
const values = Object.values(book);

console.log(keys);
console.log(values);