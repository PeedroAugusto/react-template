import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import './Login.scss';
import User from '../../types/User';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

/**
 * Tela de login.
 * @returns {JSX.Element}
 */
function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { login, loading, error } = useAuth();

    
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await login(new User(data.email, data.password));
            navigate("/home");
        } catch (err) {
            // Handle error if needed
        }
    };

    return (
        <>
            

            <div className="login-page" data-testid="login-page">
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder='Telefone, nome de usuário ou email'
                            {...register("email", {
                                required: 'Por favor, preencha o campo de email.',
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: 'Por favor, insira um email válido.'
                                }
                            })}
                            className={`email ${errors.email ? 'error' : ''}`}
                        />
                        <ErrorMessage errors={errors} name="email" as="p" className="error-message" />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            placeholder='Senha'
                            {...register("password", {
                                required: 'Por favor, preencha o campo de senha.',
                                minLength: {
                                    value: 6,
                                    message: 'A senha deve ter pelo menos 6 caracteres.'
                                }
                            })}
                            className={`password ${errors.password ? 'error' : ''}`}
                        />
                        <ErrorMessage errors={errors} name="password" as="p" className="error-message" />
                    </div>

                    <button type="submit" className="login">
                        {loading ? <i className='bx bx-loader-alt bx-spin'></i> : <>Entrar</>}
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;
