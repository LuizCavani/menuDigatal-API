const mongoose = require('mongoose');

const Bebida = mongoose.model('Bebida');

module.exports = {
    async index(req, res) {
        const bebida = await Bebida.find();

        return res.json(bebida);
    },

    async show(req,res) {
        const bebida = await Bebida.findById(req.params.id);

        return res.json(bebida);
    },

    async store(req, res) {
        const bebida = await Bebida.create(req.body);

        return res.json(bebida);
    },

    async update(req, res) {
        const bebida = await Bebida.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
  
        return res.json(bebida);
    },

    async destroy(req, res){
        await Bebida.findByIdAndRemove(req.params.id);

        return res.send();
    },
};