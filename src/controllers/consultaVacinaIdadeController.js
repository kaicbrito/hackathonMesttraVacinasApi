const ConsultaVacinaIdadeModel = require('../models/consultaVacinaIdadeModel');

const consultaVacinaIdadeModel = new ConsultaVacinaIdadeModel();

const consultaVacinaIdadeController = {
  buscarVacinasPorAnoExato: async (req, res) => {
    const { idPessoa, ano } = req.params;

    try {
      const vacinas = await consultaVacinaIdadeModel.buscarVacinasPorAnoExato(idPessoa, ano);
      res.json({ vacinas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  buscarVacinasPorAnoAte: async (req, res) => {
    const { idPessoa, ano } = req.params;

    try {
      const vacinas = await consultaVacinaIdadeModel.buscarVacinasPorAnoAte(idPessoa, ano);
      res.json({ vacinas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  buscarVacinasPorMesExato: async (req, res) => {
    const { idPessoa, mes } = req.params;

    try {
      const vacinas = await consultaVacinaIdadeModel.buscarVacinasPorMesExato(idPessoa, mes);
      res.json({ vacinas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  buscarVacinasPorMesAte: async (req, res) => {
    const { idPessoa, mes } = req.params;

    try {
      const vacinas = await consultaVacinaIdadeModel.buscarVacinasPorMesAte(idPessoa, mes);
      res.json({ vacinas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },
};

module.exports = consultaVacinaIdadeController;
