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

  moveUpDestination(moveUpDestination) {
    if (!this.moveUpDestinations) {
      this.moveUpDestinations = [];
    }

    this.moveUpDestinations.push(moveUpDestination);
    this.moveUpDestinations.sort();
  }

  moveDownDestination(moveUpDestination) {
    if (!this.moveDownDestinations) {
      this.moveDownDestinations = [];
    }
    this.moveUpDestinations.push(moveUpDestination);
    this.moveUpDestinations.sort();
  }

  moveUp(moveUpDestination, type) {
    console.log(
      `moving ${this.elevator} from position ${
        this.position
      } to ${moveUpDestination}`
    );
    if (moveUpDestination < this.position) {
      this.state = "movingDown";
      this.position -= 1;
    } else if (moveUpDestination > this.position) {
      this.position += 1;
      this.state = "movingUp";
    }

    if (this.position === moveUpDestination) {
      switch (type) {
        case "callUpDestination":
          console.log(
            `Elevator arived to floor ${moveUpDestination}. Choose where to go`
          );
          this.callUpDestinations.shift();
          if (
            this.callUpDestinations.length === 0 ||
            this.moveUpDestinations.length === 0
          ) {
            this.direction = "staing";
          }
          break;
        case "moveUpDestination":
          console.log(
            `Door are opening. You arive to floor ${moveUpDestination} please extit from elevator`
          );
          this.moveUpDestinations.shift();
          break;
        case "moveUpDestinationCall":
          console.log(
            `you arive to floor ${moveUpDestination}. Please get out another passanger is enter`
          );
          this.callUpDestinations.shift();
          this.moveUpDestinations.shift();
          break;
      }
    }
  }

  moveDown(moveDownDestination, type) {
    console.log(
      `moving ${this.elevator} from position ${
        this.position
      } to ${moveDownDestination}`
    );
    if (moveDownDestination < this.position) {
      this.state = "movingDown";
      this.position -= 1;
    } else if (moveDownDestination > this.position) {
      this.position += 1;
      this.state = "movingUp";
    }

    if (this.position === moveDownDestination) {
      switch (type) {
        case "callDownDestination":
          console.log(
            `Elevator arived to floor ${moveDownDestination}. Choose where to go`
          );
          this.callDownDestinations.shift();
          if (
            this.callDownDestinations.length === 0 ||
            this.moveDownDestinations.length === 0
          ) {
            this.state = "staing";
          }
          break;
        case "moveUpDestination":
          console.log(
            `Door are opening. You arive to floor ${moveDownDestination} please extit from elevator`
          );
          this.moveDownDestinations.shift();
          if (
            this.callDownDestinations.length === 0 ||
            this.moveDownDestinations.length === 0
          ) {
            this.state = "staing";
          }
          break;
        case "moveDownDestinationCall":
          console.log(
            `you arive to floor ${moveDownDestination}. Please get out another passanger is enter`
          );
          this.callDownDestinations.shift();
          this.moveDonwDestinations.shift();
          if (
            moveDonwDestinations.length === 0 ||
            this.callUpDestinations.length === 0
          ) {
            this.state = "staing";
          }
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
      //console.log("arrays not empty. Returning true");
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
    let moveUpDestination;
    let callUpDestination;
    let moveDownDestination;
    let callDownDestination;
    if (this.checkIfWorkArraysAreEmpty() === false) {
      console.log(` ${this.elevator} waiting for work`);
      return false;
    }
    if (mvUp !== undefined) {
      moveUpDestination = mvUp[0];
    }
    if (clUp !== undefined) {
      callUpDestination = clUp[0];
    }

    if (mvDn !== undefined) {
      moveDownDestination = mvDn[0];
    }

    if (clDn !== undefined) {
      callDownDestination = clDn[0];
    }

    console.log(this.state);
    if (this.state === "movingUp") {
      if (moveUpDestination === undefined) {
        //console.log("calling this function");
        this.moveUp(callUpDestination, "callUpDestination");
      } else if (callUpDestination === undefined) {
        // console.log("calling this function");
        this.moveUp(moveUpDestination, "moveUpDestination");
      } else if (moveUpDestination > callUpDestination) {
        // console.log("calling this function");
        this.moveUp(callUpDestination, "callUpDestination");
      } else if (moveUpDestination < callUpDestination) {
        // console.log("calling this function");
        this.moveUp(moveUpDestination, "moveUpDestination");
      } else if (moveUpDestination === callUpDestination) {
        // console.log("calling this function");
        this.moveUp(moveUpDestination, "moveUpDestinationCall");
      }
    } else if (this.state === "movingDown") {
      if (moveDownDestination === undefined) {
        //console.log("calling this function");
        this.moveDown(callDownDestination, "callDownDestination");
      } else if (callDownDestination === undefined) {
        // console.log("calling this function");
        this.moveDown(moveDownDestination, "moveDownDestination");
      } else if (moveDownDestination > callUpDestination) {
        // console.log("calling this function");
        this.moveDown(callDownDestination, "callDownDestination");
      } else if (moveDownDestination < callDawnDestination) {
        // console.log("calling this function");
        this.moveDown(moveDownDestination, "moveDownDestination");
      } else if (moveDawnDestination === callDawnDestination) {
        // console.log("calling this function");
        this.moveDown(moveDawnDestination, "moveDawnDestinationCall");
      }
    }
  }

  powerOn(elevator) {
    let self = this;
    this.elevator = elevator;
    console.log(`${this.elevator} starts to work`);
    this.listenForWork = setInterval(function() {
      self.chekWork();
    }, 1000);
  }

  powerOf() {
    clearInterval(listenForWork);
  }

  // removeFloorDestination(moveUpDestination) {
  //   console.log(moveUpDestination);
  //   this.moveUpDestinationinations.pop(moveUpDestination);
  //   this.moveUpDestinationinations.sort();
  //   this.position = moveUpDestination;
  //   if (this.moveUpDestinationinations.length > 0) {
  //     moveUp(this.moveUpDestinationinations[0]);
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
    alert(
      "No elevators a availeble now. Please callUpDestination elevatorsEngeneers"
    );
    return false;
  }
  if (floor > 10 || floor < -1) {
    alert("This floor does not exist");
    return false;
  }
  //callUpDestination from basement
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
function moveElevator(elevator, moveUpDestination) {
  console.log(elevator.moveUpDestinations);
  if (elevator.position < moveUpDestination) {
    elevator.moveUpDestination(moveUpDestination);
  } else if (elevator.position > moveUpDestination) {
    elevator.moveDownDestination(moveUpDestination);
  } else if (
    elevator.state === "staing" &&
    elevator.position === moveUpDestination
  ) {
    console.log(`You are allreade at  ${elevator.position}`);
  }
}

selectCallElevator("up", -1, elevatorA, elevatorB);
selectCallElevator("up", 4, elevatorA, elevatorB);
setTimeout(moveElevator, 1000, elevatorB, 0);
setTimeout(moveElevator, 2000, elevatorB, 1);
setTimeout(moveElevator, 3000, elevatorB, 3);
setTimeout(moveElevator, 3000, elevatorB, 4);
setTimeout(moveElevator, 5000, elevatorB, 0);
//selectCallElevator("up", 0, elevatorA, elevatorB);
//selectMoveElevator("up", 0, elevatorA, elevatorB);
// elevatorA.addFloorDestination(3);
// elevatorA.addFloorDestination(5);
// elevatorA.addFloorDestination(4);
