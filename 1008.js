var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let employeeNumber = parseInt(lines[0]);
let amountOfHoursWorked = parseInt(lines[1]);
let ratePerHour = parseFloat(lines[2]); 

let salary = amountOfHoursWorked*ratePerHour;

console.log("NUMBER = "+employeeNumber);
console.log("SALARY = U$ "+salary.toFixed(2));