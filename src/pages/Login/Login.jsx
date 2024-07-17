import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import User from '../../types/User';
import useAuth from '../../hooks/useAuth';

/**
 * Tela de login.
 * @returns {JSX.Element}
 */
function Login() {

    const { register, handleSubmit } = useForm();
    const { login, loading, error } = useAuth(); 

    const onSubmit = async (data) => {
        const user = new User(data.email, data.password);
        try {
            await login(user);
        } catch (err) {
        }
    };

    return (
        <>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

            <div className="login-page" data-testid="login-page">
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <input
                        type="text"
                        placeholder='Telefone, nome de usuário ou email'
                        {...register("email")}
                        required
                        className="email"
                    />

                    <input
                        type="password"
                        placeholder='Senha'
                        {...register("password")}
                        className="password"
                        required
                    />
                    <button type="submit" className="login">
                        {loading ? <i className='bx bx-loader-alt bx-spin' ></i> : <>Entrar</>}
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;
 