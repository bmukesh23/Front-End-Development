function num1(num){
    // if(num % 2 === 0){
    //     return "even";
    // }
    // else{
    //     return "odd";
    // }
    return num % 2 === 0 ? "even" : "odd";
}
console.log(num1(10));

const OddEven = function (num){
    if(num % 2 === 0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(OddEven(9));

const OddEven2 = (num) => {
    if(num % 2 === 0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(OddEven2(11));