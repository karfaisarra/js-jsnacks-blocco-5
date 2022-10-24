/* Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */


const primoArray = ['a','b','c'];
const secondoArray = [1,2,3];
const terzoArray= fonda(primoArray, secondoArray);
console.log(terzoArray);

function fonda(array1, array2) {
    const array3=[];
    for (let i = 0; (i < array1.length)&&(i < array2.length) ; i++) {
        const element1 = array1[i];
        const element2 = array2[i];
        array3.push(element1, element2);
    }
    return array3;
}



