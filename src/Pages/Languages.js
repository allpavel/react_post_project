import React, { useState } from 'react';
import { POSTS } from '../data';
import { PostList } from '../components/PostList/PostList';
import { AddPost } from '../components/AddPost/AddPost';
import { PostFilter } from '../components/PostFilter/PostFilter';
import { Modal } from '../components/Modal/Modal';
import { Pagination } from '../components/Pagination/Pagination';
import { Button } from '../UI/Button/Button';
import { usePost } from '../Hooks/usePost';

export const Languages = () => {
  const [posts, setPosts] = useState(POSTS);
  const [filter, setFilter] = useState({sort: '', titleSearch: '', bodySearch: '', language: 'all'});
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.titleSearch, filter.bodySearch, filter.language);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);  
  };

  const handleDeletePost = (removePost) => {
    setPosts(posts.filter(post => post.id !== removePost.id));
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedAndSearchedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Button title={'Create new post'} onClick={() => setVisible(true)} styles={'button blue largeButton'} />
      <Modal visible={visible} setVisible={setVisible} >
        <AddPost createPost={handleCreatePost} lastId={posts[posts.length-1].id} />
      </Modal>
      <PostFilter filter={filter} setFilter={setFilter} posts={posts} />
      <PostList posts={currentPosts} onDeletePost={handleDeletePost} />
      <Pagination postsPerPage={postsPerPage} totalPosts={sortedAndSearchedPosts.length} paginate={paginate} currentPage={currentPage} />
    </>
  )
};