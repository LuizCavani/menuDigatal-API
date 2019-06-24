const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    }
});

mongoose.model('Pedido', PedidoSchema);