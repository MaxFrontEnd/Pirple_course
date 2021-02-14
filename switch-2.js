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
  }

  // validate input
  if (typeof value1 !== "number" || value1 < 0) {
    console.log(value1 + " " + "not a positive num");
    return false;
  } else if (typeof value2 !== "number" || value2 < 0) {
    console.log(value2 + " " + "not a positive num");
    return false;
  } else if (
    typeof label1 !== "string" ||
    !arrayOfPossibleLables.includes(label1)
  ) {
    console.log(label1 + " " + "imposible value");
    return false;
  } else if (
    typeof label2 !== "string" ||
    !arrayOfPossibleLables.includes(label2)
  ) {
    console.log(label2 + " " + "imposible value");
    return false;
  } else if (arrayOfsingles.includes(label1) && value1 !== 1) {
    console.log(
      "This is impossible because " +
        label1 +
        "is singular and" +
        value1 +
        " is plural"
    );
    return false;
  } else if (value1 === 1 && !arrayOfsingles.includes(label1)) {
    console.log(
      "This is impossible because " +
        label1 +
        "is singular and" +
        value1 +
        " is plural"
    );
  } else if (value2 === 1 && !arrayOfsingles.includes(label2)) {
    console.log(
      "This is impossible because " +
        label1 +
        "is singular and" +
        value2 +
        " is plural"
    );
    return false;
  } else if (arrayOfsingles.includes(label2) && value2 !== 1) {
    console.log(
      "This is impossible because " +
        label2 +
        "is singular and" +
        value2 +
        " is plural"
    );
    return false;
  } else {
    firstNum = value1;
    secondNum = value2;
    firstLabel = label1;
    secondLabel = label2;
  }

  let rounder;

  // if singular both num and equal lables
  if (firstLabel === secondLabel && arrayOfsingles.includes(firstLabel)) {
    resultArray[0] = firstNum + secondNum;
    resultArray[1] = firstLabel;
  } else if (
    // first and second is singular and not equal
    firstLabel !== secondLabel &&
    arrayOfsingles.includes(firstLabel) &&
    arrayOfsingles.includes(secondLabel)
  ) {
    switch (firstLabel) {
      case "second":
        resultArray[0] = secondNum;
        resultArray[1] = secondLabel;
        break;
      case "minute":
        if (secondLabel === "second") {
          resultArray[0] = firstNum;
          resultArray[1] = firstLabel;
          break;
        } else {
          resultArray[0] = secondNum;
          resultArray[1] = secondLabel;
          break;
        }
      case "hour":
        if (secondLabel === "day") {
          resultArray[0] = secondNum;
          resultArray[1] = secondLabel;
          break;
        } else {
          resultArray[0] = firstNum;
          resultArray[1] = firstLabel;
          break;
        }
      case "day":
        resultArray[0] = firstNum;
        resultArray[1] = firstLabel;
    }
  } else if (
    // first singular and second label plural
    arrayOfsingles.includes(firstLabel) &&
    !arrayOfsingles.includes(secondLabel)
  ) {
    // if first label is "second"
    if (firstLabel === "second") {
      resultArray[1] = secondLabel;
      switch (secondLabel) {
        case "seconds":
          resultArray[0] = secondNum + firstNum;
          break;
        default:
          resultArray[0] = secondNum;
          break;
      }
    }
    // if first label is "minute"
    if (firstLabel === "minute" && secondLabel === "minutes") {
      rounder = firstNum + secondNum;

      // from developer.mozilla
      switch (true) {
        case rounder === 60:
          resultArray[1] = "hour";
          resultArray[0] = 1;
          break;
        case rounder > 60 && rounder < 120:
          resultArray[0] = Math.floor(rounder / 60);
          resultArray[1] = "hour";
          break;
        case rounder >= 120:
          resultArray[0] = Math.floor(rounder / 60);
          resultArray[1] = "hours";
          break;
        case rounder < 60:
          console.log("less then 60");
          resultArray[1] = "minutes";
          resultArray[0] = rounder;
          break;
      }
    } else if (firstLabel === "minute" && secondLabel === "seconds") {
      if (secondNum >= 60) {
        Math.round(secondNum / 60);
        resultArray[0] = firstNum;
        resultArray[1] = "minutes";
      } else {
        resultArray[0] = firstNum;
        resultArray[1] = firstLabel;
      }
    } else if (firstLabel === "minute" && secondLabel === "hours") {
      if (secondNum >= 24 && secondNum < 48) {
        resultArray[0] = Math.floor(secondNum / 24);
        resultArray[1] = "day";
      } else if (secondNum >= 48) {
        resultArray[0] = Math.floor(secondNum / 24);
        resultArray[1] = "days";
      } else {
        resultArray[0] = secondNum;
        resultArray[1] = secondLabel;
      }
    } else if (firstLabel === "minute" && secondLabel === "days") {
      resultArray[0] = secondNum;
      resultArray[1] = secondLabel;
    }

    if (firstLabel === "hour" && secondLabel === "minutes") {
      if (secondNum >= 60) {
        resultArray[0] = Math.round(secondNum / 60 + firstNum);
        resultArray[1] = "hours";
      } else {
        resultArray[0] = firstNum;
        resultArray[1] = firstLabel;
      }
    } else if (firstLabel === "hour" && secondLabel === "hours") {
      rounder = firstNum + secondNum;
      switch (true) {
        case rounder === 24:
          resultArray[1] = "day";
          resultArray[0] = 1;
          break;
        case rounder > 24 && rounder < 48:
          resultArray[0] = Math.floor(rounder / 24);
          resultArray[1] = "day";
          break;
        case rounder >= 48:
          resultArray[0] = Math.floor(rounder / 24);
          resultArray[1] = "days";
          break;
        case rounder < 24:
          resultArray[1] = "hours";
          resultArray[0] = rounder;
          break;
      }
    } else if (firstLabel === "hour" && secondLabel === "days") {
      resultArray[1] = secondLabel;
      resultArray[0] = secondNum;
    } else if (firstLabel === "day" && secondLabel === "days") {
      resultArray[0] = firstNum + secondNum;
      resultArray[1] = secondLabel;
    } else if (firstLabel === "day" && secondLabel === "hours") {
      if (secondNum >= 24) {
        firstNum = Math.round(secondNum / 24);
        resultArray[0] = firstNum;
        resultArray[1] = "days";
      } else {
        resultArray[0] = firstNum;
        resultArray[1] = firstLabel;
      }
    }
  } else if (
    !arrayOfsingles.includes(firstLabel) &&
    arrayOfsingles.includes(secondLabel)
  ) {
    // second label singular and first plural
    if (secondLabel === "second") {
      resultArray[1] = firstLabel;
      switch (firstLabel) {
        case "seconds":
          resultArray[0] = secondNum + firstNum;
          break;
        default:
          resultArray[0] = secondNum;
          break;
      }
    }

    if (firstLabel === "minutes" && secondLabel === "minute") {
      rounder = firstNum + secondNum;

      // from developer.mozilla
      switch (true) {
        case rounder === 60:
          resultArray[1] = "hour";
          resultArray[0] = 1;
          break;
        case rounder > 60 && rounder < 120:
          resultArray[0] = Math.floor(rounder / 60);
          resultArray[1] = "hour";
          break;
        case rounder >= 120:
          resultArray[0] = Math.floor(rounder / 60);
          resultArray[1] = "hours";
          break;
        case rounder < 60:
          console.log("less then 60");
          resultArray[1] = "minutes";
          resultArray[0] = rounder;
          break;
      }
    } else if (firstLabel === "minutes" && secondLabel === "second") {
      if (firstNum >= 60) {
        Math.round(firstdNum / 60);
        resultArray[0] = Math.round(firstdNum / 60);
        resultArray[1] = "minutes";
      } else {
        resultArray[0] = firstNum;
        resultArray[1] = firstLabel;
      }
    } else if (firstLabel === "minutes" && secondLabel === "hour") {
      if (firstNum >= 60) {
        resultArray[0] = Math.round(firstNum / 60);
        resultArray[1] = "hours";
      } else {
        resultArray[0] = secondNum;
        resultArray[1] = secondLabel;
      }
    } else if (firstLabel === "minutes" && secondLabel === "day") {
      resultArray[0] = secondNum;
      resultArray[1] = secondLabel;
    }
    ///hour
    if (firstLabel === "hours" && secondLabel === "minute") {
      if (firstNum >= 60) {
        resultArray[0] = Math.round(firstNum / 60);
        resultArray[1] = "hours";
      } else {
        resultArray[0] = firstNum;
        resultArray[1] = firstLabel;
      }
    } else if (firstLabel === "hours" && secondLabel === "hour") {
      rounder = firstNum + secondNum;
      switch (true) {
        case rounder === 24:
          resultArray[1] = "day";
          resultArray[0] = 1;
          break;
        case rounder > 24 && rounder < 48:
          resultArray[0] = Math.floor(rounder / 24);
          resultArray[1] = "day";
          break;
        case rounder >= 48:
          resultArray[0] = Math.floor(rounder / 24);
          resultArray[1] = "days";
          break;
        case rounder < 24:
          resultArray[1] = "hours";
          resultArray[0] = rounder;
          break;
      }
    } else if (firstLabel === "hours" && secondLabel === "day") {
      if (firstNum >= 24) {
        firstNum = Math.round(firstNum / 24);
        resultArray[0] = firstNum;
        resultArray[1] = "days";
      } else {
        resultArray[0] = firstNum;
        resultArray[1] = firstLabel;
      }
    } else if (firstLabel === "days" && secondLabel === "day") {
      resultArray[0] = firstNum + secondNum;
      resultArray[1] = firstLabel;
    }
  } else if (
    !arrayOfsingles.includes(label1) &&
    !arrayOfsingles.includes(label2)
  ) {
    //both plural
    if (firstLabel === secondLabel) {
      switch (firstLabel) {
        case "seconds":
          rounder = secondNum + firstNum;
          if (rounder >= 60) {
            resultArray[0] = Math.floor(rounder / 60);
            resultArray[1] = "minutes";
          } else {
            resultArray[0] = secondNum + firstNum;
            resultArray[1] = "seconds";
          }
          break;
        case "minutes":
          rounder = secondNum + firstNum;
          if (rounder >= 60) {
            resultArray[0] = Math.floor(rounder / 60);
            resultArray[1] = "hours";
          } else {
            resultArray[0] = secondNum + firstNum;
            resultArray[1] = "minutes";
          }
          break;
        case "hours":
          rounder = secondNum + firstNum;
          if (rounder >= 24) {
            resultArray[0] = Math.floor(rounder / 24);
            resultArray[1] = "days";
          } else {
            resultArray[0] = secondNum + firstNum;
            resultArray[1] = "hours";
          }
          break;
        case "days":
          resultArray[0] = secondNum + firstNum;
          resultArray[1] = firstLabel;
      }
    } else if (firstLabel === "seconds") {
      resultArray[1] = secondLabel;
      resultArray[0] = secondNum;
    } else if (firstLabel === "minutes") {
      switch (secondLabel) {
        case "seconds":
          resultArray[1] = firstLabel;
          resultArray[0] = firstNum;
          break;
        default:
          resultArray[1] = secondLabel;
          resultArray[0] = secondNum;
          break;
      }
    } else if (firstLabel === "hours") {
      switch (secondLabel) {
        case "seconds":
        case "minutes":
          resultArray[1] = firstLabel;
          resultArray[0] = firstNum;
          break;
        default:
          resultArray[1] = secondLabel;
          resultArray[0] = secondNum;
          break;
      }
    } else if (firstLabel === "days") {
      resultArray[1] = firstLabel;
      resultArray[0] = firstNum;
    }
  }
  return resultArray;
};

