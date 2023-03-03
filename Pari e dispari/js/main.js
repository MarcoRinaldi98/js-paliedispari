/*
    JAVASCRIPT
*/

// chiedo all'utente di puntare sul pari o sul dispari
const scelta = prompt('inserisci se vuoi puntare su pari o su dispari');
console.log(scelta);

//chiedo all'utente di inserire un numero da 1 a 5
let numeroUtente;
do {
    numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 5'));
} while (isNaN (numeroUtente) || numeroUtente < 1 || numeroUtente > 5);
console.log(numeroUtente);


const numeroComputer = generaNumeroCasuale(1, 5);
console.log(numeroComputer);

//variabile che mi indica la somma tra i due numeri tramite una funzione
let somma = sommaNumeri(numeroUtente, numeroComputer);
console.log(somma);

//variabile che mi indica se il numero è pari o dispari tramite una funzione
let risultato = pariODispari(somma);

const elementoDom = document.querySelector('#risultato');

if (scelta == risultato) {
    elementoDom.innerHTML = `Hai scelto: ${scelta} <br /> 
    Il tuo numero è  ${numeroUtente} <br />
    Il numero del computer è ${numeroComputer} <br />
    La somma corrisponde a ${somma} quindi HAI VINTO!`;
    console.log('Hai vinto!');
} else {
    elementoDom.innerHTML = `Hai scelto: ${scelta} <br /> 
    Il tuo numero è  ${numeroUtente} <br />
    Il numero del computer è ${numeroComputer} <br />
    La somma corrisponde a ${somma}  quindi HAI PERSO!`;
    console.log('Hai perso!');
}


/* FUNZIONI */
//funzione per generare un numero casuale
function generaNumeroCasuale(numMin, numMax) {
    const numeroCasuale = Math.floor(Math.random () * (numMax - numMin +1)) + numMin;
    return numeroCasuale;
}

//funzione per sommare i due numeri
function sommaNumeri(numero1, numero2) {
    let addizione = numero1 + numero2;
    return addizione;
}

//funzione per vedere se il numero è pari o dispari
function pariODispari(numeriSommati) {
    let risultato;
    if (numeriSommati % 2 == 0) {
        risultato = 'pari';
    } else {
        risultato = 'dispari';
    }
    return risultato;
}

