import fs from "fs";

const rawFile = fs.readFileSync('./11/input.txt',{encoding:'utf8'}).trim().replaceAll("\r", "");

let nums = rawFile.split(" ").map(Number)
let newNums = {}

export function solution() {

    nums.map(n => newNums[n] = newNums[n] + 1 || 1)
    
    for (let x = 0; x < 75; x++) {
        let wholeNew = {}
        for (let n in newNums) {
            n = Number(n)
            
            if (n === 0) {
                wholeNew[1] = wholeNew[1] + newNums[0] || newNums[0]
            }
            else if(String(n).length % 2 == 0) {
                let leftNum = Number(String(n).slice(0, String(n).length/2))
                let rightNum = Number(String(n).slice(String(n).length/2))
                wholeNew[leftNum] = wholeNew[leftNum] + newNums[n] || newNums[n]
                wholeNew[rightNum] = wholeNew[rightNum] + newNums[n] || newNums[n]
            } else {
                wholeNew[n * 2024] = wholeNew[n*2024] + newNums[n] || newNums[n]
            }

        }
        newNums = wholeNew
    }
    return Object.values(newNums).reduce((a,b) => a+b)
}