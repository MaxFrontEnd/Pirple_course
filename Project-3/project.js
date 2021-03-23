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
    callDownDestinations = [],
    callUpDestinations = [],
    moveUpDestinations = [],
    moveDownDestinations = [],
    workingFloors = [],
    busy = false,
    state = "staing",
    position = 0
    //floorsToMove = 0
  ) {
    this.callDownDestinations = callDownDestinations;
    this.callUpDestinations = callUpDestinations;
    this.moveUpDestinations = moveUpDestinations;
    this.moveDownDestinations = moveDownDestinations;
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
    }
  }

  callDownDestination(fromFloor) {
    if (!this.callDownDestinations) {
      this.callDownDestinations = [];
    }

    if (!this.callDownDestinations.includes(fromFloor)) {
      this.callDownDestinations.push(fromFloor);
      this.callDownDestinations.sort();
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
    this.state = "movingUp";
    console.log(
      `moving from position ${this.position} to destination ${destination}`
    );
    if (destination < this.position) {
      this.direction = "down";
      this.position -= 1;
    } else if (destination > this.position) {
      this.position += 1;
      direction = "up";
    } else if (this.position === destination) {
      this.direction = "staing";
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
  }

  moveDown(destination, type) {
    this.position -= 1;
    if (this.position === destination) {
      switch (type) {
        case "call":
          console.log(
            `Elevator arived to floor ${destination}. Choose where to go`
          );
          this.callDownDestinations.shift();
          break;
        case "dest":
          console.log(`you arive to floor ${destination}`);
          this.moveDownDestinations.shift();
          break;
        case "destCall":
          console.log(
            `you arive to floor ${destination}. Please get out another passanger is enter`
          );
          this.callDownDestinations.shift();
          this.moveDownDestinations.shift();
          break;
      }
    }
  }
  callDown() {}

  checkIfWorkArraysAreEmpty() {
    let mvUp = this.moveUpDestinations;
    let mvDn = this.moveDownDestinations;
    let clUp = this.callUpDestinations;
    let clDn = this.callDownDestinations;
    // console.log(mvUp, mvDn, clUp, clDn);
    //console.log(clDn.length, mvDn.length, mvUp.length, clUp.length);
    // console.log((!mvUp && !clUp) || (!mvDn && !clDn));
    if (
      clDn.length > 0 ||
      mvDn.length > 0 ||
      mvUp.length > 0 ||
      clUp.length > 0
    ) {
      console.log("arrays not empty. Returning true");
      return true;
    } else {
      return false;
    }
  }

  chekWork() {
    let mvUp = this.moveUpDestinations;
    let mvDn = this.moveDownDestinations;
    let clUp = this.callUpDestinations;
    let clDn = this.callDownDestinations;
    let dest;
    let call;
    if (this.checkIfWorkArraysAreEmpty() === false) {
      console.log("waiting for work");
      return false;
    }
    if (mvUp) {
      dest = mvUp[0];
    } else {
      dest = undefined;
    }
    if (clUp) {
      call = clUp[0];
    } else {
      call = undefined;
    }
    if (dest === undefined) {
      console.log("calling this function");
      this.moveUp(call, "call");
    } else if (call === undefined) {
      console.log("calling this function");
      this.moveUp(dest, "dest");
    } else if (dest > call) {
      console.log("calling this function");
      this.moveUp(call, "call");
    } else if (dest < call) {
      console.log("calling this function");
      this.moveUp(dest, "dest");
    } else if (dest === call) {
      console.log("calling this function");
      this.moveUp(dest, "destCall");
    }
  }

  powerOn(elevator) {
    let self = this;
    this.elevator = elevator;
    console.log(`${this.elevator} starts to work`);
    this.listenForWork = setInterval(function() {
      self.chekWork();
    }, 4000);
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

const elevatorA = new Elevator([], [], [], [], floorsForA, false, "staing", 0);
const elevatorB = new Elevator([], [], [], [], floorsForB, false, "staing", 0);
// console.log(elevatorA);
elevatorA.powerOn("elevatorA");
elevatorB.powerOn("elevatorB");

//console.log(elevatorA.workingFloors);
//up , 10,
function selectCallElevator(direction, floor, elevatorA, elevatorB) {
  let currentAposition = elevatorA.position;
  let currentBposition = elevatorB.position;
  let currentAstate = elevatorA.state;
  let currentBstate = elevatorB.state;

  if (
    currentAstate === "EmergencyStoped" &&
    currentBstate === "EmergencyStoped"
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
      if (currentAstate === "movingUp" && currentBstate === "movingUp") {
        if (currentAposition > floor && currentBposition > floor) {
          elevatorA.position > elevatorB.position
            ? elevatorA.callUpDestination(floor)
            : elevatorB.callUpDestination(floor);
        } else if (currentBposition < floor && currentBposition < floor) {
          elevatorA.position > elevatorB.position
            ? elevatorA.callUpDestination(floor)
            : elevatorB.callUpDestination(floor);
        }
      } else if (currentAstate === "staing" && currentBstate === "staing") {
        if (currentAposition > floor && currentBposition > floor) {
          elevatorA.position > elevatorB.position
            ? elevatorA.callUpDestination(floor)
            : elevatorB.callUpDestination(floor);
        } else if (currentBposition < floor && currentBposition < floor) {
          elevatorA.position > elevatorB.position
            ? elevatorA.callUpDestination(floor)
            : elevatorB.callUpDestination(floor);
        }
      }
  }
  if (!elevatorA.workingFloors.includes(floor)) {
    console.log(`calling ElevatorB on floor ${floor}`);
    elevatorB.callUpDestination(floor);
  } else if (!elevatorB.workingFloors.includes(floor)) {
    console.log("calling ElevatorA");
    elevatorA.callDownDestination(floor);
  }
}
// moving selected elevator
function moveElevator(elevator, destination) {
  console.log(elevator.position);
  if (Elevator.position < destination) {
    elevator.moveUpDestination(destination);
  } else if (Elevator.position > destination) {
    elevator.moveDownDestination(destination);
  } else {
    console.log("we are alreade here");
  }
}

selectCallElevator("up", -1, elevatorA, elevatorB);
//moveElevator(elevatorB, 0);

//selectCallElevator("up", 0, elevatorA, elevatorB);
//selectMoveElevator("up", 0, elevatorA, elevatorB);
// elevatorA.addFloorDestination(3);
// elevatorA.addFloorDestination(5);
// elevatorA.addFloorDestination(4);
