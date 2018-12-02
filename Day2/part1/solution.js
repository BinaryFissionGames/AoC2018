const fs = require("fs");

let input = fs.readFileSync("input.txt", {encoding: 'utf8'});

let ids = input.trim().split('\n');

let num2Letters = 0;
let num3Letters = 0;

for(let id of ids){
    let letterCounts = {}; /*This is a map of letter to number of occurances*/
    /*Build up out letterCount map... */
    for(let letter of id){
        if(letterCounts[letter] == undefined){
            letterCounts[letter] = 1;
        }else{
            letterCounts[letter]++;
        }
    }

    let has3 = false;
    let has2 = false;
    /*
    Loop through every unique letter; Do any of them occur
    two or three times?
    */
    for(let letter of Object.keys(letterCounts)){
        if(letterCounts[letter] === 3){
            has3 = true;
        }
        if(letterCounts[letter] === 2){
            has2 = true;
        }
    }
    /*Increment our counts based on the previous step.*/
    if(has2) num2Letters++;
    if(has3) num3Letters++;
}

console.log(num2Letters*num3Letters);
