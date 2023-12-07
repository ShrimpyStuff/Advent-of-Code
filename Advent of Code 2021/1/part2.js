const fs = require("fs")

let data = fs.readFileSync('./input.txt').toString().replace(/\r?\n$/, '').split(/\r?\n/)

let lastValue = 0;
let currentValue = 0;
let answer = 0;

data = data.map(Number)

for (i=0; i < data.length - 2; i++) {
    currentValue = data[i] + data[i+1] + data[i+2]
    if (currentValue > lastValue && lastValue) { answer++ }
    lastValue = currentValue
}

console.log(answer)