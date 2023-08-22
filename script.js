'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.score').textContent);

// document.querySelector('.message').textContent = 'Hello';

// const gs = (document.querySelector('.guess').value = 22);

// console.log(document.querySelector('.guess').value);

let num = Math.trunc(Math.random() * 20 + 1);
let score = document.querySelector('.score').textContent;
let highScore = 0;
let p = false;
console.log(num);

document.querySelector('.check').addEventListener(`click`, makeGuess);
document.querySelector('.again').addEventListener(`click`, reset);

function makeGuess() {
  const guess = document.querySelector(`.guess`).value;
  if (score <= 0) return;
  if (p) return;

  if (guess == num) {
    if (score > highScore) {
      highScore = +score;
      console.log(highScore);
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.message').textContent =
      'Excellent Guess!! YOU WIN!';
    document.querySelector('.number').textContent = num;
    p = true;
  } else if (guess > num) {
    document.querySelector('.score').textContent = score -= 1;
    document.querySelector('.message').textContent = 'Too high! try again';
  } else if (guess < num) {
    document.querySelector('.score').textContent = score -= 1;
    document.querySelector('.message').textContent = 'Too low! try again';
  }
  if (score <= 0) {
    document.querySelector('.message').textContent =
      'YOU FUCKIN SUCK. TRY AGAIN';
  }
}

function reset() {
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.score').textContent = score = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector(`.guess`).value = '';
  num = Math.trunc(Math.random() * 20 + 1);
  console.log(num);
  p = false;
}
