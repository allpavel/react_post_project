import React, { useState } from 'react';
import styles from './Select.module.css';

export const Select = ({posts, handleFilterByLanguage}) => {

    const handleLanguageChange = (event) => {
        handleFilterByLanguage(event.target.value);        
    }

    return (
        <section>
            <label>
                Filter by language: 
                <select onChange={handleLanguageChange}>
                    {/* <option className={styles.disabled} value='' disabled selected>list of languages</option> */}
                    <option value='all languages'>All languages</option>
                    {posts.map(post => (<option key={post.id} value={post.title}>{post.title}</option>))}
                </select>
            </label>
        </section>
    )
}