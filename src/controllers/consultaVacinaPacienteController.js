const ConsultaVacinaPacienteModel = require('../models/consultaVacinaPacienteModel');

const consultaVacinaPacienteModel = new ConsultaVacinaPacienteModel();

const consultaVacinaPacienteController = {
  buscarVacinasPorPaciente: async (req, res) => {
    const { idPaciente } = req.params;

    try {
      const vacinas = await consultaVacinaPacienteModel.buscarVacinasPorPaciente(idPaciente);
      res.json({ vacinas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  buscarVacinasPendentesPorPaciente: async (req, res) => {
    const { idPaciente } = req.params;

    try {
      const vacinas = await consultaVacinaPacienteModel.buscarVacinasPendentesPorPaciente(idPaciente);
      res.json({ vacinas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },
};

module.exports = consultaVacinaPacienteController;
