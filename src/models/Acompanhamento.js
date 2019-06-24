const mongoose = require('mongoose');

const AcompanhamentoSchema = new mongoose.Schema({
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
    },
    descricao: {
        type: String,
        required: true,
    },
});

mongoose.model('Acompanhamento', AcompanhamentoSchema);