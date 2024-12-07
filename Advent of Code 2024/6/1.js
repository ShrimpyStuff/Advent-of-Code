import fs from "fs";

const rawFile = fs.readFileSync('./6/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    let board = rawFile.split("\n").map(n=> n.split(""));
    let guardPosition = [-1, -1];
    for (let l = 0; l < board.length; l++) {
        if (board[l].indexOf("^") > 0) guardPosition = [l, board[l].indexOf("^")]
    }

    let isOnBoard = true
    let direction = [1, 0]
    let locations = 0
    let visitedLocations = [JSON.stringify(guardPosition)]

    while (isOnBoard) {
        let l = guardPosition[0]
        let x = guardPosition[1]
        
        if (l-direction[0] < 0 || l-direction[0] > board.length-1 || x+direction[1] > board[l].length-1 || x+direction[1] < 0) {
            isOnBoard = false
            break
        }

        if (board[l-direction[0]][x+direction[1]] == "#"){
            if (direction[0] == 1 && direction[1] == 0) {
                direction = [0, 1]
            }
            else if (direction[0] == -1 && direction[1] == 0) {
                direction = [0, -1]
            }
            else if (direction[0] == 0 && direction[1] == 1) {
                direction = [-1, 0]
            }
            else if (direction[0] == 0 && direction[1] == -1) direction = [1, 0]
        }
        guardPosition = [l-direction[0], x+direction[1]]
        if (!visitedLocations.includes(JSON.stringify(guardPosition))) {visitedLocations.push(JSON.stringify(guardPosition))}
    }
    return visitedLocations.length
}