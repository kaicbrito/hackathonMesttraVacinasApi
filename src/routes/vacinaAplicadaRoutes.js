const express = require('express');
const router = express.Router();
const vacinaAplicadaController = require('../controllers/vacinaAplicadaController');

router.post('/cadastrar', vacinaAplicadaController.cadastrarVacinaAplicada);
router.delete('/excluir/:id', vacinaAplicadaController.excluirVacinaAplicada);
router.get('/buscar/:id', vacinaAplicadaController.buscarVacinaAplicada);

module.exports = router;
