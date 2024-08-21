// Task-1:
const button = document.querySelector("button");
const para = document.querySelector("p");
button.addEventListener("click", (e) => {
  para.innerHTML = "Changed paragraph using JS.";
});

// Task-2:
const image = document.querySelector("img");
image.addEventListener("dblclick", (e) => {
  image.style.display = image.style.display !== "none" ? "none" : "block";
});

// Task-3, 4:
para.addEventListener("mouseover", (e) => {
  para.style.backgroundColor = "orange";
});
para.addEventListener("mouseout", (e) => {
  para.style.backgroundColor = "#ffffff";
});

// Task-6:
const keyPressed = document.getElementById("keyPressed");
const displayParagraph = document.getElementById("displayValue");
keyPressed.addEventListener("keyup", (e) => {
  displayParagraph.textContent = `Current value: ${keyPressed.value}`;
  // We can also do:
  // displayParagraph.textContent = `Current value: ${e.code}`;
});

// Task-7:
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});

// Task-8:
const selection = document.getElementById("dropdown-selection");
document.querySelector("select").addEventListener("change", (e) => {
  selection.textContent = `You selected: ${e.target.value}`;
});

// Task-9:
const logs = document.getElementById("logs");
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    logs.textContent = `Logs: ${e.target.textContent}`;
  }
});

// Task-10:
const parent = document.getElementById('parent');

document.getElementById('add-child').addEventListener('click', (e) => {
    const newChild = document.createElement('div');
    newChild.textContent = 'I am a dynamically added child';
    parent.appendChild(newChild);
});

