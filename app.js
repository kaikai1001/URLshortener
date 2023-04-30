const express = require('express')
const app = express()

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

require('./config/mongoose')

app.get('/', (req,res) => {
  res.render('index')
})

app.listen(3000, (req,res) => {
  console.log('App is running on http://localhost:3000')
})

