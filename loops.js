//Check if prime
function IfPrime(num) {
  if (num < 1) {
    console.log("enter please positive num > 0");
  }
  if (num === 1 && num === 2) {
    return true;
  }
  for (let i = num - 1; i > 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Console log results
for (let i = 1; i <= 100; i++) {
  if (IfPrime(i)) {
    console.log("pirme");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

// console.log(IfPrime(3));
// console.log(IfPrime(10));
// console.log(IfPrime(13));
// console.log(IfPrime(27));
// console.log(IfPrime(7));
// console.log(IfPrime(17));
