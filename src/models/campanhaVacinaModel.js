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

class CampanhaVacinaModel {
  async cadastrarVacinaCampanha(idCampanha, idVacina) {
    const query = `
      INSERT INTO campanhavacina (id_campanha, id_vacina)
      VALUES ($1, $2)
      RETURNING id, id_campanha, id_vacina;
    `;

    const values = [idCampanha, idVacina];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async deletarVacinaCampanha(idCampanhaVacina) {
    const query = `
      DELETE FROM campanhavacina
      WHERE id = $1
      RETURNING id, id_campanha, id_vacina;
    `;

    const values = [idCampanhaVacina];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async buscarCampanhaPorProtecao(protecao) {
    const query = `
      SELECT campanha.id AS id_campanha, campanha.nome AS nome_campanha, vacina.nome AS nome_vacina
      FROM campanha
      JOIN campanhavacina ON campanha.id = campanhavacina.id_campanha
      JOIN vacina ON campanhavacina.id_vacina = vacina.id
      WHERE LOWER(vacina.protecao) LIKE LOWER($1);
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

module.exports = CampanhaVacinaModel;
