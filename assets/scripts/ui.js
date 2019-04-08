const store = require('./store.js')

const onSuccessCreate = function (data) {
  store.game = data.game
}
const onFailureCreate = function (data) {

}

const onBoardUpdateSuccess = function (data) {

}

const onBoardUpdateFailure = function (data) {

}

const getSuccess = function (response) {
  // gets the number of games played by the player
  const gamesPlayed = response.games.length
  // prints the message to the player
  $('#numberOfGames').text(`The number of games you have played is ${gamesPlayed}`)
  $('#numberOfGames').show()
}

module.exports = {
  onSuccessCreate,
  onFailureCreate,
  onBoardUpdateSuccess,
  onBoardUpdateFailure,
  getSuccess
}
