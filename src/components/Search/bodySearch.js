import React from 'react';

export const BodySearch = ({value, onChange}) => {
    return (
        <p>
            <label htmlFor='bodySearch'>Search by description:</label>
            <input id='bodySearch' type='text' value={value} onChange={onChange} />
        </p>

    )
}