// Snack2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.

// ho creato due array con ognuno una lista di Cognomi e di Nomi
const listaCognomi = ["Rossi", "Ferrari", "Colombo", "Marino", "Romano"];
console.log(listaCognomi);

const listaNomi = ["Anna", "Francesco", "Ginevra", "Luca", "Mario"];
console.log(listaNomi);

let listaInvitati = [];

for ( let i = 0; i <= 5; i ++ ) {

    // generatore random di cognomi e nomi
    let cognomiCasuali = listaCognomi[Math.floor(Math.random() * 5)];

    let nomiCasuali = listaNomi[Math.floor(Math.random() *5)];

    listaInvitati = cognomiCasuali + " "+ nomiCasuali;
    console.log(listaInvitati);

}

