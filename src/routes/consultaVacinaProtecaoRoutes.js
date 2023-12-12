const express = require('express');
const router = express.Router();
const consultaVacinaProtecaoController = require('../controllers/consultaVacinaProtecaoController');

router.get('/porprotecao/:protecao', consultaVacinaProtecaoController.buscarVacinasPorProtecao);

module.exports = router;
