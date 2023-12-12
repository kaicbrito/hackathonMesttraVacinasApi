const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    ca: fs.readFileSync('/path/to/ca.pem'),
    key: fs.readFileSync('/path/to/private-key.pem'),
    cert: fs.readFileSync('/path/to/certificate.pem'),
    rejectUnauthorized: true,
  },
});

class VacinaAplicadaModel {
  async cadastrarVacinaAplicada(pessoaId, nomeVacina, dataAplicacao) {
    const query = 'INSERT INTO vacina_aplicada(pessoa_id, nome_vacina, data_aplicacao) VALUES($1, $2, $3) RETURNING *';
    const values = [pessoaId, nomeVacina, dataAplicacao];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async excluirVacinaAplicada(id) {
    const query = 'DELETE FROM vacina_aplicada WHERE id = $1 RETURNING *';
    const values = [id];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async buscarVacinaAplicada(id) {
    const query = 'SELECT * FROM vacina_aplicada WHERE id = $1';
    const values = [id];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VacinaAplicadaModel;
