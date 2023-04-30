const URL = require('./models/url')

const express = require('express')
const app = express()

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

const generateURL = require('./generateURL')

require('./config/mongoose')

//首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

//產生短網址路由
app.post('/', (req, res) => {
  if (!req.body.originalURL) return res.redirect('/')
  const shortURL = generateURL()
  URL.findOne({ originalURL: req.body.originalURL })
    .then(data => data ? data : URL.create({ originalURL: req.body.originalURL, shortURL }))
    .then((data) => {
      res.render('index', { shortURL: data.shortURL })
    })
    .catch(error => console.error(error))
})

//導至原網址
app.get('/:url', (req, res) => {
  URL.findOne({ shortURL: req.params.url })
    .then(data => {
      if (!data) {
        return res.render('error')
      }
      res.redirect(data.originalURL)
    })
    .catch(error => console.error(error))
})

app.listen(3000, (req, res) => {
  console.log('App is running on http://localhost:3000')
})

