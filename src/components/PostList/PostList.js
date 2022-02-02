import React from 'react';
import styles from './PostList.module.css';
import { Post } from '../Post/Post';
import {v4 as uuidv4} from 'uuid';

export const PostList = ({posts, onDeletePost}) => {
    if (posts.length) {
        return (
            <section className={styles.postslist}>
                    {posts.map((post) => <Post key={uuidv4()} post={post} onDeletePost={onDeletePost} />)}
            </section>
        )
    }
    return <h1 className={styles.emptylist}>There are no posts</h1>

};