import React, { useContext } from 'react'
import { useForm } from '../hooks/form/useForm'
import { useState } from 'react';
import { AuthContext } from '../contexts/auth/authContext';

export const LoginForm = () => {

    const {login} = useContext(AuthContext)

    const [{ email, password }, handleInputChange] = useForm({ email: '', password: '' });
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            console.log(await login(email, password))
        } catch (error) {
            setError('Error al iniciar sesión. Comprueba que tus datos son correctos.')
            setTimeout(() => { setError('') }, 4000)
        }
    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <h3>Iniciar sesión</h3>

            <div className='input-container'>
                <label htmlFor="email">Email</label>
                <input 
                    id='email'
                    name='email'
                    type='text'
                    placeholder='email@email.com'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className='input-container'>
                <label htmlFor="password">Contraseña</label>
                <input 
                    id='password'
                    name='password'
                    type='password'
                    placeholder='********'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <span className='form-error'>{error}</span>

            <input type="submit" value='Iniciar sesión' />
        </form>
    )
}
