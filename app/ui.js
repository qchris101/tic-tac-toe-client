'use strict'
// const store = require('../store')

const signUpSuccess = (responseData) => {

}

const signUpFailure = (error) => {
  $('#error-message').text('Sign up failed')

  $('#error-message').removeClass()

  $('#error-message').addClass('text-danger')
  console.error('error is' + error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
