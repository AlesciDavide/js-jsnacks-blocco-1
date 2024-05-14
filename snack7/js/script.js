/* Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo. */

let numeroUtente = Number.parseInt(prompt('inserisci un numero'));
let lista = [];
for(let i= 0; i < numeroUtente; i++){
    lista = [];
    for(let i = 0; i < 10; i++){
        lista.push(Math.floor(Math.random() * 100 + 1)); 
    }
    console.log(lista);
}