const mongoose = require('mongoose');
const Acompanhamento = mongoose.model('Acompanhamento');

module.exports = {

 


    async index(req, res) {
        try {
            const acompanhamento = await Acompanhamento.find();
            return res.json(acompanhamento);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel carregar os itens"
            }
        }
    },

    async show(req,res) {
        try {
            const acompanhamento = await Acompanhamento.findById(req.params.id);

            return res.json(acompanhamento); 
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel carrega o iten"
            }
        }
    },

    async store(req, res) {
        try {    
            const acompanhamento = await Acompanhamento.create(req.body);
            return res.json(acompanhamento);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel carrega o item"
            }
        }
    },

    async update(req, res) {
        try {
            const acompanhamento = await Acompanhamento
                .findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(acompanhamento);
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel atualizar o item"
            }
        }
    },

    async destroy(req, res){
        try {
            await Acompanhamento.findByIdAndRemove(req.params.id);
            return res.send();
        }
        catch(err) {
            req.body = {
                error: "Não foi possivel deletar o iten"
            }
        }
    },
};

