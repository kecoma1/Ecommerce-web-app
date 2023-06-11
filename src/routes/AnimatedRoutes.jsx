import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { LoginScreen } from '../screens/LoginScreen';

export const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/login" element={<LoginScreen />} />
            </Routes>
        </AnimatePresence>
    )
}
