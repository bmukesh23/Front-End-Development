// const username = prompt("Hey user, enter your name..");

// const digits = prompt(`${username}, enter the count of digits you wish to have in the passwords:`);

// const media = prompt("Enter 3 media comma seperated");

// const marr = []

// // for(let i = 0; i < 3; i++){
// //     marr[i] = media; 
// // }

// console.log(marr);

// const retrieve = prompt("Enter the media-name you wish to retrieve the password of:")

// console.log("Random, your passwords: ") 

const digits = 4;

function generateRandomNo(x, y) {
    // Math.trunc(Math.random() * (y - x) + 1)
    return  Math.trunc(Math.random() * (y - x) + 1 + x);
}

console.log(generateRandomNo(1000, 9999));