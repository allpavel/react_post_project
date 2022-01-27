import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/languages'>Languages</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </>
    )
};