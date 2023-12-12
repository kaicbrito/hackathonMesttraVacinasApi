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

class CampanhaModel {
  async cadastrarCampanha(nome, dataInicio, dataFim) {
    const query = `
      INSERT INTO campanha (nome, data_inicio, data_fim)
      VALUES ($1, $2, $3)
      RETURNING id, nome, data_inicio, data_fim;
    `;

    const values = [nome, dataInicio, dataFim];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async editarCampanha(idCampanha, nome, dataInicio, dataFim) {
    const query = `
      UPDATE campanha
      SET nome = $2, data_inicio = $3, data_fim = $4
      WHERE id = $1
      RETURNING id, nome, data_inicio, data_fim;
    `;

    const values = [idCampanha, nome, dataInicio, dataFim];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async buscarCampanhaPorData(data) {
    const query = `
      SELECT id, nome, data_inicio, data_fim
      FROM campanha
      WHERE $1 BETWEEN data_inicio AND data_fim;
    `;

    const values = [data];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CampanhaModel;
