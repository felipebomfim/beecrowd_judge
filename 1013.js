"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false, // evita prompt no terminal (importante para Beecrowd-like behavior)
});
var lines = [];
rl.on('line', function (line) {
    lines.push(line);
});
var solve = function () {
    var elements = lines[0].split(' ');
    var a = parseInt(elements[0]);
    var b = parseInt(elements[1]);
    var c = parseInt(elements[2]);
    var maiorEntreAeB = (a + b + Math.abs(a - b)) / 2;
    var maior = (c + maiorEntreAeB + Math.abs(c - maiorEntreAeB)) / 2;
    console.log(maior + " eh o maior");
};
rl.on('close', solve);
