/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */

let numeriInteri = [5,10,3,6,7,5,5,5,5];

let sommaNumeri = 0;

for(i = 0; i < numeriInteri.length; i++){
    if(i % 2 != 0){
        sommaNumeri += numeriInteri[i];
    }
}
console.log(sommaNumeri);