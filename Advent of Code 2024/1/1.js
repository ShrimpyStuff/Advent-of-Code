import fs from "fs";

const rawFile = fs.readFileSync('./1/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let differences = 0;
    let list1 = [];
    let list2 = [];

    rawFile.split("\n").map(line => {
        let integers = line.split("   ").map(num => Number(num));
        list1.push(integers[0]);
        list2.push(integers[1]);
    });
    list1.sort();
    list2.sort();
    for (const index in list1) {
        differences += Math.abs(list1[index] - list2[index]);
    }
    return differences;
}