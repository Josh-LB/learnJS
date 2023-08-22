'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.score').textContent);

// document.querySelector('.message').textContent = 'Hello';

// const gs = (document.querySelector('.guess').value = 22);

// console.log(document.querySelector('.guess').value);

let num = Math.trunc(Math.random() * 20 + 1);
console.log(num);

let score = 20;
let highScore = 0;
let p = false;
let tries = [];
let hs = document.querySelector('.highscore');
let sc = document.querySelector('.score');
let msg = document.querySelector('.message');

document.querySelector('.check').addEventListener(`click`, makeGuess);
document.querySelector('.again').addEventListener(`click`, reset);

function checkTries(g) {
  for (let i = 0; i <= tries.length; i++) {
    if (g === tries[i]) return true;
  }
  return false;
}

function makeGuess() {
  const guess = document.querySelector(`.guess`).value;

  if (guess > 20 || guess < 1) {
    msg.textContent = 'Please enter a number between 1 and 20';
    return;
  }

  if (checkTries(guess)) {
    msg.textContent = 'You already tried that number dumbo';
    return;
  }
  if (score <= 0) return;
  if (p) return;
  if (guess == num) {
    if (score > highScore) {
      highScore = +score;
      console.log(highScore);
      hs.textContent = highScore;
    }
    msg.textContent = 'Excellent Guess!! YOU WIN!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = num;
    p = true;
  } else {
    if (guess > num) {
      sc.textContent = score -= 1;
      msg.textContent = 'Too high! try again';
    } else if (guess < num) {
      sc.textContent = score -= 1;
      msg.textContent = 'Too low! try again';
    }
    tries.push(guess);
    console.log(tries);
  }
  if (score <= 0) {
    msg.textContent = 'YOU FUCKIN SUCK. TRY AGAIN';
  }
}

function reset() {
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.number').textContent = `?`;
  sc.textContent = score = 20;
  msg.textContent = 'Start Guessing...';
  document.querySelector(`.guess`).value = '';
  num = Math.trunc(Math.random() * 20 + 1);
  console.log(num);
  tries = [];
  p = false;
}
