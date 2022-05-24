// Snack1

// Chiedo all'utente di inserire un numero
let numeroUtente = parseInt(prompt("Inserisci un numero"));

// se il numero inserito è pari lo stampo, se il numero inserito è dispari stampo il numero successivo
if( numeroUtente % 2 == 0) {

    alert(`Il numero Inserito è PARI!! ${numeroUtente}`);

}else {

    alert(`il numero e Dispari!! ${numeroUtente} Stampo numero successivo ${numeroUtente + 1}`);
}
