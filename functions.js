// Socrates is mortal function

const isMortal = name => {
  // aray of mens
  const mens = ["Socrates", "50 Cents", "Bob Marley", "Freddie Mercury"];
  //expect a string
  if (typeof name !== "string") {
    console.log("Are you shure you tiped a name?");
    return false;
  }
  if (mens.includes(name)) {
    console.log("its definitly a mortal being ");
    return true;
  } else {
    console.log("not shure");
    return false;
  }
};

isMortal("Rambo");
isMortal("Socrates");
isMortal(3);

// Cakes example
const cakes = ["vanila, chocolate"];
const typeOfCake = (cakes, bool) => {
  if (!bool) {
    console.log("vanila cake");
  } else {
    console.log("chocolate cake");
  }
};

typeOfCake(cakes, true);
typeOfCake(cakes, false);
