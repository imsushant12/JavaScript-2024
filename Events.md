### Events 
- Used to respond to user actions or other events that occur in the browser. 
- Ways to use events in JS: 

#### 1. Inline Event Handlers 
- Attaching the event directly to the HTML element using attributes like `onclick`, `onmouseover`, etc. 
- This method is straightforward and easy to implement directly within the HTML markup. 
- **Use Case**: Used for simple interactions or quick testing. It mixes HTML markup with JavaScript, which can make the code harder to maintain and less modular as the application grows. 
- **Example**: ```html <button id="btn" onclick="alert('Clicked!')">Click</button> ``` 


#### 2. DOM Level 0 Event Handlers 
- Assigns a function directly to the `onclick` property of the DOM element retrieved using `getElementById`. 
- An older approach but still widely supported. 
- **Use Case**: Useful for adding event handlers dynamically in JavaScript code. It replaces any existing `onclick` handler. It is less flexible if there is a need to attach multiple handlers to the same event. 
- **Example**: ```javascript document.getElementById("btn").onclick = function() { alert('Clicked!'); }; ``` 

#### 3. `addEventListener` Method (DOM Level 2) 
- It is the preferred modern method for attaching event listeners. Allows attaching multiple event handlers to a single event and provides more control over event handling. 
- **Use Case**: Recommended for most scenarios because it's more flexible and cleaner than the previous two methods. 
  - Can easily add and remove event listeners without affecting other handlers attached to the same event. 
  - Also supports capturing and bubbling phases of events, which can be useful in complex DOM structures. 
- **Example**: 
    ```javascript 
    document.getElementById("btn").addEventListener('click', function() { 
        alert('Clicked!'); 
    }); 
    ```
    
#### When to Use Which Method? 
- **Inline Event Handlers**: For quick prototyping or very simple interactions. 
- **DOM Level 0 Event Handlers**: When there is a need to directly assign an event handler and do not need to manage multiple handlers for the same event on the same element. 
- **`addEventListener`**: In most cases where there is a need to attach event handlers dynamically, manage multiple event handlers for the same event, or have more control over event handling (like capturing and bubbling). 

### `addEventListener`: 
- A method provided by the `EventTarget` interface in the DOM. 
- Allows us to attach event listeners to HTML elements, which means we can specify a function (listener) to be executed when a particular event occurs on that element. 
- **Syntax**: `target.addEventListener(type, listener, [options]);` 

#### Parameters of `addEventListener`: 
1. **Event Type**: Specifies the type of event to listen for, such as `'click'`, `'mouseover'`, etc. 
2. **Listener Function**: Specifies the function that will be executed when the event occurs. 
3. **Use Capture (Optional)**: Specifies whether the listener should be triggered during the capturing phase (`true`) or the bubbling phase (`false`). This parameter is `false` by default if not explicitly specified. 
> **Note**: When an event occurs on an element, it typically triggers handlers on that element and then bubbles up to its parent elements, triggering handlers on those as well. This process is called event propagation. 

#### Why `useCapture` is `false` by Default: 
- The default behavior (`useCapture = false`) means that the event listener will be triggered during the bubbling phase of the event propagation. 
- It matches the natural flow of events from the specific element towards its ancestors in the DOM hierarchy. 
- It allows more flexibility since most event handling logic is concerned with actions happening closer to the target element rather than during the capturing phase. 

#### When to Use Capturing (`useCapture = true`): 
- If we want to capture an event before it reaches any specific element, during the capturing phase. 
- When using event delegation techniques where we handle events for multiple elements with a single event listener attached to a common ancestor. Here, capturing can be used to intercept events before they bubble up to the ancestor. 

### Can be asked about in the interviews: 
- addEventListeners 
- Events 
- BrowserEvents: 
  - target 
  - type 
  - timeStamp 
  - defaultPrevented 
  - target 
  - toElement, srcElement 
  - currentTarget 
  - clientX, clientY 
  - screenX, screenY 
  - altKey, ctrKey, shiftKey, keyCode 

### `e.stopPropagation()`: 
- Used to stop the further propagation of an event through the DOM hierarchy. 
- Prevents parent elements from receiving the event once it has been handled by the current target element or phase of event propagation. 
- **Usage:** 
    ```javascript 
    element.addEventListener('click', function(e) { 
        e.stopPropagation(); 
        // Stops propagation of the click event 
        // Further Code 
    }); 
    ``` 

