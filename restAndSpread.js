// Rest
// If count of arguments in function is uncnown, with ...rest sintax its posible to transfer rest of argument with operator ...
// ...rest arguments are placed in array
// Must be transfered as last argument

function sum(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

// Spread
// In oposition of ...rest is ...spread operator
// Mast by iterable
// Transfered in function call - will get all elements from iterable
// For exemple we can call max function with spread

let arr = [3, 5, 1];

alert(Math.max(...arr)); // 5

//Or concat 2 arrays

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [...arr, ...arr2];
