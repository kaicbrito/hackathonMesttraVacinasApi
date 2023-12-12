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

class ConsultaVacinaModel {
  async buscarInformacoesVacina(idVacina) {
    const query = `
      SELECT 
        vacina.nome AS nome_vacina,
        periodoaplicacaoano.inicio AS periodo_inicio,
        periodoaplicacaoano.fim AS periodo_fim,
        periodoaplicacaomes.mes AS periodo_mes,
        rede.nome AS nome_rede
      FROM 
        vacina
      LEFT JOIN 
        periodoaplicacaoano ON vacina.id = periodoaplicacaoano.id_vacina
      LEFT JOIN 
        periodoaplicacaomes ON vacina.id = periodoaplicacaomes.id_vacina
      LEFT JOIN 
        rede ON vacina.id_rede = rede.id
      WHERE 
        vacina.id = $1;
    `;

    const values = [idVacina];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConsultaVacinaModel;
