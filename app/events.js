const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onSignOut = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signOut(formData)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

let currentPlayer = 'X'
const playerRotation = function () {
  if (currentPlayer === '' || currentPlayer === 'X') {
    currentPlayer = 'O'
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X'
  }
  return currentPlayer
}
// const playerTurn = function () {
//   $('#playerStatus').innerHTML = `It is currently ${currentPlayer} turn!`
// }
const spacesOnboard = ['', '', '', '', '', '', '', '', '']
playerRotation()
// playerTurn()
const indexZero = function (event) {
  event.preventDefault()
  if (spacesOnboard[0] === '') {
    spacesOnboard.splice(0, 1, playerRotation())
    document.getElementById('indexZero').innerHTML = spacesOnboard[0]
    console.log(spacesOnboard)
  } else {
    console.log('Whoops try somewhere else')
  }
}
const indexOne = function (event) {
  event.preventDefault()
  if (spacesOnboard[1] === '') {
    spacesOnboard.splice(1, 1, playerRotation())
    document.getElementById('indexOne').innerHTML = spacesOnboard[1]
    console.log(spacesOnboard)
  } else {
    console.log('This space is already used up!')
  }
}
const indexTwo = function (event) {
  event.preventDefault()
  if (spacesOnboard[2] === '') {
    spacesOnboard.splice(2, 1, playerRotation())
    document.getElementById('indexTwo').innerHTML = spacesOnboard[2]
  } else {
    console.log('This space is already used up!')
  }
}
const indexThree = function (event) {
  event.preventDefault()
  if (spacesOnboard[3] === '') {
    spacesOnboard.splice(3, 1, playerRotation())
    document.getElementById('indexThree').innerHTML = spacesOnboard[3]
    console.log(spacesOnboard)
  } else {
    console.log('This space is already used up!')
  }
}
const indexFour = function (event) {
  event.preventDefault()
  if (spacesOnboard[4] === '') {
    spacesOnboard.splice(4, 1, playerRotation())
    document.getElementById('indexFour').innerHTML = spacesOnboard[4]
    console.log(spacesOnboard)
  } else {
    console.log('This space is already used up!')
  }
}
const indexFive = function (event) {
  event.preventDefault()
  if (spacesOnboard[5] === '') {
    spacesOnboard.splice(5, 1, playerRotation())
    document.getElementById('indexFive').innerHTML = spacesOnboard[5]
    console.log(spacesOnboard)
  } else {
    console.log('This space is already used up!')
  }
}
const indexSix = function (event) {
  event.preventDefault()
  if (spacesOnboard[6] === '') {
    spacesOnboard.splice(6, 1, playerRotation())
    document.getElementById('indexSix').innerHTML = spacesOnboard[6]
    console.log(spacesOnboard)
  } else {
    console.log('This space is already used up!')
  }
}
const indexSeven = function (event) {
  event.preventDefault()
  if (spacesOnboard[7] === '') {
    spacesOnboard.splice(7, 1, playerRotation())
    document.getElementById('indexSeven').innerHTML = spacesOnboard[7]
    console.log(spacesOnboard)
  } else {
    console.log('This space is already used up!')
  }
}
const indexEight = function (event) {
  event.preventDefault()
  if (spacesOnboard[8] === '') {
    spacesOnboard.splice(8, 1, playerRotation())
    document.getElementById('indexEight').innerHTML = spacesOnboard[8]
    console.log(spacesOnboard)
  } else {
    console.log('This space is already used up!')
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  indexZero,
  indexOne,
  indexTwo,
  indexThree,
  indexFour,
  indexFive,
  indexSix,
  indexSeven,
  indexEight

}
