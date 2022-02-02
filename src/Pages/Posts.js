import React, { useEffect, useState } from 'react';
import { PostFilter } from '../components/PostFilter/PostFilter';
import { PostList } from '../components/PostList/PostList';
import { Loader } from '../UI/Loader/Loader';
import { ErrorComponent } from '../UI/Error/ErrorComponent';
import { usePost } from '../Hooks/usePost';
import { useFetchPosts } from '../Hooks/useFetchPosts';
import PostService from '../API/Postservice';

export const Posts = () => {
    const [posts, setPosts] = useState('');
    const [filter, setFilter] = useState({ sort: '', titleSearch: '', bodySearch: '' });
    const [fetchPosts, isLoading, loadError] = useFetchPosts(async () => {
        const posts = await PostService.getPosts();
        setPosts(posts)});
    const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.titleSearch, filter.bodySearch);

    const handleDeletePost = (removePost) => {
        setPosts(posts.filter(post => post.id !== removePost.id));
    };
    

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <h1>Posts from PlaceholderJSON</h1>
            <PostFilter filter={filter} setFilter={setFilter} posts={posts} />
            {isLoading  ? 
                        <Loader /> 
                        :
                        loadError ?
                                  <ErrorComponent />
                                  :
                                  <PostList posts={sortedAndSearchedPosts} onDeletePost={handleDeletePost} />}
        </>
    );
};