const userinput = document.querySelector('#guessField');
// console.log(guess)
const randomnumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// let prevGuess=[] // array to hold all guess values
let numGuess = 0; // guess remaining
let playGame = true; // whether play more or not

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // form h to kahi server pr kuch bhi jane se rok do
    const guess = parseInt(userinput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // true condition or not  value bw 1 nad 100 or not
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert(`Please Enter a Valid Number`);
  } else {
    // prevGuess.push(guess)

    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomnumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // provide msg also  according the values of guesses  , check guess value is equal , less than , greater than random value or not
  if (guess === randomnumber) {
    displayMessage(`You Guessed it right `);
    endgame();
  } else if (guess < randomnumber) {
    displayMessage(`u guessed TOO low number `);
  } else if (guess > randomnumber) {
    displayMessage(`u guessed TOO high number `);
  }
}

function displayGuess(guess) {
  // empties user value
  //connects with DOM , Lowers no. of guess annd show aprop. msg
  userinput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  //prevGuess.join(, )
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  //tells the condition with appropriate msg low / highh
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function startGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    //reset all vazriables

    let randomnumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userinput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
function endGame() {
  //
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame"> Start New Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  startGame();
}
