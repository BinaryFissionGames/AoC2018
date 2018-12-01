const fs = require("fs");

let input = fs.readFileSync("input.txt", {encoding: 'utf8'});

let result = input.split('\n') // Create an a array where each element is a line
            .map( x => Number.parseInt(x[0] == '+' ? x.substring(1) : x, 10)) //Map each string to its corresponding integer
            .filter(x => !isNaN(x)) //Filter off NaN entries (probably from trailing space at the end of the file)
            .reduce((acc, x) => acc + x, 0); // Get the sum of all numbers

console.log(result);
