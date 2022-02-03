import React from 'react';
import styles from './PostPageItem.module.css';

export const PostPageItem = ({ title, body }) => {
    return (
        <section className={styles.container}>
            <h1>{title}</h1>
            <article>{body}</article>
        </section>
    )
};