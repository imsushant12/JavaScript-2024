- `forEach` does not return anything, even if we write explicit return in the call-back function.

### `Array.filter()`:
- Used to iterate over an array and check for the given condition. 
- Creates a new array containing elements from the original array that satisfies the provided condition.
- **Example**:
  ```js
  const numbers = [1, 2, 3, 4, 5];
  const evens = numbers.filter(num => num % 2 === 0);
  
  console.log(evens);           // Output: [2, 4]
  ```

### `map()`:
- Used to transform each element of an array into a new element according to the provided call-back function.
- The callback function takes the element, its index, and the entire array as arguments. 
- **Example**:
    ```js
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);

    console.log(doubled); 
    // Output: [2, 4, 6, 8, 10]
    ```

#### `.map()` vs `.filter()`
| Feature  | `.map()`| `.filter()` |
|----------|---------|-------------|
| **Purpose** | Transforms each element | Filters elements based on a condition |
| **Return Value** | New array with transformed elements | New array with elements passing the condition |
| **Callback Output** | Transformed value for the new array element| Boolean (`true` or `false`) to include/exclude|
| **Modifies Original Array** | No (creates a new array)| No (creates a new array) |

> **Note**: 
    > - Use `.map()` when you want to create a new array with transformed elements based on a function.
    > - Use `.filter()` when you want to create a new array containing only elements that meet a specific condition.

### `.reduce()`:
- Used to accumulate an array's elements into a single value. 
- It iterates over the array, applying a provided callback function against an accumulator and each element. 
- **Example**:
    ```js
    const numbers = [1, 2, 3, 4, 5];

    const sum = numbers.reduce((accumulator, number) => accumulator + number, 0); 
    // Initial value (0)
    console.log(sum); 
    // Output: 15

    const product = numbers.reduce((accumulator, number) => accumulator * number, 1); 
    // Initial value (1)
    console.log(product); 
    // Output: 120
    ```
- **Example**:
    ```js
    const myNums = [1, 2, 3];

    const myTotal = myNums.reduce((acc, currVal) => {
    return acc + currVal;
    }, 0);
    // Here 0 is the initial value of the accumulator.

    console.log(myTotal);               // Output: 6
    ```
    - In smaller syntax:
        ```js
        const myNums = [1, 2, 3];

        const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);

        console.log(myTotal); // Output: 6
        ```

### Function Chaining:
- Function chaining is a powerful technique which  allows us to call multiple methods on an object/array.
- **Example** using **Array**:
    ```js
    const numbers = [1, 2, 3, 4, 5];

    const doubledEvens = numbers
    .filter(num => num % 2 === 0) // Filter even numbers
    .map(num => num * 2);         // Double them

    console.log(doubledEvens);    
    // Output: [4, 8]
    ```
- **Example** using **Objects**:
    ```js
    const user = {
    name: "Tom",
    age: 30,
    greet() {
        console.log("Hello " + this.name);
    },
    getAgeInYears() {
        return this.age + " years.";
    }
    };
    // Function Chaining
    user.greet().getAgeInYears();   
    ```

### Loops in JS: 
1. `for` 
2. `while` 
3. `do-while` 
4. **`for of`**
    ```js    
    values = [1, 2, 3, 4, 5];    
    sum = 0;    
    for (const value of values) {        
        sum += value;    
    }    
    console.log(sum);       // 15    
    ``` 
5. **`for in`**
    ```js    
    const languages = {    
        js: 'javascript',    
        py: 'python',    
        rb: 'ruby',    
        cpp: 'cplusplus'    
    }    
    for (const language in languages) {      
        console.log(`${language}: ${languages[language]}`);    
    }    
    ``` 
6. `forEach`: It is a method available on several data structures in JavaScript, including arrays, maps, and sets.    
    ```js    
    let arr = [1, 2, 3, 4];    
    arr.forEach((element, index) => {        
        console.log(`Element at index ${index} is ${element}`);    
    });    
    ```    
    - We can also provide a function in `forEach`.      
        ```js      
        function printMe(item) {        
            console.log(item);      
            }      
        let arr = [1, 2, 3, 4];      
        arr.forEach(printMe);      
        // arr.forEach(printMe());        
        // Incorrect      
        ``` 

### Maps in JS: 
- Maps are iterable, but the `for-in` loop cannot be used to iterate over them. The `for...of` loop is the preferred way to iterate over a Map. 
- Maps can have keys of any data type, including objects, primitive values, or even functions. 
- Maps maintain the order of keys and values.
- Maps have unique key so same entries cannot be done. 
- Maps have a `size` property that tells you the number of key-value pairs it contains.
- Maps provide a range of methods (`set()`, `get()`, `delete()`, `has()`, etc.) to manipulate key-value pairs directly.
- They also have iterators (`keys()`, `values()`, `entries()`) that return iterators over keys, values, or key-value pairs, respectively. 
- Useful when you need to maintain key insertion order, work with keys of any data type, or utilize advanced methods like iteration and size management. - **Example**: 
    ```js 
    // Creating a new Map 
    let myMap = new Map(); 
    // Adding key-value pairs to the Map 
    myMap.set('key1', 'value1'); 
    myMap.set(2, 'value2'); 
    myMap.set({ id: 3 }, 'value3'); 
    
    // Getting values from the Map 
    console.log(myMap.get('key1'));         
    // Output: value1 
    console.log(myMap.get(2));              
    // Output: value2 
    
    // Checking if a key exists in the Map 
    console.log(myMap.has('key1'));         
    // Output: true 
    console.log(myMap.has(3));              
    // Output: false 

    // Iterating over the Map using forEach 
    myMap.forEach((value, key) => {    
        console.log(`${key} = ${value}`); 
    }); 
    // Iterating over keys using (for...of) loop 
    for (let key of myMap.keys()) {    
        console.log(`Key: ${key}`); 
    } 
    // Iterating over values using (for...of) loop
    for (let value of myMap.values()) {    
        console.log(`Value: ${value}`); 
    } 
    // Iterating over key and values using (for...of) loop 
    for (let [key, value] of myMap) {      
        console.log(`(Key): ${key} :- (Value): ${value}`); 
    } 
    // Iterating over entries using (for...of) loop
    for (let entry of myMap.entries()) {    
        console.log(`Key: ${entry[0]}, Value: ${entry[1]}`); 
    } 
    // Deleting an entry from the Map 
    myMap.delete('key1'); 
    // Clearing all entries from the Map 
    myMap.clear(); 
    // Checking the size of the Map 
    console.log(myMap.size);                
    // Output: 0 (after clearing) 
    ```