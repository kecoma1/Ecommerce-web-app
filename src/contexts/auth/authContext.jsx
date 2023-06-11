import { createContext } from 'react';

export const AuthContext = createContext();

export const init = () => {
    return {
        logged: false,
        id: '',
        name: '',
        email: '',
        token: ''
    }
}