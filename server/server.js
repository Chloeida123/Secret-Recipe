const express = require('express')
const path = require('path')

const foodsRoutes = require('./routes/foods')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/foods', foodsRoutes)


module.exports = server
