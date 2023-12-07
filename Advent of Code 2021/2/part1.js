const fs = require('fs')

let data = fs.readFileSync('./input.txt').toString().replace(/\r?\n$/, '').split(/\r?\n/)

let horizontal = 0;
let depth = 0;

data.forEach(element => {
    if (element.startsWith('up')) {
        depth -= parseInt(element.substring(3))
    }

    if (element.startsWith('down')) {
        depth += parseInt(element.substring(5))
    }

    if (element.startsWith('forward')) {
        horizontal += parseInt(element.substring(8))
    }
});

console.log(horizontal)
console.log(depth)

console.log(horizontal*depth)