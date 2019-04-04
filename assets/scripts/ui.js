
const events = require('./events.js')
// change the board with x and o
// winner logic
const winner = function () {
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

if (ticBoard.lastIndexOf('') !== undefined) {
  winner()
} else {
  console.log('it is a tie')
}
