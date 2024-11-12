// CREO ARRAY DI BICI
const bici = [
    { nome: `bmx`, peso: 15},
    {nome: `graziella`, peso: 8},
    {nome: `Mountainbike`, peso: 21}, 
];

// CREO CICLO FOR CHE PRENDE TUTTE LE BICI
// CREO UNA VAR PER LA BICI PIù LEGGERA E GLI ASSEGNO LA PRIMA BICI DELL' ARRAY
// CONFRONTO TUTTE LE BICI SALVANDO IN BICI LEGGERA QUELLA CON L PESO MINORE DURANTE LA COMPARAZIONE DI TUTTI GLI ELEMENTI
let biciLeggera = bici[0];
for (let i = 0; i < bici.length; i++) {
    const curBici = bici[i];
    if (curBici.peso < biciLeggera.peso) {
        biciLeggera = curBici;
    }
    
}
console.log(biciLeggera);