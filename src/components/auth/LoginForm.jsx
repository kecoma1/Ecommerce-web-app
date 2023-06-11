import React, { useContext } from 'react'
import { useForm } from '../../hooks/form/useForm'
import { useState } from 'react';
import { AuthContext } from '../../contexts/auth/authContext';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {

    const { login, loading } = useContext(AuthContext)
    const [{ email, password }, handleInputChange] = useForm({ email: '', password: '' });
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const result = await login(email, password)
        if (result.error) {
            setError('Error al iniciar sesión. Comprueba que tus datos son correctos.')
            setTimeout(() => { setError('') }, 4000)
        }
    }

    const handleRegistrarseClick = () => {
        navigate('/register')
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

            <input type="submit" value={loading ? 'Cargando...' : 'Iniciar sesión'} />

            <button type='button' className='button-outline' onClick={handleRegistrarseClick}>Registrarse</button>
        </form>
    )
}
