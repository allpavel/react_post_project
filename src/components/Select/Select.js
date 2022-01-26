import React from 'react';

export const Select = ({posts, handleFilterByLanguage}) => {
    return (
        <section>
            <label>
                Filter by language: 
                <select onChange={(event) => handleFilterByLanguage(event.target.value)}>
                    <option value='all languages'>All languages</option>
                    {posts.map(post => (<option key={post.id} value={post.title}>{post.title}</option>))}
                </select>
            </label>
        </section>
    )
}