import React from 'react';
import styles from './PostList.module.css';

export const PostList = (props) => {
    return (
        <section className={styles.postslist}>
            {props.posts.map((post, index) => (
                <section key={post.id} className={styles.post}>
                    <section>
                        <h2>{index + 1}. {post.title}</h2>
                        <p>{post.description}</p>
                    </section>
                    <button>Delete</button>
                </section>
            ))}
        </section>
    )
}