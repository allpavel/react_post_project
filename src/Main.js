import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { App } from './App';
import { Posts } from './Posts';
import { Layout } from './Layout';

export const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/languages' element={<App />} />
                    <Route path='posts' element={<Posts />} />
                </Route>
            </Routes>
        </div>
    )
};