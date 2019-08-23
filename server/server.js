const express = require('express')
const app = express()
const port = 5050
// const db = require('./db_seeding')

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

// reviews
app.get('/reviews', (req, res) => {
  mysql = `select * from reviews`
  db
})

// listings
// app.get('/responses', (req, res) => {
//   mysql = `select * from reviews`
//   res.send('Hello World!')
// })

// responses

app.listen(port, () => console.log(`Server is listening on port ${port}`))