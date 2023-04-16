'use strict';

const users = [
    { firstName: 'Random', data: [-210, 340, 310, 323, -354] },
    { firstName: 'Someone', data: [10, -40, 110, 33, 35] },
    { firstName: 'Piyush', data: [317, -740, 810, -323, 301] },
    { firstName: 'Kunal', data: [214, -647, -349, 123, 514] }
];

// const sum = users.map(user => user.data).flat().reduce((acc, curr) => acc + curr, 0);
/* const sum = users.map(function(user) {
    return user.data;
}).flat().reduce((acc, curr) => acc + curr, 0); */

const sum = users.flatMap(user => user.data).reduce((acc, curr) => acc + curr, 0);;

console.log(sum);