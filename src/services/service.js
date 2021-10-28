const http = require('./config');

const postMensagemRecebida = (mensagem) =>{
    console.log(mensagem)
    return http.post('/mensagem-recebida', mensagem);
}

module.exports = postMensagemRecebida;