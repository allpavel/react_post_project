import React from 'react';
import styles from './CreatePostButton.module.css';

export const CreatePostButton = ({onClick}) => {
    return (
            <button onClick={onClick} className={`${styles.button} ${styles.blue}`}>
                Create new post
            </button>
    )
}