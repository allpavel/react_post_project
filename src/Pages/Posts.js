import React, { useEffect, useState } from 'react';

// import components
import { PostFilter } from '../components/PostFilter/PostFilter';
import { PostList } from '../components/PostList/PostList';
import { Pagination } from '../components/Pagination/Pagination';

// import UI
import { Loader } from '../UI/Loader/Loader';
import { ErrorComponent } from '../UI/Error/ErrorComponent';

// import Hooks and API
import { usePost } from '../Hooks/usePost';
import { useFetchPosts } from '../Hooks/useFetchPosts';
import PostService from '../API/Postservice';

export const Posts = () => {
    const [posts, setPosts] = useState('');
    const [filter, setFilter] = useState({ sort: '', titleSearch: '', bodySearch: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [fetchPosts, isLoading, loadError] = useFetchPosts(async () => {
        const posts = await PostService.getPosts();
        setPosts(posts);
    });
    const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.titleSearch, filter.bodySearch);

    const handleDeletePost = (removePost) => {
        setPosts(posts.filter(post => post.id !== removePost.id));
    };
    

    useEffect(() => {
        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedAndSearchedPosts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <h1>Posts from PlaceholderJSON</h1>
            <PostFilter filter={filter} setFilter={setFilter} posts={posts} />
            {isLoading  ? 
                        <Loader /> 
                        :
                        loadError ?
                                  <ErrorComponent error={loadError} />
                                  :
                                  <PostList posts={currentPosts} onDeletePost={handleDeletePost} />}
            <Pagination postsPerPage={postsPerPage} totalPosts={sortedAndSearchedPosts.length} paginate={paginate} currentPage={currentPage} />
        </>
    );
};