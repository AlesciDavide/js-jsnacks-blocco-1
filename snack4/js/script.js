/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa. */

const listaInvitatiFesta = ['gigi', 'roberto', 'giovanni', 'gatsby', 'davide', 'lorenzo'];

let nomeUtente = prompt('inserisci il tuo nome');

    if(listaInvitatiFesta.includes(nomeUtente)){
        console.log('puoi partecipare');
    }else{
        console.log('non puoi entrare');
    }
