const express = require('express');
const router = express.Router();
const consultaVacinaPacienteController = require('../controllers/consultaVacinaPacienteController');

router.get('/porpaciente/:idPaciente', consultaVacinaPacienteController.buscarVacinasPorPaciente);
router.get('/pendentes/:idPaciente', consultaVacinaPacienteController.buscarVacinasPendentesPorPaciente);

module.exports = router;
