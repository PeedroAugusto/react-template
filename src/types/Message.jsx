/**
 * Classe que representa uma mensagem.
 */
class Message {
    /**
     * Cria uma instância de Message.
     * @param {number} id - O ID da mensagem.
     * @param {string} text - O texto da mensagem.
     * @param {Date} sendDate - A data de envio da mensagem.
     */
    constructor(id, text, sendDate) {
        this.id = id;
        this.text = text;
        this.sendDate = sendDate;
    }
}

export default Message;
