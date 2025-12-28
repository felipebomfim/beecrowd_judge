import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false, // evita prompt no terminal (importante para Beecrowd-like behavior)
});

const lines: string[] = [];

rl.on('line', (line: string) => {
  lines.push(line);
});

const solve = () => {
  const elements = lines[0].split(' ');
  const a = parseInt(elements[0]);
  const b = parseInt(elements[1]);
  const c = parseInt(elements[2]);

  const maiorEntreAeB = (a+b+Math.abs(a-b))/2;
  const maior = (c+maiorEntreAeB+Math.abs(c-maiorEntreAeB))/2;

  console.log(maior + " eh o maior");
};

rl.on('close', solve);


