//const userChoice = document.getElementById ('user-choice')

// const userNumber = document.getElementById ('user-number')

const userChoice = prompt ('Scegli la tua parte: pari o dispari?');

console.log (userChoice);

let userNumber = parseInt (prompt('Inserisci un numero tra 1 e 5!'));

console.log (userNumber);

if (userNumber > 5 ) {
    alert ('Inserisci un numero tra 1 e 5!');
    userNumber = parseInt (prompt('Inserisci un numero tra 1 e 5!'));
    console.log (userNumber);
}

let computerRandomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
console.log (computerRandomNumber);

function sum (userNumber, computerRandomNumber) {
    let finalSum = userNumber + computerRandomNumber;
    console.log (finalSum);
    if ( userChoice == "pari" ) {
        if (finalSum % 2 == 0) {
            console.log ("User is the winner")
        }
    
         else {
            console.log ("Computer wins")
        }
    }
    else if ( userChoice == "dispari" ) {
        if (finalSum % 2 == 0) {
            console.log ("Computer is the winner")
        }
        else {
            console.log ("User wins")
        }
    }

    return finalSum;
}

sum (userNumber, computerRandomNumber); 

