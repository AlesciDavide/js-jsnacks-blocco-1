/* L'utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */


let numeroUno = Number.parseInt(prompt('Inserisci il primo numero'));
let numeroDue = Number.parseInt(prompt('Inserisci il primo numero'));

if(numeroUno > numeroDue){
    console.log(numeroUno);
}else{
    console.log(numeroDue);
}