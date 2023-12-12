const VacinaModel = require('../models/vacinaModel');

const vacinaModel = new VacinaModel();

const vacinaController = {
  cadastrarVacina: async (req, res) => {
    const { nome, protecao } = req.body;

    try {
      const vacina = await vacinaModel.cadastrarVacina(nome, protecao);
      res.json({ vacina });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  editarVacina: async (req, res) => {
    const { idVacina } = req.params;
    const { nome, protecao } = req.body;

    try {
      const vacina = await vacinaModel.editarVacina(idVacina, nome, protecao);
      res.json({ vacina });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  cadastrarPeriodoAplicacaoAno: async (req, res) => {
    const { idVacina } = req.params;
    const { ano } = req.body;

    try {
      const periodoAplicacaoAno = await vacinaModel.cadastrarPeriodoAplicacaoAno(idVacina, ano);
      res.json({ periodoAplicacaoAno });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  removerPeriodoAplicacaoAno: async (req, res) => {
    const { idPeriodoAplicacaoAno } = req.params;

    try {
      const periodoAplicacaoAno = await vacinaModel.removerPeriodoAplicacaoAno(idPeriodoAplicacaoAno);
      res.json({ periodoAplicacaoAno });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  cadastrarPeriodoAplicacaoMes: async (req, res) => {
    const { idVacina } = req.params;
    const { mes } = req.body;

    try {
      const periodoAplicacaoMes = await vacinaModel.cadastrarPeriodoAplicacaoMes(idVacina, mes);
      res.json({ periodoAplicacaoMes });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  removerPeriodoAplicacaoMes: async (req, res) => {
    const { idPeriodoAplicacaoMes } = req.params;

    try {
      const periodoAplicacaoMes = await vacinaModel.removerPeriodoAplicacaoMes(idPeriodoAplicacaoMes);
      res.json({ periodoAplicacaoMes });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },
};

module.exports = vacinaController;
