const fs = require("fs");

let input = fs.readFileSync("input.txt", {encoding: 'utf8'});
let result = input.split('\n')
            .map( x => Number.parseInt(x[0] == '+' ? x.substring(1) : x, 10))
            .filter(x => x != NaN)
            .slice(0, -1)
            .reduce((acc, x) => acc + x, 0);
console.log(result);
