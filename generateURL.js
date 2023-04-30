function rand(array) {
  const i = Math.floor(Math.random() * array.length)
  return array[i]
}

function generateURL() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = []
  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(upperCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))

  let url = ''
  for (let i = 0; i < 5; i++) {
    url += rand(collection)
  }
  return url
}

module.exports = generateURL