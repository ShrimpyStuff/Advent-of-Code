import fs from "fs";

const rawFile = fs.readFileSync('./7/input.txt',{encoding:'utf8'}).trim().replaceAll("\r", "");

export function solution() {
    let file = rawFile.split("\n").map(n => n.split(":").map(m=> m.trim().split(" ").map(Number)))
    let overall = 0;
    for (let line = 0; line < file.length; line++) {
        let total = file[line][0][0]
        let numbers = file[line][1]
        
        if (permutation_loops(numbers, numbers.length-1).includes(total)) {
            overall += total
        }
    }
    return overall
}

function permutation_loops(numbers, ops=numbers.length-1) {
    if (ops == 0) {
        return [numbers[ops]]
    }
    else {
        let values = []
        let underValues = permutation_loops(numbers, ops-1)
        for (let num = 0; num < underValues.length; num++){
            values.push(numbers[ops] + underValues[num])
            values.push(numbers[ops] * underValues[num])
        }
        return values
    }
}