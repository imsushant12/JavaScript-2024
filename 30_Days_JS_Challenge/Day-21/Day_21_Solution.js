// Task-1:
const arrayOne = [2, 7, 11, 15];
const target = 9;
function twoSum(arrayOne, target) {
  const map = new Map();
  for (let i = 0; i < arrayOne.length; i++) {
    const complement = target - arrayOne[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arrayOne[i], i);
  }
  return null;
}
console.log(twoSum(arrayOne, target));

// Task-2:
const number = 120;
function reverseNumber(number) {
  let flag = true;
  if (number === 0) {
    return 0;
  } else if (number < 0) {
    flag = false;
    number = Math.abs(number);
  }
  let reversedNumber = 0;
  while (number > 0) {
    reversedNumber = reversedNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  if (flag) {
    return reversedNumber;
  } else {
    return 0 - reversedNumber;
  }
}
console.log(reverseNumber(number));

// Task-3:
const stringThree = "abba";
function isPalindrome(stringThree) {
  for (let i = 0; i < stringThree.length / 2; i++) {
    if (stringThree[i] !== stringThree[stringThree.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(stringThree));

// Task-4:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode();
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 !== null ? l1 : l2;
  return dummy.next;
}

function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function printLinkedList(head) {
  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr.join(" -> "));
}

const l1 = createLinkedList([1, 2, 4]);
const l2 = createLinkedList([1, 3, 4]);
const mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList);

// Task-5:
const stringFive = "{([])}";
function validParentheses(string) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let character of string) {
    if (character in map) {
      if (stack.length === 0 || stack.pop() !== map[character]) {
        return false;
      }
    } else {
      stack.push(character);
    }
  }
  return stack.length === 0;
}
console.log(validParentheses(stringFive));
