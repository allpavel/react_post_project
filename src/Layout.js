import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './UI/Styles/Navigation.css';

export const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/languages'>Languages</NavLink>
                    </li>
                    <li>
                        <NavLink to='/posts'>Posts</NavLink>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </>
    )
};