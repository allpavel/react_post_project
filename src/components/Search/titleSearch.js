import React from 'react';

export const TitleSearch = ({value, onChange}) => {
    return (
        <p>
            <label htmlFor='titleSearch'>Search by title:</label>
            <input id='titleSearch' type='text' value={value} onChange={onChange} />
        </p>
    )
}