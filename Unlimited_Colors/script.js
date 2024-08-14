function generateColor() {
  const hexadecimals = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    color += hexadecimals[randomIndex];
  }

  return color;
}

const backgroundChanger = () =>
  (document.body.style.backgroundColor = generateColor());

let intervalId = null;

document.getElementById("start").addEventListener("click", function (e) {
  //   console.log("start clicked");
  intervalId = setInterval(backgroundChanger, 1000);
});

document.getElementById("stop").addEventListener("click", function (e) {
  //   console.log("stop clicked");
  clearInterval(intervalId);
  document.body.style.backgroundColor = "#212121";
  intervalId = null;
});

// LinkedIn Top Voice Answer: 12:42
