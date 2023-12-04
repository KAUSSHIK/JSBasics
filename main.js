console.log("hello world");
// Variables and Other Fun Stuff
var a = 1;
console.log(a); //Output: 1
//Using let
let b = 1;
b = 2;
console.log(b); //Output: 2

/**
 * If you try doing the same with const -> It will throw an error as once a const is delcared you can not change anything about it
 * Error Raised: TypeError: Assignment to constant variable.
 */
// const x = 5;
// x = 3;
// console.log(x);

let firstName = "Kausshik";
let age = "18";
let isSingle = true;
//Using terneary operator and string concatenation
console.log("This person's name is " + firstName + ", their age is " + age + ", and they are " + (isSingle ? "single" :"taken") + ".")

//CONDITIONALS
if(isSingle){
    console.log("This person is single");
} else {
    console.log("This person is taken");
}
console.log("This is outside the if statement, This statement will always be executed, just like how Kausshik will always be single :(");

//LOOPS
let i = 0;
let answer = 0;
for(i = 0; i <= 100; i++){
    answer += i;
}
console.log(answer);
