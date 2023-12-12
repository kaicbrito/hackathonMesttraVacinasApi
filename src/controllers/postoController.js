const PostoModel = require('../models/postoModel');

const postoModel = new PostoModel();

const postoController = {
  cadastrarPosto: async (req, res) => {
    const { nome, endereco, isPublico } = req.body;

    try {
      const posto = await postoModel.cadastrarPosto(nome, endereco, isPublico);
      res.json({ posto });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  pesquisarPostoPorEndereco: async (req, res) => {
    const { endereco } = req.params;

    try {
      const postos = await postoModel.pesquisarPostoPorEndereco(endereco);
      res.json({ postos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },
};

module.exports = postoController;

postoController.js


