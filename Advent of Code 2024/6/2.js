import fs from "fs";

const rawFile = fs.readFileSync('./6/input.txt',{encoding:'utf8'}).trim().replaceAll("\r", "");

let loops = 0;
let start = ""
let obstructions = []

export function solution() {
    let board = rawFile.split("\n").map(n=> n.split(""));
    let guardPosition = [-1, -1];
    for (let l = 0; l < board.length; l++) {
        if (board[l].indexOf("^") > 0) guardPosition = [l, board[l].indexOf("^")]
    }
    start = String(guardPosition)

    let direction = [1, 0]
    let visitedLocations = [(String(guardPosition) + String(direction))]


    while (true) {
        let l = guardPosition[0]
        let x = guardPosition[1]
        
        if (l-direction[0] < 0 || l-direction[0] > board.length-1 || x+direction[1] > board[l].length-1 || x+direction[1] < 0) {
            break
        }

        if (board[l-direction[0]][x+direction[1]] == "#"){
            direction = directionChange(direction)
        }
        guardPosition = [l-direction[0], x+direction[1]]

        if (!visitedLocations.includes(String(guardPosition) + String(direction))) {
            visitedLocations.push(String(guardPosition) + String(direction))
        }
        check(visitedLocations, guardPosition, direction, board)
    }
    return loops
}

function check(visitedLocations, guardPosition, direction, board) {
    if ((board[guardPosition[0]-direction[0]] && board[guardPosition[0]-direction[0]][guardPosition[1]+direction[1]] && board[guardPosition[0]-direction[0]][guardPosition[1]+direction[1]] == "#")) return
    //if ((board[guardPosition[0]-direction[0]] && board[guardPosition[0]-direction[0]][guardPosition[1]+direction[1]] && String([guardPosition[0]-direction[0],guardPosition[1]+direction[1]]) == start)) return
    let rightDirection = directionChange(direction)
    if (!(board[guardPosition[0]-rightDirection[0]] && board[guardPosition[0]-rightDirection[0]][guardPosition[1]+rightDirection[1]])) return

    let position = [guardPosition[0]-rightDirection[0],guardPosition[1]+rightDirection[1]]
    
    if (visitedLocations.includes(String(position)+String(rightDirection)))
    {
        if (!obstructions.includes(String([guardPosition[0]-direction[0],guardPosition[1]+direction[1]]))) {
            loops++
            obstructions.push(String([guardPosition[0]-direction[0],guardPosition[1]+direction[1]]))
        }
        return
    }
    let check = checkRow(position, rightDirection, board, visitedLocations, String([guardPosition[0]-direction[0],guardPosition[1]+direction[1]]))
}

function checkRow(position, direction, board, visitedLocations, originalPosition) {
    position = [position[0]-(direction[0]), position[1]+(direction[1])]
    while (position[0] > 0 && position[1] > 0 && position[0] < board.length && position[1] < board[position[0]].length) {
        if (visitedLocations.includes(String(position)+String(direction)))
        {
            if (!obstructions.includes(originalPosition)) {
                loops++
                obstructions.push(originalPosition)
            }
            return true
        }
        if (board[position[0]-direction[0]] && board[position[0]-direction[0]][position[1]+direction[1]] && board[position[0]-direction[0]][position[1]+direction[1]] == "#") {
            return checkRow(position, directionChange(direction), board, visitedLocations, originalPosition)
        }
        position = [position[0]-direction[0], position[1]+direction[1]]
    }
    return false
}

function directionChange(direction) {
    if (direction[0] == 1 && direction[1] == 0) {
        return direction = [0, 1]
    }
    else if (direction[0] == -1 && direction[1] == 0) {
        return direction = [0, -1]
    }
    else if (direction[0] == 0 && direction[1] == 1) {
        return direction = [-1, 0]
    }
    else if (direction[0] == 0 && direction[1] == -1) {
        return direction = [1, 0]
    }
}

// If at any point 90 degrees right is a block I've travelled in the same direction. Just place an obstacle before me