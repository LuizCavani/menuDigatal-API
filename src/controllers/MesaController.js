const mongoose = require('mongoose');

const Mesa = mongoose.model('Mesa');

module.exports = {
    async index(req, res){
        try {
            const mesa = await Mesa.find();
            return res.json(mesa);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

    async show(req,res){
        try {
            const mesa = await Mesa.findById(req.params.id);
            return res.json(mesa);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel encontrar o item"
            }
        }
    },

    async store(req, res){
        try {
            const mesa = await Mesa.create(req.body);
            return res.json(mesa);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel criar o item"
            }
        }
    },

    async update(req, res){
        try {
            const mesa = await Mesa.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(mesa);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel atualizar o item"
            }
        }
    },

    async destroy(req, res){
        try {
            await Mesa.findByIdAndRemove(req.params.id);
            return res.send();
   
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel deletar o item"
            }
        }     

},
};