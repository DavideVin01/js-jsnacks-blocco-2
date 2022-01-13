// # Snack 4
// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari

const array = [10, 5, 3, 20, 15, 25, 34, 12];
let sum = 0;
let num;

const arrayOdd = [];

let i = 1;
while (i < array.length) {
    console.log('Numero in posizione dispari:', array[i]);
    sum += array[i];
    i += 2;
}
console.log('La somma è', sum);