import React from 'react'

export const LoginForm = () => {
    return (
        <form className='login-form' onSubmit={(e) => {e.preventDefault()}}>
            <h3>Iniciar sesión</h3>

            <div className='input-container'>
                <label htmlFor="email">Email</label>
                <input 
                    id='email'
                    name='email'
                    type='text'
                    placeholder='email@email.com'
                />
            </div>

            <div className='input-container'>
                <label htmlFor="password">Contraseña</label>
                <input 
                    id='password'
                    name='password'
                    type='password'
                    placeholder='********'
                />
            </div>

            <input type="submit" value='Iniciar sesión' />
        </form>
    )
}
