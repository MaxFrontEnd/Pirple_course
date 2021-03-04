function reverseJsonArray(stringValue) {
  if (!stringValue || typeof stringValue !== "string") {
    console.log("Enter a string value");
    return false;
  } else {
    testArray = JSON.parse(stringValue);
    if (!testArray || !Array.isArray(testArray)) {
      console.log(`${testArray} its not an array`);
      return false;
    } else if (testArray.length < 1) {
      console.log(`${testArray} empty array`);
      return false;
    }
    console.log(JSON.stringify(testArray.reverse()));
  }
}

reverseJsonArray();
reverseJsonArray(false);
reverseJsonArray(true);
reverseJsonArray([1, 2, 3]);
reverseJsonArray([1]);
reverseJsonArray("1");
reverseJsonArray("[]");
reverseJsonArray("[1, 2, 3, 5]");
reverseJsonArray('["d", "c", "x"]');
reverseJsonArray("");
reverseJsonArray(23);
