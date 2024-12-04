import fs from "fs";

const rawFile = fs.readFileSync('./4/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split("\n").map(n => n.split(""))
    let mas = 0;
    for (let y = 0; y<file.length; y++) {
        for (let x = 0; x<file[y].length; x++) {
            if (file[y][x] !== "A") continue

            let word1 = ""
            let word2 = ""
            if (y-1 > -1 && x-1 > -1 && y+1 < file.length && x+1 < file[y].length) {
                word1 = file[y-1][x-1] + file[y][x] + file[y+1][x+1]
                word2 = file[y-1][x+1] + file[y][x] + file[y+1][x-1]
            }
            
            if ((word1 == "MAS" || word1 == "SAM") && (word2 == "MAS" || word2 == "SAM")) mas++
        }
    }
    return mas;
}