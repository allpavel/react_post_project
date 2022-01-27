import React from 'react';
import styles from './Modal.module.css';

export const Modal = ({children, visible, setVisible}) => {

    let modalClasses = `${styles.modal}`;
    if (visible) {
        modalClasses += ` ${styles.active}`;
    };

    return (
        <section className={modalClasses} onClick={() => setVisible(false)}>
            <article className={styles.modal_container} onClick={(event) => event.stopPropagation()}>
                {children}
            </article>
        </section>
    )
}