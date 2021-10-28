const WaClient = require('../src/waclient/waclient');
const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

const client = new WaClient();
client.create();

app.use(express.json())
app.post('/enviar-mensagem', function (req, res) {
  console.log(req.body.chatId,req.body.texto);
  client.sendMessage(req.body.chatId,req.body.texto);
    res.sendStatus(201);
});

app.listen(port ,console.log(`+=======Listen Port ${port}=======+`));