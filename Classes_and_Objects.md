### How the `new` Keyword Works with Constructors
When we create an object using a constructor function, several steps happen behind the scenes:
1. **Create a New Object**:
   - A new, empty object is created.
2. **Set the Prototype**:
   - The new object's prototype is set to the constructor function's `prototype` property.
3. **Bind `this` to the New Object**:
   - The constructor function is called with `this` bound to the new object.
4. **Initialize the Object**:
   - Inside the constructor function, properties and methods are added to `this` (the new object).
5. **Return the New Object**:
   - The new object is returned from the constructor function.
  
### Example: Creating an Object
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Alice', 30);
```
1. **Create a New Object**:
   - JavaScript creates an empty object: `{}`.
2. **Set the Prototype**:
   - The object's `__proto__` property is set to `Person.prototype`.
3. **Bind `this` to the New Object**:
   - The `Person` constructor function is called with `this` bound to the new object.
4. **Initialize the Object**:
   - Inside the `Person` function, `this.name` is set to 'Alice' and `this.age` is set to 30.
5. **Return the New Object**:
   - The new object `{ name: 'Alice', age: 30 }` is returned.


### Is Everything in JavaScript an Object?
- In JavaScript, almost everything is an object, but there are some exceptions. 
  - **Objects**: Nearly everything in JS is an object, including arrays, functions, and even other objects.
  - **Primitives**: The primitive data types (number, string, boolean, null, undefined, and symbol) are not objects. However, JS automatically wraps primitives in their corresponding object wrappers (Number, String, Boolean) when necessary, giving them object-like properties and methods temporarily.

### Prototype:
- An object from which other objects inherit properties.
- Every object has a prototype, and it serves as a template from which to get properties and methods.
    - **Object Prototypes**: Every object has a prototype property that points to another object, which is its prototype.
    - **Prototype Chain**: The chain of prototypes linked together is called the prototype chain. It’s how JS objects inherit features from one another.

### Prototypal Inheritance:
- A feature where objects can inherit properties and methods from other objects. This is done through the prototype chain.


![image](https://imgur.com/iPO0VJ1.png)

#### How It Worked in the Past?
- In the past, JavaScript used constructor functions and the `prototype` property to establish inheritance.
- **Example**:
    ```javascript
    function Person(name, age) {
    this.name = name;
    this.age = age;
    }

    Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
    };

    const person1 = new Person('Dave', 30);
    person1.greet();
    // Output: Hello, my name is Dave
    ```

#### How It Works Currently?
- With the introduction of ES6, JavaScript introduced the `class` syntax, which makes prototypal inheritance more intuitive.
- **Example**:
    ```javascript
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }

    const person1 = new Person('Dave', 30);
    person1.greet(); 
    // Output: Hello, my name is Dave
    ```

### `__proto__`:
- `__proto__` property is a way to access an object's prototype. 
- It is a property that exists on all JavaScript objects and points to the prototype object from which the object inherits properties and methods.
- **Accessing Prototype**: Can access and modify the prototype of an object using `__proto__`.
    - It is not recommended to use it directly because it can lead to performance issues and is considered a legacy feature.


### Example of Prototypal Inheritance:
#### Old Syntax (Constructor Functions)
```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(`${this.name} barks.`);
};

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Output: Rex barks.
```

#### New Syntax (ES6 Classes):
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Output: Rex barks.
```

### `call()` function:
- The `call` function is a method that allows us to call a function with a specified `this` value and arguments provided individually. 
- Enables us to set the context (`this` value) for the function we are calling, which can be very useful for reusing methods on different objects.

#### Syntax
```javascript
function.call(thisArg, arg1, arg2, ...)
```
- **`thisArg`**: The value to use as `this` when calling the function.
- **`arg1, arg2, ...`**: The arguments to pass to the function.

#### Example
We have two objects and we want to use a method defined in one object on another object.
```javascript
const person1 = {
  name: 'One',
  greet: function(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  }
};

const person2 = {
  name: 'Two'
};

// Using call to borrow the greet method from person1 for person2
person1.greet.call(person2, 'Hello'); 
// Output: Hello, my name is Two
```
Here, 
- `person1.greet.call(person2, 'Hello')` calls the `greet` function of `person1` 
- but sets `this` to `person2`, thus printing `Hello, my name is Two`.

