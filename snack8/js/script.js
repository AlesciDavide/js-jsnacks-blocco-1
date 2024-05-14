/* Snack8 
Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari. */

const listaNumeri = [5,6,8,5,1,85,2,4,85,2,6,7,5,3,21,57,100];

const sectionElement = document.querySelector('section#myContainer');

let divElement = document.createElement('div');
divElement.classList.add('bg_red')

let divElementDue = document.createElement('div');
divElementDue .classList.add('bg_green');

let divElementTre = document.createElement('div');
divElementTre .classList.add('bg_yellow');

for(let i = 0; i < listaNumeri.length; i++){
    if(listaNumeri[i] % 5 == 0){
        divElementTre.append(listaNumeri[i] + ' ');

    }else if (listaNumeri[i] % 2 == 1 ){
        divElement.append(listaNumeri[i] + ' ');
    }else{
        divElementDue.append(listaNumeri[i] + ' ');

    }
    sectionElement.appendChild(divElement);
    sectionElement.appendChild(divElementDue);
    sectionElement.appendChild(divElementTre);

}
