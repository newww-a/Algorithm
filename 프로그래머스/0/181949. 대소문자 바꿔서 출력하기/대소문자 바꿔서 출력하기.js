const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
    rl.close();
}).on('close',function(){
    str = input[0];
    
    const value = str
        .split('')
        .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
        .join('');
    console.log(value)
});