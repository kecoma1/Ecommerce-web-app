import React from 'react'
import { Router } from './routes/Router'
import { AuthContext, init } from './contexts/auth/authContext';
import { authReducer } from './contexts/auth/authReducer';

const App = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <Router />
        </AuthContext.Provider>
    )
}

export default App;
