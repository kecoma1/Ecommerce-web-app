import { createContext } from 'react';

export const AuthContext = createContext();

export const init = () => {
    return {
        logger: false,
        id: '',
        name: '',
        email: '',
    }
}