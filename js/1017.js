var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const spentTime = parseInt(lines[0]);
const averageSpeed = parseInt(lines[1]);
const consumption = 12;

const distance = averageSpeed*spentTime;

const litersNeeded = distance/consumption;
console.log(litersNeeded.toFixed(3));