import fs from "fs";

const rawFile = fs.readFileSync('./3/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split('\n');
    let sum = 0;
    
    for (let i = 0; i < file.length; i++) {
        let line = file[i];
        let numbers = Array.from(line.matchAll(/\d+/g));
        number: for (let j = 0; j < numbers.length; j++) {
            let isPart = false;
             for (let k = 0; k < numbers[j][0].length; k++) {
                for (let checkx = -1; checkx < 2; checkx++) {
                    if (file[i+checkx] == undefined) continue;
                    for (let checky = -1; checky < 2; checky++) {
                        if (file[i+checkx][numbers[j].index+k+checky] == undefined) continue;
                            
                        let check = file[i+checkx][numbers[j].index+k+checky]
                        if (check != "." && isNaN(check)) {
                            isPart = true;
                        }
                    }
                }

                if (isPart === true) {
                    sum += Number(numbers[j][0]);
                    continue number;
                }
            }
        }
    }

    return sum;
}

solution();