import { useState } from 'react';
import { useEffect } from 'react';
import useMessages from '../../hooks/useMessages';
import { format } from 'date-fns';
import './Home.scss'
import Message from '../../types/Message';

/**
 * Tela de Home.
 * @returns {JSX.Element}
 */
function Home() {
    const { messages, loading, error, addMessages, getMessages } = useMessages();

    const Add = async () => {
        var msg = [
            new Message(2, 'Ola sou a segunda mensagem', new Date()),
            new Message(3, 'Ola sou a terceira mensagem', new Date()),
        ]
        console.log(msg)

       await addMessages(msg)
       getMessages()
    }
    return (
        <>
            <div className="home-page">
                <h1>Messages</h1>
                <div className='list-message'>
                    {messages?.map((message) => (
                        <div className='message' key={message.id}>
                            <a >{message.text}</a>
                            <a >{format(message.sendDate, 'dd/MM/yyyy HH:mm:ss')}</a>
                        </div>
                    ))}
                </div>
                <button onClick={Add}>Add</button>
            </div>
        </>
    );
}

export default Home;