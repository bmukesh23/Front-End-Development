'use strict';

const str = "Random sentence with multiple words";

const makeOneWord = str1 => {
    console.log(str1.replaceAll(' ', ''));
}

makeOneWord(str);


const makeFirstWordUpperCase = str2 => {
    const array = str2.split(' ');
    for (let i = 1; i < 5; i++) {
        console.log(array[0].toUpperCase(), ...array);
    }
}

makeFirstWordUpperCase(str);