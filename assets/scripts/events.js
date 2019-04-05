// where you write functions
// const store = require('./store.js')
const api = require('./api.js')
// current player
let currentPlayer = 'x'

//  empty game board
let ticBoard = ['', '', '', '', '', '', '', '', '']

// check if game is a tie or gameOver
let gameOver = false

// turn off clicking for winner
const gameFinished = function () {
  if (gameOver === true) {
    $('.gameboard').hide()
    $('#message').hide(2000)
  }
}

// new game button
const onNewGame = function (event) {
  $('.square').text('')
  $('#winOrTie').text('')
  console.log(gameOver)
  gameOver = false
  ticBoard = ['', '', '', '', '', '', '', '', '']
  $('.gameboard').show(1000)
  turn()
  $('#message').show()
}

// turn
const turn = () => {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
    // call apiGameUpdate here
  } else {
    // call apiGameUpdate here
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
  // finds the squares id number
  // make currentSquare a global variable
  const currentSquare = $(event.target).data('id')
  // checks to see if the square is empty
  const content = $(event.target).text()
  // if the square is empty and the current player is x
  if (content === '' && currentPlayer === 'x') {
    // when clicked the current players text is entered
    $(event.target).text(currentPlayer)
    // the array is updated with the current players letter at the arrays index
    ticBoard[currentSquare] = currentPlayer
    api.upDateGame(ticBoard[currentSquare], currentPlayer, gameOver)
    // this checks to see if there is a winner
    gameState(ticBoard, currentPlayer)
    console.log(ticBoard)
    // this checks to see if the game is over
    gameFinished()
    // this changes the player
    turn()
  } else if (content === '' && currentPlayer === 'o') {
    $(event.target).text(currentPlayer)
    ticBoard[currentSquare] = currentPlayer
    // put patch data to be sent to store here
    console.log(ticBoard[currentSquare], currentPlayer, gameOver)
    api.upDateGame(ticBoard[currentSquare], currentPlayer, gameOver)
    gameState(ticBoard, currentPlayer)
    console.log(ticBoard)
    gameFinished()
    turn()
    // checks to see if the game is a tie
  } else if (content !== '') {
    $('#message').text('Space is taken')
  }
}

// passing my functions to my app file
const addEventHandler = function () {
  $('.square').on('click', onClickbox)
  $('.newGame').on('click', onNewGame)
}

module.exports = {
  addEventHandler
}
