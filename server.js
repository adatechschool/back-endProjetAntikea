// condition if we are in developement or in deployement
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// import express library and stokc it in a variable 
const express = require('express')

// intance of express : "app", its our application !
const app = express() //=server

// layouts to avoid code duplication - maybe unusefull 
const expressLayouts = require('express-ejs-layouts')

// middleware to translate requests to something nodeJS understand
const bodyParser = require('body-parser')

// import router
const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')
const meublesRouter = require('./routes/meubles')
const signinRouter = require('./routes/signin')
// const meublesTypeRouter = require('./routes/meubles')

// server tools
app.use(expressLayouts)
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.json())

// setting up our database
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    // log if we are connected or not to the database
    .then(() => {
        console.log('Connexion à la base de données réussie')
    })
    .catch((error) => {
        console.error('Erreur lors de la connexion à la base de données :', error)
    })

// use the route
app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/meubles', meublesRouter)
app.use('/signin', signinRouter)
// app.use('/meubles/:type', meublesTypeRouter)
// attention le login et le signin nous emmènes sur le meme chemin, à corriger svp

// server start nad listen on a specify port
app.listen(process.env.PORT || 3000)