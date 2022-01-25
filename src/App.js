import React, { useState } from 'react';
import { PostList } from './components/PostList/PostList';
import { AddPost } from './components/AddPost/AddPost';

const POSTS = [
  {id: 1, title: 'Javascript', description: 'some text'},
  {id: 2, title: 'Java', description: 'another some text'},
  {id: 3, title: 'Python', description: 'yet another text'},
  {id: 4, title: 'Go', description: 'microservices'},
  {id: 5, title: 'C++', description: 'game dev'},
];

export const App = () => {
  const [posts, setPosts] = useState(POSTS);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleDeletePost = (removePost) => {
    setPosts(posts.filter(post => post.id !== removePost.id))
  };

  return (
    <>
      <AddPost createPost={handleCreatePost} />
      <PostList posts={posts} onDeletePost={handleDeletePost} />
    </>
  )
};