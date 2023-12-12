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

class ConsultaVacinaProtecaoModel {
  async buscarVacinasPorProtecao(protecao) {
    const query = `
      SELECT 
        nome
      FROM 
        vacina
      WHERE 
        LOWER(protecao) LIKE LOWER($1);
    `;

    const values = [`%${protecao}%`];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConsultaVacinaProtecaoModel;
