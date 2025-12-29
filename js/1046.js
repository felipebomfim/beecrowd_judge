var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const [ini, fim] = lines[0].split(" ").map((i) => Number(i));
let duracao;
if (fim - ini > 0) duracao = fim - ini;
else duracao = fim - ini + 24;

console.log(`O JOGO DUROU ${duracao} HORA(S)`);
