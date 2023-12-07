import fs from "fs";

const rawFile = fs.readFileSync('./1/input.txt',
{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split('\n');
    let sum = 0;
    let wordsList = {
        "one":1,
        "two":2,
        "three":3,
        "four":4,
        "five":5,
        "six":6,
        "seven":7,
        "eight":8,
        "nine":9
    }
    file.forEach(line => {
        let numbers = [];
        for (let i=0; i < line.length; i++) {
            let match = line.substring(i).match(/(?:one|two|three|four|five|six|seven|eight|nine)|\d/)
            if (match) {
                numbers.push(match)
                i += (line.substring(i).indexOf(match))
            }
        }
        let digits = numbers.map((x) => (wordsList[x] || parseInt(x)))
        let code = parseInt("" + digits[0] + digits[digits.length-1])
        sum += code;
    });
    return sum;
}

solution();