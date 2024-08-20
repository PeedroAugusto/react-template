import api from '../apiConfig';

/**
 * Performs a login request to the server.
 *
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} A Promise that resolves to the response data
 * from the server.
 * @throws {Error} If the login request fails, an error is thrown with the
 * response data from the server.
 */
export const login = async (user) => {
    try {
        // Send a POST request to the '/Login' endpoint with the user's email and
        // password.
        const response = await api.post('Login', user);

        // Return the data from the server's response.
        return response.data;
    } catch (error) {
        // If the login request fails, throw an error with the response data from
        // the server.
        throw error.response.data;
    }
};