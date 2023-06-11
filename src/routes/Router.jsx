import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnimatedRoutes } from './AnimatedRoutes'

export const Router = () => {
    return (
        <BrowserRouter>
        {/* TODO: Scroll to top */}
            <AnimatedRoutes />
        </BrowserRouter>
    )
}
