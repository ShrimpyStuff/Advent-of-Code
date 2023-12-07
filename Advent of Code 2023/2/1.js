import fs from "fs";

const rawFile = fs.readFileSync('./2/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split("\n");
    let idSum = 0;
    let blocks = [12, 13, 14];
    let colours = ["red", "green", "blue"];

    file.forEach(line => {
        let valid = true;
        let id = parseInt(line.split(":")[0].match(/\d+/));
        let bags = line.split(":")[1].split(";").map(x => x.split(",").map(x=>x.trim()));

        bags.forEach(hands => {
            hands.forEach(hand => {
                hand = hand.split(" ");
                let max = blocks[colours.indexOf(hand[1])];
                if (parseInt(hand[0]) > max) {valid = false};
            })
        })

        if (valid) {
            idSum += id;
        }
    })

    return idSum;
}

solution();