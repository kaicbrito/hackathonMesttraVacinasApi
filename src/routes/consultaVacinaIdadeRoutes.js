const express = require('express');
const router = express.Router();
const consultaVacinaIdadeController = require('../controllers/consultaVacinaIdadeController');

router.get('/porano/exato/:idPessoa/:ano', consultaVacinaIdadeController.buscarVacinasPorAnoExato);
router.get('/porano/ate/:idPessoa/:ano', consultaVacinaIdadeController.buscarVacinasPorAnoAte);
router.get('/pormes/exato/:idPessoa/:mes', consultaVacinaIdadeController.buscarVacinasPorMesExato);
router.get('/pormes/ate/:idPessoa/:mes', consultaVacinaIdadeController.buscarVacinasPorMesAte);

module.exports = router;
