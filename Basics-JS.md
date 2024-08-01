### Important Pointers:
- We can initially write ``"use strict";`` as it is a good practice to make your code more robust. **Strict mode** is an **optional** feature.
- JavaScript is a single-threaded.
  
### Data Types in JS:
* **Primitive**: Simple data types that hold a single value. ***Primitives are passed by value, and are created in stack memory***.
    * Number (integers, decimals)
    * BigInt (to store larger values)
    * String (text)
    * Boolean (true/false)
    * Undefined (variable declared but no value assigned)
    * Null (represents no value)
    * Symbol (unique and immutable identifier)
* **Non-primitive/ Reference**: More complex data structures that can hold collections of other values. ***Non-primitives are passed by reference, and are created in heap memory***.
    * Object (unordered collection of key-value pairs)
    * Array (ordered list of values)

> **Note**: `typeof null` is `object`. But `typeof undefined` is `undefined`.

- Link to **`String`** Article:

#### Data Type Conversions:
1. To Number:
    ```js
    // "33" => 33
    // "33abc" => NaN
    //  true => 1
    // false => 0
    ```
2. To Boolean:
    ```js
    // 1 => true
    // 0 => false
    // "" => false
    // "value" => true
    ```
3. Misc:
    ```js
    console.log("1" + 2);       // 12
    console.log(1 + "2");       // 12
    console.log("1" + 2 + 2);   // 122
    console.log(1 + 2 + "2");   // 32
    // All the above will be STRING

    // All the below will be NUMBER
    console.log(+true);         // 1
    console.log(-true);         // -1
    console.log(+false);        // 0
    console.log(-false);        // -0
    console.log(+"");           //0
    // console.log(""+);        // error
    ```

### Variables in JS:
```js
// Variables can be defined in 2 ways:
let age = 22
const name = "Gaurav"

// Not recommended due to problem is scope
var city = 'Kolkata'

// Not recommended but JS will not through error
state = "West Bengal"
// it is similar to var state = "West Bengal"

let pinCode;    // pinCode is undefined here
```

### Arrays 
- **Slice**: Creates a new array by copying a portion of an existing array. 
- **Splice**: Modifies the original array by adding or removing elements.   
    **Example**:   
    ```js   
    let array = [1, 2, 3, 4, 5];   
    
    // Using slice to create a new array   
    let newArray = array.slice(1, 4);   
    
    console.log("Original array:", array); 
    // Output: [1, 2, 3, 4, 5]   
    console.log("Sliced array:", newArray); 
    // Output: [2, 3, 4]   
    
    // Using splice to modify the array   
    array.splice(2, 1); 
    // Removes 1 element at index 2    
    console.log("Modified array after splice:", array); 
    // Output: [1, 2, 4]   
    
    // Adding elements using splice   
    array.splice(1, 0, 6, 7); 
    // Inserts elements 6 and 7 starting from index 1   
    console.log("Array after inserting elements:", array); 
    // Output: [1, 6, 7, 2, 4]   
    ``` 

