'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    var s = s;
    try{        
        var sp = s.split("");      //to split the string and store in an array form
        var rev = sp.reverse();    //to reverse the array
        var join = rev.join("");   //to join the items of array back into a string 
        console.log(join);
    }catch(err){
        console.log(err.message);
        console.log(s);
    }   
    
}

function main() {
    const s = eval(readLine());
    
    reverseString(s);
}
