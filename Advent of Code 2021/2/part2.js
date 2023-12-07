const fs = require('fs')

let data = fs.readFileSync('./input.txt').toString().replace(/\r?\n$/, '').split(/\r?\n/)

let horizontal = 0;
let depth = 0;
let aim = 0;

data.forEach(element => {
    if (element.startsWith('up')) {
        aim -= parseInt(element.substring(3))
    }

    if (element.startsWith('down')) {
        aim += parseInt(element.substring(5))
    }

    if (element.startsWith('forward')) {
        horizontal += parseInt(element.substring(8))
        depth += aim * parseInt(element.substring(8))
    }
});

console.log(horizontal)
console.log(depth)
console.log(aim)

console.log(horizontal*depth)