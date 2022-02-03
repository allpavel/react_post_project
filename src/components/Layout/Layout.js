import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import { useAuth } from '../../Hooks/useAuth';
import './Layout.css';

export const Layout = () => {
    const { token, onLogout } = useAuth();

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    {token && (
                        <>
                            <li>
                                <NavLink to='/languages'>Languages</NavLink>
                            </li>
                            <li>
                                <NavLink to='/posts'>Posts</NavLink>
                            </li>
                            <li className='loginButton'>
                                <Button title={"Logout"} onClick={onLogout} styles={"button red smallButton"} /> 
                            </li>
                        </>)}
                </ul>
            </nav>
            <hr />
            <Outlet />
        </>
    )
};