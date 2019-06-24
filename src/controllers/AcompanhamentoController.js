const mongoose = require('mongoose');

const Acompanhamento = mongoose.model('Acompanhamento');

module.exports = {
    async index(req, res) {
        try {
            const acompanhamento = await Acompanhamento.find();

            return res.json(acompanhamento);
        }
        catch(err) {
            console.log
        }
    },

    async show(req,res) {
        const acompanhamento = await Acompanhamento.findById(req.params.id);

        return res.json(acompanhamento);
    },

    async store(req, res) {
        const acompanhamento = await Acompanhamento.create(req.body);

        return res.json(acompanhamento);
    },

    async update(req, res) {
        const acompanhamento = await Acompanhamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
  
        return res.json(acompanhamento);
    },

    async destroy(req, res){
        await Acompanhamento.findByIdAndRemove(req.params.id);

        return res.send();
    },
};