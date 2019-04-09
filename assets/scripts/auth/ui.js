const store = require('./../store.js')
// const eventr = require('./../events.js')

const signUpSuccess = function (data) {
  $('.up').show()
  // sign up message successful
  $('.up').text('You successfully signed up!')
  // sign up message hidden
  $('.up').hide(3000)
  // resets the form
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('.up').text('Something went wrong. Try again!')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  // show log in message
  $('.login').show()
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
  // eventr.onNewGame()
}

const signInFailure = function (data) {
  $('.login').show()
  $('.login').text('Something went wrong try again.')
}

const changePasswordSuccess = function (data) {
  $('.change').show()
  $('.change').text('You changed your password successfully')
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('.change').show()
  $('.change').text('Something went wrong try again.')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  // show sign out message
  $('.out').show()
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
  // hides password change
  $('.change').hide()
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
