// Sorry for my English

/*
var - early - before ES-6 - aproach to declare a variable. 
Var is visible in global scope and can be access and rewrite from any place on a code page
For now its prefered to use let and conts insead var, because its global scope may couse errors (accedentaly rewrite)

*/

// example var

for (var i = 0; i < 6; i++) {}

console.log(i); // 5

/*
let - ES-6 - new aproach to declare variables in JS
It can be access just in block scope, where was declared
For each scope its declared its own let variable
Can have same name in each scope
Can be rewrite within scope, where was declared 
Helps to avoid global scope errors
*/

// let example

for (let j = 0; j < 6; j++) {}

console.log(j); // Referense Error

/*

Const - ES-6- new aproach to declare variables in JS
It can be access just in block scope, where was declared
Can't be changed
Helps to avoid rewrite error;
If we know that variable dont have to change in code - best place to use const
Not allow to change variable, but if variable it is an object or array, its possible to change data inside. 
*/

// const example

const oldName = "James";
oldName = "Hames"; // not allowed
