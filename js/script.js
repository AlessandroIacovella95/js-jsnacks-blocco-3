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

// //* Creo un array vuoto
// const numbers = []

// //* Dichiaro la variabile somma
// let sum = 0


// //* Ciclo WHILE
// while (sum < 50) {

//     //*Chiedo all'utente un numero
//     let userNumber = parseInt(prompt('inserisci un numero'))

//     //* Sommo il numero alla variabile somma
//     sum+= userNumber;

//     //* Inserisco il numero nell'array
//     numbers.push(userNumber)  
// }

// let media = sum / numbers.length;


// console.table(numbers)
// console.log('la somma è: ' + sum)
// console.log('la media è: ' + media);

// Esercizio 4

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];

for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] % 2 == 0) {
        evenNumbers.push(i);
    }
}

console.log(evenNumbers);
