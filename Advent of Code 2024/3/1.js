import fs from "fs";

const rawFile = fs.readFileSync('./3/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let sum = 0;
    let array = Array.from(rawFile.matchAll(/mul\([0-9]*,[0-9]*\)/g), (m) => m[0]);
    for (let mul of array) {
        mul = mul.split(",")
        sum += Number(mul[0].slice(4)) * Number(mul[1].slice(0, -1))
    }
    return sum
}