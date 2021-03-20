class Vehicle {
  constructor(
    make,
    model,
    year,
    weight,
    needsMaintenance = false,
    tripSinceMaintenance = 0
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.needsMaintenance = needsMaintenance;
    this.tripSinceMaintenance = tripSinceMaintenance;
  }
}

class Cars extends Vehicle {
  constructor(
    make,
    model,
    year,
    weight,
    needsMaintenance,
    tripSinceMaintenance
  ) {
    super(make, model, year, weight, needsMaintenance, tripSinceMaintenance);
    this.wasRepairedTimes = 0;
  }
  drive() {
    this.isDriving = true;
    if (this.tripSinceMaintenance >= 100) {
      this.needsMaintenance = true;
      this.repair();
      this.wasRepairedTimes += 1;
    }
    this.tripSinceMaintenance += 1;
  }
  stop() {
    this.isDriving = false;
    if (this.tripSinceMaintenance >= 100) {
      this.needsMaintenance = true;
      this.repair();
      this.wasRepairedTimes += 1;
    }
    this.tripSinceMaintenance += 1;
  }

  repair() {
    this.needsMaintenance = false;
    this.tripSinceMaintenance = 0;
  }
}

let firstTimesOfTrip = 50;
let secondTimesOfTrip = 160;
let thirdTimesOfTrip = 99;
let firstCar = new Cars("USA", "A-model", 1999, 1000);
let secondCar = new Cars("Japan", "B-model", 1994, 1555);
let thirdCar = new Cars("KNR", "C-model", 1992, 1222);

console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);

for (let i = 0; i < firstTimesOfTrip; i++) {
  if (firstCar.isDriving === true) {
    firstCar.stop();
  } else {
    firstCar.drive();
  }
}

console.log(firstCar.needsMaintenance);
console.log(firstCar.tripSinceMaintenance);
console.log(firstCar.wasRepairedTimes);

for (let i = 0; i < secondTimesOfTrip; i++) {
  if (secondCar.isDriving === true) {
    secondCar.stop();
  } else {
    secondCar.drive();
  }
}

console.log(secondCar.needsMaintenance);
console.log(secondCar.tripSinceMaintenance);
console.log(secondCar.wasRepairedTimes);

for (let i = 0; i < thirdTimesOfTrip; i++) {
  if (thirdCar.isDriving === true) {
    thirdCar.stop();
  } else {
    thirdCar.drive();
  }
}

console.log(thirdCar.needsMaintenance);
console.log(thirdCar.tripSinceMaintenance);
console.log(thirdCar.wasRepairedTimes);

class Planes extends Vehicle {
  constructor(
    make,
    model,
    year,
    weight,
    needsMaintenance,
    tripSinceMaintenance
  ) {
    super(make, model, year, weight, needsMaintenance, tripSinceMaintenance);
  }
  fly() {
    this.isFlying = true;
    if (this.tripSinceMaintenance >= 100) {
      this.needsMaintenance = true;
    }
    if (this.needsMaintenance) {
      alert("Can't fly until is repaired");
    }
    this.tripSinceMaintenance += 1;
  }
  land() {
    this.isFlying = false;
    if (this.tripSinceMaintenance >= 100) {
      this.needsMaintenance = true;
    }
    if (this.needsMaintenance) {
      alert("Can't fly until is repaired");
    }
    this.tripSinceMaintenance += 1;
  }

  repair() {
    this.needsMaintenance = false;
    this.tripSinceMaintenance = 0;
  }
}

let aero = new Planes("Boing", "747", 1995, 5000);

for (let i = 0; i < secondTimesOfTrip; i++) {
  if (aero.isFlying === true) {
    if (aero.needsMaintenance) {
      console.log(aero.needsMaintenance);
      console.log(aero.tripSinceMaintenance);
      break;
    }
    aero.fly();
  } else {
    if (aero.needsMaintenance) {
      console.log(aero.needsMaintenance);
      console.log(aero.tripSinceMaintenance);
      break;
    }
    aero.land();
  }
}
