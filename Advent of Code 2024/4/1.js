import fs from "fs";

const rawFile = fs.readFileSync('./4/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split("\n").map(n => n.split(""))
    let xmas = 0;
    for (let y = 0; y<file.length; y++) {
        for (let x = 0; x<file[y].length; x++) {
            if (file[y][x] !== "X") continue

            if (file[y].length-1 && file[y].slice(x, x+4).join("") === "XMAS") xmas++
            if (file[y].slice(x-3, x+1).join("") === "SAMX") xmas++

            if (file.length-1 && file.slice(y, y+4).map(n => n[x]).join("") === "XMAS") xmas++
            if (file.slice(y-3, y+1).map(n => n[x]).join("") === "SAMX") xmas++

            let word1 = ""
            let word2 = ""
            let word3 = ""
            let word4 = ""

            for (let b = 0; b<4; b++) {
                if (file[y-b]) {word2 += file[y-b][x+b] || ""; word1 += file[y-b][x-b] || ""}
                if (file[y+b]) {word3 += file[y+b][x+b] || ""; word4 += file[y+b][x-b] || ""}
            }
            
            if (word1 == "XMAS" || word1 == "SAMX") xmas++
            if (word2 == "XMAS" || word2 == "SAMX") xmas++
            if (word3 == "XMAS" || word3 == "SAMX") xmas++
            if (word4 == "XMAS" || word4 == "SAMX") xmas++
        }
    }
    return xmas;
}