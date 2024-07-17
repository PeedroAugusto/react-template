// User.js

/**
 * Classe que representa um usuário.
 */
class User {
    /**
     * Cria uma instância de User.
     * @param {string} email - O email do usuário.
     * @param {string} password - A senha do usuário.
     */
    constructor(email = '', password = '') {
        this.email = email || '';
        this.password = password || '';
    }
}

export default User;
