const user = prompt("Enter your name");
const age = prompt("Enter your age");
const futureyear = prompt("Enter your future year");
const currentyear = prompt("Enter your current year");
const birthyear = currentyear - age;
const futureage = (futureyear - currentyear) + Number(age); 

alert(`${user}, your age in ${futureyear} will be ${futureage} and your birth year is ${birthyear}`)

if(birthyear > 1997){
    console.log(true);
}
else{
    console.log(false);
}