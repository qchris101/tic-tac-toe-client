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

// In here im going to write the code that references when
// the game is complete and shows who is the winner/loser/ and tie.
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
