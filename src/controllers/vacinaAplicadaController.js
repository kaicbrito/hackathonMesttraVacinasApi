const VacinaAplicadaModel = require('../models/vacinaAplicadaModel');

const vacinaAplicadaModel = new VacinaAplicadaModel();

const vacinaAplicadaController = {
  cadastrarVacinaAplicada: async (req, res) => {
    const { pessoaId, nomeVacina, dataAplicacao } = req.body;

    try {
      const novaVacina = await vacinaAplicadaModel.cadastrarVacinaAplicada(pessoaId, nomeVacina, dataAplicacao);
      res.json({ vacina: novaVacina });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  excluirVacinaAplicada: async (req, res) => {
    const { id } = req.params;

    try {
      const vacinaExcluida = await vacinaAplicadaModel.excluirVacinaAplicada(id);
      res.json({ vacina: vacinaExcluida });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  buscarVacinaAplicada: async (req, res) => {
    const { id } = req.params;

    try {
      const vacina = await vacinaAplicadaModel.buscarVacinaAplicada(id);
      res.json({ vacina });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },
};

module.exports = vacinaAplicadaController;
