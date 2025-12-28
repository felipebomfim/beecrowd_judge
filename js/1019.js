var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const timeInSeconds = parseInt(lines[0]);

const hours = Math.trunc(timeInSeconds/3600);
const minutes = Math.trunc(timeInSeconds/60)%60;
const seconds = Math.trunc(timeInSeconds)%60;

console.log(`${hours}:${minutes}:${seconds}`);