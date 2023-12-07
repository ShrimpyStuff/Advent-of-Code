import fs from "fs";

const rawFile = fs.readFileSync('./6/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split("\n").map(x=> x.split(/: +/)[1].split(/ +/g).map(x=>Number(x)));
    let times = file[0];
    let distances = file[1];
    let product = 1;

    for (let i = 0; i < times.length; i++) {
        let time = times[i];
        let distance = distances[i];

        let small = Math.ceil((time-Math.sqrt((-1*time)**2-4*distance))/2);
        let big = Math.ceil((time+Math.sqrt((-1*time)**2-4*distance))/2);
        
        product *= big-small;
    }

    return product;
}