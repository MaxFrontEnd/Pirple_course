let win = [
  [1, 2, 3],
  [4, 5, 6],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
  [7, 8, 9]
];

const board = document.getElementById("board");

// Clear board function
function clearBoard() {
  sqares = document.querySelectorAll(".sqare");
  for (let sq of sqares) {
    sq.innerHTML = "";
  }
}

// check if one player is wining
function checkWin(arrayOfChosenNumbers) {
  let obj = {};
  let youWin;

  arrayOfChosenNumbers.forEach((el, index) => {
    obj[el] = index;
  });
  for (let i = 0; i < win.length; i++) {
    youWin = win[i].every(el => {
      return obj[el] !== undefined;
    });
    if (youWin) break;
  }
  return youWin;
}

// Play function
function PlayTicTacToe() {
  let xCombinations = [];
  let oCombinations = [];
  let catsGame = 0;
  let winner = false;
  const button = document.getElementById("clear");
  button.addEventListener("click", function(e) {
    clearBoard();
    xCombinations = [];
    oCombinations = [];
    catsGame = 0;
    winner = false;
    ODD = true;
  });
  let ODD = true;
  board.addEventListener("click", function(e) {
    winner = false;
    catsGame = catsGame + 1;
    if (e.target.innerHTML) {
      alert("Choose empty sqare");
    } else {
      if (ODD) {
        e.target.style.color = "red";
        e.target.innerHTML = "X";
        xCombinations.push(Number.parseInt(e.target.id));
        ODD = false;
        if (checkWin(xCombinations)) {
          winner = true;
          alert("X you win");
          clearBoard();
          xCombinations = [];
          oCombinations = [];
          ODD = true;
          catsGame = 0;
        }
      } else {
        e.target.style.color = "black";
        e.target.innerHTML = "O";
        oCombinations.push(Number.parseInt(e.target.id));
        ODD = true;
        if (checkWin(oCombinations)) {
          winner = true;
          alert(" O you win");
          clearBoard();
          xCombinations = [];
          oCombinations = [];
          catsGame = 0;
        }
      }
      if (catsGame === 9 && !winner) {
        alert("Cat's game!");
        clearBoard();
        xCombinations = [];
        oCombinations = [];
        catsGame = 0;
        winner = false;
        ODD = true;
      }
    }
  });
}

PlayTicTacToe();
