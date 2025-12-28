var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const [a, b, c] = lines[0].split(' ').map(value => Number(value));

let ehPossivelFazerTriangulo = false;
if (a + b > c && b + c > a && a + c > b) {
    ehPossivelFazerTriangulo = true;
}

if (ehPossivelFazerTriangulo) {
    console.log(`Perimetro = ${(a + b + c).toFixed(1)}`);
} else {
    const area = (a + b) / 2 * c;
    console.log(`Area = ${area.toFixed(1)}`)
}