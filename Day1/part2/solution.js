const fs = require("fs");

let input = fs.readFileSync("input.txt", {encoding: 'utf8'});
//Same as part one, except we don't sum the array
let nums = input.split('\n')
            .map( x => Number.parseInt(x[0] == '+' ? x.substring(1) : x, 10))
            .filter(x => !isNaN(x));

let curFrequency = 0;
// Map from a frequency to the number of times it's been hit already.
//An undefined entry implicitly mean it has been hit 0 times.
let prevFrequencies = {0: 1}  

//While we haven't hit the current frequency at least twice...
while(prevFrequencies[curFrequency] < 2){
    //Iterate of every number in our frequency loop
    for(let num of nums){
        curFrequency += num;
        if(prevFrequencies[curFrequency] === undefined){
            //Frequency hasn't been hit before
            prevFrequencies[curFrequency] = 1;
        }else{
            //Frequency has been hit before
            prevFrequencies[curFrequency] += 1;
            //Break if we have seen this frequency 2 or more times
            if(prevFrequencies[curFrequency] >= 2) break;
        }
    }
}
console.log(curFrequency);
