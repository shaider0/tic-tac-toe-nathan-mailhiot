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

const upDateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + `games/${store.game.id}`,
    method: 'PATCH',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {Authorization: 'Token token=' + store.user.token}
  })
}
module.exports = {
  createGame,
  upDateGame,
  getGames
}
