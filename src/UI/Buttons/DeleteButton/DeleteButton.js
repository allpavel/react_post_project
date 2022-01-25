import React from 'react';
import styles from './DeleteButton.module.css';

export const DeleteButton = (props) => {
    return (
        <div className={styles.close_container} {...props}>
            <div className={styles.leftright}></div>
            <div className={styles.rightleft}></div>
            <label className={styles.delete}>delete</label>
        </div>
    )
};