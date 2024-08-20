import api from '../apiConfig';

/**
 * Fetch the list of messages from the server.
 * @returns {Promise<Array>} A promise with the list of messages.
 */
export const fetchMessages = async () => {
    try {
        /**
         * The server returns an array of messages in the following format:
         * [
         *   {
         *     id: number;
         *     text: string;
         *     sendDate: string;
         *   },
         *   ...
         * ]
         */
        const response = await api.get('Message/list');

        return response?.data;
    } catch (error) {
        /**
         * The server returns an object with the following format:
         * {
         *   message: string;
         * }
         */
        throw error.response?.data;
    }
};

/**
 * Creates a new message by sending a POST request to the server with the
 * provided message data.
 *
 * @param {Array} messages - An array of message objects to be sent to the server.
 * @throws {Error} If the server returns an error, the error data is thrown.
 * @return {Promise} A promise that resolves to the server's response data.
 */
export const createMessage = async (messages) => {
    try {
        // Send a POST request to the '/Message/create' endpoint with the provided
        // message data.
        const response = await api.post('Message/create', messages, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Return the data from the server's response.
        return response?.data;
    } catch (error) {
        // If the request fails, log the error response data and throw it.
        console.error('Error response from API:', error.response?.data);
        throw error.response?.data;
    }
};
