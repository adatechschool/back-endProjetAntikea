// ------ MEUBLE SCHEMA ------

/* A schema is a structure that defines the shape of the documents within a collection. 
The schema acts as a model for the documents, allowing MongoDB to enforce data consistency and provide a predictable structure for the data stored in the database.
Developers can specify the expected structure of their data and utilize features such as data validation, default values, and pre/post hooks for document lifecycle events.
 */

const mongoose = require('mongoose')

const meubleSchema = new mongoose.Schema({
    "nom": { type: String, required: true },
    "type": { type: String, required: true },
    "prix": { type: Number, required: true },
    "image": { type: String, required: true },
    "couleur": { type: String, required: true },
    "description": { type: String, required: true },
    "dimensions": { type: String, required: true },
    "matiere": { type: String, required: true },
    "stock": { type: Number, required: true },
    "etat": { type: String, required: true },
    "id_vendeur": { type: String, required: true },
    "date_d_ajout": { type: String, required: true },
    "statut": { type: String, required: true },
})

const meubleModel = mongoose.model('Meuble', meubleSchema)

module.exports = meubleModel