import React, { useEffect, useState } from 'react';
import { PostList } from './components/PostList/PostList';
import { AddPost } from './components/AddPost/AddPost';
import { Select } from './components/Select/Select';

const POSTS = [
  {id: 1, title: 'Javascript', description: 'some text'},
  {id: 2, title: 'Java', description: 'another some text'},
  {id: 3, title: 'Python', description: 'yet another text'},
  {id: 4, title: 'Go', description: 'microservices'},
  {id: 5, title: 'C++', description: 'game dev'},
];


export const App = () => {
  const [posts, setPosts] = useState(POSTS);
  const [filterPosts, setFilterPosts] = useState(posts);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
    setFilterPosts([...posts, newPost]);
  };

  const handleDeletePost = (removePost) => {
    setPosts(posts.filter(post => post.id !== removePost.id))
    setFilterPosts(posts.filter(post => post.id !== removePost.id));
  };

  const handleFilterByLanguage = (language) => {
    if (language === 'all languages') {
      return setFilterPosts(posts);
    }
    setFilterPosts(posts.filter(post => post.title === language))
  }

  return (
    <>
      <AddPost createPost={handleCreatePost} />
      <Select posts={posts} handleFilterByLanguage={handleFilterByLanguage} />
      <PostList posts={filterPosts} onDeletePost={handleDeletePost} />
    </>
  )
};