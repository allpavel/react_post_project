import React, { useState } from 'react';
import styles from './AddPost.module.css';

export const AddPost = ({createPost}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleDecriptionChange = (event) => {
      setDesc(event.target.value);
    };

    const handleAddPost = (event) => {
        event.preventDefault();
        const newPost = {
          id: Date.now(),
          title: title,
          description: desc
        };
        createPost(newPost);
        setTitle('');
        setDesc('');
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
                    <input type='text' required='required' value={desc} onChange={handleDecriptionChange} />
                    <span>Description</span>
                </div>
                <div className={styles.inputbox}>
                    <input type='button' value='submit' onClick={handleAddPost} />
                </div>
            </form>
        </section>
    )
};