'use strict';

const arr = [2341232, '123212332', 23, '   12332   ', 234123212332324]

const masked = carr => {

    for(let n of carr.entries()){
        const index = n[0];
        let indexArr = n[1];

        indexArr = String(indexArr).trim();
        let k = indexArr.slice(-4);

        const a = k.padStart(indexArr.length, '*').padEnd(20, ' ');
        const locks = k.length >= 4 ? '🔒'.repeat(index + 1): '';

        console.log(a, locks);
    }
};

masked(arr);