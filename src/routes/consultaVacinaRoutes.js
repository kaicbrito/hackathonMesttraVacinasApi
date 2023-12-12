const express = require('express');
const router = express.Router();
const consultaVacinaController = require('../controllers/consultaVacinaController');

router.get('/buscar/:idVacina', consultaVacinaController.buscarInformacoesVacina);

module.exports = router;
