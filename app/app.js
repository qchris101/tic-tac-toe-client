// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#indexZero').on('click', authEvents.indexZero)
  $('#indexOne').on('click', authEvents.indexOne)
  $('#indexTwo').on('click', authEvents.indexTwo)
  $('#indexThree').on('click', authEvents.indexThree)
  $('#indexFour').on('click', authEvents.indexFour)
  $('#indexFive').on('click', authEvents.indexFive)
  $('#indexSix').on('click', authEvents.indexSix)
  $('#indexSeven').on('click', authEvents.indexSeven)
  $('#indexEight').on('click', authEvents.indexEight)
  $('#new-game').on('click', authEvents.newGame)
})
