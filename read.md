# project1 related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-tatvebnn?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css,lib.dom.d.ts)

# Solution Code

## Project 1 - Color Changer

``` Javascript
const buttons= document.querySelectorAll('.button')
// console.log(buttons);
const body= document.querySelector("body")
// console.log(body)
buttons.forEach( function(button){
  console.log(button)
  button.addEventListener('click' , function(e){// e is just a event object  jo click krn pr hoga
    console.log(e)
    console.log(e.target);
    if (e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id==='purple'){
      body.style.backgroundColor=e.target.id;
    }
  })
});
``` 
## Project 2- BMI

```javascript

const doc =document.querySelector("form")

//const height= parseInt(document.querySelector('#height').value)  if yaha likhte to har bar variable empty value store krta
doc.addEventListener('submit',function(energy){
  energy.preventDefault()

  const height= parseInt(document.querySelector('#height').value)
  const weight= parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')

  if (height<0 || isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`;
    // return;
  }
  // results.innerHTML=`${height}`

  else if ( weight<0 || isNaN(weight)){
    results.innerHTML=`please enter the valid weight `
    // return ;
  }
  // results.innerHTML=`<span>${weight}</span>`
  else {
    const BMI = weight/((height*height)/10000)
    results.innerHTML=`${BMI}`

    if (BMI <18.6){
      results.innerHTML="Underweight"
    }
    else if (BMI>18.6  && BMI<24.9){
      results.innerHTML="Normal range "
    }
    else{
      results.innerHTML="overweight"
    }
  }

})

```
## Project 3 -  Digital Clock

```javascript
// document.querySelector('#clock')

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
// set interval  2 parameters - function and time - seconds=1000/1sec , 2000/2sec , etc

```

## project 4- Guess The Number

``` javascript
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


```