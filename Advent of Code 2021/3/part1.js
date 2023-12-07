const fs = require('fs')

let data = fs.readFileSync('./input.txt').toString().replace(/\r?\n$/, '').split(/\r?\n/)

let binaryGamma = '';
let binaryEpsilon = '';

for (i=0; i < data[0].length; i++) {
let ones=0;
let zeroes=0;
    for (const line of data) {
        if (line[i] === '1') {
            ones++
        } else {
           zeroes++
        }
    }
binaryGamma += ones > zeroes ? '1' : '0';
binaryEpsilon += ones > zeroes ? '0' : '1';
}

console.log(parseInt(binaryGamma, 2) * parseInt(binaryEpsilon, 2))