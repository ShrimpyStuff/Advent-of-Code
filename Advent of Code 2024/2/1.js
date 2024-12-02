import fs from "fs";

const rawFile = fs.readFileSync('./2/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let safe = 0;

    let file = rawFile.split("\n").map(line => line.split(" ").map(num => Number(num)));
    for (const line of file) {
        const direction = line[1] - line[0] > 0
        let add = 1;
        let problems = 0;
        for (let index in line) {
            index = Number(index)
            let distance = line[index+1]-line[index]
            let newDirection = distance > 0
            let distanceCheck = (1 <= Math.abs(distance) && Math.abs(distance) <= 3)
            if ((line[index + 1] != undefined && !isNaN(distance)) && ((!newDirection == direction) || !distanceCheck)) {
                add = 0;
                break;
            }
        }
        safe += add;
    }

    return safe;
}