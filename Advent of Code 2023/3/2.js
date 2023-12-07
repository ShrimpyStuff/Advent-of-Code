import fs from "fs";

const rawFile = fs.readFileSync('./3/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split('\n');
    let sum = 0;

    for (let i = 0; i < file.length; i++) {
        let line = file[i];
        let asterisk = Array.from(line.matchAll(/\*/g));
        asterisk.forEach(element => {
            let numbers = [];
            for (let j = -1; j < 2; j++) {
                if (file[i+j] == undefined) continue;
                for (let k = -1; k < 2; k++) {
                    if (file[i+j][element.index+k] == undefined) continue;
                    let check = file[i+j][element.index+k];
                    if (!isNaN(Number(check))) {
                        let fullNumber = checkNum(file, i+j, element.index+k, 0);
                        k += fullNumber[1] + fullNumber[2]
                        numbers.push(Number(fullNumber[0]))
                    }
                }
            }

            if (numbers.length == 2) {
                sum += (numbers[0] * numbers[1]);
            }
        });
    }
    return sum;
}

function checkNum(file, y, x, num) {
    let fullNumber;
    if (!isNaN(Number(file[y][x-1]))) {
        fullNumber = checkNum(file, y, x-1, num-1);
    } else {
        fullNumber = file[y].substring(x).match(/\d+/);
    }
    return [fullNumber[0], fullNumber[0].length, (fullNumber[2] || num)];
}

solution();