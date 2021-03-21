// Discribe class Elevator

class MyErrors {
  constructor(type) {
    this.type = type;
  }

  toString() {
    console.log(`${this.type} ERROR`);
  }
}

let wrongTypeError = new MyErrors("type");

class Elevator {
  constructor(
    state = staing,
    position = 0,
    basement = true,
    penthouse = true,
    floorsToMove = 0
  ) {
    this.state = state;
    this.position = position;
    this.basement = basement;
    this.penthouse = penthouse;
    this.floorsToMove = floorsToMove;
  }

  myCurrentPossition(floorsToMove, position) {
    this.florsToMove = floorsToMove -= 1;
    this.position = position += 1;
    console.log(floorsToMove, position);
  }

  addDestination(destination) {
    if (!this.destinations) {
      this.destinations = new Array();
    }
    console.log(typeof this.destinations);
    this.destinations.push(destination);
    this.destinations.sort();
    console.log(this.destinations);
    this.moveUp(this.destinations[0]);
    this.state = "moving";
  }

  removeDestination(destination) {
    this.destinations.pop(destination);
    this.destinations.sort();
    this.position = destination;
    if (destinations.length > 0) {
      moveUp(this.destinations[0]);
      this.state = "moving";
    } else {
      this.state = "staing";
    }
  }

  moveUp(destination) {
    do {
      this.position += 1;
    } while (this.position !== destination);
    console.log(`im on ${this.position}`);
    //removeDestination(destination);
  }
}

class Building {
  constructor(flors, basement = true, penthouse = true) {
    this.flors = flors;
    this.basement = basement;
    this.penthouse = penthouse;
  }
}

const elevatorA = new Elevator(false, 0, false, true, 0);

console.log(Elevator);

elevatorA.addDestination(3);
console.log();
