import React from 'react';
import styles from './Post.module.css';
import { DeleteButton } from '../../UI/Buttons/DeleteButton/DeleteButton';

export const Post = ({post, index, onDeletePost}) => {
    return (
        <>
            <article key={post.id} className={styles.post}>
                <article>
                    <h2>{index + 1}. {post.title}</h2>
                    <p>{post.body}</p>
                </article>
                <DeleteButton onClick={() => onDeletePost(post)} />
            </article>
        </>
    )
};