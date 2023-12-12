const ConsultaVacinaProtecaoModel = require('../models/consultaVacinaProtecaoModel');

const consultaVacinaProtecaoModel = new ConsultaVacinaProtecaoModel();

const consultaVacinaProtecaoController = {
  buscarVacinasPorProtecao: async (req, res) => {
    const { protecao } = req.params;

    try {
      const vacinas = await consultaVacinaProtecaoModel.buscarVacinasPorProtecao(protecao);
      res.json({ vacinas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },
};

module.exports = consultaVacinaProtecaoController;
