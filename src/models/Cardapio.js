const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const CardapioSchema = new mongoose.Schema({
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

CardapioSchema.plugin(mongoosePaginate);

mongoose.model('Cardapio', CardapioSchema);