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
  const radius = parseFloat(lines[0]);
  const pi = 3.14159;
  const volume = (4 / 3) * pi * radius ** 3;

  console.log(`VOLUME = ${volume.toFixed(3)}`)
};

rl.on('close', solve);


