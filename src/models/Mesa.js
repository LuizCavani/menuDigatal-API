const mongoose = require('mongoose');

const MesaSchema = new mongoose.Schema({
    nome: {
        type: Number,
        required: true,
    },
});

mongoose.model('Mesa', MesaSchema);