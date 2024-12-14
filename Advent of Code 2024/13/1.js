import fs from "fs";

const rawFile = fs.readFileSync('./13/input.txt',{encoding:'utf8'}).trim().replaceAll("\r", "");

export function solution() {
    let file = rawFile.split("\n\n").map(n => n.split("\n").map(m => m.split(",").map(l => Number(l.split(/\+|\=/)[1]))))
    

    let sum = 0;
    for (let machine of file) {
        let aGroup = machine[0]
        let bGroup = machine[1]
        let xTotal = machine[2][0]
        let yTotal = machine[2][1]

        let b = ((xTotal * aGroup[1]) - (yTotal *aGroup[0]))/(((-1*bGroup[1])*aGroup[0])+(bGroup[0]*aGroup[1]))
        let a = (yTotal-(b*bGroup[1]))/aGroup[1]
        if (Number.isInteger(a)) {
            sum += (3*a) + b
        }
    }

    return sum
}