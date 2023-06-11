import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useReducer, useState } from 'react'
import { AuthContext, init } from './authContext';
import { authReducer } from './authReducer';
import { auth } from "../../firebase";
import { types } from "./types";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {

    const [user, dispatch] = useReducer(authReducer, {}, init);
    const navigator = useNavigate();

    const [loading, setLoading] = useState(false);

    const login = async (email, password) => {
        setLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch { }
        finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        navigator('/login')
        return await auth.signOut()
    }

    const authListener = () => {
        onAuthStateChanged(auth, (user) => {
            if (!user) return dispatch({ type: types.logout })

            navigator('/')
            return dispatch({
                type: types.login,
                payload: {
                    logged: true,
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    token: user.accessToken
                }
            })
        })
    }

    useEffect(() => {
        authListener()
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            dispatch,
            login,
            logout,
            authListener
        }}>
            {children}
        </AuthContext.Provider>
    )
}
