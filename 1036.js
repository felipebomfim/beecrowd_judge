var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const [a,b,c] = lines[0].split(' ').map(e => parseFloat(e));
const delta = b**2 - 4*a*c;

if (delta < 0 || a === 0){
    console.log("Impossivel calcular");
    return;
}

const r1 = (-b+Math.sqrt(delta))/(2*a);
const r2 = (-b-Math.sqrt(delta))/(2*a);

console.log("R1 =", r1.toFixed(5));
console.log("R2 =", r2.toFixed(5));
