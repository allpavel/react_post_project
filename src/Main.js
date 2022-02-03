import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Languages } from './Pages/Languages';
import { Posts } from './Pages/Posts';
import { Layout } from './components/Layout/Layout';
import { ErrorPage } from './Pages/ErrorPage';
import { PostPage } from './Pages/PostPage';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import './UI/styles/normalize.css';

export const Main = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='languages' element={<ProtectedRoute><Languages /></ProtectedRoute>} />
                    <Route path='posts'>
                        <Route index element={<ProtectedRoute><Posts /></ProtectedRoute>} />
                        <Route path=':id' element={<ProtectedRoute><PostPage /></ProtectedRoute>} />
                    </Route>
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </AuthProvider>
    )
};