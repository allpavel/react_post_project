import React from 'react';
import { usePagination } from '../../Hooks/usePagination';
import styles from './Pagination.module.css';

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = usePagination(postsPerPage, totalPosts);

    return (
        <nav className={styles.footer}>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : null} >
                        <a>{number}</a>
                    </li>
                    )
                )}
            </ul>
        </nav>
    )
};