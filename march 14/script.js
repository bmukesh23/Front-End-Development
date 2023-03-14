'use strict';

const arr = [2341232, '123212332', 23, '   12332   ', 234123212332324]

const masked = arr => {

    for(let n of arr){
        const srr = String(n).trim();
        let k = srr.slice(-4);
        const a = k.padStart(srr.length,'*');
        // console.log(a);
    }
}

let n = 5;
let string = "";
for(let i = 1; i <= n; i++){
    for(let j = 0; j < i; j++){
        string += '*';
    }
    string += "\n";
}
console.log(string);

masked(arr);