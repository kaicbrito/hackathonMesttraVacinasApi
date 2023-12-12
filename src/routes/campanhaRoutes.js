const express = require('express');
const router = express.Router();
const campanhaController = require('../controllers/campanhaController');

router.post('/cadastrar', campanhaController.cadastrarCampanha);
router.put('/editar/:idCampanha', campanhaController.editarCampanha);
router.get('/porData/:data', campanhaController.buscarCampanhaPorData);

module.exports = router;
