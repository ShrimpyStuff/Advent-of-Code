import fs from "fs";

const rawFile = fs.readFileSync('./1/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split('\n');
    let sum = 0;
    file.forEach(line => {
        let digits = line.match(/\d/g);
        let code = parseInt("" + digits[0] + digits[digits.length-1])
        sum += code;
    });
    return sum;
}

solution();