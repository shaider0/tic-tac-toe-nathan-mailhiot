const store = require('./store.js')

const onSuccessCreate = function (data) {
  store.game = data.game
  console.log('successful game created')
}

module.exports = {
  onSuccessCreate
}
