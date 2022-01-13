// # Snack 3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const fakeNames = [];
const realNames = ['Davide', 'Marcy', 'Beatrice', 'Giuseppe', 'Mario'];
const realSurnames = ['Vinciguerra', 'Tarallo', 'Furegato', 'Scalisi', 'Passarella'];

while (fakeNames.length < 3) {
    const randomNum1 = Math.floor(Math.random() * realNames.length);
    const randomNum2 = Math.floor(Math.random() * realSurnames.length);

    const name = realNames[randomNum1];
    const surname = realSurnames[randomNum2];

    const fullName = `${name} ${surname}`;

    console.log('Persona finta: ', fullName);

    if (!fakeNames.includes(fullName)) {
        fakeNames.push(fullName);
    }
}

console.table(fakeNames);