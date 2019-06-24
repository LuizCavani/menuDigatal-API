const mongoose = require('mongoose');

const Mesa = mongoose.model('Mesa');

module.exports = {
    async index(req, res) {
        const mesa = await Mesa.find();

        return res.json(mesa);
    },

    async show(req,res) {
        const mesa = await Mesa.findById(req.params.id);

        return res.json(mesa);
    },

    async store(req, res) {
        const mesa = await Mesa.create(req.body);

        return res.json(mesa);
    },

    async update(req, res) {
        const mesa = await Mesa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
  
        return res.json(mesa);
    },

    async destroy(req, res){
        await Mesa.findByIdAndRemove(req.params.id);

        return res.send();
    },
};