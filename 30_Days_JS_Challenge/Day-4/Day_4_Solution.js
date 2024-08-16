// Task-1:
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Task-2:
for (let i = 1; i < 11; i++) {
  console.log(`5 * ${i} = ${i * 5}`);
}

// Task-3:
let i = 1;
let sum = 0;
while (i < 11) {
  sum += i;
  i++;
}
console.log(sum);

// Task-4:
i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

// Task-5:
i = 1;
do {
  console.log(i);
  i += 1;
} while (i < 6);

// Task-6:
let factorial = 1;
let number = 5;
do {
  factorial *= number;
  number -= 1;
} while (number > 0);
console.log(factorial);

// Task-7:
let size = 5;
for (i = size; i > 0; i--) {
  let pattern = "";
  for (let j = 0; j < i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// Task-8:
for (i = 1; i < 11; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task-9:
for (i = 1; i < 11; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
