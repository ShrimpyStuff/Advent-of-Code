import fs from "fs";

const rawFile = fs.readFileSync('./5/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split(/\n\s*\n/g).map(x => x.split(":")[1]).map(x => x.split(/\r?\n/).filter(x=>x).map(x=>x.split(" ").filter(x=>x).map(x => Number(x))));
    let lowest = 0;

    let seeds = []
    for (let i = 0; i<file[0][0].length; i+=2) {
        seeds.push(file.slice(i, i+2));
    }
    
    let currentStep = file[0][0].map(x=>x)

    let tempMap = Array(seedPairs.length)
    file.slice(1).forEach(range => {
        if (range.start <= pair.start+pair.length && pair.start <= range.end) {
            if (pair.start < range.start) {
                tempMap.splice(index-1, 0, [pair.start, range.start])
            }

            if (range.end < pair.end) {
                tempMap.splice(index+1, 0, [range.end, pair.end])
            }

            tempMap.splice(index, 1, [pair.start + (range.match-range.start), Math.min(range.end, pair.end)])
        }
    })
        

    return lowest;
}

//solution();