- To select a class, we write (`.class-name`).
- To select an id, we write (`#id`).

### `getElementById()`:
- A method used to access a specific HTML element by its unique identifier (ID attribute).
- It returns a reference to the element with the matching ID as a DOM element object, or null if no element with that ID exists in the document.
- This method is available on the document object, so you typically use it as `document.getElementById("id")`.
- **Example**:
    ```js
    document.getElementById('title')
    // <h1 id="title" class="heading">DOM learning</h1>
    document.getElementById('title').id
    // 'title'
    document.getElementById('title').class 
    // undefined
    document.getElementById('title').className
    // 'heading'
    document.getElementById('title').getAttribute 
    // f getAttribute() { [native code] } 
    document.getElementById('title').getAttribute('id')
    // 'title'
    ```

### `innerText` vs `innerHTML` vs `textContent`:
1. **`innerHTML`**:
    - Returns the complete HTML content within the element, including any child elements and their HTML tags.
    - Setting `innerHTML` allows you to replace the entire HTML content of the element.
2. **`innerText`**:
    - Returns the text content of the element, excluding any HTML tags within it.
    - Setting `innerText` replaces the text content of the element, but any existing HTML structure is preserved.
    - If the inner content is hidden, it won't return it.
3. **`textContent`**:
    - Similar to `innerText`, it returns the text content excluding HTML tags.
    - However, `textContent` considers the content of all child elements, including `<script>` and `<style>` elements (which are ignored by `innerText`).
    - Even if the inner content is hidden, it will return the entire content.
- **Example**:
    ```js
    title.innerText
    // DOM learning
    title.innerHTML
    // DOM learning
    title.textContent
    // DOM learning
    ```

### `.querySelector()`:
- Retrieves the **first** element matching a CSS selector (e.g. retrieving the first `h1` tag).
- If not found, then it return `null`.
- **Syntax**: `document.querySelector("h1")`.
- **Use Cases**: Selecting elements by tag name, class name, ID (if it's the first element with that ID), attributes, etc.

### `.querySelectorAll()`:
- Retrieves a **NodeList** containing **all** elements matching a CSS selector. (e.g. selecting all paragraphs)
- **Syntax**: `document.querySelectorAll("p")`
- **Use Cases**: Selecting multiple elements based on a common CSS selector for further manipulation.

> **Note**: NodeList is similar to array but it is not an array. A NodeList can be converted to an array.

### `element.getElementsByClassName("className")`:
- Retrieves an **HTMLCollection** containing all elements with a specific class name relative to the provided element. 
- We can use `Array.from('HTMLCollection')` to convert it into an array and then perform operations on it.
- **Syntax**: `element.getElementsByClassName("className")` (used on an existing element).

> **Note**: HTMLCollection is different from a NodeList. 

### Creating a new element:
```js
// 1. Create the new div element
const newDiv = document.createElement("div");

// 2. Add styling (multiple approaches)
// Option A: Using string assignment
newDiv.style.cssText = "background-color: lightblue; padding: 20px; font-size: 18px;";

// Option B: Using specific style properties
newDiv.style.backgroundColor = "lightblue";
newDiv.style.padding = "20px";
newDiv.style.fontSize = "18px";

// 3. Add content (text or HTML)
newDiv.textContent = "Dynamically created div!";

// 4. Get a reference to the body element (assuming it's empty)
const body = document.body;

// 5. Append the new div element to the body
body.appendChild(newDiv);
```

### Accessing elements with relationship:
1. `.parent` and `.child`
2. `.children`
3. `.parentNode` and `.childNodes`
4. `.firstElementChild` and `.lastElementChild`
5. `.nextElementSibling` 


### Edit and Remove elements:
We can use multiple approaches like: `innerHTML`, `textContent`, `createTextNode`, `outerHTML`, etc.

**Code**
```js
// Using innerHTML
function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
}
addLanguage("python");
addLanguage("typescript");

// Optimized Approach: use createTextNode for less DOM traversal
function addOptiLanguage(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}
addOptiLanguage("golang");

// Edit Approach-1
const secondLang = document.querySelector("li:nth-child(2)");
secondLang.innerHTML = "Mojo"

// Edit Approach-2
const newli = document.createElement("li");
newli.textContent = "CPP";
secondLang.replaceWith(newli);

// Edit Approach-3
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";

// Remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
```
**Testing HTML**:
```html
<html>
<head>
    <title>DOM</title>
</head>
<body>
    <ul class="language">
        <li>Javascript</li>
    </ul>
</body>
</html>
```