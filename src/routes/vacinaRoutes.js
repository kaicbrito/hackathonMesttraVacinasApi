const express = require('express');
const router = express.Router();
const vacinaController = require('../controllers/vacinaController');

router.post('/cadastrar', vacinaController.cadastrarVacina);
router.put('/editar/:idVacina', vacinaController.editarVacina);
router.post('/:idVacina/periodoano/cadastrar', vacinaController.cadastrarPeriodoAplicacaoAno);
router.delete('/periodoano/remover/:idPeriodoAplicacaoAno', vacinaController.removerPeriodoAplicacaoAno);
router.post('/:idVacina/periodomes/cadastrar', vacinaController.cadastrarPeriodoAplicacaoMes);
router.delete('/periodomes/remover/:idPeriodoAplicacaoMes', vacinaController.removerPeriodoAplicacaoMes);

module.exports = router;
