const CampanhaModel = require('../models/campanhaModel');

const campanhaModel = new CampanhaModel();

const campanhaController = {
  cadastrarCampanha: async (req, res) => {
    const { nome, dataInicio, dataFim } = req.body;

    try {
      const campanha = await campanhaModel.cadastrarCampanha(nome, dataInicio, dataFim);
      res.json({ campanha });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  editarCampanha: async (req, res) => {
    const { idCampanha } = req.params;
    const { nome, dataInicio, dataFim } = req.body;

    try {
      const campanha = await campanhaModel.editarCampanha(idCampanha, nome, dataInicio, dataFim);
      res.json({ campanha });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  buscarCampanhaPorData: async (req, res) => {
    const { data } = req.params;

    try {
      const campanhas = await campanhaModel.buscarCampanhaPorData(data);
      res.json({ campanhas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },
};

module.exports = campanhaController;
