/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8]
]

/*---------------------------- Variables (state) ----------------------------*/

let board
let turn
let winner
let tie

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('board')

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(squareEl => squareEl.addEventListener('click', handleClick))

/*-------------------------------- Functions --------------------------------*/

window.onload = function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = false
  tie = false
  render()
}

function render() {
  updateBoard()
  updateMessage()
}

function updateBoard() {
  board.forEach(function(square, idx) {
    if (square === null) {
      return
    } else if (square === 1) {
      squareEls[idx].textContent = 'x'
    } else if (square === -1) {
      squareEls[idx].textContent = 'o'
    }
  })
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `Game in Progress`
  } else if (winner === false && tie === true) {
    messageEl.textContent = `Close! But it's a tie!`
  } else {
    messageEl.textContent = `Congratulations! The winner is`
  }
}

function handleClick(evt) {
  const sqIdx = evt.target.id.split('').pop()
  if (board[sqIdx] !== null) {
    return
  }
  if (winner === true) {
    return
  }
  placePiece(sqIdx)
}

function placePiece(idx, sqIdx) {
  idx = turn
  return board[sqIdx] = board[idx]
}

function checkForTie() {
  if (board.some(square => square === null)) {
    tie = false
  } else {
    tie = true
  }
}

//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 4, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 4, 6],
//   [2, 5, 8]

function checkForWinner() {
  // each combo must have a value of 1 or -1 to declare a winner
  // if 3 'x' wins
  // else if -3 'o' wins
}
// // 1) Define the required variables used to track the state of the game

// // 2) Store cached element references

// // 3) Upon loading, the game state should be initialized, and a function should be 
// //   called to render this game state

// // 4) The state of the game should be rendered to the user

// // 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Create Reset functionality