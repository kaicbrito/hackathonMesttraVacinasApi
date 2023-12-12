const express = require('express');
const router = express.Router();
const campanhaVacinaController = require('../controllers/campanhaVacinaController');

router.post('/cadastrar', campanhaVacinaController.cadastrarVacinaCampanha);
router.delete('/deletar/:idCampanhaVacina', campanhaVacinaController.deletarVacinaCampanha);
router.get('/porprotecao/:protecao', campanhaVacinaController.buscarCampanhaPorProtecao);

module.exports = router;
