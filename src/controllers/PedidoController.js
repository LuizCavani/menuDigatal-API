const mongoose = require('mongoose');

const Pedido = mongoose.model('Pedido');

module.exports = {
    async index(req, res) {
        const pedido = await Pedido.find();

        return res.json(pedido);
    },

    async show(req,res) {
        const pedido = await Pedido.findById(req.params.id);

        return res.json(pedido);
    },

    async store(req, res) {
        const pedido = await Pedido.create(req.body);

        return res.json(pedido);
    },

    async update(req, res) {
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
  
        return res.json(pedido);
    },

    async destroy(req, res){
        await Pedido.findByIdAndRemove(req.params.id);

        return res.send();
    },
};