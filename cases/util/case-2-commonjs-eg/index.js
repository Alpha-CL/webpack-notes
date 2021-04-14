const Poker = require('./poker.js');

let pokers = [];

for (let i = 1; i <= 13; i++) {

    for (let j = 1; j <= 4; j++) {

        pokers.push((new Poker(j, i).finalPoker));
    }
}

pokers.push('joker', 'JOKER');

const util = require('./util.js');

const res = util.sortRandom(pokers);

const p1 = res.slice(1, 17).toString() + '|',
    p2 = res.slice(18, 34).toString() + '|',
    p3 = res.slice(34, 51).toString() + '|',
    p4 = res.slice(51).toString();

console.log(p1, p2, p3, p4);






