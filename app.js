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
  message = document.querySelector('.message'),
  LR = document.querySelector('.LR'),
  LG = document.querySelector('.LG'),
  LB = document.querySelector('.LB'),
  RR = document.querySelector('.RR'),
  RG = document.querySelector('.RG'),
  RB = document.querySelector('.RB');
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
    gameOver(true, `${winningNum} is correct. You Win!!`);
  } else {
    //Wrong number
    guessesLeft -= 1;
    console.log(guessesLeft);
    message.style.color = 'red';

    if (guessesLeft === 2) {
      RR.style.backgroundColor = '#D4D4D4';
      LR.style.backgroundColor = '#D4D4D4';
    }
    if (guessesLeft === 1) {
      RR.style.backgroundColor = '#D4D4D4';
      LR.style.backgroundColor = '#D4D4D4';
      RG.style.backgroundColor = '#D4D4D4';
      LG.style.backgroundColor = '#D4D4D4';
    }

    if (guessesLeft === 0) {
      gameOver(
        false,
        ` Game Over. You lost. ${winningNum} is write number.`
      );

      RR.style.backgroundColor = '#D4D4D4';
      RG.style.backgroundColor = '#D4D4D4';
      RB.style.backgroundColor = '#D4D4D4';

      LR.style.backgroundColor = '#D4D4D4';

      LG.style.backgroundColor = '#D4D4D4';

      LB.style.backgroundColor = '#D4D4D4';
    } else {
      //Game continue and wrong
      setMessage(
        ` ${guess} is not correct. guess Left : ${guessesLeft}`
      );
      guessInput.style.borderColor = 'red';
      message.style.color = 'red';
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

//get randomNumber
function getRandomNum(min, max) {
  return Math.floor(Math.random() * 10 + min);
}
