'use strict'
const store = require('./store')

const signUpSuccess = function (responseData) {
  $('.signUp-display').text('Signed up successfully!')
  $('.signUp-display').addClass('text-success')
  console.log('responseData is', responseData)
  setTimeout(() => {
    $('#sign-up').hide()
  }, 2000)
}

const signUpFailure = function (error) {
  $('#signUpFail').text('Sign up failed, Try Again')
  $('#signUpFail').addClass('text-danger')
  // setTimeout(() => {
  //   $('#signUpFail').hide()
  // }, 2000)
  console.error('error is' + error)
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  $('.signIn-display').text('Signed In successfully')
  $('.signIn-display').addClass('text-success')
  console.log('This is working')
}

const signInFailure = (error) => {
  $('#signInFail').text('Sign In failed, Incorrect Email or Password')
  $('#signInFail').addClass('text-danger')
  // setTimeout(() => {
  //   $('#signInFail').reset()
  // }, 5000)

  console.error('error is' + error)
}
const signOutSuccess = (responseData) => {
  store.user = responseData.user
  $('#signOut-display').html('Signed Out Successfully!')
  console.log('This is working')
 // $('#sign-up').show()
}

const signOutFailure = (error) => {
  $('#error-message').text('Sign In failed')

  $('#error-message').removeClass()

  $('#error-message').addClass('text-danger')
  console.error('error is' + error)
}

const newGameSuccess = (responseData) => {
  store.user = responseData.user
  $('#newGame').text('New Game Started successfully')
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
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
