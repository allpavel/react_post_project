import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Languages } from './Pages/Languages';
import { Posts } from './Pages/Posts';
import { Layout } from './components/Layout/Layout';

export const Main = () => {
    return (
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/languages' element={<Languages />} />
                    <Route path='posts' element={<Posts />} />
                </Route>
            </Routes>
    )
};