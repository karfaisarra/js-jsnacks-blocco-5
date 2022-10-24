/* Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */


const parola = prompt('inserici una parola');
console.log(parola);

const nuovaParola = invertedWord(parola);
console.log(nuovaParola);

function invertedWord(word) {
    const myArray = word.split('');
    //console.log(myArray);
    const newArray = myArray.reverse();
    //console.log(newArray);
    const newWord = newArray.join('')
    //console.log(newWord);
    return newWord;
}