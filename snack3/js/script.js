// Snack3

// Crea un array di numeri interi 
let numeriInteri = [ 1, 5, 8, 10, 9, 6 ];

console.log(numeriInteri);

let somma = 0;

// ciclo dentro la variabile dei numeri interi
for ( let i = 0; i < numeriInteri.length; i ++ ) {
    
    //calcolo l'indice in posizione dispari e poi somma i numeri che sono in posizione dispari
    if ( i % 2 !== 0 ) {
        
        somma += numeriInteri[i];
    }

}
console.log(somma);
