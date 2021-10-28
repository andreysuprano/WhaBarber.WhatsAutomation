const wa = require('@open-wa/wa-automate');
const postMensagemRecebida = require('../services/service');

class WaClient {
    constructor(){
        this.client;
    }

    async create(){
        wa.create({
            headless: true,
            hostNotificationLang: 'PT_BR',
            logConsole: false,
            popup: true,
        }).then((client) => {
            this.client = client;
            this.listenMessages();    
        });
    }

    sendMessage(chatId, conteudo){
        this.client.sendText(chatId, conteudo);
    }

    listenMessages(){
        console.log("+=======ListenMessages=======+")
        this.client.onMessage(async message => {
            let mensagem = {
                nome:message.sender.pushname,
                chatId:message.chatId,
                avatar:message.sender.profilePicThumbObj.eurl,
                conteudo:message.body
            }
            postMensagemRecebida(mensagem);
        });
    }

}
module.exports = WaClient;
