class Game {
  constructor() {
    this.cells = document.getElementsByClassName("cell");
    this.X = document.getElementById("X");
    this.O = document.getElementById("O");
  }

  makeAChoice(e) {
    this.sign = e.target.id;
    this.sign === "X" ? (this.compSign = "O") : (this.compSign = "X");
    this.choice = document.querySelector(".choice");
    this.gameField = document.getElementById("gameField");
    this.choice.classList.add("hidden");
    this.gameField.classList.remove("hidden");
  }
  makeAMove(e) {
    if (e.target.textContent === "") {
      this.sign === "X"
        ? (e.target.textContent = "X")
        : (e.target.textContent = "O");
      this.checkEndRound();
      this.computerMove();
    }
  }
  computerMove() {
    setTimeout(() => {
      for (let cell of this.cells) {
        if (cell.textContent === "") this.isNeedToMove = true;
      }
      while (this.isNeedToMove) {
        let index = Math.round(Math.random() * (this.cells.length - 1));
        if (this.cells[index].textContent === "") {
          this.cells[index].textContent = this.compSign;
          this.isNeedToMove = false;
        }
      }
    }, 300);
    setTimeout(() => {
      this.checkEndRound();
    }, 300);
  }
  checkEndRound() {
    this.moves = [];
    for (let cell of this.cells) {
      this.moves[+cell.id[1] - 1] = cell.textContent;
    }
    let row = [];
    let col = [];
    let diagonal = [];
    let allWinVariants = [];
    for (let i = 0; i < 9; i += 3) {
      row = this.moves[i] + this.moves[i + 1] + this.moves[i + 2];
      allWinVariants.push([row]);
    }
    for (let i = 0; i < 3; i++) {
      col = this.moves[i] + this.moves[i + 3] + this.moves[i + 6];
      allWinVariants.push([col]);
    }
    diagonal = this.moves[0] + this.moves[4] + this.moves[8];
    allWinVariants.push([diagonal]);
    diagonal = this.moves[2] + this.moves[4] + this.moves[6];
    allWinVariants.push([diagonal]);

    if (allWinVariants.some((value) => value[0] === "XXX")) {
      alert("X win");
      this.endRound();
    } else if (allWinVariants.some((value) => value[0] === "OOO")) {
      alert("O win");
      this.endRound();
    } else if (allWinVariants.every((value) => value[0].length === 3)) {
      alert("Draw");
      this.endRound();
    }
  }
  endRound() {
    location.reload();
  }
}
const game = new Game();
