const mongoose = require('mongoose');

const BebidaSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
        
    },
    valor: {
        type: Number,
        required: true,
    }
});

mongoose.model('Bebida', BebidaSchema);