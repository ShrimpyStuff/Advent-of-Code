import fs from "fs";

const rawFile = fs.readFileSync('./11/input.txt',{encoding:'utf8'}).trim().replaceAll("\r", "");

export function solution() {
    let nums = rawFile.split(" ").map(Number)
    for (let x = 0; x < 25; x++) {
        for (let n = 0; n < nums.length; n++) {
            if (nums[n] === 0) {
                nums[n] = 1
            } else if(String(nums[n]).length % 2 == 0) {
                let leftNum = String(nums[n]).slice(0, String(nums[n]).length/2)
                let rightNum = String(nums[n]).slice(String(nums[n]).length/2)
                nums.splice(n, 1, Number(leftNum), Number(rightNum))
                n++
            } else {
                nums[n] *= 2024
            }
        }
    }
    return nums.length
}