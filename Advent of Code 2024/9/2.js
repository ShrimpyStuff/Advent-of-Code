import fs from "fs";

const rawFile = fs.readFileSync('./9/input.txt',{encoding:'utf8'}).trim().replaceAll("\r", "");

export function solution() {
    let list = []
    let id = 0;
    let checksum = 0;
    for (let i = 0; i < rawFile.length; i++) {
        if (i % 2 == 0) {
            let cache = []
            for (let j = 0; j < Number(rawFile[i]); j++) {
                cache.push(id)
            }
            list.push(cache)
            id++
        } else {
            if (Number(rawFile[i]) != 0){
                list.push(".".repeat(Number(rawFile[i])))
            }
        }
    }

    for (let n = list.length-1; n > 0; n--) {
        if (typeof(list[n]) == "object") {
            for (let m = 0; m < n; m++) {
                if (typeof(list[m]) == "string" && list[m].length >= list[n].length) {
                    if (list[m].length - list[n].length > 0) {
                        list.splice(m, 1, list[n], ".".repeat(list[m].length - list[n].length))
                        list.splice(n+1, 1, ".".repeat(list[m].length))
                    }
                    else {
                        list.splice(m, 1, list[n])
                        list.splice(n, 1, ".".repeat(list[m].length))
                    }
                    n++
                    break
                }
            }
        }
    }

    list = list.map(n=>{
        if (typeof(n) == "string") {return n.split("")} else return n
    }).flat()

    for (let index = 0; index < list.length; index++) {
        if (typeof(list[index]) == "string") {continue}
        checksum += index * Number(list[index])
    }
    return checksum
}