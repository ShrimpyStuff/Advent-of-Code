import fs from "fs";

const rawFile = fs.readFileSync('./1/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let similarity = 0;
    let list1 = [];
    let appearances = {};

    rawFile.split("\n").map(line => {
        let integers = line.split("   ").map(num => Number(num));
        list1.push(integers[0]);
        appearances[integers[1]] = appearances[integers[1]] ? appearances[integers[1]]+1 : 1;
    });
    for (const index in list1) {
        similarity += list1[index] * (appearances[list1[index]] || 0);
    }

    return similarity;
}