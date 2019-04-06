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
  const gamesPlayed = response.games.length
  $('#numberOfGames').text(`The number of games you have played is ${gamesPlayed}`)
}

module.exports = {
  onSuccessCreate,
  onFailureCreate,
  onBoardUpdateSuccess,
  onBoardUpdateFailure,
  getSuccess
}
