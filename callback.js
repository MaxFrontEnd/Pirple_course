// Callback

function squareNum(num, cb) {
  console.log("square of num is " + num * num);
  setTimeout(() => {
    cb(num);
  }, num);
}

function squareRootNum(num, cb) {
  console.log("square root of num is " + Math.sqrt(num));
  cb(num);
}

function ifPrime(num) {
  if (num < 1) {
    console.log("enter please positive num > 0");
  }
  if (num === 1 || num === 2) {
    return true;
  }
  for (let i = num - 1; i > 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function firstPrime(num, cb) {
  do {
    num = num - 1;
  } while (ifPrime(num) !== true);

  console.log("first less then number prime is " + num);
  cb();
}

function firstPrimePromise(num) {
  do {
    num = num - 1;
  } while (ifPrime(num) !== true);

  console.log("first less then number prime is " + num);
}
function totalTime(startTime) {
  let endTime = new Date();

  let dif = endTime - startTime;
  console.log("total milliseconds from start " + dif);
}

function numWithnum(num, squareNum, squareRootNum, firstPrime, totalTime) {
  let startTime = new Date();
  squareNum(num, function(num) {
    squareRootNum(num, function(num) {
      firstPrime(num, function() {
        totalTime(startTime);
      });
    });
  });
}

numWithnum(1000, squareNum, squareRootNum, firstPrime, totalTime);

/// PROMISE

function calculations(num) {
  let startTime = new Date();
  console.log(`pomise square of num is ` + num * num);
  return new Promise(res => {
    setTimeout(() => {
      res([num, startTime]);
    }, num);
  });
}

calculations(1000)
  .then(arr => {
    return new Promise(res => {
      console.log(`pomise square root of num is ` + Math.sqrt(arr[0]));
      res(arr);
    });
  })
  .then(arr => {
    return new Promise(res => {
      firstPrimePromise(arr[0]);
      res(arr);
    });
  })
  .then(arr => {
    let endTime = new Date();
    let dif = endTime - arr[1];
    console.log("total milliseconds from start " + dif);
  });