### Why Use `this` in `call`?
- The `this` keyword in JavaScript is used to refer to the object from which the function was called. 
- Using `call`, we can control what `this` refers to inside the function, which is particularly useful in scenarios where we want to borrow methods from another object or when dealing with more complex contexts.

### Diagram
Here's a diagram to help visualize how `call` works:

```plaintext
person1                 person2
+-------------+       +-------------+
| name: 'One' |       | name: 'Two' |
| greet()     |       +-------------+
+-------------+

Calling person1.greet.call(person2, 'Hello')

this in greet() ---> refers to person2
```

#### Example:
A common use case for `call` is when working with constructors and inheritance.

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
  Animal.call(this, name); 
  // Inherit properties from Animal
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(`${this.name} barks.`);
};

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); 
// Output: Rex barks.
```

### `bind()`:
- A method that creates a new function. 
- This new function, when called, will have its this keyword set to the value we provide.
- It allows us to pre-set some arguments that will be passed to the function when it's called later.
- **Difference from `call` and `apply`**: Unlike `call` and `apply`, which immediately execute the function with a specified `this` value and arguments, `bind()` does not execute the function right away. Instead, it returns a new function that we can call whenever we want.

#### Syntax
```javascript
const boundFunction = func.bind(thisArg, arg1, arg2, ...);
```

- **`thisArg`**: The value to be passed as the `this` parameter to the target function.
- **`arg1, arg2, ...`**: Arguments to prepend to arguments provided to the bound function when calling the target function.

#### Example
```javascript
const person = {
  name: 'Tom',
  greet: function(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  }
};

const greetTom = person.greet.bind(person);
greetTom('Hello'); 
// Output: Hello, my name is Tom
```

#### Why Use `bind`
- The primary use case for `bind` is to create a function with a specific `this` context that can be called later. 
- Particularly useful in scenarios like event handling, where the context of `this` might change.

#### Why `bind` is Less Common Now
- With the introduction of arrow functions and more modern features, the need for `bind` has reduced. 
- Arrow functions do not have their own `this` context; they inherit `this` from the surrounding lexical context, making code simpler and avoiding the need to manually bind `this`.
- **Example**:
    ```javascript
    const person = {
    name: 'Tom',
    greet: function() {
        const sayHello = () => {
        console.log(`Hello, my name is ${this.name}`);
        };
        sayHello();
    }
    };

    person.greet(); 
    // Output: Hello, my name is Tom
    ```

### `Object.getOwnPropertyDescriptor()`
- A method that returns an object describing the configuration of a specific property on a given object.
- This descriptor object includes details about the property such as its value, whether it is writable, enumerable, and configurable.

#### Syntax
```javascript
Object.getOwnPropertyDescriptor(obj, prop)
```
- **`obj`**: The object from which to get the property descriptor.
- **`prop`**: The name of the property whose descriptor is to be retrieved.

#### Example
```javascript
const person = {
  name: 'Tom',
  age: 30
};

const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
```
**Output**:
```javascript
{
  value: 'Tom',
  writable: true,
  enumerable: true,
  configurable: true
}
```

### `Object.defineProperty()`
- A method that allows us to define or modify a property directly on an object, and it returns the object.
- Gives us precise control over the behavior of the property.

#### Syntax
```javascript
Object.defineProperty(obj, prop, descriptor)
```
- **`obj`**: The object on which to define the property.
- **`prop`**: The name of the property to be defined or modified.
- **`descriptor`**: The descriptor for the property being defined or modified.
    - The descriptor object can have the following properties:
      - **value**: The value associated with the property.
      - **writable**: If `true`, the value of the property can be changed.
      - **enumerable**: If `true`, the property will be listed during enumeration of the object's properties.
      - **configurable**: If `true`, the property can be deleted and these attributes can be changed.
      - **get**: A function that serves as a getter for the property, or `undefined` if there is no getter.
      - **set**: A function that serves as a setter for the property, or `undefined` if there is no setter.

#### Example
```javascript
const person = {};

Object.defineProperty(person, 'name', {
  value: 'Alice',
  writable: false, 
  // The property value cannot be changed
  enumerable: true, 
  // The property will be listed in enumerations
  configurable: true 
  // The property descriptor can be changed and the property can be deleted
});

