// test-db-connection.js

const { Pool } = require('pg');

const pool = new Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: '5432', // padrão: 5432
  ssl: {

  },
});

// Consulta de exemplo
const query = 'SELECT NOW() as current_time';

// Função para executar a consulta
async function testConnection() {
  try {
    const result = await pool.query(query);
    console.log('Conexão bem-sucedida!');
    console.log('Resultado da consulta:', result.rows);
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } finally {
    // Encerra a conexão do pool
    pool.end();
  }
}

// Chama a função de teste de conexão
testConnection();
