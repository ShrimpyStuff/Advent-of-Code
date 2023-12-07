const fs = require('fs')

let data = fs.readFileSync('./input.txt').toString().replace(/\r?\n$/, '').split(/\r?\n/)

let oxygenBits = [...data];
let oxNumber;
let co2Bits = [...data];
let coNumber;

for (i=0; i < oxygenBits[0].length; i++) {
    let ones=0;
    let zeroes=0;
    for (const line of oxygenBits) {
        if (line[i] === '1') {
            ones++
        } else {
           zeroes++
        }
    }
    oxNumber = ones >= zeroes ? '1' : '0'
    if (oxygenBits.length > 1) {
        oxygenBits = oxygenBits.filter(bit => bit[i]===oxNumber)
    }
}

for (i=0; i < co2Bits[0].length; i++) {
    let ones=0;
    let zeroes=0;
    for (const line of co2Bits) {
        if (line[i] === '1') {
            ones++
        } else {
           zeroes++
        }
    }
    coNumber = zeroes <= ones ? '0' : '1'
    if (co2Bits.length > 1) {
        co2Bits = co2Bits.filter(bit => bit[i]===coNumber)
    }
}
console.log(parseInt(oxygenBits[0], 2) * parseInt(co2Bits[0],2))