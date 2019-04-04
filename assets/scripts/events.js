// where you write functions

// check if empty
// need to check to see whose turn it is
// check to see if game ends a. win b. lose c. tie [array]
// tell ui to update screen
// change current player
// need to add the appropriate letter

// current player
let currentPlayer = 'x'

//  empty game board
const ticBoard = ['', '', '', '', '', '', '', '', '']

// check if game is a tie or gameOver
let gameOver = false

// turn
const turn = () => {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
  return currentPlayer
}

// win statements
const gameState = function () {
  if (
    (ticBoard[0] === ticBoard[1] && ticBoard[1] === ticBoard[2] && ticBoard[0] === currentPlayer) ||
    (ticBoard[3] === ticBoard[4] && ticBoard[4] === ticBoard[5] && ticBoard[3] === currentPlayer) ||
    (ticBoard[6] === ticBoard[7] && ticBoard[7] === ticBoard[8] && ticBoard[6] === currentPlayer) ||
    (ticBoard[0] === ticBoard[4] && ticBoard[4] === ticBoard[8] && ticBoard[0] === currentPlayer) ||
    (ticBoard[2] === ticBoard[4] && ticBoard[4] === ticBoard[6] && ticBoard[2] === currentPlayer) ||
    (ticBoard[0] === ticBoard[3] && ticBoard[3] === ticBoard[6] && ticBoard[0] === currentPlayer) ||
    (ticBoard[1] === ticBoard[4] && ticBoard[4] === ticBoard[7] && ticBoard[2] === currentPlayer) ||
    (ticBoard[2] === ticBoard[5] && ticBoard[5] === ticBoard[8] && ticBoard[2]) === currentPlayer) {
    gameOver = true
    console.log('winner')
  } else if (ticBoard.every(index => index !== '')) {
    gameOver = true
    console.log('It is a tie')
  }
}

// onClickbox
const onClickbox = function (event) {
  const currentSquare = $(event.target).data('id')
  const content = $(event.target).text()
  console.log('click', currentPlayer)
  if (content === '' && currentPlayer === 'x') {
    $(event.target).text(currentPlayer)
    ticBoard[currentSquare] = currentPlayer
    gameState(ticBoard, currentPlayer)
    turn()
  } else if (content === '' && currentPlayer === 'o') {
    $(event.target).text(currentPlayer)
    ticBoard[currentSquare] = currentPlayer
    gameState(ticBoard, currentPlayer)
    turn()
  }
}

const addEventHandler = function () {
  $('.square').on('click', onClickbox)
}

module.exports = {
  addEventHandler
}
