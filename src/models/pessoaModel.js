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

class PessoaModel {
  async cadastrarPessoa(nome, idade, endereco) {
    const query = 'INSERT INTO pessoa(nome, idade, endereco) VALUES($1, $2, $3) RETURNING *';
    const values = [nome, idade, endereco];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async atualizarPessoa(id, nome, idade, endereco) {
    const query = 'UPDATE pessoa SET nome = $2, idade = $3, endereco = $4 WHERE id = $1 RETURNING *';
    const values = [id, nome, idade, endereco];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async buscarPessoa(id) {
    const query = 'SELECT * FROM pessoa WHERE id = $1';
    const values = [id];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PessoaModel;
