
const http = require('http');
// express library import
const express = require('express');
// create instance of express library
const app = express();
// create server 
const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000);



module.exports = app;