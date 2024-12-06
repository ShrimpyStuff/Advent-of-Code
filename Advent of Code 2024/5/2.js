import fs from "fs";

const rawFile = fs.readFileSync('./5/input.txt',{encoding:'utf8'}).replaceAll("\r", "").trim();

export function solution() {
    let sum = 0;

    let rules = rawFile.split("\n\n")[0].split("\n").map(n => n.split("|"))
    let books = rawFile.split("\n\n")[1].split("\n").map(n => n.split(","))
    for (let book of books) {
        let check = false;
        let ruleCheck = false
        while (!ruleCheck) {
            ruleCheck = true
            for (let rule of rules) {
                if (book.indexOf(rule[0]) == -1 || book.indexOf(rule[1]) == -1) continue
                if (book.indexOf(rule[0]) < book.indexOf(rule[1])) continue
                ruleCheck = false
                book.splice(book.indexOf(rule[1]), 1)
                book.splice(book.indexOf(rule[0])+1, 0, rule[1])
                check = true
            }
        }
        if (check) {
            sum += Number(book[(book.length-1)/2])
        }
    }
    return sum
}