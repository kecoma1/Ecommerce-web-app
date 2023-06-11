import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnimatedRoutes } from './AnimatedRoutes'
import { AuthProvider } from '../contexts/auth/AuthProvider'

export const Router = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AnimatedRoutes />
            </AuthProvider>
        </BrowserRouter>
    )
}
