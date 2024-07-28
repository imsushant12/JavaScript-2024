### Making XHR Requests Before Promises and Fetch
- Before Promises and the `fetch` API, AJAX (Asynchronous JavaScript and XML) requests were made using the `XMLHttpRequest` (XHR) object.

#### Advantages of XHR:
1. Enabled asynchronous data fetching without reloading the page.
2. Supported across all major browsers.

#### Disadvantages of XHR:
1. Requires more lines of code for handling states (`readyState`) and statuses (`status`).
2. Managing multiple asynchronous operations leads to deeply nested callbacks, making code harder to read and maintain.
3. Handling errors and responses is less straightforward compared to modern methods.

### Why Switch to Promises and Fetch:
**Promises:**
- **Chaining**: Allows chaining of asynchronous operations, making code more readable and maintainable.
- **Error Handling**: Simplifies error handling using `.catch()`.

**Fetch API:**
- **Simpler Syntax**: Provides a cleaner and simpler API for making network requests.
- **Built-in Promises**: Uses Promises natively, allowing easier chaining and better error handling.

#### Example:
```javascript
// The `requestUrl` variable holds the API endpoint URL.
const requestUrl = 'https://api.github.com/users/imsushant';

// An instance of `XMLHttpRequest` is created.
const xhr = new XMLHttpRequest();

// Initializes the request with the HTTP method (`GET`) and the URL. 
// The third parameter (`true`) indicates that the request is asynchronous.
xhr.open('GET', requestUrl, true);

// The `onreadystatechange` event is triggered whenever the `readyState` changes.
xhr.onreadystatechange = function() {
    // When `readyState` is `4`, it means the request is complete. 
    // The response is then parsed from JSON and relevant data (`followers`) is logged.
    if (xhr.readyState === 4) {
        console.log(JSON.parse(data.followers));
    }
};

//  The `send` method sends the request to the server.
xhr.send();
```

> **Note**: 
> - `xhr.readyState` checks for changes in the request state:
>     - `0`: UNSENT
>     - `1`: OPENED
>     - `2`: HEADERS_RECEIVED
>     - `3`: LOADING
>     - `4`: DONE (The operation is complete)

#### Transition to Promises and Fetch:
```javascript
const requestUrl = 'https://api.github.com/users/imsushant';

fetch(requestUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(typeof data);
        console.log(data.followers);
    })
    .catch(error => console.error('Fetch error:', error));
```

- **Fetch Request**: The `fetch` function initiates the request.
- **Response Handling**: The response is checked for success, and then parsed as JSON.
- **Error Handling**: Errors are caught and handled in a single place.


### Promises
- An object representing the eventual completion or failure of an asynchronous operation. 
- Allows us to associate handlers (functions) with an asynchronous action's eventual success value or failure reason.
- **`Promise.all([promise1, promise2, promise3])`**: `Promise.all` takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved. The resolved value is an array of the resolved values of the input promises.
- Internally, a Promise has three states:
    1. **Pending**: Initial state, neither fulfilled nor rejected.
    2. **Fulfilled**: The operation completed successfully.
    3. **Rejected**: The operation failed.
- A Promise can transition from `pending` to either `fulfilled` with a value or `rejected` with a reason (error).
- **Example**:
    ```javascript
    let promise = new Promise((resolve, reject) => {
        // Asynchronous operation here
        let success = true;
        
        if (success) {
            resolve("Operation was successful!");
        } else {
            reject("Operation failed!");
        }
    });
    ```

### `.then()`
- The `.then()` method returns a Promise. 
- It takes up to two arguments: 
    - callback functions for the success and failure cases of the Promise. 
    - When the Promise is fulfilled, the first function (success handler) is executed. 
    - When the Promise is rejected, the second function (failure handler) is executed.
- **Example**:
    ```javascript
    promise.then(
        (result) => console.log("Fulfilled: " + result),  
        // This runs if the promise is fulfilled
        
        (error) => console.log("Rejected: " + error)    
        // This runs if the promise is rejected
    );
    ```

#### `.finally()` 
- The `.finally()` method runs regardless of the Promise being resolved or rejected, providing a way to clean up after the Promise is settled.

