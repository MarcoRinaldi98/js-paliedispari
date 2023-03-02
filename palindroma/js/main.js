/*
    JAVASCRIPT
*/

//chiedo la parola all'utente
let parola = prompt('Inserisci una parola').replace(/\s/g, "");

//definisco le due arrray da confrontare per sapere se la parola è palindroma
let parola1 = [];
let parola2 = [];
parola1 = normale(parola);
parola2 = girata(parola);
console.log(parola1);
console.log(parola2);

//tramuto le due array in due stringhe per confrontarle
let parolaOrdinata = parola1.toString();
console.log(parolaOrdinata);
let parolaGirata = parola2.toString();
console.log(parolaGirata);

const elementoDom = document.querySelector('#container');

//SE le due stringhe sono uguali
if(parolaOrdinata == parolaGirata) {
    elementoDom.innerHTML = `La parola inserita è: '${parola}' ed è una parola palindroma!`;
    console.log('La parola è palindroma');
} else {
    elementoDom.innerHTML = `La parola inserita è: '${parola}' e NON è una parola palindroma!`;
    console.log('La parola NON è palindroma');
}


//funzione per avere la parola scomposta in ordine
function normale(parola1) {
    //definisco la variabile che mi darà il risutato della funzione
    let risultato1 = [];
    //avvio il ciclo dalla prima lettera all'ultima della parola
    for (let i = 0; i < parola1.length; i++) {
        //creo le stringhe dell'array
        risultato1[i] = parola1[i];
    }
    return risultato1
}

//funzione per avere la parola scomposta al contrario
function girata(parola2) {
    //definisco la variabile che mi darà il risutato della funzione
    let risultato2 = [];
    //avvio il ciclo dall'ultima lettera alla prima della parola
    for (let i = (parola2.length - 1); i >= 0; i--) {
        let newI = (parola2.length - 1) - i;
        //creo le stringhe dell'array
        risultato2[newI] = parola2[i];
    }
    return risultato2
}


