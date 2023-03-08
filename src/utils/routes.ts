import { ReactNode } from 'react';
import LoginForm from '../modules/authentication/Components/LoginForm';
import RegisterForm from '../modules/authentication/Components/RegisterForm';
import MatchPage from '../pages/Match';

type Route = {
    path: string,
    element: ReactNode
}
export const protectedRoutes : Array<Route> = [
    {
        path: '/matches',
        element: MatchPage,
    },
];
export const publicRoutes : Array<Route> = [
    {
        path: '/login',
        element: LoginForm,
    },
    {
        path: '/register',
        element: RegisterForm,
    },
];
