import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { App } from './App';
import { Layout } from './Layout';

export const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/languages' element={<App />} />
                </Route>
            </Routes>
        </div>
    )
};