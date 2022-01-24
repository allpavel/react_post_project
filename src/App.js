import React, { useState } from 'react';
import { PostList } from './components/PostList/PostList';

const POSTS = [
  {id: 1, title: 'Javascript', description: 'some text'},
  {id: 2, title: 'Java', description: 'another some text'},
  {id: 3, title: 'Python', description: 'yet another text'},
  {id: 4, title: 'Go', description: 'microservices'},
  {id: 5, title: 'C++', description: 'game dev'},
];

export const App = () => {
  const [posts, setPosts] = useState(POSTS);

  return (
    <>
      <PostList posts={posts} />
    </>
  )
};