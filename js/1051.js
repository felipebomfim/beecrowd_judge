var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let salary = parseFloat(lines[0]);

let tax = 0;

if (salary <= 2000.00) {
    tax = 0;
    console.log("Isento");
    return;
} else if (salary <= 3000.00) {
    tax = (salary - 2000.00) * 0.08;
} else if (salary <= 4500.00) {
    tax = 1000.00 * 0.08 + (salary - 3000.00) * 0.18;
} else {
    tax = 1000.00 * 0.08 + 1500.00 * 0.18 + (salary - 4500.00) * 0.28;
}

console.log(`R$ ${tax.toFixed(2)}`);