let randomNumber = parseInt((Math.random() * 100) + 1);

let numberInput = document.getElementById('guessField');
let prevGuess = document.querySelector('.guesses');
let remainingGuess = document.querySelector('.lastResult');
let lowHigh = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');
let result = document.getElementById('result');

let submit = document.getElementById('subt');

let prevGuessArr = [];
let guessAttempted = 0;
let remainingGuessAvail = 10 - guessAttempted;

let game = true;

if (game){
    
    submit.addEventListener('click', function(e){

        e.preventDefault();
        let guessedNumber = parseInt(numberInput.value);
        guessValidator(guessedNumber);
    })
}

function guessValidator(guessedNumber){

    if(isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100){

        alert("Enter Valid Number");
    }
    else{

        prevGuess.innerHTML += `${guessedNumber} `;

        if(remainingGuessAvail > 1){

            remainingGuessAvail--;
            remainingGuess.innerHTML = remainingGuessAvail;
            prevGuessArr.push(guessedNumber);


            if (guessedNumber == randomNumber){
                
                rightGuess(`YAY! you won, random number was ${randomNumber}`);
                endGame(message);
            }
            else{

                guessAttempted++;
                wrongGuess(guessedNumber);
            }
        }
        else{

            result.innerHTML = `BETTER LUCK NEXT TIME!!`;
            endGame(`You lose! Random number was ${randomNumber}`);
        }
    }
}


// function checkGuessRange(guessedNumber){}


function wrongGuess(guessedNumber){

    numberInput.value = '';
    
    if(guessedNumber < randomNumber){

        lowHigh.innerHTML = "Guessed number too low";
    }
    else{

        lowHigh.innerHTML = "Guessed number too high";
    }
}


function rightGuess(message){

    result.innerHTML = `WON, CONGRATULATIONS!!`;
    lowHigh.innerHTML = `${message}`;
    endGame(message);
}


function endGame(message){
    
    numberInput.value = '';
    numberInput.setAttribute('disabled', '');
    startOver.innerHTML = `${message}`;
    game = false;
}
