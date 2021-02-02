const timeAdder = function(value1, label1, value2, label2) {
  let resultArray = [];
  const arrayOfPossibleLables = [
    "seconds",
    "minutes",
    "hours",
    "days",
    "second",
    "minute",
    "hour",
    "day"
  ];
  const arrayOfsingles = ["day", "hour", "minute", "second"];
  let firstNum;
  let secondNum;
  let firstLabel;
  let secondLabel;
  if (arguments.length != 4) {
    console.log("accept only 4 arguments");
  } else {
    console.log("fine");
  }

  switch (value1) {
    case typeof value1 !== "number":
      console.log("not a number");
      return false;
    case value1 < 0:
      console.log("not a positive number");
      return false;
    default:
      firstNum = value1;
  }
  switch (value2) {
    case typeof value2 !== "number":
      console.log("not a number");
      return false;
    case value2 < 0:
      console.log("not a positive number");
      return false;
    default:
      firstNum = value2;
  }

  switch (label1) {
    case typeof label1 !== "string":
      console.log("not a string");
      return false;
    case !arrayOfPossibleLables.includes[label1]:
      console.log("not a valid string");
      return false;
    default:
      firstLabel = label1;
  }

  switch (label2) {
    case typeof label2 !== "string":
      console.log("not a string");
      return false;
    case !arrayOfPossibleLables.includes[label2]:
      console.log("not a valid string");
    default:
      secondLabel = label2;
  }

  function timeSum() {
    if (arrayOfsingles.includes(label1) && arrayOfsingles.includes(label2)) {
      return (resultArray = [value1 + value2 + label1 + label2]);
    }
  }
};

console.log(timeAdder(1, "minute", 3, "minute"));
