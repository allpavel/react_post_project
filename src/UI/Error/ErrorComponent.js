import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';

export const ErrorComponent = ({ error }) => {
    return (
        <section className={styles.errorMessage}>
            <h1>Sorry, this page isn't available.</h1>
            <p>The link you followed may be broken, or the page may have been removed. <Link to='/'>Go to the Home page.</Link></p>
            <p>Error message: {error}</p>
        </section>
    );
}