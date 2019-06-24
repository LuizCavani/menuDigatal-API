const mongoose = require('mongoose');

const Cardapio = mongoose.model('Cardapio');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const cardapio = await Cardapio.paginate({}, {page, limit: 2});
        

        return res.json(cardapio.docs);
    },

    async show(req,res) {
        const cardapio = await Cardapio.findById(req.params.id);

        return res.json(cardapio);
    },

    async store(req, res) {
        const cardapio = await Cardapio.create(req.body);

        return res.json(cardapio);
    }, 

    async update(req, res) {
        const cardapio = await Cardapio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
  
        return res.json(cardapio);
    },

    async destroy(req, res){
        await Cardapio.findByIdAndRemove(req.params.id);

        return res.send();
    },
};