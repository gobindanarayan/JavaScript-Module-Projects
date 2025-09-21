const form = document.querySelector(".form");
const inputForm = document.querySelector("#guessField");
const display = document.querySelector(".lowOrHi");
const lastResult = document.querySelector(".lastResult");
const guesses = document.querySelector(".guesses");

let chance = 10;
let previousGuesses = [];
const ans = Math.floor(Math.random() * 100) + 1;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const input = parseInt(inputForm.value);
  if (isNaN(input) || input < 1 || input > 100) {
    display.innerText = "Please enter a valid number between 1 - 100!";
    return;
  }

  previousGuesses.push(input);
  guesses.innerText = previousGuesses.join(", ");
  lastResult.innerText = --chance;
  inputForm.value = "";

  if (input === ans) {
    display.innerText = `You won the game! The number was ${ans}`;
    inputForm.disabled = true;
  } else if (chance === 0) {
    display.innerText = `You lose! The number was ${ans}`;
    inputForm.disabled = true;
  } else if (input < ans) display.innerText = "Guess a bigger Number.";
  else display.innerText = "Guess a smaller number.";
});
