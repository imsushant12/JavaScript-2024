const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {
  // stopping the default action of sending data to server
  event.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);

  const bmi = (weight / (height / 100) ** 2).toFixed(1);

  if (height && weight) {
    if (bmi < 18.6) {
      result.innerHTML = `<br>Your BMI is ${bmi} <br> You are underweight!`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `<br>Your BMI is ${bmi} <br> You are in normal range!`;
    } else {
      result.innerHTML = `<br>Your BMI is ${bmi} <br> You are overweight!`;
    }
  } else {
    result.innerHTML = "<br>Please enter valid height and weight";
  }
});
