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
let numBox = document.querySelector('.number');
let bdy = document.querySelector('body');
let chk = document.querySelector('.check');

document.querySelector('.check').addEventListener(`click`, makeGuess);
// document.querySelector('.again').addEventListener(`click`, reset);

document.querySelector(`.guess`).addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    makeGuess();
  } else if (event.keyCode === 27) {
    reset();
  } //else console.log(event.keyCode);
});

function checkTries(g) {
  for (let i = 0; i <= tries.length; i++) {
    if (g === tries[i]) return true;
  }
  return false;
}
function gameEnd() {
  p = true;
  chk.textContent = 'AGAIN!';
}

function makeGuess() {
  let guess = +document.querySelector(`.guess`).value;
  document.querySelector(`.guess`).value = '';

  if (p) {
    reset();
    return;
  }
  if (score <= 0) return;
  if (guess > 20 || guess < 1) {
    msg.textContent = 'Please enter a number between 1 and 20';

    return;
  }
  if (checkTries(guess)) {
    msg.textContent = 'You already tried that number dumbo';
    return;
  }
  //WIN
  if (guess === num) {
    if (score > highScore) {
      highScore = +score;
      console.log(highScore);
      hs.textContent = highScore;
    }

    msg.textContent = 'Excellent Guess!! YOU WIN!';
    bdy.style.backgroundColor = '#60b347';
    numBox.style.width = `30rem`;
    numBox.textContent = num;
    gameEnd();
  } else {
    if (guess > num || guess < num) {
      sc.textContent = score -= 1;
      msg.textContent = `${guess} is ${
        guess > num ? 'too high!' : 'too low!'
      }  try again`;
    }
    tries.push(guess);
    console.log(tries);
  }
  if (score <= 0) {
    msg.textContent = 'YOU FUCKIN SUCK. TRY AGAIN';
    gameEnd();
  }
}

function reset() {
  bdy.style.backgroundColor = '#000000';
  numBox.style.width = `15rem`;
  numBox.textContent = `?`;
  sc.textContent = score = 20;
  msg.textContent = 'Start Guessing...';
  document.querySelector(`.guess`).value = '';
  num = Math.trunc(Math.random() * 20 + 1);
  console.log(num);
  tries = [];
  p = false;
  chk.textContent = 'Check!';
}
