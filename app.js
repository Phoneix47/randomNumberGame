//Game values
let max = 10,
  min = 1,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

//UI element
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listner for play again

game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

//listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  //validate
  if (isNaN(guess) || guess > max || guess < min) {
    setMessage(
      `Enter the value valid value between ${min} and ${max}`,
      'red'
    );
  }

  //check win
  if (guess === winningNum) {
    // //Disable input
    // guessInput.disabled = true;
    // //Change border color
    // guessInput.style.borderColor = 'green';
    // //set Message
    // setMessage(`${winningNum} is correct. You Win!!`, 'green');
    gameOver(true, `${winningNum} is correct. You Win!!`);
  } else {
    //Wrong number
    guessesLeft -= 1;
    console.log(guessesLeft);
    if (guessesLeft === 0) {
      //   //Game lost
      //   //Disable input
      //   guessInput.disabled = true;
      //   //Change border color
      //   guessInput.style.borderColor = 'red';
      //   //set Message
      //   setMessage(
      //     ` Game Over. You lost. ${winningNum} is write number.`,
      //     'red'
      //   );

      gameOver(
        false,
        ` Game Over. You lost. ${winningNum} is write number.`
      );
    } else {
      //Game continue and wrong
      setMessage(
        ` ${guess} is not correct. guess Left : ${guessesLeft}`
      );
      guessInput.style.borderColor = 'red';
      //clear input
      guessInput.value = ' ';
    }
  }
});

//GameOver
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  //Disable input
  guessInput.disabled = true;
  //Change border color
  guessInput.style.borderColor = color;

  message.style.color = color;
  //set Message
  setMessage(msg);
  guessInput.value = ' ';

  //play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

//setMessage
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

//get randomNUmb
function getRandomNum(min, max) {
  return Math.floor(Math.random() * 10 + min);
}