#### `.catch()`
- The `.catch()` method handles any rejections.
  
#### Handling Resolve
- To handle a resolved promise, we use the `.then()` method, which takes up to two arguments: 
  - A callback function for the fulfilled case.
  - A callback function for the rejected case (optional).

**Example**:
```javascript
promise.then(
    (result) => console.log(result),  // Handle resolve
    (error) => console.log(error)     // Handle reject
);
```

#### Handling Reject
- To handle a rejected promise, we can use either the second argument of `.then()` or the `.catch()` method, which is specifically for handling rejections.

**Example**:
```javascript
promise.then(
    (result) => console.log(result)   // Handle resolve
).catch(
    (error) => console.log(error)    // Handle reject
);
```

### Example of Promisees
```javascript
let promise = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("Operation completed successfully!");
        } else {
            reject("Operation failed!");
        }
    }, 1000);
});

promise.then(
    (result) => console.log(result),   
    // This will log "Operation completed successfully!" after 1 second
    (error) => console.log(error)     
    // This will log if the promise is rejected
).catch(
    (error) => console.log("Caught: " + error) 
    // This catches any rejection from the promise
).finally(() => {
    console.log("Operation finished"); 
    // This will log after the promise is settled (either resolved or rejected)
});
```

### `async` and `await`
- **`async` and `await`** are syntactic sugar in JavaScript that make working with Promises easier and more readable. 
- Allow us to write asynchronous code that looks and behaves like synchronous code, making it easier to understand and maintain.
- **`async`**: The `async` keyword is used to declare an asynchronous function. 
    - This function returns a Promise. 
    - If the function returns a value, the Promise is resolved with that value. 
    - If the function throws an error, the Promise is rejected with that error.
- **`await`**: The `await` keyword is used to pause the execution of an `async` function until a Promise is resolved or rejected. 
    - It can only be used inside `async` functions.

#### How `async` and `await` Help Handle Response and Reject of Promises?
- By using `async` and `await`, we can handle the resolved and rejected states of Promises in a more synchronous-like manner, without needing to use `.then()` and `.catch()` methods. 
- This makes the code easier to read and write.
- **Example**:
    ```javascript
    // This function will always return a Promise.
    async function fetchData() {
        try {
            // awaiting fro 
            let response = await fetch('https://example.com');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    fetchData();
    ```

**Advantages of `async` and `await` Over Promises**:
1. **Readability**: `async` and `await` make asynchronous code look like synchronous code, making it easier to read and understand.
2. **Error Handling**: Error handling with `try`/`catch` is more straightforward and intuitive compared to using `.catch()` with Promises.
3. **Sequential Operations**: When you need to perform asynchronous operations sequentially, `async` and `await` make the code much cleaner.

#### Example of Sequential Operations with Promises:
```javascript
fetch('https://example.com')
    .then(response => response.json())
    .then(data => fetch(`https://example.com/${data.id}`))
    .then(response => response.json())
    .then(details => console.log(details))
    .catch(error => console.error('Error:', error));
