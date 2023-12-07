import fs from "fs";

const rawFile = fs.readFileSync('./5/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split(/\n\s*\n/g).map(x => x.split(":")[1]).map(x => x.split(/\r?\n/).filter(x=>x).map(x=>x.split(" ").filter(x=>x).map(x => Number(x))));
    let lowest = 0;

    let seeds = []
    for (let i = 0; i<file[0][0].length; i+=2) {
        seeds.push(seeds.slice(i, i+2));
    }
    
    let currentStep = file[0][0].map(x=>x)

    for (let i = 1; i < file.length; i++) {
        let ranges = file[i]
        let map = Array(currentStep.length)
         
        for (let range of ranges) {
            let size = range[2]-1;
            let start = range[1];
            let mapStart = range[0];

            let end = start + size;

            for (let index = 0; index < currentStep.length; index++) {
                let current = currentStep[index]
                let seed = seeds[index];
                if (current >= start && current <= end) {
                    let step = current - start;
                    map[index] = mapStart + step;
                } else {
                    map[index] = map[index] || current
                }
            }
            map = map
        }
        currentStep = map
    }
    lowest = Math.min(...currentStep)
    return lowest;
}

//solution();