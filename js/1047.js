var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let inputs = lines[0].split(" ").map((el) => parseInt(el));

class Time {
	constructor(hour, minutes) {
		this.hour = hour;
		this.minutes = minutes;
	}
}

let start = new Time(inputs[0], inputs[1]);
let end = new Time(inputs[2], inputs[3]);

let durationInMinutes = (end.hour - start.hour)*60+(end.minutes - start.minutes);

if (durationInMinutes <= 0){
    durationInMinutes += 24*60;
}

const durationInHours = Math.floor(durationInMinutes/60);
durationInMinutes -= durationInHours*60;

console.log(`O JOGO DUROU ${durationInHours} HORA(S) E ${durationInMinutes} MINUTO(S)`);

