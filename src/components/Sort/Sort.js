import React from 'react';
import styles from './Sort.module.css';

export const Sort = ({value, onChange}) => {
    return (
        <section className={styles.sort}>
            <label>
                Sort by order:{' '}
                <select value={value} onChange={(event) => onChange(event.target.value)}>
                    <option className={styles.disabled} value='' disabled>choose the order</option>
                    <option value='title'>Title</option>
                    <option value='description'>Description</option>
                </select>
            </label>
        </section>
    )
}