'use strict';

const str = "Random sentence with multiple words";

const makeOneWord = str1 => {
    console.log(str1.replaceAll(' ', ''));
}
makeOneWord(str);

const makeFirstWordUpperCase = str2 => {
    let string = str2.split(' ');
    string = string[0].toUpperCase() + string.slice(1);
    console.log(string);
}

makeFirstWordUpperCase(str);