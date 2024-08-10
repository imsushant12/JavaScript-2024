const insert = document.getElementById("insert");

window.addEventListener("keydown", function (e) {
  if (e.key == " ") {
    insert.innerHTML = `<b>Space</b> Key Pressed`;
  } else {
    insert.innerHTML = `<b>${e.key}</b> Key Pressed`;
  }
});
