const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoaController');

router.post('/cadastrar', pessoaController.cadastrarPessoa);
router.put('/atualizar/:id', pessoaController.atualizarPessoa);
router.get('/buscar/:id', pessoaController.buscarPessoa);

module.exports = router;
