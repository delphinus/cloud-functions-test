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

const certainNiceMiddleware = async () => {
  // some nice logic here
  return (req, res, next) => {
    res.headers['from-a-middleware'] = 'true'
  }
}

const helloAsyncMiddleware = express()

;(async () => {
  const mw = await certainNiceMiddleware()
  helloAsyncMiddleware.use(mw)
})()

helloAsyncMiddleware.get('/hello', (req, res) => {
  res.status(200).send('Hello, World! with an async middleware')
})

exports.helloAsyncMiddleware = helloAsyncMiddleware
