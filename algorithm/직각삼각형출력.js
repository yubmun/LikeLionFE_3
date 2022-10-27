const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let n = Number(input[0]);
    let stars = '*';
    for(let i=0; i < n; i++){
        console.log(stars);
        stars += '*';
    }
});