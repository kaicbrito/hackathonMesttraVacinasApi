const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/docs/swagger.json');
const postoRoutes = require('./src/routes/postoRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/posto', postoRoutes);
app.use(cors());

// Rota de exemplo para obter lista de pessoas
app.get('/api/pessoas', (req, res) => {
  const pessoas = [
    { id: 1, nome: 'John Doe', idade: 30 },
    // Outras pessoas...
  ];
  res.json(pessoas);
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
