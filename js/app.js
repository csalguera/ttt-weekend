/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board
let turn
let winner
let tie

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelector('.board')
const messageEl = document.getElementById('board')

/*----------------------------- Event Listeners -----------------------------*/



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
  board.forEach(square => square = 'a')
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `Game in Progress`
  } else if (winner === false && tie === true) {
    messageEl.textContent = `Close! But it's a tie!`
  } else {
    messageEl = `Congratulations! The winner is ${winner}`
  }
}

// // 1) Define the required variables used to track the state of the game

// // 2) Store cached element references

// // 3) Upon loading, the game state should be initialized, and a function should be 
// //   called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Create Reset functionality