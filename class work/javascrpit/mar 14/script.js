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

masked(arr);