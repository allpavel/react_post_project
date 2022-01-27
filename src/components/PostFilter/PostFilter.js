import React from 'react';
import { Sort } from '../Sort/Sort';
import { Search } from '../Search/Search';
import { Select } from '../Select/Select';

export const PostFilter = ({filter, setFilter, language, posts}) => {
    return (
        <>
            <Sort 
                value={filter.sort} 
                onChange={(sort) => setFilter({...filter, sort: sort})} />
            <Search 
                value={filter.search} 
                onChange={(event) => setFilter({...filter, search: event.target.value})} />
            <Select
                value={filter.language}
                onChange={(language) => setFilter({...filter, language: language})} 
                posts={posts} />
        </>
    )
};