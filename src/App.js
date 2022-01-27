import React, { useState } from 'react';
import { POSTS } from './data';
import { PostList } from './components/PostList/PostList';
import { AddPost } from './components/AddPost/AddPost';
import { PostFilter } from './components/PostFilter/PostFilter';
import { Modal } from './components/Modal/Modal';
import { CreatePostButton } from './UI/Buttons/CreatePostButton/CreatePostButton';
import { usePost } from './Hooks/usePost';
import axios from 'axios';


export const App = () => {
  const [posts, setPosts] = useState(POSTS);
  const [filter, setFilter] = useState({sort: '', search: '', language: 'all'});
  const [visible, setVisible] = useState(false);
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.search, filter.language);

  // async function getPosts() {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //   console.log(response);
  // };

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);  
  };

  const handleDeletePost = (removePost) => {
    setPosts(posts.filter(post => post.id !== removePost.id))
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