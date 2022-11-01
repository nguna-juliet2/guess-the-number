'use strict';
// using querrySelector

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// // console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// const x = function () {
//   console.log(23);
// };

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');
    // when its eequal
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'correct number';
    displayMessage('correct number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when too wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'to high!' : 'too low';
      displayMessage(guess > secretNumber ? 'to high!' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you lost the game';
      displayMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'to high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'to low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('start guessing..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});
