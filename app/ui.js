'use strict'
const store = require('./store')

const signUpSuccess = function (responseData) {
  $('#movies-display').text('Signed up successfully!')
  $('#movies-display').addClass('text-success')
  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  $('#error-message').text('Sign up failed')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error('error is' + error)
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  $('#movies-display').text('Signed In successfully')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('form').trigger('reset')
  $('#after-sign-in').show()
  $('#before-sign-in').hide()
}

const signInFailure = (error) => {
  $('#error-message').text('Sign In failed')

  $('#error-message').removeClass()

  $('#error-message').addClass('text-danger')
  console.error('error is' + error)
}
const signOutSuccess = (responseData) => {
  store.user = responseData.user
  $('#movies-display').text('Signed Out successfully')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('form').trigger('reset')
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
}

const signOutFailure = (error) => {
  $('#error-message').text('Sign In failed')

  $('#error-message').removeClass()

  $('#error-message').addClass('text-danger')
  console.error('error is' + error)
}

const newGameSuccess = (responseData) => {
  store.user = responseData.user
  $('#movies-display').text('New Game Started successfully')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('form').trigger('reset')
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
}
const newGameFailure = (error) => {
  $('#error-message').text('New Game failed')

  $('#error-message').removeClass()

  $('#error-message').addClass('text-danger')
  console.error('error is' + error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  newGameFailure,
  newGameSuccess
}
