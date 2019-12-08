const { createNew, getAll, getById } = require(
  './controllers/tickets.controller')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1/tickets',
  express.Router()
  .post('/', createNew)
  .get('/', getAll)
  .get('/:id', getById),
).listen(port)

module.exports = app
