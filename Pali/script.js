// const wordPalindroma = document.getElementById ('palindroma')

//const userWord = prompt ("Inserisci una parola");

// console.log(userWord, typeof userWord);

const userWord = prompt ("Inserisci una parola");

function wordPalindroma (randomWord) {
    let word = ""; 
    let reverseWord = ""; 

    for ( let i = 0; i < randomWord.length; i++) {
        word = word.concat(randomWord[i]);
    }
    console.log(word);

    for ( let i = randomWord.length -1; i >= 0; i--) {
        reverseWord = reverseWord.concat(randomWord[i]);
    }
    console.log(reverseWord);

    if ( word == reverseWord ) {
        console.log("la parola è palindroma")
    }

    else {
        console.log("la parola NON è palindroma")
    }
    
}

wordPalindroma (userWord);









/* function reverseWord(word) {
    // ritorna il contrario di una parola ciao -> oaic
}

function palindroma (wordPalindroma) {
    console.log (palindroma, typeof palindroma);
    const wordPalindromaReverse = reverseWord(wordPalindroma);

    if (wordPalindroma === wordPalindromaReverse) {
        return true;
    }
    else { 
        return false; 
    }
}

if(palindroma(userWord)) {
    console.log()
}

*/ 