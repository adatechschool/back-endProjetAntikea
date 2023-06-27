const express = require('express')
const app = express()

// les layouts mais peut être du front ?
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))

app.listen(process.env.PORT || 3000)