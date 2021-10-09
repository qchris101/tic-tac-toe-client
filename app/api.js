
const config = require('../app/config')
// const store = require('../app/store')
const signUp = (formData) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp
}
