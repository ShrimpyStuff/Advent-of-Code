import fs from "fs";

const rawFile = fs.readFileSync('./9/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let instructs = rawFile.split(/\n/gm)
    let head = {x: 0, y:0}
    let tail = {x: 0, y:0}
    let lastheadPos = head

    let newPositions = new Set();
    newPositions.add(JSON.stringify(tail))
    
    let something = {"R": 1, "L": -1, "U": 1, "D": -1}
    
    for (let instruct of instructs) {
        instruct = instruct.split(" ")
        for (let i = 0; i < parseInt(instruct[1]); i++) {
            lastheadPos = { ...head}
            if (instruct[0] == "R" || instruct[0] == "L") {
                head.x += something[instruct[0]]
            } else {
                head.y += something[instruct[0]]
            }

            if ((Math.abs(head.x - tail.x) > 1) || (Math.abs(head.y - tail.y) > 1)) {
                tail = {...lastheadPos}
                newPositions.add(JSON.stringify(tail))
            }
        }
    }
    return newPositions.size
}

solution();