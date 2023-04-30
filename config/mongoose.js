const mongoose = require('mongoose')

//process.env.MONGODB_URI
mongoose.connect('mongodb+srv://alpha:camp@cluster0.rdlqvcs.mongodb.net/url-list?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db