/* Crea un array vuoto.
hiedi per 6 volte all'utente di inserire un numero,
 se è dispari inseriscilo nell'array. */


let listaNumeri = [];

for(let i = 0; i < 6; i++){
    let numeroInserito = Number.parseInt(prompt('isnerisci il numero' + (i+1)));
    if( numeroInserito % 2 == 1){
        listaNumeri.push(numeroInserito);
    };
}
console.log(listaNumeri);