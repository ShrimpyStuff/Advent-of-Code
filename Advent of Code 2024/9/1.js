import fs from "fs";

const rawFile = fs.readFileSync('./9/input.txt',{encoding:'utf8'}).trim().replaceAll("\r", "");

export function solution() {
    let list = []
    let id = 0;
    let checksum = 0;
    for (let i = 0; i < rawFile.length; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < Number(rawFile[i]); j++) {
                list.push(id)
            }
            id++
        } else {
            for (let j = 0; j < Number(rawFile[i]); j++) {
                list.push(".")
            }
        }
    }
    
    for (let n = 0; n < list.length; n++) {
        while (list[n] == ".") {
            list[n] = list[list.length-1]
            list.pop()
        }
    }

    for (let index = 0; index < list.length; index++) {
        checksum += index * list[index]
    }
    return checksum
}