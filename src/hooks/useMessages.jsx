import { useState, useEffect } from 'react';
import { fetchMessages, createMessage } from '../service/message/messageService';

/**
 * Custom hook that handles the state and logic for messages.
 * 
 * @returns {Object} - An object containing the messages, loading state, error state, 
 *                    addMessages function, and getMessages function.
 */
const useMessages = () => {
    // State variables
    const [messages, setMessages] = useState([]); // Array of messages
    const [loading, setLoading] = useState(false); // Loading state indicator
    const [error, setError] = useState(null); // Error state indicator

    // Fetch messages on component mount
    useEffect(() => {
        getMessages();
    }, []);

    /**
     * Asynchronously fetches messages from the API and updates the state.
     * 
     * @returns {Promise<void>}
     */
    const getMessages = async () => {
        setLoading(true); // Set loading state to true
        try {
            const data = await fetchMessages(); // Fetch messages from the API
            setMessages(data); // Update messages state
        } catch (error) {
            setError(error); // Set error state to the caught error
        } finally {
            setLoading(false); // Set loading state to false
        }
    };

    /**
     * Asynchronously adds messages to the API and updates the state.
     * 
     * @param {Array} messages - Array of messages to be added
     * @returns {Promise<void>}
     */
    const addMessages = async (messages) => {

        try {
            const response = await createMessage(messages); // Add messages to the API
            setMessages(prevMessages => [...prevMessages, ...response]); // Update messages state
        } catch (error) {
            setError(error); // Set error state to the caught error
        }
    }

    return { messages, loading, error, addMessages, getMessages }; // Return the state and functions
};

export default useMessages;