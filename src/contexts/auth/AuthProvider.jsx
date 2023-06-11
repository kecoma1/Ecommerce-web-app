import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useReducer } from 'react'
import { AuthContext, init } from './authContext';
import { authReducer } from './authReducer';
import { auth } from "../../firebase";
import { types } from "./types";

export const AuthProvider = ({ children }) => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        return await signOut()
    }

    const authListener = () => {
        onAuthStateChanged(auth, (user) => {
            if (!user) return dispatch({ type: types.logout })

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
            dispatch,
            login,
            logout,
            authListener
        }}>
            {children}
        </AuthContext.Provider>
    )
}
