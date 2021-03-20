// Discribe class Elevator

class Elevator {
  constructor(position = 0, basement = true, penthouse = true) {
    this.basement = basement;
    this.penthouse = penthouse;
    this.position = position;
  }

  audioMessage() {
    this.position = this.destination;
    console.log(this.position);
  }
  goToFloor(destination) {
    let seconds =
      this.position > this.destination
        ? this.position - this.destination
        : this.destination - this.position;
    setTimeout(audioMessage, seconds);
  }

  currentposition() {
    return this.position;
  }
}

class Building {
  constructor(flors, basement = true, penthouse = true) {
    this.flors = flors;
    this.basement = basement;
    this.penthouse = penthouse;
  }
}

const elevatorA = new Elevator(
  position,
  (basement = false),
  (penthouse = true)
);

console.log(Elevator);
