const mongoose = require('mongoose');

const Cardapio = mongoose.model('Cardapio');

module.exports = {
    async index(req, res) {
        try {
            const { page = 1 } = req.query;
            const cardapio = await Cardapio.paginate({}, {page, limit: 2});
            return res.json(cardapio.docs);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

    async show(req,res) {
        try {
            const cardapio = await Cardapio.findById(req.params.id);
            return res.json(cardapio);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

    async store(req, res) {
        try {
            const cardapio = await Cardapio.create(req.body);
            return res.json(cardapio);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel criar o item"
            }
        }
    }, 

    async update(req, res) {
        try {
            const cardapio = await Cardapio.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(cardapio);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel atualizar o item"
            }
        }
    },

    async destroy(req, res){
        try {
            await Cardapio.findByIdAndRemove(req.params.id);
            return res.send();
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },
};