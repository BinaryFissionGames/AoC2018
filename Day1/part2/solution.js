const fs = require("fs");

let input = fs.readFileSync("input.txt", {encoding: 'utf8'});
let nums = input.split('\n')
            .map( x => Number.parseInt(x[0] == '+' ? x.substring(1) : x, 10))
            .filter(x => x != NaN)
            .slice(0, -1);

let curFrequency = 0;
let prevFrequencies = {0: 1}
while(true){
    for(let num of nums){
        curFrequency += num;
        if(prevFrequencies[curFrequency] === undefined){
            prevFrequencies[curFrequency] = 1;
        }else{
            prevFrequencies[curFrequency] = 2;
            break;
        }
    }
    if(prevFrequencies[curFrequency] === 2) break;
}
console.log(curFrequency);
