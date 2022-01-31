import React from 'react';

export const TitleSearch = ({value, onChange}) => {
    return (
        <label>
            Search by title:{' '}
            <input type='text' value={value} onChange={onChange} />
        </label>
    )
}