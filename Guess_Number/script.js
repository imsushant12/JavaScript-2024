let randomNumber = Math.floor(Math.random() * 100 + 1);

const form = document.querySelector("form");
const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#submit");
const totalGuesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let guesses = [];
let totalNumberOfGuesses = 1;
let playGame = true;
const p = document.createElement("p");
console.log(randomNumber);

// Start of the game:
if (playGame) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const guess = parseInt(userInput.value); 

    if (validateGuess(guess)) {
      if (totalNumberOfGuesses < 11) {
        displayGuess(guess);
        checkGuess(guess);
      } else {
        displayGuess(guess);
        displayMessage(
          `You were not able to guess the number!\nThe random number was ${randomNumber}`
        );
        endGame();
      }
    } else {
      displayMessage("Please enter a valid number!");
    }
  });
}

function validateGuess(guess) {
  if (!isNaN(guess) && guess <= 100 && guess >= 1) {
    return true;
  } else {
    return false;
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = message;
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(
      `You guessed it right!\nYou took ${totalNumberOfGuesses} guesses to guess the number ${randomNumber}.`
    );
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }

  totalNumberOfGuesses++;
  remainingGuesses.innerHTML = `${11 - totalNumberOfGuesses}`;
}

function displayGuess(guess) {
  userInput.value = "";
  totalGuesses.innerHTML += `${guess} `;
  remainingGuesses.innerHTML = `${11 - totalNumberOfGuesses}`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (event) {
    randomNumber = Math.floor(Math.random() * 100 + 1); // Corrected
    guesses = [];
    totalNumberOfGuesses = 1;
    totalGuesses.innerHTML = "";
    remainingGuesses.innerHTML = `${11 - totalNumberOfGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}