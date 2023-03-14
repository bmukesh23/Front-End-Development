const x = Number(prompt("Enter the first number"));
const y = Number(prompt("Enter the second number"));


if(x > 0 && y > 0){
    console.log("Both are postive");
}else if(x < 0 && y < 0){
    console.log("both are negative");
}else{
    console.log("one of them is negative");
}

x > y ? console.log('greater than y') : console.log('is not greater than y');