import fs from "fs";

const rawFile = fs.readFileSync('./10/input.txt',{encoding:'utf8'}).trim().replaceAll("\r", "");

export function solution() {
    let file = rawFile.split("\n").map(n => n.split("").map(Number))
    let sum = 0;

    for (let i = 0; i < file.length; i++) {
        for (let j = 0; j < file[i].length; j++) {
            if (file[i][j] === 0) {
                sum += find(file, j, i)
            }
        }
    }

    return sum
}

function find(file, x, y) {
    let sum = 0;
    let num = file[y][x]

    if (num === 9) {
        return 1
    }
    
    if (file[y] && file[y][x+1] == num + 1) {
        sum += find(file, x+1, y)
    }
    if (file[y] && file[y][x-1] == num + 1) {
        sum += find(file, x-1, y)
    }
    if (file[y-1] && file[y-1][x] == num + 1) {
        sum += find(file, x, y-1)
    }
    if (file[y+1] && file[y+1][x] == num + 1) {
        sum += find(file, x, y+1)
    }

    return sum;
}