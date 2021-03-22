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

let floorsForA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let floorsForB = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
class Elevator {
  constructor(
    workingFloors = [],
    busy = false,
    state = "staing",
    position = 0
    //floorsToMove = 0
  ) {
    this.workingFloors = workingFloors;
    this.busy = busy;
    this.state = state;
    this.position = position;
    //this.floorsToMove = floorsToMove;
  }

  stopButton() {
    this.state = "EmergencyStoped";
  }
  callUpDestination(fromFloor) {
    if (!this.callUpDestinations) {
      this.callUpDestinations = [];
    }

    if (!this.callUpDestinations.includes(fromFloor)) {
      this.callUpDestinations.push(fromFloor);
      this.callUpDestinations.sort();
      console.log(this.callUpDestinations);
    }
  }

  callDownDestination(fromFloor) {
    if (!this.callDownDestinations) {
      this.callDownDestinations = [];
    }

    if (!this.callDownDestinations.includes(fromFloor)) {
      this.callDownDestinations.push(fromFloor);
      this.callDownDestinations.sort();
      console.log(this.callDownDestinations);
    }
  }

  moveUpDestination(destination) {
    if (!this.moveUpDestinations) {
      this.moveUpDestinations = [];
    }

    this.moveUpDestinations.push(destination);
    this.moveUpDestinations.sort();
  }

  moveDownDestination(destination) {
    if (!this.moveDownDestinations) {
      this.moveDownDestinations = [];
    }
    this.moveUpDestinations.push(destination);
    this.moveUpDestinations.sort();
  }

  moveUp(destination, type) {
    setInterval(() => {
      this.position += 1;
      if (this.position === destination) {
        switch (type) {
          case "call":
            console.log(
              `Elevator arived to floor ${destination}. Choose where to go`
            );
            this.callUpDestinations.shift();
            break;
          case "dest":
            console.log(`you arive to floor ${destination}`);
            this.moveUpDestinations.shift();
            break;
          case "destCall":
            console.log(
              `you arive to floor ${destination}. Please get out another passanger is enter`
            );
            this.callUpDestinations.shift();
            this.moveUpDestinations.shift();
            break;
        }
      }
    }, 1000);
  }

  callDown() {}

  checkIfWorkArraysAreEmpty() {
    if (
      (!this.moveUpDestinations && !this.callUpDestinations) ||
      (this.callUpDestinations.length < 1 && this.moveUpDestinations.length < 1)
    ) {
      return false;
    } else {
      return true;
    }
  }
  chekWork() {
    let dest;
    let call;
    if (!this.checkIfWorkArraysAreEmpty()) {
      console.log("waiting for work");
    } else {
      // console.log(this.moveUpDestinations[0]);
      // console.log(this.moveUpDestinations[0]);
      if (this.moveDownDestinations) {
        dest = this.moveUpDestinations[0];
      } else {
        dest = undefined;
      }

      if (this.callUpDestinations) {
        call = this.callUpDestinations[0];
        console.log(call);
      } else {
        call = undefined;
      }
      if (dest === undefined) {
        this.moveUp(call, "call");
      } else if (call === undefined) {
        this.moveUp(dest, "dest");
      } else if (dest > call) {
        this.moveUp(call, "call");
      } else if (dest < call) {
        this.moveUp(dest, "dest");
      } else if (dest === call) {
        this.moveUp(dest, "destCall");
      }
    }
  }

  powerOn() {
    let self = this;
    this.listenForWork = setInterval(function() {
      self.chekWork();
    }, 1000);
  }

  powerOf() {
    clearInterval(listenForWork);
  }

  // removeFloorDestination(destination) {
  //   console.log(destination);
  //   this.destinations.pop(destination);
  //   this.destinations.sort();
  //   this.position = destination;
  //   if (this.destinations.length > 0) {
  //     moveUp(this.destinations[0]);
  //     this.state = "moving up";
  //   } else {
  //     this.state = "staing";
  //   }
  // }
}

class Building {
  constructor(flors, basement = true, penthouse = true) {
    this.flors = flors;
    this.basement = basement;
    this.penthouse = penthouse;
  }
}

const elevatorA = new Elevator(floorsForA, false, "staing", 0);
const elevatorB = new Elevator(floorsForB, false, "staing", 0);
// console.log(elevatorA);
elevatorA.powerOn();
elevatorB.powerOn();

//console.log(elevatorA.workingFloors);
//up , 10,
function selectCallElevator(direction, floor, elevatorA, elevatorB) {
  let currentAposition = elevatorA.position;
  let currentBposition = elevatorB.position;

  if (
    elevatorA.state === "EmergencyStoped" &&
    elevatorB.state === "EmergencyStoped"
  ) {
    alert("No elevators a availeble now. Please call elevatorsEngeneers");
    return false;
  }
  if (floor > 10 || floor < -1) {
    alert("This floor does not exist");
    return false;
  }
  //call from basement
  switch (direction) {
    case "up":
    //TODO
  }
  if (!elevatorA.workingFloors.includes(floor)) {
    console.log(`calling ElevatorB on floor ${floor}`);
    elevatorB.callUpDestination(floor);
  } else if (!elevatorB.workingFloors.includes(floor)) {
    console.log("calling ElevatorA");
    elevatorA.callDownDestination(floor);
  }
}

selectCallElevator("up", -1, elevatorA, elevatorB);
// elevatorA.addFloorDestination(3);
// elevatorA.addFloorDestination(5);
// elevatorA.addFloorDestination(4);
