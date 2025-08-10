var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const initialReais = parseInt(lines[0].split('.')[0]);
const initialCents = parseInt(lines[0].split('.')[1])

const notes = [100, 50, 20, 10, 5, 2];
const coinsInCents = [100, 50, 25, 10, 5, 1];

const numOfNotes = [0, 0, 0, 0, 0, 0];

let amount = initialReais;

for(let i = 0;i<notes.length; i++){    
    for(numOfNotes[i]=0;amount>=notes[i]; numOfNotes[i]++){
        amount-=notes[i];
    }   
}
let amountInCents = initialCents;

if (amount==1){
    amountInCents +=100;
}

const numOfCoins = [0, 0, 0, 0, 0, 0];

for(let i = 0;i<coinsInCents.length; i++){    
    for(numOfCoins[i]=0;amountInCents>=coinsInCents[i]; numOfCoins[i]++){
        amountInCents-=coinsInCents[i];
    }   
}

console.log("NOTAS:")
for(let i=0; i<numOfNotes.length; i++)
    console.log(`${numOfNotes[i]} nota(s) de R$ ${notes[i].toFixed(2)}`);
console.log("MOEDAS:")
for(let i=0; i<numOfCoins.length; i++)
    console.log(`${numOfCoins[i]} moeda(s) de R$ ${(coinsInCents[i]/100).toFixed(2)}`);