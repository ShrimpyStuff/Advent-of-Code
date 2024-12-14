import fs from "fs";

const rawFile = fs.readFileSync('./12/input1.txt',{encoding:'utf8'}).trim().replaceAll("\r", "");


export function solution() {
    class Region {
        area = 0
        perimeter = 0
        blocks = []

        addBlock(block) {
            this.blocks.push(block)
        }
        
        includes(i,j) {
            return this.blocks.includes(String([i,j]))
        }
        
        incrementArea(area) {
            this.area += 1
        }

        set addPerimiter(perimeter) {
            this.perimeter += perimeter
        }
    }
    
    let file = rawFile.split("\n").map(n => n.split(""))
    let prices = {}

    for (let i = 0; i < file.length; i++) {
        for (let j = 0; j < file[i].length; j++) {
            add(i, j)
        }
    }

    function add(i, j) {
        let sides = 0;

        let letter = file[i][j]
        let regionIndex = 0

        let region = letter + regionIndex
        let foundRegion = false

        for (let name in prices) {
            if (name.startsWith(letter)) {
                if (name == region) {
                    if (prices[name].isNearby(i, j)) {
                        region = name
                        foundRegion = true
                        break
                    } else {
                        regionIndex++
                        region = letter + regionIndex
                    }
                }
            }
        }
        
        if (!foundRegion) {
            prices[region] = new Region()
        }

        if (!prices[region].includes(i, j)) prices[region].block = String([i, j])

        if (file[i-1] && file[i-1][j] == letter) {
            if (!prices[region].includes(i-1, j)) prices[region].block = String([i-1, j])
            sides--
        }

        if (file[i+1] && file[i+1][j] == letter) {
            if (!prices[region].includes(i+1, j)) prices[region].block = String([i+1, j])
            sides--
        }

        if (file[i][j-1] == letter) {
            if (!prices[region].includes(i, j-1)) prices[region].block = String([i, j-1])
            sides--
        }

        if (file[i][j+1] == letter) {
            if (!prices[region].includes(i, j+1)) prices[region].block = String([i, j+1])
            sides--
        }

        let down = 1;
        while (true) {
            if (file[i+down] && file[i+down][j] === letter) {
                if (!prices[region].includes(i+down, j)) prices[region].block = String([i+down,j])
                down++
            } else {
                break
            }
        }

        let dr = 1;
        while (true) {
            if (file[i+1] && file[i+1][j+dr] === letter) {
                if (!prices[region].includes(i+1, j+dr)) prices[region].block = String([i+1,j+dr])
                dr++
            } else {
                break
            }
        }

        let dl = 1;
        while (true) {
            if (file[i+1] && file[i+1][j-dl] === letter) {
                if (!prices[region].includes(i+1, j-dl)) prices[region].block = String([i+1,j-dl])
                dl++
            } else {
                break
            }
        }

        prices[region].addPerimiter = sides
        prices[region].incrementArea()
    }

    fs.writeFileSync("output.json", JSON.stringify(prices))
    console.log(prices)
    return Object.values(prices).map(a => a.area * a.perimeter).reduce((a,b) => a+b)
}