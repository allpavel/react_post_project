import React from 'react';
import { Select } from '../Select/Select';
import { Sort } from '../Sort/Sort';
import { Search } from '../Search/Search';

export const PostFilter = ({filter, setFilter}) => {
    return (
        <>
            <Sort value={filter.sort} onChange={(sort) => setFilter({...filter, sort: sort})} />
            <Search value={filter.search} onChange={(event) => setFilter({...filter, search: event.target.value})} />
        </>
    )
};