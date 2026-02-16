var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const salario = parseFloat(lines[0]);

let percentual;
if (salario <= 400.0) {
  percentual = 15;
} else if (salario <= 800.0) {
  percentual = 12;
} else if (salario <= 1200.0) {
  percentual = 10;
} else if (salario <= 2000.0) {
  percentual = 7;
} else {
  percentual = 4;
}

const reajuste = salario * (percentual / 100);
const novoSalario = salario + reajuste;

console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);
