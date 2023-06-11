import React, { useContext } from 'react'
import { useForm } from '../../hooks/form/useForm'
import { useState } from 'react';
import { AuthContext } from '../../contexts/auth/authContext';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {

    const { register, loading } = useContext(AuthContext)
    const [{ email, password, repeatPassword }, handleInputChange] = useForm({ email: '', password: '', repeatPassword: '' });
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Comparing passwords
        if (password !== repeatPassword) {
            setError('Las contraseñas no coinciden')
            setTimeout(() => { setError('') }, 4000)
            return
        }

        // Minimum length must be 6 or more
        if (password.length < 6) {
            setError('La contraseña es demasiado corta')
            setTimeout(() => { setError('') }, 4000)
            return
        }

        const result = await register(email, password)
        if (result.error) {
            setError('Error al registrarte. Comprueba que tus datos son correctos.')
            setTimeout(() => { setError('') }, 4000)
        }
    }

    const handleLoginClick = () => {
        navigate('/login')
    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <h3>Registrarse</h3>

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

            <div className='input-container'>
                <label htmlFor="password">Repetir contraseña</label>
                <input
                    id='repeatPassword'
                    name='repeatPassword'
                    type='password'
                    placeholder='********'
                    value={repeatPassword}
                    onChange={handleInputChange}
                />
            </div>

            <span className='form-error'>{error}</span>

            <input type="submit" value={loading ? 'Cargando...' : 'Registrarse'} />

            <button type='button' className='button-outline' onClick={handleLoginClick}>Iniciar sesión</button>
        </form>
    )
}
