const fs = require("fs")
const readline = require("readline")

let increaseAmount = 0;
let lastNumber;

const rl = readline.createInterface({
    input: fs.createReadStream('./input.txt')
})

rl.on('line', (line) => {
    if (lastNumber && lastNumber < parseInt(line)) increaseAmount++
    lastNumber = parseInt(line)
    console.log(increaseAmount)
    console.log(lastNumber)
})

//I was being so dumb when I wrote this.