const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

app.get('/enviar-mensagem', function (req, res) {
    whatsApp.sendMessage('554195962077@c.us','deu boa cachorro');
});

app.listen(port ,console.log(`Listen Port ${port}`));