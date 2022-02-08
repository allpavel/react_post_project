import React from 'react';
import styles from './Post.module.css';
import { Button } from '../../UI/Button/Button';
import {v4 as uuidv4} from 'uuid';
import { useNavigate } from 'react-router-dom';


export const Post = ({post, onDeletePost}) => {
    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${post.id}`);
    };
    
    const handleDeletePost = () => {
        onDeletePost(post);
    }


    return (
        <>
            <article key={uuidv4()} className={styles.post}>
                <article>
                    <h2>{post.id}. {post.title}</h2>
                    <p>{post.body}</p>
                </article>
                <div>
                    <Button 
                        title={'Open'}
                        onClick={handleNavigate}
                        styles={'button green smallButton'} />
                    <Button 
                        title={'Delete'} 
                        onClick={handleDeletePost}
                        styles={`button red smallButton`} />
                </div>
            </article>
        </>
    )
};