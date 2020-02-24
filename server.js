const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/keys')

const app = express()

// Conexión a mongoDB
mongoose
  .connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('conectado'))
  .catch((err) => console.log(err))

// Archivos publicos
app.use('/static', express.static(__dirname + '/public'))

// Gestor de template
app.set('view engine', 'pug')

// BodyParser
app.use(express.urlencoded({ extended: true }))

// Rutas
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

// Puerto
const port = process.env.PORT || 3000

// Liste
app.listen(port, console.log(`server started at ${port}`))
