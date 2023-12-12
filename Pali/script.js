// const wordPalindroma = document.getElementById ('palindroma')

const userWord = prompt ("Inserisci una parola");

console.log(userWord, typeof userWord);

function reverseWord(word) {
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
    console.log('La parola è palindroma')
}