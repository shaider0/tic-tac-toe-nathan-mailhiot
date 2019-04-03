// where you write functions

// need to check to see whose turn it is

// need to add the appropriate letter

// current player
// let currentPlayer = 'o'
//
// // empty game board
// const ticBoard = ['', '', '', '', '', '', '', '', '']
//
// // whose turn
// const turn = () => {
//   if (currentPlayer === 'o') {
//     currentPlayer = 'x'
//   } else {
//     currentPlayer = 'o'
//   }
//   return currentPlayer
// }

const onClickbox = function () {
  const currentSquare = $(event.target).data('id')
  console.log('click', currentSquare)
}
const addEventHandler = function () {
  $('.square').on('click', onClickbox)
}

// const onClick1 = $('#box1').on('click', (event) => {
//   $(event.target).text(currentPlayer)
//   ticBoard[1] = currentPlayer
//   turn()
//   console.log(ticBoard)
//   console.log(event.target)
// })
//
// const onClick2 = $('#box2').on('click', (event) => {
//   $(event.target).text(currentPlayer)
//   ticBoard[2] = currentPlayer
//   turn()
//   console.log(ticBoard)
//   console.log(event.target)
// })
//
// const onClick3 = $('#box3').on('click', (event) => {
//   $(event.target).text(currentPlayer)
//   ticBoard[3] = currentPlayer
//   turn()
//   console.log(ticBoard)
//   console.log(event.target)
// })
//
// const onClick4 = $('#box4').on('click', (event) => {
//   $(event.target).text(currentPlayer)
//   ticBoard[4] = currentPlayer
//   turn()
//   console.log(ticBoard)
//   console.log(event.target)
// })
//
// const onClick5 = $('#box5').on('click', (event) => {
//   $(event.target).text(currentPlayer)
//   ticBoard[5] = currentPlayer
//   turn()
//   console.log(ticBoard)
//   console.log(event.target)
// })
//
// const onClick6 = $('#box6').on('click', (event) => {
//   $(event.target).text(currentPlayer)
//   ticBoard[6] = currentPlayer
//   turn()
//   console.log(ticBoard)
//   console.log(event.target)
// })
//
// const onClick7 = $('#box7').on('click', (event) => {
//   $(event.target).text(currentPlayer)
//   ticBoard[7] = currentPlayer
//   turn()
//   console.log(ticBoard)
//   console.log(event.target)
// })
//
// const onClick8 = $('#box8').on('click', (event) => {
//   $(event.target).text(currentPlayer)
//   ticBoard[8] = currentPlayer
//   turn()
//   console.log(ticBoard)
//   console.log(event.target)
// })

module.exports = {
  addEventHandler
}
