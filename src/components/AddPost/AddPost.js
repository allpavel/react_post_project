import React, { useState } from 'react';
import styles from './AddPost.module.css';

export const AddPost = ({createPost}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleDecriptionChange = (event) => {
      setBody(event.target.value);
    };

    const handleAddPost = (event) => {
        event.preventDefault();
        const newPost = {
          id: Date.now(),
          title: title,
          body: body
        };
        createPost(newPost);
        setTitle('');
        setBody('');
    };


    return (
        <section className={styles.center}>
            <h1>Add New Post</h1>
            <form>
                <div className={styles.inputbox}>
                    <input type='text' required='required' value={title} onChange={handleTitleChange} />
                    <span>Title</span>
                </div>
                <div className={styles.inputbox}>
                    <input type='text' required='required' value={body} onChange={handleDecriptionChange} />
                    <span>Description</span>
                </div>
                <div className={styles.inputbox}>
                    <input type='button' value='submit' onClick={handleAddPost}  />
                </div>
            </form>
        </section>
    )
};