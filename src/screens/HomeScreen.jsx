import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth/authContext'

export const HomeScreen = () => {

    const { logout } = useContext(AuthContext);

    return (
        <div className='screen-container'>
            <h2>Has iniciado sesión</h2>

            <button className='button' onClick={logout}>Cerrar sesión</button>
        </div>
    )
}
