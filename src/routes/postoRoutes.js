const express = require('express');
const router = express.Router();
const postoController = require('../controllers/postoController');

router.post('/cadastrar', postoController.cadastrarPosto);
router.get('/pesquisar/:endereco', postoController.pesquisarPostoPorEndereco);

module.exports = router;
