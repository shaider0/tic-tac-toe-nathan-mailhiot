const api = require('./api.js')
const ui = require('./ui.js')

const onNewGameClick = function () {
  api.createGame()
    .then(ui.onSuccessCreate)
}

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
  onBoardUpdate,
  onGetGames
}
