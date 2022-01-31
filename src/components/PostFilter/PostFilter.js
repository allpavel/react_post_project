import React from 'react';
import { Sort } from '../Sort/Sort';
import { TitleSearch } from '../Search/titleSearch';
import { BodySearch } from '../Search/bodySearch';
import { Select } from '../Select/Select';

export const PostFilter = ({filter, setFilter, posts}) => {
    return (
        <>
            <Sort 
                value={filter.sort} 
                onChange={(sort) => setFilter({...filter, sort: sort})} />
            <TitleSearch 
                value={filter.titleSearch} 
                onChange={(event) => setFilter({...filter, titleSearch: event.target.value})} />
            <br />
            <BodySearch
                value={filter.bodySearch}
                onChange={(event) => setFilter({...filter, bodySearch: event.target.value})} />
            <Select
                value={filter.language}
                onChange={(language) => setFilter({...filter, language: language})} 
                posts={posts} />
        </>
    )
};