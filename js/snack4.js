// # Snack 4
// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari

const array = [10, 5, 3, 20, 15, 25, 34, 12];
let sum = 0;

let i = 0;
while (i < array.length) {
    if (i % 2 !== 0) {
        sum += array[i];
        console.log('Numero in posizione dispari:', array[i]);
    }
    i++;
}
console.log('La somma è', sum);