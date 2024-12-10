import fs from "fs";

const rawFile = fs.readFileSync('./10/input.txt',{encoding:'utf8'}).trim().replaceAll("\r", "");

export function solution() {
    let file = rawFile.split("\n").map(n => n.split("").map(Number))
    let sum = 0;

    for (let i = 0; i < file.length; i++) {
        for (let j = 0; j < file[i].length; j++) {
            if (file[i][j] === 0) {
                let ends = [];
                sum += find(file, j, i, ends)
            }
        }
    }

    return sum
}

function find(file, x, y, ends) {
    let sum = 0;
    let num = file[y][x]

    if (num === 9) {
        if (!ends.includes(`${y}, ${x}`)) {
            ends.push(`${y}, ${x}`)
            return 1
        }
        else return 0
    }
    
    if (file[y] && file[y][x+1] == num + 1) {
        sum += find(file, x+1, y, ends)
    }
    if (file[y] && file[y][x-1] == num + 1) {
        sum += find(file, x-1, y, ends)
    }
    if (file[y-1] && file[y-1][x] == num + 1) {
        sum += find(file, x, y-1, ends)
    }
    if (file[y+1] && file[y+1][x] == num + 1) {
        sum += find(file, x, y+1, ends)
    }

    return sum;
}