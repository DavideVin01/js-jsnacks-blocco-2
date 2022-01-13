// # Snack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

let sum = 0;

// # Ciclo For
// for (let i = 1; i <= 5; i++) {
//     const number = parseInt(prompt('Scrivi un numero.').trim());
//     console.log(`Numero digitato: ${number} - (${i}/5)`);
//     sum += number;
// }

// Ciclo While
let i = 1;
while (i <= 5) {
    const number = parseInt(prompt('Scrivi un numero.').trim());
    console.log(`Numero digitato: ${number} - (${i}/5)`);
    sum += number;

    i++
}

// Somma
console.log('Il risultato è', sum);