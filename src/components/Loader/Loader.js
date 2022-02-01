import React from 'react';
import styles from './Loader.module.css';

export const Loader = () => {
    return (
        <section className={styles.container}>
                <h1>Loading...</h1>
                <div className={styles.loader}></div>
        </section>
    );
}