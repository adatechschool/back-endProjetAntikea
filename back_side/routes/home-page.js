// ---ROUTES for index.html---

// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()

// --- New Route :create the route to display X last fourniture to sell on the home page ---
// GET to obtain the info from the "meubles" table
router.get('/', (req, res) => {
    res.render('home-page')
})


// export router 
module.exports = router