// Task-1:
const heading = document.getElementById("first-heading");
heading.innerHTML = "Updated Heading";

// Task-2:
const content = document.getElementsByClassName("first-heading-content");
content[0].style.backgroundColor = "lightblue";

// Task-3:
const newDiv = document.createElement("div");
newDiv.innerHTML = "Added content using JS";
content[0].after(newDiv);
// Alternatively:
// content[0].insertAdjacentElement('afterend', newDiv);

// Task-4:
const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerHTML = "Li added from JS";
ul.appendChild(newLi);

// Task-5:
newLi.remove();

// Task-6:
const last = ul.lastElementChild;
ul.removeChild(last);

// Task-7:
const image = document.querySelector("img");
const newImage =
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
image.setAttribute("src", newImage);

// Task-8:
// Adding:
heading.classList.add("highlight");
// Removing:
setTimeout(() => {
  heading.classList.remove("highlight");
}, 3000);

// Task-9:
const p = document.querySelector("p");
document
  .querySelector("button")
  .addEventListener(
    "click",
    (e) => (p.innerHTML = "Updated paragraph content using JS")
  );

// Task-10:
image.addEventListener('mouseover', (e)=>(
  image.style.border = "2px solid red"
));
image.addEventListener('mouseout', (e) => {
  image.style.border = "";
});
