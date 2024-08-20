import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'

import NotFound from '../components/erros/NotFoundPage'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" />, // Redireciona da raiz para a página de login
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;