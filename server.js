const express = require(express)

const server = express()

server.use(json())

server.use('/api', carsRouter)

module.exports(server)