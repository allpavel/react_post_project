import React, { useState } from 'react';
import styles from './Login.module.css';

export const Login = ({ onLogin }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <section className={styles.center}>
                <h1>Login</h1>
                <form>
                    <div className={styles.inputbox}>
                        <label htmlFor='login'>Login</label>
                        <input type='text' id='login' required='required' value={login} onChange={handleLoginChange}/>
                    </div>
                    <div className={styles.inputbox}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' required='required' value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className={styles.inputbox}>
                        <input type='button' value='Submit' onClick={onLogin} />
                    </div>
                </form>
        </section>
    )
};