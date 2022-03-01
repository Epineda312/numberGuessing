'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const setDisplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const setHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const setGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When There is No input
  if (!guess) {
    setDisplayMessage('No Number 🛑');
    //When Player Wins
  } else if (guess === secretNumber) {
    setDisplayMessage('Correct Number!');
    setNumber(secretNumber);
    setBackgroundColor('#60b347');
    setNumberWidth('30rem');

    if (score > highScore) {
      highScore = score;
      setHighScore(highScore);
    }
    //When Guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      setDisplayMessage(guess > secretNumber ? 'Too High📈' : 'Too Low 📉');
      score--;
      setScore(score);
    } else {
      setDisplayMessage('You Lost the game! 💥');
      setScore(0);
    }
  }
});

//Reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  setDisplayMessage('Start Guessing....');
  setNumber('?');
  setScore(score);
  setGuess('');
  setBackgroundColor('#222');
  setNumberWidth('15rem');
});
