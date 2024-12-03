import fs from "fs";

const rawFile = fs.readFileSync('./3/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let sum = 0;
    let enabled = true;
    const array = Array.from(rawFile.matchAll(/(?:do\(\))|(?:don't\(\)|mul\([0-9]*,[0-9]*\))/g), (m) => m[0]);
    for (let multext of array) {
        if (multext === "don't()") enabled = false 
        else if (multext === "do()") enabled = true
        else {
            multext = multext.split(",")
            if (enabled) {sum += Number(multext[0].slice(4)) * Number(multext[1].slice(0, -1))}
        }
    }
    return sum
}