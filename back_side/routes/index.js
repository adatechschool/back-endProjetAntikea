// ---ROUTES for index.html---

// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()

// GET route for basic url
router.get('/', (req, res) => {
    res.render('index')
})


// export router 
module.exports = router