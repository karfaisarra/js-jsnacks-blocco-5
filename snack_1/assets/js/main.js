/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */


//Crea un array di 10 oggetti che rappresentano una zucchina
const zucchine = [
    {
        peso: 500,
        lunghezza: '17cm',
    },
    {
        peso: 300,
        lunghezza: '7cm',
    },
    {
        peso: 400,
        lunghezza: '11cm',
    },
    {
        peso: 200,
        lunghezza: '8cm',
    },
    {
        peso: 100,
        lunghezza: '7cm',
    },
    {
        peso: 70,
        lunghezza: '5cm',
    },
    {
        peso: 120,
        lunghezza: '10cm',
    },
    {
        peso: 150,
        lunghezza: '9cm',
    },
    {
        peso: 350,
        lunghezza: '11cm',
    },
    {
        peso: 550,
        lunghezza: '15cm',
    },
];
let risultato=0;
zucchine.forEach(zucchina =>{
    const peso = zucchina.peso
    console.log('il peso della zucchina:', peso, 'g');
    risultato += peso / 1000 ;
})
console.log('il peso delle zucchine:', risultato,'kg');