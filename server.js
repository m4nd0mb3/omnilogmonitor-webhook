const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const eventData = req.body;
  console.log('Evento Recebido:', eventData);
  
  res.sendStatus(200);
});

const port = process.env.PORT || 3425;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
