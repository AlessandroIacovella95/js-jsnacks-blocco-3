// Esercizio 1

//* Chiedo all'utente un primo numero

// const firstNumber = parseInt(prompt('Inserisci un primo numero'))
// console.log(firstNumber);

// //* Chiedo all'utente un secondo numero
// const secondNumber = parseInt(prompt('Inserisci un secondo numero'))
// console.log(secondNumber);

// //* Genero un numero casuale compreso tra i numeri scelti dall'utente
// let randomNumber = Math.floor(Math.random () * (secondNumber - firstNumber)) + firstNumber

// console.log('numero compreso: ' + randomNumber);


// Esercizio 2

// //* Chiedo all'utente una prima parola
// const firstWord = prompt('Inserisci una prima parola')

// //* Chiedo all'utente una seconda parola
// const secondWord = prompt('Inserisci una seconda parola')

// //* Chiedo all'utente una prima parola
// if (firstWord.length == secondWord.length) {
//     //* Stampo entrambe le parole
//     console.log(firstWord, secondWord)

//     //* ALTRIMENTI SE la prima parola è più lunga della seconda
// } else if  (firstWord.length > secondWord.length){

//     //* Stampo la prima
//     console.log(firstWord)

//     //* ALTRIMENTI Stampo la seconda
// } else{
//     console.log(secondWord)
// }

// Esercizio 3

const numbers = []

let sum = 0

while (sum < 50) {
    let userNumber = parseInt(prompt('inserisci un numero'))
    sum+= userNumber;

    if (sum < 50) {
        numbers.push(userNumber)  
    }
}

console.table(numbers)
console.log(sum)