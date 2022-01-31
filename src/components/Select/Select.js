import React from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './Select.module.css';

export const Select = ({posts, value, onChange}) => {
    let languages = [];

    for (let post of posts) {
        if (!languages.includes(post.title)) {
            languages.push(post.title);
        }
    };

    return (
        <section>
            <label>
                Filter by language: 
                <select value={value} onChange={(event) => onChange(event.target.value)}>
                    <option className={styles.disabled} value='' disabled>choose the language</option>
                    <option key={uuidv4()} value='all'>All languages</option>
                    {languages.map(language => (
                        <option key={uuidv4()} value={language.toLowerCase()}>{language}</option>)
                        )}
                </select>
            </label>
        </section>
    )
}