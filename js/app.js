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
const resetBtnEl = document.querySelector('button')


/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(squareEl => squareEl.addEventListener('click', handleClick))
resetBtnEl.addEventListener('click', init)
// Optional/Additional Event Listeners
squareEls.forEach(squareEl => squareEl.addEventListener('mouseover', handleMouseOver))
squareEls.forEach(squareEl => squareEl.addEventListener('mouseout', handleMouseOut))

/*-------------------------------- Functions --------------------------------*/

window.onload = init

function init() {
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
      squareEls[idx].textContent = null
    } else if (square === 1) {
      squareEls[idx].textContent = 'x'
    } else if (square === -1) {
      squareEls[idx].textContent = 'o'
    }
  })
}

function updateMessage() {
  let player
  if (turn === 1) {
    player = 'Player 1'
    messageEl.style.background = 'green'
  } else {
    player = 'Player 2'
    messageEl.style.background = 'blue'
  }
  if (winner === false && tie === false) {
    messageEl.textContent = `It is ${player}'s turn.`
  } else if (winner === false && tie === true) {
    messageEl.textContent = `Close! But it's a tie!`
    messageEl.style.background = 'orange'
  } else {
    messageEl.textContent = `Congratulations ${player}! You won!`
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
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}

function placePiece(sqIdx, idx) {
  idx = turn
  board[sqIdx] = idx
}

function checkForTie() {
  if (board.some(square => square === null)) {
    tie = false
  } else {
    tie = true
  }
}

function checkForWinner() {
  winningCombos.forEach(combo => {
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
      winner = true
    }
  })
}

function switchPlayerTurn() {
  if (winner === true) {
    return
  } else {
    turn *= -1
  }
}

// Optional/Additional Functions
function handleMouseOver(evt) {
  const sqIdx = evt.target.id.split('').pop()
  if (board[sqIdx] === null && winner === false) {
    if (turn === 1) {
      evt.target.style.background = 'green'
    } else {
      evt.target.style.background = 'blue'
    }
  } else {
    evt.target.style.background = 'red'
  }
}

function handleMouseOut(evt) {
  if (evt.target.style.background !== '') {
    evt.target.style.background = ''
  }
}