const mongoose = require('mongoose');

const basketSchema = new mongoose.Schema({
    "userId": { type: String, required: true },
    "meubles": [{
        "meubleId": { type: String, required: true },
        "quantity": { type: Number, required: true },
    }],
    "totalPrice": { type: Number, required: true },
    "createdAt": { type: Date, default: Date.now },
    "status": { type: String, required: true }
});

const basketModel = mongoose.model('basket', basketSchema);

module.exports = basketModel;