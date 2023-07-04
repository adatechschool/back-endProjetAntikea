// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()
// use to transform schema in model
const mongoose = require('mongoose')
// access models user
const userModel = require('../models/user');

router.post('/login', (req, res, next) => {
  try {
    const email = req.email
    const password = req.password
    postLog(res, req, email, password)
  }
  catch(e) {
    console.log(e);
    res.status(500)
  }

  // si l'input email est trouver dans la BDD => regarder si le mdp corespond avec l'adersse mail trouvée

})

module.exports = router