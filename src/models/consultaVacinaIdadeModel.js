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

class ConsultaVacinaIdadeModel {
  async buscarVacinasPorAnoExato(idPessoa, ano) {
    const query = `
      SELECT 
        vacina.nome AS nome_vacina,
        periodoaplicacaoano.inicio AS periodo_inicio,
        periodoaplicacaoano.fim AS periodo_fim
      FROM 
        vacina
      JOIN 
        periodoaplicacaoano ON vacina.id = periodoaplicacaoano.id_vacina
      WHERE 
        vacina.id IN (
          SELECT id_vacina FROM vacina_aplicada
          WHERE id_pessoa = $1
        )
        AND EXTRACT(YEAR FROM age(CURRENT_DATE, pessoa.data_nascimento)) = $2;
    `;

    const values = [idPessoa, ano];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async buscarVacinasPorAnoAte(idPessoa, ano) {
    const query = `
      SELECT 
        vacina.nome AS nome_vacina,
        periodoaplicacaoano.inicio AS periodo_inicio,
        periodoaplicacaoano.fim AS periodo_fim
      FROM 
        vacina
      JOIN 
        periodoaplicacaoano ON vacina.id = periodoaplicacaoano.id_vacina
      WHERE 
        vacina.id IN (
          SELECT id_vacina FROM vacina_aplicada
          WHERE id_pessoa = $1
        )
        AND EXTRACT(YEAR FROM age(CURRENT_DATE, pessoa.data_nascimento)) <= $2;
    `;

    const values = [idPessoa, ano];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async buscarVacinasPorMesExato(idPessoa, mes) {
    const query = `
      SELECT 
        vacina.nome AS nome_vacina,
        periodoaplicacaomes.mes AS periodo_mes
      FROM 
        vacina
      JOIN 
        periodoaplicacaomes ON vacina.id = periodoaplicacaomes.id_vacina
      WHERE 
        vacina.id IN (
          SELECT id_vacina FROM vacina_aplicada
          WHERE id_pessoa = $1
        )
        AND EXTRACT(MONTH FROM age(CURRENT_DATE, pessoa.data_nascimento)) = $2;
    `;

    const values = [idPessoa, mes];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async buscarVacinasPorMesAte(idPessoa, mes) {
    const query = `
      SELECT 
        vacina.nome AS nome_vacina,
        periodoaplicacaomes.mes AS periodo_mes
      FROM 
        vacina
      JOIN 
        periodoaplicacaomes ON vacina.id = periodoaplicacaomes.id_vacina
      WHERE 
        vacina.id IN (
          SELECT id_vacina FROM vacina_aplicada
          WHERE id_pessoa = $1
        )
        AND EXTRACT(MONTH FROM age(CURRENT_DATE, pessoa.data_nascimento)) <= $2;
    `;

    const values = [idPessoa, mes];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConsultaVacinaIdadeModel;
