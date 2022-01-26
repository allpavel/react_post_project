import React from 'react';

export const Search = ({value, onChange}) => {
    return (
        <label>
            Search:{' '}
            <input type='text' value={value} onChange={onChange} />
        </label>
    )
}