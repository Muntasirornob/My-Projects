'use strict';

// What is DOM?
// Structured representation of HTML Documents. Allows javascript ot access to html elements and styles to manipulate them.

// Selecting and Manipulating Elements

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 2;

// document.querySelector('.guess').value = 89;
// console.log(document.querySelector('.guess').value);





// Handling Click Events

//An event is something that happens in the page.

let secretNumber = Number(Math.trunc(Math.random()*20) + 1);
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);


const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

// 0 is a falsy value.

document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input.
    if (!guess) {
      //document.querySelector('.message').textContent = '⛔ No number!';
      displayMessage('⛔ No number!');
    }
    // when player wins
     else if (guess === secretNumber) {
      //document.querySelector('.message').textContent = '🎉 Correct Number';
      displayMessage('🎉 Correct Number');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#FF5154';
      
      document.querySelector('.number').style.width = '30rem';

      if(score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
      }
    } 
    // When guess is wrong
    else if(guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = guess > secretNumber?
          'Too High!': 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        //document.querySelector('.message').textContent = 'You lost the game !';
        displayMessage('You lost the game !');
        document.querySelector('.score').textContent = 0;
      }
    }
    
    // when guess is too high
    // else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       'Your guess is greater than the expected number';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game !';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
    // when guess is too low
    // else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       'Your guess is lesser than the expected number';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
})


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Number(Math.trunc(Math.random() * 20) + 1);

    document.querySelector('.message').textContent = 'Start Guessing....';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = 'black';

    document.querySelector('.number').style.width = '15rem';
})

