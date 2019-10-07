const express = require('express')

const carsRouter = require('./cars/carsRouter')
const server = express()

server.use(express.json())

server.use('/api', carsRouter)

module.exports = server