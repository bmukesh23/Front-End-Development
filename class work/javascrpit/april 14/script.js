'use strict';

const users = [
    { firstName: 'Random', age: 26 },
    { firstName: 'Piyush', age: 14 },
    { firstName: 'Kunal', age: 22 },
    { firstName: 'Raju', age: 16 },
];

// Log the firstname of all the users

users.forEach(function(user){
    console.log(user.firstName);
});
