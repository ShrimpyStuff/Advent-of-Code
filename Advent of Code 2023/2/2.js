import fs from "fs";

const rawFile = fs.readFileSync('./2/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let file = rawFile.split("\n");
    let sum = 0;

    file.forEach(line => {
        let bags = line.split(":")[1].split(";").map(x => x.split(",").map(x=>x.trim()));
        let colours = {"red":0, "green":0, "blue":0}
        let power = 1;

        bags.forEach(hands => {
            hands.forEach(hand => {
                hand = hand.split(" ");
                if (parseInt(hand[0]) > colours[hand[1]]) {colours[hand[1]] = parseInt(hand[0])};
            })
        })
        power = Object.values(colours).reduce((a,b) => a*b, 1);
        sum += power;
    })

    return sum;
}

solution();