/* Snack 1. L'utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */


let numeroUno = Number.parseInt(prompt('Inserisci il primo numero'), 10);
let numeroDue = Number.parseInt(prompt('Inserisci il secondo numero'), 10);

if(numeroUno === numeroDue){
    console.log(numeroUno , numeroDue);
}else if(numeroUno > numeroDue){
    console.log(numeroUno);
}else{
    console.log(numeroDue);
}


/* aggiunto condizione numeri uguali */