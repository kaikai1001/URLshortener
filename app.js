const express = require('express')
const app = express()
require('./config/mongoose')

app.get('/', (req,res) => {
  res.send('hi')
})

app.listen(3000, (req,res) => {
  console.log('App is running on http://localhost:3000')
})

