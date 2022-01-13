// # Snack 2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

let arrayEven = [];

let i = 0;
while (i < 5) {
    const number = prompt('Inserisci un numero').trim();
    console.log(number);
    if (number % 2 === 0) {
        arrayEven.push(number);
    }

    i++
}

console.log('Numeri pari inseriti:', arrayEven);