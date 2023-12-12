const ConsultaVacinaModel = require('../models/consultaVacinaModel');

const consultaVacinaModel = new ConsultaVacinaModel();

const consultaVacinaController = {
  buscarInformacoesVacina: async (req, res) => {
    const { idVacina } = req.params;

    try {
      const informacoesVacina = await consultaVacinaModel.buscarInformacoesVacina(idVacina);
      res.json({ vacina: informacoesVacina });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },
};

module.exports = consultaVacinaController;
