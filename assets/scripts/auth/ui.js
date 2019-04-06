const store = require('./../store.js')

const signUpSuccess = function (data) {
  $('.up').text('You successfully signed up!')
  $('#sign-up').hide(1000)
  $('.up').hide(6000)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('.up').text('Something went wrong. Try again!')
}

const signInSuccess = function (data) {
  $('.login').text('You logged in successfully!')
  $('#sign-in').hide(1000)
  $('.login').hide(6000)
  $('#sign-up').hide()
  $('#sign-out').removeClass('signingOut')
  $('#change-password').removeClass('passwordChange')
  $('#change-password').show()
  $('#newG').removeClass('newGame')
  $('#gS').removeClass('gameStats')
  store.user = data.user
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('.login').text('Something went wrong try again.')
}

const changePasswordSuccess = function (data) {
  $('.change').text('You changed your password successfully')
  $('.change').hide(6000)
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('.change').text('Something went wrong try again.')
}

const signOutSuccess = function () {
  $('.out').text('You signed out successfully!')
  $('.out').hide(6000)
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  console.log('Sign out failed')
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
