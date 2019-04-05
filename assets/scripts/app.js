'use strict'

const events = require('./events.js')
const auth = require('./auth/events.js')
const api = require('./api.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  events.addEventHandler()
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#change-password').on('submit', auth.onChangePassword)
  $('#sign-out').on('submit', auth.onSignOut)
  $('.newGame').on('click', api.createGame)
})

// put the game id's in an array and find the length to find the total number of games played
// need to find a way to clear the boxes
