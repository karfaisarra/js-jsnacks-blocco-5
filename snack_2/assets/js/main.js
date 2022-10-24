/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

//Crea 10 oggetti che rappresentano una zucchina.
const zucchine = [
    {
        peso: 500 ,
        lunghezza: 17,
    },
    {
        peso: 300 ,
        lunghezza: 7,
    },
    {
        peso: 400,
        lunghezza: 11,
    },
    {
        peso: 200,
        lunghezza: 8,
    },
    {
        peso: 100,
        lunghezza: 7,
    },
    {
        peso: 70 ,
        lunghezza: 5,
    },
    {
        peso: 120 ,
        lunghezza: 10,
    },
    {
        peso: 150 ,
        lunghezza: 9,
    },
    {
        peso: 350 ,
        lunghezza: 11,
    },
    {
        peso: 550 ,
        lunghezza: 15,
    },
];

const piu15 = zucchine.filter (zucchina =>{
    if (zucchina.lunghezza >= 15) {
        return true;
    }
    return false;
})
console.log(piu15);
const meno15 = zucchine.filter (zucchina =>{
    if (zucchina.lunghezza < 15) {
        return true;
    }
    return false;
})
console.log(meno15);

//Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let risultato = 0;
piu15.forEach(zucchina =>{
    const peso = zucchina.peso
    console.log('il peso della zucchina:', peso, 'g');
    risultato += peso / 1000 ;
})
console.log('il peso delle zucchina:', risultato,'kg');
console.log('##########################');
let risultato2 = 0;
meno15.forEach(zucchina =>{
    const peso = zucchina.peso
    console.log('il peso della zucchina:', peso, 'g');
    risultato2 += peso / 1000 ;
})
console.log('il peso delle zucchina:', risultato2,'kg');