import fs from "fs";

const rawFile = fs.readFileSync('./8/input.txt',{encoding:'utf8'}).trim().replaceAll("\r", "");

export function solution() {
    let file = rawFile.split("\n").map(n=> n.split(""))
    let antinodes = []
    let frequencies = {}
    for (let i = 0; i < file.length; i++) {
        let line = file[i]
        for (let j = 0; j < file[i].length; j++) {
            if (line[j] == ".") continue
            if (frequencies[line[j]]) {
                frequencies[line[j]].push([i,j])
            }
            else {
                frequencies[line[j]] = [[i, j]]
            }
            
        }
    }
    for (let frequency in frequencies) {
        let locations = frequencies[frequency]
        for (let n = 0; n < locations.length-1; n++) {
            for (let m = n+1; m < locations.length; m++) {
                let distance = abDistance(locations[n], locations[m])
                
                let high = [locations[n][0]-distance[0], locations[n][1]-distance[1]]
                let low = [locations[m][0]+distance[0], locations[m][1]+distance[1]]

                if (file[low[0]] && file[low[0]][low[1]] && !antinodes.includes(String(low))) {
                    antinodes.push(String(low))
                }
                if (file[high[0]] && file[high[0]][high[1]] && !antinodes.includes(String(high))) {
                    antinodes.push(String(high))
                }
            }
        }
    }
    return antinodes.length
}

function abDistance(a, b) {
    let xdistance = b[1]-a[1]
    let ydistance = b[0]-a[0]
    return [ydistance, xdistance]
}