const store = require('./store.js')

const onSuccessCreate = function (data) {
  store.game = data.game
  console.log('successful game created', data)
}
const onFailureCreate = function (data) {
  console.log('you game failed to create')
}

/* const onIdSuccess = function (data) {
  store.id = store.game.id
} */

const onBoardUpdateSuccess = function (data) {

}

const onBoardUpdateFailure = function (data) {

}

const getSuccess = function (response) {
  console.log(response)
}

module.exports = {
  onSuccessCreate,
  onFailureCreate,
  onBoardUpdateSuccess,
  onBoardUpdateFailure,
  getSuccess
}
