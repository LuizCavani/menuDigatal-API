const mongoose = require('mongoose');

const Pedido = mongoose.model('Pedido');

module.exports = {
    async index(req, res){
        try {
            const pedido = await Pedido.find();
            return res.json(pedido);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

    async show(req, res){
        try {
            const pedido = await Pedido.findById(req.params.id);
            return res.json(pedido);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

    async store(req, res){
        try {
            const pedido = await Pedido.create(req.body);
            return res.json(pedido);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

    async update(req, res){
        try {
            const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(pedido);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

    async destroy(req, res){
        try {
            await Pedido.findByIdAndRemove(req.params.id);
            return res.send();
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

};