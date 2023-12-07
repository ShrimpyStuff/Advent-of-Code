import fs from "fs";

const rawFile = fs.readFileSync('./6/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split("\n").map(x=> Number(x.split(/: +/)[1].replace(/ +/g, "")));
    let time = file[0];
    let distance = file[1];

    let small = Math.ceil((time-Math.sqrt((-1*time)**2-4*distance))/2);
    let big = Math.ceil((time+Math.sqrt((-1*time)**2-4*distance))/2);
    
    let product = big-small;

    return product;
}