// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()
// use to transform schema in model
const mongoose = require('mongoose')
// access models user
const userModel = require('../models/user');

function login() {
  let email = document.getElementById("inputemail").value
  let password = document.getElementById("inputmdp").value

  
}

module.exports = router