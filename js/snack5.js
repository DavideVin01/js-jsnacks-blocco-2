// # Snack 5
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const array1 = [10, 18, 21, 54, 78, 91];
const array2 = [14, 22];
console.log('Array1 prima:', array1);
console.log('Array2 prima:', array2);

while (array1.length !== array2.length) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (array1.length > array2.length) {
        array2.push(randomNumber);
    } else {
        array1.push(randomNumber);
    }
}

console.log('Array1 dopo:', array1);
console.log('Array2 dopo:', array2);
