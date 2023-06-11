import { AnimatePresence } from 'framer-motion'
import React, { useContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { LoginScreen } from '../screens/LoginScreen';
import { AuthContext } from '../contexts/auth/authContext';
import { HomeScreen } from '../screens/HomeScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

export const AnimatedRoutes = () => {

    const location = useLocation();

    const { user } = useContext(AuthContext)

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
            </Routes>
        </AnimatePresence>
    )
}
