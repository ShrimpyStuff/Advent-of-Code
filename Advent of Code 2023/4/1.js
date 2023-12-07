import fs from "fs";

const rawFile = fs.readFileSync('./4/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split('\n').map(x => x.split(":")[1])
    let sum = 0;
    for (let line of file) {
        let matches = 0;

        line = line.split(' | ');

        let nums = line[0].split(" ").filter(i => i);
        let scratches = line[1].split(" ").filter(i => i);

        for (let num of nums) {
            if (scratches.includes(num)) {
                matches++;
            }
        }

        if (matches > 0) {
            sum += 2**(matches-1);
        }
    }
    return sum;
}

solution();