console.log(person.name); 
// Output: Alice
person.name = 'Bob';
console.log(person.name); 
// Output: Alice (since writable is false)
```

#### Combining Both
- We can use `Object.defineProperty()` to create a property and then use `Object.getOwnPropertyDescriptor()` to see the descriptor of that property.
- **Example**:
    ```javascript
    const person = {};

    Object.defineProperty(person, 'name', {
    value: 'Alice',
    writable: false,
    enumerable: true,
    configurable: true
    });

    const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
    console.log(descriptor);
    ```
- **Output**:
    ```javascript
    {
    value: 'Alice',
    writable: false,
    enumerable: true,
    configurable: true
    }
    ```

### Getters and Setters:
- Special methods that provide a way to access and update the properties of an object. 
- They help encapsulate the internal representation of data and control how values are read and modified.

#### Syntax
- **Getter**: A method that gets the value of a specific property.
- **Setter**: A method that sets the value of a specific property.

```javascript
class Person {
  constructor(name) {
    this._name = name; 
    // Use underscore to indicate a private property
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log('Name cannot be empty.');
    }
  }
}

let person = new Person('Alice');
console.log(person.name); 
// Getter is called -> Output: Alice
person.name = 'Bob'; 
// Setter is called
console.log(person.name); 
// Getter is called -> Output: Bob
person.name = ''; 
// Setter is called -> Output: Name cannot be empty.
```

### What Happens if we give a value via Constructor and set the same value using Setter?
- When we create an instance of a class and pass a value via the constructor, it directly sets the value to the property (e.g., `_name`). 
- If we then set the same property using the setter method, the setter's logic will execute.
- **Example**:
    ```javascript
    let person = new Person('Alice'); 
    // Sets _name to 'Alice' directly
    person.name = 'Alice'; 
    // Setter is called, and it processes the value 'Alice'
    ```

### Why Use Underscore Before Property Names?
Using an underscore before a property name is a common convention to indicate that the property is intended to be private or protected, meaning it should not be accessed or modified directly outside the class.

#### Example
```javascript
class Person {
  constructor(name) {
    this._name = name; // Private property
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log('Name cannot be empty.');
    }
  }
}

let person = new Person('Alice');
console.log(person._name); 
// Direct access, not recommended -> Output: Alice
console.log(person.name); 
// Access via getter -> Output: Alice
person.name = 'Bob'; 
// Set via setter
console.log(person.name); 
// Access via getter -> Output: Bob
```

### Lexical Scope
- Refers to the visibility of variables within the nested function scopes. 
- Determined at the time the code is written, not when the code is executed. 
- The scope is defined by the location where the variable or function is declared, not where it is executed.

#### How Lexical Scope Works?
- **Global Scope**: Variables declared outside any function are in the global scope.
- **Function Scope**: Variables declared inside a function are in the function scope.
- **Block Scope**: Variables declared inside a block (using `let` or `const`) are in the block scope.
- **Example**:
    ```javascript
    const globalVar = 'global';

    function outerFunction() {
    const outerVar = 'outer';

    function innerFunction() {
        const innerVar = 'inner';
        console.log(globalVar); // Accessible
        console.log(outerVar);  // Accessible
        console.log(innerVar);  // Accessible
    }

    innerFunction();
    }

    outerFunction();
    ```

### Closures
- A feature where an inner function has access to the outer (enclosing) function's variables even after the outer function has returned. 
- Possible because the inner function maintains a reference to its lexical scope, which includes the outer function's scope.

#### How Closures Work?
When a function is created, it remembers the scope in which it was created. This scope includes:
- The variables declared within the function.
- The variables declared in any outer functions.
- The global variables.
- **Example**:
    ```javascript
    function outerFunction() {
    const outerVar = 'outer';

    function innerFunction() {
        console.log(outerVar);
    }

    return innerFunction;
    }

    const closureFunction = outerFunction();
    closureFunction(); // Outputs: outer
    ```


### Real-World Scenario
1. **Lexical Scope Scenario**: When organizing a complex application, lexical scope helps in structuring and maintaining variable visibility.
    ```javascript
    const app = (function() {
    const privateVar = 'private';

    function privateMethod() {
        console.log(privateVar);
    }

    return {
        publicMethod: function() {
        privateMethod();
        }
    };
    })();

    app.publicMethod(); // Outputs: private
    ```

2. **Closure Scenario**: Closures are useful in creating functions with preserved data, such as when creating a function factory or managing state.
    ```javascript
    function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
    }

    const counter = createCounter();
    console.log(counter()); // Outputs: 1
    console.log(counter()); // Outputs: 2
    console.log(counter()); // Outputs: 3
    ```