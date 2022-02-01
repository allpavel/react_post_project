import React, { useState } from 'react';
import { POSTS } from '../data';
import { PostList } from '../components/PostList/PostList';
import { AddPost } from '../components/AddPost/AddPost';
import { PostFilter } from '../components/PostFilter/PostFilter';
import { Modal } from '../components/Modal/Modal';
import { CreatePostButton } from '../UI/Buttons/CreatePostButton/CreatePostButton';
import { usePost } from '../Hooks/usePost';

export const Languages = () => {
  const [posts, setPosts] = useState(POSTS);
  const [filter, setFilter] = useState({sort: '', titleSearch: '', bodySearch: '', language: 'all'});
  const [visible, setVisible] = useState(false);
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.titleSearch, filter.bodySearch, filter.language);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);  
  };

  const handleDeletePost = (removePost) => {
    setPosts(posts.filter(post => post.id !== removePost.id));
  };

  return (
    <>
      <CreatePostButton onClick={() => setVisible(true)} />
      <Modal visible={visible} setVisible={setVisible} >
        <AddPost createPost={handleCreatePost} />
      </Modal>
      <PostFilter filter={filter} setFilter={setFilter} posts={posts} />
      <PostList posts={sortedAndSearchedPosts} onDeletePost={handleDeletePost} />
    </>
  )
};