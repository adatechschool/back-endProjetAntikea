
// const http = require('http');
// express library import
const express = require('express');
// create instance of express library
const app = express();

// utilisation de layout, mais à voir à mon avis le front s'en occupe
const expressLayouts = require('express-ejs-layouts')

// ---- Configuer notre applicatio express ---
// d'où vont venir nos vues 
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
// same same, les layouts qui permettent de ne pas dupliquer les partites statiques du code front
app.set('layout', 'layouts/layout')

// dire à notre server quoi utiliser
app.use(expressLayouts)
app.use(express.static('public'))


// create server 
/* const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
}); */


// ---- Dire à notre application d'écouter ce qu'il se passe coté server ----
app.listen(process.env.PORT || 3000);
    //process.en.PORT : on écoute par rapport à une variable d'environnement, c'est le server qui va nous dire
    //quel port il est en trai d'écouter
    //3000 : Port par défaut avant déploiement (pour la partie développement)




//module.exports = app;