import React from 'react';
import styles from './PostList.module.css';
import { Post } from '../Post/Post';

export const PostList = ({posts, onDeletePost}) => {
    if (posts.length) {
        return (
            <section className={styles.postslist}>
                {posts.map((post, index) => <Post 
                                                post={post} 
                                                index={index} 
                                                key={post.id} 
                                                onDeletePost={onDeletePost}/>)}
            </section>
        )
    }
    return <h1 className={styles.emptylist}>There are no posts</h1>

};