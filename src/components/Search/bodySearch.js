import React from 'react';

export const BodySearch = ({value, onChange}) => {
    return (
        <label>
            Search by description:{' '}
            <input type='text' value={value} onChange={onChange} />
        </label>

    )
}