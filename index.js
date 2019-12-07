const cors = require('cors')
const express = require('express')

exports.helloWorld = (req, res) => {
  res.status(200).send('Hello, World!')
}

const helloApp = express()

helloApp.get('/morning', (req, res) => {
  res.status(200).send('Good morning!')
})
helloApp.get('/users/:id', (req, res) => {
  res.status(200).send(`Hello, User: ${req.params.id}`)
})

exports.helloApp = helloApp

const helloMiddleware = express()

helloMiddleware.use(cors())

helloMiddleware.get('/animals/:id', (req, res) => {
  res.status(200).send(`Hello, Animal: ${req.params.id} with CORS`)
})

exports.helloMiddleware = helloMiddleware
