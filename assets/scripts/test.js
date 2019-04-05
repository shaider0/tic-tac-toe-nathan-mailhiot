const api = require('./api.js')
const ui = require('./ui.js')

const onNewGameClick = function () {
  api.createGame()
    .then(ui.onSuccessCreate)
}

/*  const gameID = function () {
  api.findID()
    .then(ui.onIdSuccess)
    .catch(ui.onIdFailure)
}
*/
const onBoardUpdate = function () {
  api.upDateGame()
    .then(ui.onBoardUpdateSuccess)
    .catch(ui.onBoardUpdateFailure)
}

const onGetGames = function () {
  api.getGames()
    .then(ui.getSuccess)
}

module.exports = {
  onNewGameClick,
  // gameID,
  onBoardUpdate,
  onGetGames
}
