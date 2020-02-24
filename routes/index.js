const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const obj = {
    title: 'soy un title',
    message: 'hola mundo :)',
  }
  return res.render('index', obj)
})

module.exports = router
