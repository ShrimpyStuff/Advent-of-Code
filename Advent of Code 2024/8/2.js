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
                
                let highCount = 0;
                let high = [locations[n][0]-(distance[0] * highCount), locations[n][1]-(distance[1]*highCount)]
                while (file[high[0]] && file[high[0]][high[1]]) {
                    if (!antinodes.includes(String(high))) {
                        antinodes.push(String(high))
                    }
                    highCount++
                    high = [locations[n][0]-(distance[0] * highCount), locations[n][1]-(distance[1]*highCount)]
                }

                let lowCount = 0;
                let low = [locations[n][0]+(distance[0] * lowCount), locations[n][1]+(distance[1]*lowCount)]

                while (file[low[0]] && file[low[0]][low[1]]) {
                    if (!antinodes.includes(String(low))) {
                        antinodes.push(String(low))
                    }
                    lowCount++
                    low = [locations[n][0]+(distance[0] * lowCount), locations[n][1]+(distance[1]*lowCount)]
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