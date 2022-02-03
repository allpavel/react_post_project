import React from 'react';
import './Button.css';

export const Button = ({title, onClick, styles}) => {
    return (
            <button onClick={onClick} className={styles} >
                {title}
            </button>
    )
}