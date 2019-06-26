const mongoose = require('mongoose');

const Bebida = mongoose.model('Bebida');

module.exports = {
    async index(req, res) {
        try {
            const bebida = await Bebida.find();
            return res.json(bebida);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

    async show(req,res) {
        try {
            const bebida = await Bebida.findById(req.params.id);
            return res.json(bebida);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

    async store(req, res) {
        try {
            const bebida = await Bebida.create(req.body);
            return res.json(bebida);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel criar o item"
            }
        }
    },

    async update(req, res) {
        try {    
            const bebida = await Bebida.findByIdAndUpdate(req.params.id, req.body, { new: true });  
            return res.json(bebida);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel atualizar o item"
            }
        }
    },

    async destroy(req, res){
        try {
            await Bebida.findByIdAndRemove(req.params.id);
            return res.send();
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel deletar o item"
            }
        }
    },
};