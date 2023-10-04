const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const eventData = req.body;
  try {
    // Dados que você deseja enviar no corpo da requisição POST
    const dados = {
      Text: JSON.stringify(eventData),
    };

    // URL do endpoint de destino
    const url = 'http://localhost:9090/v1/log'; // Substitua pelo URL correto

    // Faz a requisição POST usando o axios
    const response = await axios.post(url, dados);

    // Manipule a resposta do servidor de destino, se necessário
    console.log('Resposta do servidor de destino:', response.data);

    res.status(200).send('Dados enviados com sucesso para o servidor de destino.');
  } catch (error) {
    console.error('Erro ao fazer a requisição POST:', error);

    // Envie uma resposta de erro ao cliente
    res.status(500).send('Ocorreu um erro ao enviar os dados para o servidor de destino.');
  }
});

const port = process.env.PORT || 3425;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
