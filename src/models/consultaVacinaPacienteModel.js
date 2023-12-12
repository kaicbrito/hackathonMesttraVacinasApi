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

class ConsultaVacinaPacienteModel {
  async buscarVacinasPorPaciente(idPaciente) {
    const query = `
      SELECT 
        vacina.nome AS nome_vacina,
        vacina_aplicada.data_aplicacao
      FROM 
        vacina_aplicada
      JOIN 
        vacina ON vacina_aplicada.id_vacina = vacina.id
      WHERE 
        vacina_aplicada.id_pessoa = $1
      ORDER BY 
        vacina_aplicada.data_aplicacao DESC;
    `;

    const values = [idPaciente];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async buscarVacinasPendentesPorPaciente(idPaciente) {
    const query = `
      SELECT 
        vacina.nome AS nome_vacina
      FROM 
        vacina
      WHERE 
        vacina.id NOT IN (
          SELECT id_vacina FROM vacina_aplicada
          WHERE id_pessoa = $1
        );
    `;

    const values = [idPaciente];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConsultaVacinaPacienteModel;
