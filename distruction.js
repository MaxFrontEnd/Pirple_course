/*
When distructing an array we must pai attension to indexes. We can 
explicit what indexes we need to distruct from array. Also we can skip 
some of the indexes
*/

let exempleArray = ["first", "second", "five", "morning", "evning"];

let [doFirst, doSecond, , exercise, book] = exempleArray;

console.log(doFirst, doSecond, exercise, book);

/* 
    When distructing an object we can operate with name:value object notation.
    We can choose what value need to be extructed from object
*/

let myObj = {
  first: "doFirst",
  second: "doSecond",
  five: "doNothing",
  morning: "doExecrcise",
  evning: "readAbook"
};

let { first, second, morning, evning } = myObj;

console.log(first, second, morning, evning);

/*
 we can distruct nested objects. And we can use alliases. For exemple
*/

let myNestObj = {
  car: "sedan",
  description: {
    color: "red",
    size: "M",
    remains: true
  },

  price: 20000
};

let {
  description: { color: c }
} = myNestObj;

console.log(c);
