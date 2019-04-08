const store = require('./../store.js')
const event = require('./../events.js')

const signUpSuccess = function (data) {
  // sign up message successful
  $('.up').text('You successfully signed up!')
  // sign up message hidden
  $('.up').hide(3000)
  // resets the form
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('.up').text('Something went wrong. Try again!')
}

const signInSuccess = function (data) {
  // login successful message
  $('.login').text('You logged in successfully!')
  // login message hidden
  $('.login').hide(2000)
  // signup and sign in form hidden
  $('#signInandUp').hide(2000)
  // sign out button revealed
  $('#sign-out').removeClass('signingOut')
  // new game button class is removed and the button is revealed
  $('#newG').removeClass('newGame')
  // game stats button class is removed and button is revealed
  $('#gS').removeClass('gameStats')
  // change password class is removed and it is revealed
  $('#change-password').removeClass('passwordChange')
  // to show the button after sign out has been used
  $('#change-password').show()
  // board is shown after signout has been used
  $('.hideboard').show()
  // storing user data to the store
  store.user = data.user
  // shows sign-out button
  $('#sign-out').show()
  // resetting the form
  $('form').trigger('reset')
  // starts a new game
  event.onNewGame()
}

const signInFailure = function (data) {
  $('.login').text('Something went wrong try again.')
}

const changePasswordSuccess = function (data) {
  $('.change').text('You changed your password successfully')
  $('.change').hide(3000)
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('.change').text('Something went wrong try again.')
}

const signOutSuccess = function () {
  // sign out message
  $('.out').text('You signed out successfully!')
  // hides sign out message
  $('.out').hide(4000)
  // hides change password
  $('#change-password').hide()
  // shows sign up and sign in form
  $('#signInandUp').show()
  // resets the form
  $('form').trigger('reset')
  // hides sign out
  $('#sign-out').hide()
  // hides the board
  $('.hideboard').hide()
  // hides the number of games played on sign out
  $('#numberOfGames').hide()
  store.user = null
}

const signOutFailure = function () {
  $('.out').text('Sign out failed, try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