### `e.preventDefault()`: 
- Used to prevent the default behavior of an event from occurring. For example, preventing a link from navigating to a new page when clicked or preventing a form from submitting. 
- **Usage:** 
    ```javascript 
    element.addEventListener('click', function(e) { 
        e.preventDefault(); 
        // Prevents the default action of the click event 
        // Further Code 
    }); 
    ``` 
#### Example of `e.stopPropagation()`: 
```html 
<!DOCTYPE html>
<html>
<head>
    <title>Event Propagation and Default Prevention</title>
</head>
<body>
    <div id="outer" style="padding: 20px; border: 1px solid black;"> 
        <button id="inner">Click me!</button> 
    </div>
    <script>
        document.getElementById('inner').addEventListener('click', function (e) {
            alert('Inner button clicked!');
            e.stopPropagation();
            // It will stop the event from bubbling up to the outer div 
        });
        document.getElementById('outer').addEventListener('click', function (e) {
            alert('Outer div clicked!');
        }); 
    </script>
</body>
</html>
```
Clicking the inner button triggers an alert saying `Inner button clicked!` but does not trigger the alert from the outer div due to `e.stopPropagation()`.

### How Asynchronous Programming Works?
![image](https://imgur.com/yyd9iZP.png)
1. **JS Engine**:
   - **Memory Heap**: This is where memory allocation happens.
   - **Call Stack**: This is where the execution context (functions) are stacked. When a function is called, it’s pushed onto the stack; when the function returns, it’s popped off the stack.
2. **Web API**:
   - This is provided by the browser and includes features like `setTimeout`, `setInterval`, `fetch`, DOM APIs, etc. These APIs handle asynchronous tasks.
   - We can also use Node JS environment.
3. **Event Loop**:
   - The event loop continuously checks the call stack to see if it’s empty. If it is, it looks at the task queue to see if there’s any callback waiting to be executed.
4. **Task Queue**:
   - This is where callbacks (CB) from async operations (like `setTimeout`, `setInterval`, `fetch`) are queued up. 
5. **Flow**:
   - When the call stack has a function that calls a Web API (e.g., `setTimeout`), the function is executed and the API registers a callback to be executed later.
   - The callback is sent to the task queue.
   - Once the call stack is empty, the event loop picks up the callback from the task queue and pushes it onto the call stack for execution.

> **Note**: 
> 1. When a function call is made, it’s added to the call stack. If this function makes an asynchronous call (like `setTimeout`), the Web API handles this call and registers a callback to be executed later (the callback is pushed into the **task queue**).
> 2. Once the function finishes executing, it’s removed from the call stack. 
> 3. The event loop continuously checks the call stack, and when it's empty, it looks at the task queue for any registered callbacks. 
> 4. If there are callbacks in the task queue, the event loop moves them to the call stack to be executed. This ensures that asynchronous operations are handled efficiently, allowing the main program to continue running without waiting for these operations to complete.

### `setTimeout()`
- Executes a function after a specified delay (in milliseconds).
- **Syntax**: `setTimeout(function, delay)`
- **Example**:


### `setInterval()`
- Repeatedly executes a function with a fixed time delay between each call.
- **Syntax**: `setInterval(function, delay)`
- **Example**:
    ```javascript
    function sayHi() {
        console.log("Hi!");
    }

    setInterval(sayHi, 1000); // Calls sayHi() every 1 second
    ```

### `clearTimeout()`
- Cancels a timeout that was set with `setTimeout()`.
- **Syntax**: `clearTimeout(timeoutID)`
- **Example**:
    ```javascript
    function greet() {
        console.log("Hello, world!");
    }

    let timeoutID = setTimeout(greet, 2000);
    clearTimeout(timeoutID); // Cancels the greet() call
    ```

### `clearInterval()`
- Cancels an interval that was set with `setInterval()`.
- **Syntax**: `clearInterval(intervalID)`
- **Example**:
    ```javascript
    function sayHi() {
        console.log("Hi!");
    }

    let intervalID = setInterval(sayHi, 1000);
    setTimeout(() => {
        clearInterval(intervalID); // Stops the sayHi() calls after 5 seconds
    }, 5000);
    ```
