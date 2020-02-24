const express = require('express')

// Cargo el modelo
const User = require('../models/User')

const router = express.Router()

router.get('/login', (_, res) => res.send('login'))

router.get('/register', (_, res) => res.render('register'))

router.post('/register', (req, res) => {
  const { name, email, password } = req.body
  const newUser = new User({ name, email, password })

  newUser
    .save()
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500))
})

module.exports = router
