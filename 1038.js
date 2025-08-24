var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const [code, quantity] = lines[0].split(' ').map(el => parseInt(el));

let price;
switch(code){
    case 1:
        price = 4.00
        break;
    case 2:
        price = 4.50
        break;
    case 3:
        price = 5.00
        break;
    case 4:
        price = 2.00
        break;
    case 5:
        price = 1.50
        break;
}

const total = price*quantity;

console.log("Total: R$",total.toFixed(2));