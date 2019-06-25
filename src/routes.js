const express = require('express');
const routes = express.Router();

const CardapioController = require('./controllers/CardapioController');
const AcompanhamentoController = require('./controllers/AcompanhamentoController');
const BebidaController = require('./controllers/BebidaController');
const MesaController = require('./controllers/MesaController');
const PedidoController = require('./controllers/PedidoController');
const CarrinhoController = require('./controllers/CarrinhoController');

//rotas cardapio
routes.get('/cardapio/:id', CardapioController.show);
routes.get('/cardapio', CardapioController.index);
routes.post('/cardapio', CardapioController.store);
routes.put('/cardapio/:id', CardapioController.update);
routes.delete('/cardapio/:id', CardapioController.destroy);
//rotas acompanhamento
routes.get('/acompanhamento/:id', AcompanhamentoController.show);
routes.get('/acompanhamento', AcompanhamentoController.index);
routes.post('/acompanhamento', AcompanhamentoController.store);
routes.put('/acompanhamento/:id', AcompanhamentoController.update);
routes.delete('/acompanhamento/:id', AcompanhamentoController.destroy);
//rotas bebida
routes.get('/bebida/:id', BebidaController.show);
routes.get('/bebida', BebidaController.index);
routes.post('/bebida', BebidaController.store);
routes.put('/bebida/:id', BebidaController.update);
routes.delete('/bebida/:id', BebidaController.destroy);
//rotas mesa
routes.get('/mesa/:id', MesaController.show);
routes.get('/mesa', MesaController.index);
routes.post('/mesa', MesaController.store);
routes.put('/mesa/:id', MesaController.update);
routes.delete('/mesa/:id', MesaController.destroy);
//rotas pedido
routes.get('/pedido/:id', PedidoController.show);
routes.get('/pedido', PedidoController.index);
routes.post('/pedido', PedidoController.store);
routes.put('/pedido/:id', PedidoController.update);
routes.delete('/pedido/:id', PedidoController.destroy);
//rotas carrinho
routes.get('/carrinho/:id', CarrinhoController.show);
routes.get('/carrinho', CarrinhoController.index);
routes.post('/carrinho', CarrinhoController.store);
routes.put('/carrinho/:id', CarrinhoController.update);
routes.delete('/carrinho/:id', CarrinhoController.destroy);
//autentica


module.exports = routes;