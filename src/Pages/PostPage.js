import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/Postservice';
import { useFetchPosts } from '../Hooks/useFetchPosts';
import { Loader } from '../UI/Loader/Loader';
import { ErrorComponent } from '../UI/Error/ErrorComponent';

export const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, loadError] = useFetchPosts(async () => {
        const response = await PostService.getPostById(params.id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostById();
    }, []);

    return (
        <section>
            {isLoading ? <Loader /> : loadError ? <ErrorComponent /> : 
            <>
                <h1>This is the Page of the Post with id: {post.id}</h1>
                <h2>{post.title}</h2>
            </>}
            
        </section>
    )
};