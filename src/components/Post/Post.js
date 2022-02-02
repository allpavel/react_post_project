import React from 'react';
import styles from './Post.module.css';
import { DeleteButton } from '../../UI/Buttons/DeleteButton/DeleteButton';
import {v4 as uuidv4} from 'uuid';

export const Post = ({post, onDeletePost}) => {
    return (
        <>
            <article key={uuidv4()} className={styles.post}>
                <article>
                    <h2>{post.id}. {post.title}</h2>
                    <p>{post.body}</p>
                </article>
                <DeleteButton onClick={() => onDeletePost(post)} />
            </article>
        </>
    )
};