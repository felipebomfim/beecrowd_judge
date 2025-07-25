var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false, // evita prompt no terminal (importante para Beecrowd-like behavior)
});
var lines = [];
rl.on('line', function (line) {
    lines.push(line);
});
rl.on('close', function () {
    var radius = parseFloat(lines[0]);
    var pi = 3.14159;
    var volume = (4 / 3) * pi * Math.pow(radius, 3);
    console.log("VOLUME = ".concat(volume.toFixed(3)));
});
