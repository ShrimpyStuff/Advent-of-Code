import fs from "fs";

const rawFile = fs.readFileSync('./4/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split('\n').map(x => x.split(":")[1])
    let sum = 0;
    for (let line = 0; line < file.length; line++) {
        sum++;
        solve(file, line)
    }
    return sum;

    function solve(file, line) {
        let matches = 0;
        
        let l = file[line].split(' | ');
    
        let nums = l[0].split(" ").filter(i => i);
        let scratches = l[1].split(" ").filter(i => i);
    
        for (let num of nums) {
            if (scratches.includes(num)) {
                matches++;
            }
        }
        
        for (let i = 1; i < matches+1; i++) {
            solve(file, line+i);
            sum++;
        }
    }
}



solution();