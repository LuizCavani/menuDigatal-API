const mongoose = require('mongoose');

const Carrinho = mongoose.model('Carrinho');

module.exports = {
    async index(req, res){
        try {
            const carrinho = await Carrinho.find();
            return res.json(carrinho);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

    async show(req,res){
        try {
            const carrinho = await Carrinho.findById(req.params.id);
            return res.json(carrinho);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

    async store(req, res){
        try {
            const carrinho = await Carrinho.create(req.body);
            return res.json(carrinho);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel criar o item"
            }
        }
    },

    async update(req, res){
        try {
            const carrinho = await Carrinho.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(carrinho);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel atualizar o item"
            }
        }
    },

    async destroy(req, res){
        try {
            await Carrinho.findByIdAndRemove(req.params.id);
            return res.send();
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel deletar o item"
            }
        }
    },
    async select(req, res){
        try {
            const valor = await Carrinho.find().select( $sum:'valor');
            return res.json(total);
        }
        /*
            { $group: { _id: null, amount: { $sum: "$amount" } } }
        */ 
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },
};