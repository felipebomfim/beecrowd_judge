var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const point1 = lines[0].split(' ').map(el => parseFloat(el));
const point2 = lines[1].split(' ').map(el => parseFloat(el));

// console.log(point1)
// console.log(point2)

const distance = Math.sqrt((point2[0] - point1[0])**2+(point2[1] - point1[1])**2);

console.log(distance.toFixed(4));