- [Link to **`Array`** Article](https://dev.to/imsushant12/a-guide-to-master-javascript-arrays-38bj)

### Objects
#### Declarations ways:   
```js
obj1 = {
  name: "Sushant",
  "full name": "Sushant Gaurav"
};
  
const personPrototype = {
  greet() {
    console.log("My name is Sushant.");
  },
  age() {
    console.log("My age is 22 years.");
  }
};
  
const person1 = Object.create(personPrototype);   
```
#### Dealing with Symbol
If we want to make Symbol as a key, we need to use `[]` before the key name. 
- **Example**:   
    ```js
    const firstSymbol = Symbol('123');
    const secondSymbol = Symbol('456');

    const obj1 = {
      name: "Sushant",
      firstSymbol: "Gaurav" 
      // This property uses a string key, not the symbol
    };

    const obj2 = {
      name: "Sushant",
      [secondSymbol]: "Gaurav" 
      // This property uses the symbol as the key
    };

    console.log(typeof obj1["firstSymbol"]);    
    // string
    console.log(obj1["firstSymbol"]); 
    // Gaurav - (string key used)
    console.log(obj1[firstSymbol]); 
    // undefined - (symbol key not used)
    console.log(obj1); 
    // { name: 'Sushant', firstSymbol: 'Gaurav' }

    console.log(typeof obj2["secondSymbol"]);   
    // undefined 
    console.log(obj2["secondSymbol"]); 
    // undefined
    console.log(obj2[secondSymbol]); 
    // Gaurav -  (symbol key used)
    console.log(obj2); 
    // Output: { name: 'Sushant', [Symbol(456)]: 'Gaurav' }
    ```  
#### `Object.assign()`
This method is used to merge two or more objects into a new target object.
- **Example**: 
   ```js   
    const target_1 = { a: 1, b: 2 };
    const firstSource_1 = { b: 3, c: 4 };
    const secondSource_1 = { c: 5, d: 6 };
    const merged_1 = Object.assign(target_1, firstSource_1, secondSource_1);

    console.log(target_1);
    // Output: { a: 1, b: 3, c: 5, d: 6 }
    console.log(merged_1);
    // Output: { a: 1, b: 3, c: 5, d: 6 }

    const target_2 = { a: 1, b: 2 };
    const firstSource_2 = { b: 3, c: 4 };
    const secondSource_2 = { c: 5, d: 6 };
    const merged_2 = Object.assign({}, firstSource_2, secondSource_2);

    console.log(target_2);
    // Output: { a: 1, b: 2 }
    console.log(merged_2);
    // Output: { b: 3, c: 5, d: 6 }
   ```

- Computed property names allow us to dynamically create property names in an object. We can use expressions inside square brackets (`[]`) to compute the property names. 
- **Example**:
    ```js
    const propName1 = 'title';
    const propName2 = 'author';
    const propName3 = 'year';

    const book = {
    [propName1]: 'Let Us C',
    [propName2]: 'Yashavant Kanetkar',
    [propName3]: 2000
    };
    console.log(book);
    ```
- [Link to **`Objects`** Article.](https://dev.to/imsushant12/a-guide-to-master-javascript-objects-362b)

### Destructing of Objects and Arrays:
- Destructuring lets us unpack values from arrays or properties from objects into separate variables. 
- It simplifies working with complex data structures.
- The order of variables in the destructuring pattern matches the order of elements/properties in the array/object.
- We can skip elements by adding extra commas.
- **Example**:
    ```js
    const colors = ["red", "green", "blue"];
    const [firstColor, secondColor] = colors;

    console.log(firstColor);    // Output: "red"
    console.log(secondColor);   // Output: "green"

    const person = { fullName: "Sushant", age: 30 };
    const { fullName: name, age } = person;

    console.log(name);          // Output: "Sushant"
    console.log(age);           // Output: 30
    // We can even give different name to the variable. For example: "name" for "fullName"
    ```

### Functions
Functions can be defined in multiple ways:
```js
// 1. Traditional.
function greet(name) {
    console.log("Hello, " + name);
}

// 2. Treats the function as a value and can be assigned to a variable or passed as an argument.
const greet = function(name) {
    console.log("Hello, " + name);
};

// 3. Arrow Functions: has implicit return for single-line expressions.
const greet = (name) => console.log("Hello, " + name);

// 4. Using Function Constructor.
const greet = new Function("name", "console.log('Hello, ' + name)");
```

#### Rest Operator:
- The rest operator gathers excess function arguments into a single array.
- There can only be one rest parameter per function definition.
- Basically follows array destructuring.
- **Example**:
    ```js
    function sum(...numbers) {
      let total = 0;
      numbers.forEach((num) => (total += num));
      return total;
    }

    console.log(sum(1, 2, 3, 4)); // Output: 10
    ```

### Scope: 
1. **Hoisting**: Function declarations (defined with the function keyword) are hoisted to the top of their scope. We can call them before they are defined in the code.
2. **Function Expressions**: Function expressions (assigned to variables) are not hoisted. They are treated like any other variable and need to be defined before they are used.

**Example**:
```js
addOne();       // No Error
function addOne(number) {
  return number + 1;
}

addTwo();       // ERROR
// ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (number) {
  return number + 2;
};
```

### Arrow Functions:
- Arrow functions provide a concise way to define functions.
- They are often used for callback functions or concise function definitions.
- When we are not using the curly brackets, we need to write `return` keyword and it is called as **explicit return**.
- In case of smaller code, we do not use curly brackets and it is called as **implicit return**.
- **Example**:
    ```js
    const addTwo = (a, b) => {
    return a + b;
    };
    console.log(addTwo(3, 4));              // 7

    const sumTwo = (a, b) => a + b;
    console.log(sumTwo(4, 5));              // 9

    const addNums = (a, b) => a + b;
    console.log(addNums(5, 6));             // 11
    ```

### THIS keyword:
`this` refers to the current execution context of a function. It is a dynamic value that changes depending on how the function is called.

#### Working in `Node.js` environment:
When we run `console.log(this);` in `Node.js` outside of any function, `this` refers to the **global object**. However, in `Node.js` modules, `this` inside a function typically refers to the module's exports. This is because the module is the execution context for the function.
- **Example**:
    ```js
    console.log(this); 
    // Outputs: {} (empty object - global object)

    module.exports = {
    a: 1,
    b: 2,
    method() {
        console.log(this); 
        // Outputs: { a: 1, b: 2 } (module's exports)
    }
    };
    ```

#### Working in Browser:
In browsers, when we run `console.log(this);` outside of any function, `this` refers to the **window object**. The window object is the global object in a browser environment and provides access to browser functionalities.
- **Example**:
    ```js
    console.log(this); 
    // Outputs: Window object (with browser properties and methods)
    ```

#### Working with arrow functions:
Arrow functions have a different way of handling `this`. They inherit the `this` value from the surrounding context where they are defined, not from where they are called.
- **Example**:
    ```js
    const one = () => {
        console.log(this);
    }

    one();
    // Output: {}
    ```

#### Working with normal functions:
When we use `this` inside a function, we are essentially logging the **global object**. The specific properties that we can see may vary depending on the `Node.js` version and environment, but it will generally represent the global context available in the `Node.js` program.
- **Note**: In regular functions (defined with the function keyword), `this` behaves based on the function's call context. If called outside of an object, it defaults to the global object (in `Node.js`) or the window object (in browsers).
- **Example**:
    ```js
    function one() {
        console.log(this);
    }

    one();
    /*
    OUTPUT:
    ------
    <ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Getter/Setter],
    atob: [Getter/Setter],
    btoa: [Getter/Setter],
    performance: [Getter/Setter],
    fetch: [AsyncFunction: fetch],
    crypto: [Getter]
    }
    */
    ```

### IIFE:
IIFE stands for Immediately Invoked Function Expression. 
- It combines function expressions, closures, and immediate execution.
- A flexible tool for creating private functions and variables, promoting modularity and data safety in your JavaScript code. They are particularly useful for:
    - Data privacy and namespace management.
    - Simulating modules for better organization.
    - Executing code immediately upon loading.
- **Example**:
    ```js
    (function () {
    console.log("This code runs immediately!");
    })();

    // Named IIFE
    (function one() {
    console.log("In function-1");
    })();

    // Simple IIFE
    ((name) => {
    console.log(`Hi ${name}`);
    })("Sushant");

    // Output: 
    // This code runs immediately!
    // In function-1
    // Hi Sushant
    ```

### Code Execution in JS:
- JS has mainly 2 executions contexts:
    1. Global EC
    2. Function/ Functional EC
    3. Eval EC (in some contents like Mongoose etc)
- The Global Execution Context is referred by `this`.
- A JS code runs in two phases:
    1. **Memory Creation Phase**/**Creation Phase**: In this phase only variables are allocated in memory with `undefined` value. 
    2. **Execution Phase**: The actual working and computation is done in this phase.

#### Execution Flow Diagram and Example:
![Execution Flow Diagram and Example](https://imgur.com/5JdBU2C.png)


### Truthy and Falsy values:
**Truthy**
```
"0", 10, 'false', " ", [], {}, function(){}
```
**Falsy**
```
false, 0, -0, BigInt 0n, "", null, undefined, NaN
```

**How to check empty array and empty object?**
```js
const name = []
if (name.length === 0) {
    console.log("Array is empty");
}

const obj = {}
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}
```

### Nullish Coalescing Operator (`??`):
- It takes two operands, if the first operand evaluates to either null or undefined, the operator returns the second operand. Otherwise, it returns the first operand itself.
- Introduced in **ES2020**.
- **Example**:
    ```js
    let value;

    value = 5 ?? 10;
    console.log(value);             // 5

    value = null ?? 10;
    console.log(value);             // 10

    value = undefined ?? 15;
    console.log(value);             // 15

    value = null ?? 10 ?? 20;
    console.log(value);             // 10
    ```


