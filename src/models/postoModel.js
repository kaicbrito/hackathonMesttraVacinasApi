const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: true,
  },
});


class PostoModel {
  async cadastrarPosto(nome, endereco, isPublico) {
    const query = `
      INSERT INTO postodeaplicacao (nome, endereco, is_publico)
      VALUES ($1, $2, $3)
      RETURNING id, nome, endereco, is_publico;
    `;

    const values = [nome, endereco, isPublico];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async pesquisarPostoPorEndereco(endereco) {
    const query = `
      SELECT * FROM postodeaplicacao
      WHERE endereco ILIKE $1;
    `;

    const values = [`%${endereco}%`];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PostoModel;
