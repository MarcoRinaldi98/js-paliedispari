/*
    JAVASCRIPT
*/
//chiedo la parola all'utente
let parola = prompt('Inserisci una parola');

let parola1 = [];
let parola2 = [];
console.log(parola1);
console.log(parola2);

/*
//SE la parola normale è uguale alla parola al contrario
if(parola1 == parola2) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}
*/

//funzione per avere la parola scomposta in ordine
function normale(parola) {
    for (let i = 0; i < parola.length; i++) {
        parola1 = parola[i];
        console.log(parola[i]);
    }
}

//funzione per avere la parola scomposta al contrario
function girata(parola) {
    for (let i = (parola.length - 1); i >= 0; i--) {
        parola2 = parola[i];
        console.log(parola[i]);
    }
}


