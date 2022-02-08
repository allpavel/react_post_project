import React from 'react';
import { Sort } from '../Sort/Sort';
import { TitleSearch } from '../Search/titleSearch';
import { BodySearch } from '../Search/bodySearch';
import { Select } from '../Select/Select';
import styles from './PostFilter.module.css';

export const PostFilter = ({filter, setFilter, posts}) => {

    const handleSort = (sort) => {
        setFilter({...filter, sort: sort});
    };

    const handleTitleSearch = (event) => {
        setFilter({...filter, titleSearch: event.target.value});
    };

    const handleBodySearch = (event) => {
        setFilter({...filter, bodySearch: event.target.value});
    };

    const handleLanguage = (language) => {
        setFilter({...filter, language: language});
    };

    return (
        <section className={styles.container}>
            <Sort 
                value={filter.sort} 
                onChange={handleSort} />
            <TitleSearch 
                value={filter.titleSearch} 
                onChange={handleTitleSearch} />
            <BodySearch
                value={filter.bodySearch}
                onChange={handleBodySearch} />
            {filter.language && <Select
                value={filter.language}
                onChange={handleLanguage} 
                posts={posts} />} 
        </section>
    )
};