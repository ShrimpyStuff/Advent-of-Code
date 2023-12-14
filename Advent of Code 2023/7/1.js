import fs from "fs";

const rawFile = fs.readFileSync('./7/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    const file = rawFile.split(/\r?\n/).map(x => parse(x))
    const order = '23456789TJQKA';
    file.sort(compare)
    const bids = file.map((card, i) => card.bid*(i+1))
    return bids.reduce((a,b) => {return a+b}, 0);

    function compare(a, b) {
        if (a.counts !== b.counts) return a.counts - b.counts

        for (let c = 0; c < a.cards.length; c++) {
			const letterA = order.indexOf(a.cards[c]);
			const letterB = order.indexOf(b.cards[c]);

			if (letterA !== letterB) return letterA - letterB;
		}

		return 0;
    }
    
    function parse(hand) {
        let chars = {};
        let [cards, bid] = hand.split(" ");
        bid = Number(bid)
        for (let i = 0; i < cards.length; i++) {
            chars[cards[i]] = (chars[cards[i]] ?? 0) + 1
        }
        
        let values = Object.values(chars)
        let counts = 0;
        switch (values.length) {
            case 1:
                counts = 6;
                break
            case 2:
                if (values.includes(4)) {
                    counts = 5;
                } else {
                    counts = 4;
                }
                break
            case 3:
                if (values.includes(3)) {
                    counts = 3;
                } else {
                    counts = 2;
                }
                break
            case 4:
                counts = 1;
                break
            default:
                counts = 0;
        }

        return {cards, counts, bid}
    }
}