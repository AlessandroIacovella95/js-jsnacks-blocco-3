//* Chiedo all'utente un primo numero

const firstNumber = parseInt(prompt('Inserisci un primo numero'))
console.log(firstNumber);

//* Chiedo all'utente un secondo numero
const secondNumber = parseInt(prompt('Inserisci un secondo numero'))
console.log(secondNumber);

//* Genero un numero casuale compreso tra i numeri scelti dall'utente
let randomNumber = Math.floor(Math.random () * (secondNumber - firstNumber)) + firstNumber

console.log('numero compreso: ' + randomNumber);