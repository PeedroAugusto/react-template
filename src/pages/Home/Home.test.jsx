import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('<Home />', () => {
    it('renders the title and form elements', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Verifica se o botão de login está presente pelo nome da classe
        expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument(); // Verificação alternativa usando getByRole
    });
});
