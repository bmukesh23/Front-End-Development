const num1 = Number(prompt("Enter the first number"));
const num2 = Number(prompt("Enter the second number"));
const num3 = Number(prompt("Enter the third number"));

if((num1 > num2 && num2 > num3) || (num2 > num1 && num2 < num3)){
    console.log(num2);
}else if((num3 > num1 && num1 > num2) || (num3 < num1 && num1 < num2)){
    console.log(num1);
}else{
    console.log(num3);
}