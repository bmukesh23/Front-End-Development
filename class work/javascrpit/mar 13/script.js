'user strict'

const str = 'raNdoM somEoNe PiyUSH RAJU SAtiSH';

const toStr = str.toLowerCase();
console.log(toStr);

const split = toStr.split(' ');
console.log(split);

for(let i = 0; i < 5; i++){
    const srr = split[i];
    console.log(srr[0].toUpperCase() + split[i]);
}