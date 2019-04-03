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

// whose turn
const turn = () => {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
  return currentPlayer
}

// winner logic
const winner = function (ticBoard) {
  if (
    ((ticBoard[0] === ticBoard[1]) && (ticBoard[1] === ticBoard[2])) ||
    ((ticBoard[3] === ticBoard[4]) && (ticBoard[4] === ticBoard[5])) ||
    ((ticBoard[6] === ticBoard[7]) && (ticBoard[7] === ticBoard[8])) ||
    ((ticBoard[0] === ticBoard[4]) && (ticBoard[4] === ticBoard[8])) ||
    ((ticBoard[2] === ticBoard[4]) && (ticBoard[4] === ticBoard[6])) ||
    ((ticBoard[0] === ticBoard[3]) && (ticBoard[3] === ticBoard[6])) ||
    ((ticBoard[1] === ticBoard[4]) && (ticBoard[4] === ticBoard[7])) ||
    ((ticBoard[2] === ticBoard[5]) && (ticBoard[5] === ticBoard[8]))) {
    alert(`${currentPlayer}  you won!`)
  }
}

const onClickbox = function () {
  const currentSquare = $(event.target).data('id')
  const content = $(event.target).text()
  // if data id empty allow player to add text
  $(event.target).text(currentPlayer)
  console.log('click', currentSquare)
  ticBoard[currentSquare] = currentPlayer
  if (content === '' && currentPlayer === 'x') {
    $(event.target).text(currentPlayer)
    winner(ticBoard)
    turn()
  } else if (content === '' && currentPlayer === 'o') {
    $(event.target).text(currentPlayer)
    turn()
  } else {
    console.log('taken')
  }

  console.log(ticBoard)
  console.log(currentPlayer)
}
const addEventHandler = function () {
  $('.square').on('click', onClickbox)
}



module.exports = {
  addEventHandler
}
