import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

// Testando tela de login
describe('<Login />', () => {
  it('renders the title and form elements', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Verifica se os campos de input estão presentes pelo nome da classe
    expect(screen.getByPlaceholderText('Telefone, nome de usuário ou email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();

    // Verifica se o botão de login está presente pelo nome da classe
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument(); // Verificação alternativa usando getByRole
  });
});
