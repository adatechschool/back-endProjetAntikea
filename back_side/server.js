
// import express library and stokc it in a variable 
const express = require('express')
// intance of express : "app", its our application !
const app = express() //=server

// layouts to avoid code duplication - maybe unusefull 
const expressLayouts = require('express-ejs-layouts')

// import router
const indexRouter = require('./routes/index')

// server settings
app.set('view engine', 'ejs')  // set server views 
app.set('views', __dirname + '/views') // path views
app.set('layout', 'layouts/layout')  // layouts to display 

// server tools
app.use(expressLayouts)
app.use(express.static('public'))

// use the route
app.use('/', indexRouter)


// server start nad listen on a specify port
app.listen(process.env.PORT || 3000)