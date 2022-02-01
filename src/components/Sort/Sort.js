import React from 'react';
import styles from './Sort.module.css';

export const Sort = ({value, onChange}) => {
    return (
        <p className={styles.sort}>
            <label htmlFor='sort'>Sort by order:</label>
                <select id='sort' value={value} onChange={(event) => onChange(event.target.value)}>
                    <option className={styles.disabled} value='' disabled>choose the order</option>
                    <option value='title'>Title</option>
                    <option value='body'>Description</option>
                </select>
        </p>
    )
}