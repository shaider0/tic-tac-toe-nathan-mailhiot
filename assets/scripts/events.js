// where you write functions

//

// current player
let currentPlayer = 'x'

//  empty game board
const ticBoard = ['', '', '', '', '', '', '', '', '']

// check if game is a tie or gameOver
let gameOver = false

// turn off clicking for winner
const gameFinished = function () {
  if (gameOver === true) {
    $('.square').off()
    $('#message').hide(2000)
  }
}

// turn
const turn = () => {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
  $('#message').text(`${currentPlayer}, it is your turn`)
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
    (ticBoard[1] === ticBoard[4] && ticBoard[4] === ticBoard[7] && ticBoard[1] === currentPlayer) ||
    (ticBoard[2] === ticBoard[5] && ticBoard[5] === ticBoard[8] && ticBoard[2]) === currentPlayer) {
    gameOver = true
    $('#winOrTie').text(`${currentPlayer} wins!`)
  } else if (ticBoard.every(index => index !== '')) {
    gameOver = true
    $('#winOrTie').text('It is a tie!')
  }
}

// onClickbox
const onClickbox = function (event) {
  const currentSquare = $(event.target).data('id')
  const content = $(event.target).text()
  if (content === '' && currentPlayer === 'x') {
    $(event.target).text(currentPlayer)
    ticBoard[currentSquare] = currentPlayer
    gameState(ticBoard, currentPlayer)
    gameFinished()
    turn()
  } else if (content === '' && currentPlayer === 'o') {
    $(event.target).text(currentPlayer)
    ticBoard[currentSquare] = currentPlayer
    gameState(ticBoard, currentPlayer)
    gameFinished()
    turn()
  } else if (content !== '') {
    $('#message').text('Space is taken')
  }
}

const addEventHandler = function () {
  $('.square').on('click', onClickbox)
}

module.exports = {
  addEventHandler
}
