const CampanhaVacinaModel = require('../models/campanhaVacinaModel');

const campanhaVacinaModel = new CampanhaVacinaModel();

const campanhaVacinaController = {
  cadastrarVacinaCampanha: async (req, res) => {
    const { idCampanha, idVacina } = req.body;

    try {
      const campanhaVacina = await campanhaVacinaModel.cadastrarVacinaCampanha(idCampanha, idVacina);
      res.json({ campanhaVacina });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  deletarVacinaCampanha: async (req, res) => {
    const { idCampanhaVacina } = req.params;

    try {
      const campanhaVacina = await campanhaVacinaModel.deletarVacinaCampanha(idCampanhaVacina);
      res.json({ campanhaVacina });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  buscarCampanhaPorProtecao: async (req, res) => {
    const { protecao } = req.params;

    try {
      const campanhas = await campanhaVacinaModel.buscarCampanhaPorProtecao(protecao);
      res.json({ campanhas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },
};

module.exports = campanhaVacinaController;
