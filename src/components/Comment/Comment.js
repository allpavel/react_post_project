import React from 'react';
import styles from './Comment.module.css';

export const Comment = ({ name, email, body }) => {
    return (
        <article className={styles.container}>
            <div className={styles.contacts}>
                <p className={styles.name}>Name: {name}</p>
                <p className={styles.email}>Email: {email}</p>
            </div>
            <p className={styles.body}>{body}</p>
        </article>
    )
}