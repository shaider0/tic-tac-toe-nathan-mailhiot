const store = require('./store')
const config = require('./config.js')

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: {}
  })
}
/*
const upDateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + `game/${id}`,
    method: 'PATCH',
    game: {
    cell: {
      index: 0,
      value: "x"
    },
    over: false
  }
})
}

const findID = function (data) {
  return $.ajax({
    url: config.apiUrl + 'game/id'
    method: 'GET',
    headers: {authorization: 'Token, token=' + store.user.token}
  })
}
*/
module.exports = {

  createGame
}
