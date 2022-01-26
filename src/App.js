import React, { useState, useMemo } from 'react';
import { PostList } from './components/PostList/PostList';
import { AddPost } from './components/AddPost/AddPost';
import { PostFilter } from './components/PostFilter/PostFilter';
import { POSTS } from './data';

export const App = () => {
  const [posts, setPosts] = useState(POSTS);
  const [filter, setFilter] = useState({sort: '', search: ''})

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.search.toLowerCase()))
  }, [filter.search, sortedPosts])

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleDeletePost = (removePost) => {
    setPosts(posts.filter(post => post.id !== removePost.id))
  };

  return (
    <>
      <AddPost createPost={handleCreatePost} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} onDeletePost={handleDeletePost} />
    </>
  )
};