
// import de la librairie mongoose pour pouvoir manipuler notre base de donnée
const mongoose = require('mongoose')

// Schéma d'un meuble dans notre base de données
const meubleSchema = mongoose.Schema({
    "nom":{type: String, required: true},
    "type": {type: String, required: true},
    "prix": {type: Number, required: true},
    "image": {type: String, required: true},
    "couleur": {type: String, required: true},
    "description": {type: String, required: true},
    "dimensions": {type: String, required: true},
    "matière": {type: String, required: true},
    "stock": {type: Number, required: true},
    "etat": {type: String, required: true},
    "id_vendeur": {type: String, required: true},
    "date_d_ajout": {type: String, required: true},
    "statut": {type: String, required: true}
})