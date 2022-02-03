import React, { useState } from 'react';
import { Button } from '../UI/Button/Button';
import { Modal } from '../components/Modal/Modal';
import { Login } from '../components/Login/Login';
import { useAuth } from '../Hooks/useAuth';

export const Home = () => {
    const [visible, setVisible] = useState(false);
    const { onLogin } = useAuth();

    const handleLogin = () => {
        onLogin();
        setVisible(false);
    };

    return (
        <>
            <h1>Welcome to the Home page</h1>
            <Button title={"Login"} onClick={() => setVisible(true)} styles={"button blue largeButton"} />
            <Modal visible={visible} setVisible={setVisible} >
                <Login onLogin={handleLogin} />
            </Modal>           
        </>
    )
};