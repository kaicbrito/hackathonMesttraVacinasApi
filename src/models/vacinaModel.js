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

class VacinaModel {
  async cadastrarVacina(nome, protecao) {
    const query = `
      INSERT INTO vacina (nome, protecao)
      VALUES ($1, $2)
      RETURNING id, nome, protecao;
    `;

    const values = [nome, protecao];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async editarVacina(idVacina, nome, protecao) {
    const query = `
      UPDATE vacina
      SET nome = $2, protecao = $3
      WHERE id = $1
      RETURNING id, nome, protecao;
    `;

    const values = [idVacina, nome, protecao];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async cadastrarPeriodoAplicacaoAno(idVacina, ano) {
    const query = `
      INSERT INTO periodoaplicacaoano (id_vacina, ano)
      VALUES ($1, $2)
      RETURNING id, id_vacina, ano;
    `;

    const values = [idVacina, ano];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async removerPeriodoAplicacaoAno(idPeriodoAplicacaoAno) {
    const query = `
      DELETE FROM periodoaplicacaoano
      WHERE id = $1
      RETURNING id, id_vacina, ano;
    `;

    const values = [idPeriodoAplicacaoAno];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async cadastrarPeriodoAplicacaoMes(idVacina, mes) {
    const query = `
      INSERT INTO periodoaplicacaomes (id_vacina, mes)
      VALUES ($1, $2)
      RETURNING id, id_vacina, mes;
    `;

    const values = [idVacina, mes];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async removerPeriodoAplicacaoMes(idPeriodoAplicacaoMes) {
    const query = `
      DELETE FROM periodoaplicacaomes
      WHERE id = $1
      RETURNING id, id_vacina, mes;
    `;

    const values = [idPeriodoAplicacaoMes];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VacinaModel;
