const PessoaModel = require('../models/pessoaModel');

const pessoaModel = new PessoaModel();

const pessoaController = {
  cadastrarPessoa: async (req, res) => {
    const { nome, idade, endereco } = req.body;

    try {
      const novaPessoa = await pessoaModel.cadastrarPessoa(nome, idade, endereco);
      res.json({ pessoa: novaPessoa });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  atualizarPessoa: async (req, res) => {
    const { id } = req.params;
    const { nome, idade, endereco } = req.body;

    try {
      const pessoaAtualizada = await pessoaModel.atualizarPessoa(id, nome, idade, endereco);
      res.json({ pessoa: pessoaAtualizada });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },

  buscarPessoa: async (req, res) => {
    const { id } = req.params;

    try {
      const pessoa = await pessoaModel.buscarPessoa(id);
      res.json({ pessoa });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },
};

module.exports = pessoaController;
