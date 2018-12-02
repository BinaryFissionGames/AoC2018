const fs = require("fs");

let input = fs.readFileSync("input.txt", {encoding: 'utf8'});

let ids = input.trim().split('\n');
let dists = [];

/*
    This function gets the "distance" (number of different characters)
    between two strings.
    This assumes a and b are of the same length.
*/
function getDistance(a, b){
    let dist = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] != b[i]){
            dist++;
        } 
    }
    return dist;
}

for(let i = 0; i < ids.length; i++){
    for(let j = i + 1; j < ids.length; j++){
        /*
        Compare every id to every id after it,
        looking for a distance of 1 between them.
        */
        if(getDistance(ids[i], ids[j]) == 1){
            console.log("Found close ids: ", ids[i], ids[j]);
            /*build up a final string, concatting all the characters 
            that are the same between the two strings */
            let finalString = "";
            for(let k = 0; k < ids[i].length; k++){
                if(ids[i][k] == ids[j][k]){
                    finalString = finalString.concat(ids[i][k]);
                }
            }
            /*Print our final string */
            console.log("Final string: ", finalString);
            /*We can exit, since we have found the strings*/
            process.exit(0);
        }
    }
}