```

#### Example of Sequential Operations with `async` and `await`:
```javascript
async function fetchDetails() {
    try {
        let response = await fetch('https://example.com');
        let data = await response.json();
        let detailsResponse = await fetch(`https://example.com/${data.id}`);
        let details = await detailsResponse.json();
        console.log(details);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDetails();
```

### `fetch()`
- `fetch()` is a modern and simplified API for making network requests. 
- It provides a more powerful and flexible feature set for handling `HTTP` requests and responses compared to the older `XMLHttpRequest` API.
- It returns a Promise that resolves to the Response object representing the response to the request. 

1. **Making a Request**:
   ```javascript
   fetch(url, options)
   ```
   - `url`: The URL to which the request is sent.
   - `options`: An optional configuration object that can specify the method, headers, body, and other settings.
2. **Response Handling**:
   - The Promise returned by `fetch()` resolves once the request completes. 
   - We can then process the response using the methods provided by the Response object.
   - Example:
        ```javascript
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        ```

#### Why `fetch()` Came If We Had `async/await`?
`async` and `await` are syntactic sugar for working with Promises, making it easier to write and read asynchronous code. They don't provide a way to make HTTP requests directly; instead, they help manage asynchronous operations more effectively. `fetch()`, on the other hand, is a method specifically designed to make HTTP requests easier and more powerful.

#### Advantages of `fetch()` Over `XMLHttpRequest`
1. `fetch()` has a simpler and cleaner syntax.
2. `fetch()` is built on Promises, making it easier to use with `async` and `await`.
3. `fetch()` provides more features, like streaming responses.
4. Handling the response and errors is more straightforward.

#### Example of `fetch()` with `async/await`
```javascript
async function fetchData() {
    try {
        let response = await fetch('https://example.com');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchData();
```

### [Examples](https://gist.github.com/imsushant12/517fbaa9205df4548f6ae2c9e5cd7f8c)


### Internal Working of `fetch()`:
1. **Initiating the Fetch Request**:
   - `response = fetch('something')`: A fetch request is initiated by calling the `fetch()` function with a URL (here represented as `'something'`).
2. **Request Processing**:
   - **Web Browser/Node**: The fetch request is processed by the environment (web browser or Node.js).
   - **Network Request**: The request is sent over the network to the specified URL.
3. **Handling the Response**:
   - The fetch operation can have two outcomes: success (check mark) or failure (cross mark).
   - Depending on the outcome, the response is processed accordingly.
4. **Promise States**:
   - **OnFulfilled**: If the network request is successful, the Promise returned by `fetch()` moves to the fulfilled state. The data from the response can then be processed.
   - **OnRejection**: If the network request fails, the Promise moves to the rejected state, and the error can be handled.
5. **Global Memory**:
   - The diagram shows a feedback loop to the global memory, indicating that the `fetch()` operation is asynchronous. The response is eventually returned to the global memory, where it can be handled using the Promise API.

---

To demonstrate the bundling process with a module bundler like Webpack, I'll guide you through setting up a simple project with multiple JavaScript files that will be bundled into a single file. This example will use Webpack.

### Step 1: Set Up Your Project
1. **Create a Project Directory**

   Create a new directory for your project and navigate into it:

   ```bash
   mkdir webpack-demo
   cd webpack-demo
   ```

2. **Initialize npm**

   Initialize a new npm project by running:

   ```bash
   npm init -y
   ```

3. **Install Webpack and Webpack CLI**

   Install Webpack and Webpack CLI as development dependencies:

   ```bash
   npm install --save-dev webpack webpack-cli
   ```

### Step 2: Create Your JavaScript Files
1. **Create the Source Directory**

   Inside your project directory, create a `src` directory:

   ```bash
   mkdir src
   ```

2. **Create JavaScript Modules**

   Create two JavaScript files inside the `src` directory.

   **src/module1.js**:

   ```javascript
   export const name = "Sushant";
   export const title = "Gaurav";

   export function greeting() {
     return `${name} ${title}`;
   }
   ```

   **src/index.js**:

   ```javascript
   import { name, title, greeting } from './module1';

   console.log(name);       // Output: Sushant
   console.log(title);      // Output: Gaurav
   console.log(greeting()); // Output: Sushant Gaurav
   ```

### Step 3: Configure Webpack
Create a Webpack configuration file in the root of your project directory.

**webpack.config.js**:

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
```

### Step 4: Bundle Your JavaScript Files
1. **Add a Build Script**

   Open your `package.json` file and add a build script:

   ```json
   "scripts": {
     "build": "webpack"
   }
   ```

2. **Run the Build Script**

   Run the build script to bundle your JavaScript files:

   ```bash
   npm run build
   ```

3. **Check the Output**

   After running the build script, you should see a `dist` directory with a `bundle.js` file. This file contains the bundled code from your `src` directory.

### Step 5: Create an HTML File to Use the Bundled Script
Create an HTML file in the root of your project directory.

**index.html**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack Demo</title>
</head>
<body>
  <h1>Check the console for output</h1>
  <script src="dist/bundle.js"></script>
</body>
</html>
```

### Step 6: Open the HTML File in a Browser
Open `index.html` in a web browser and open the console to see the output.

