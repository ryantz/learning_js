// declaration of variables
// const values cannot be changed. cannot be reassigned
// const if pointing to an array, values of array can change
// has to be initialized when declared
const a = 0
//a = 1 will yield a type error

// let values can freely change
// let can be initialized later
let b = 3
let c 
c = 3

// multiple declaration
const d = 1, e = 3 //...
let f = 4, g = 10

// primitive types:
// boolean, numbers, strings, symbols, null, undefined
// checking type:

const num = 2;
const string = 'hello';
const bool = false;
const nil = undefined; 

console.log(typeof num, typeof string, typeof bool, typeof nil)

// other values that are not primitive types are object
// objects have properties and methods that act on those properties

// mathematic operations

division = 4 / 2 
increment = division++ 
i = 0
decrement = i-- 
i -= 1
multiplication = division * i

// +
const number = 1 + 2
const number2 = number + 1
//console.log(number2)
// adding strings 
console.log('three'+ ' ok') //three ok

// subtract: - , division = / , remainder: %
// multiplication: *, exponential: **
const result = 20 / 5
const result2 = 20 / 7
const div0 = 1 / 0  // returns Infinity
const nan = 1 % 0 //r eturns NaN
console.log(result, result2 , div0 ,nan) // result 2 returns a decimal 

// disequality operators
// <, >, <=, >=
// important* equality and not equals is ===, !==

// if else statements

if(true){
    a
} else if(false) {
    b
} else{
    c
}

// checking type 