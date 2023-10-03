const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));

app.get('/', (req, res) => {
  console.log('Rota / acessada');
  res.send('Olá, Mundo!');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}`);
});