//console.log(timeAdder(1, "minute", 4, "minute"));
// console.log(timeAdder(1, "second", 2, "seconds"));
// console.log(timeAdder(1, "second", 4, "minutes"));
// console.log(timeAdder(1, "minute", 4, "minutes"));
// console.log(timeAdder(1, "minute", 59, "minutes"));
// console.log(timeAdder(1, "minute", 60, "minutes"));
// console.log(timeAdder(1, "minute", 99, "minutes"));
// console.log(timeAdder(1, "minute", 119, "minutes"));
// console.log(timeAdder(1, "minute", 1000, "minutes"));
// console.log(timeAdder(1, "second", 1, "minute"));
// console.log(timeAdder(1, "minute", 1, "second"));
// console.log(timeAdder(1, "hour", 1, "second"));
// console.log(timeAdder(1, "day", 1, "hour"));
// console.log(timeAdder(1, "minute", 1, "second"));
// console.log(timeAdder(1, "hour", 1, "day"));
// console.log(timeAdder(1, "minute", 15, "seconds"));
// console.log(timeAdder(1, "minute", 65, "seconds"));
// console.log(timeAdder(1, "minute", 1, "days"));
// console.log(timeAdder(1, "minute", 2, "hours"));
// console.log(timeAdder(1, "minute", 24, "hours"));
// console.log(timeAdder(1, "minute", 480, "hours"));
//console.log(timeAdder(1, "hour", 120, "minutes"));
// console.log(timeAdder(1, "hour", 2, "hours"));
// console.log(timeAdder(1, "hour", 23, "hours"));
// console.log(timeAdder(1, "hour", 50, "hours"));
// console.log(timeAdder(1, "hour", 50, "hours"));
// console.log(timeAdder(1, "day", 1, "hours"));
// console.log(timeAdder(1, "day", 72, "hours"));
// console.log(timeAdder(2, "seconds", 1, "second"));
//console.log(timeAdder(120, "minutes", 1, "minute"));
// console.log(timeAdder(120, "minutes", 1, "hour"));
// console.log(timeAdder(120, "minutes", 1, "day"));
// console.log(timeAdder(20, "hours", 1, "minute"));
// console.log(timeAdder(120, "hours", 1, "hour"));
// console.log(timeAdder(120, "hours", 1, "day"));
// console.log(timeAdder(12, "days", 1, "day"));
// console.log(timeAdder(12, "seconds", 13, "seconds"));
// console.log(timeAdder(12, "seconds", 100, "seconds"));
// console.log(timeAdder(12, "minutes", 130, "minutes"));
// console.log(timeAdder(12, "hours", 11, "hours"));
// console.log(timeAdder(12, "days", 11, "days"));
// console.log(timeAdder(12, "seconds", 11, "hours"));
// console.log(timeAdder(12, "minutes", 11, "seconds"));
// console.log(timeAdder(12, "hours", 11, "days"));
// console.log(timeAdder(12, "days", 11, "days"));
