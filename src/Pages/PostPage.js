import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/Postservice';
import { useFetchPosts } from '../Hooks/useFetchPosts';
import { Loader } from '../UI/Loader/Loader';
import { ErrorComponent } from '../UI/Error/ErrorComponent';
import { PostPageItem } from '../components/PostPageItem/PostPageItem';
import { Comment } from '../components/Comment/Comment';

export const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoadingPostPage, loadPostPageError] = useFetchPosts(async () => {
        const post = await PostService.getPostById(params.id);
        setPost(post.data);
    });
    const [fetchCommentsByPostId, isLoadingComments, loadCommentsError] = useFetchPosts(async () => {
        const comments = await PostService.getCommentsByPostId(params.id);
        setComments(comments.data);
    });

    useEffect(() => {
        fetchPostById();
        fetchCommentsByPostId();
    }, []);
    
    return (
        <>
            {isLoadingPostPage ? <Loader /> : loadPostPageError ? <ErrorComponent /> : <PostPageItem title={post.title} body={post.body} />}
            <hr />
            <h2>Comments (total: {comments.length}):</h2>
            {isLoadingComments ? <Loader /> : loadCommentsError ? <ErrorComponent /> : 
                <section>
                    {comments.map(comment => <Comment key={comment.id} name={comment.name} email={comment.email} body={comment.body} />)}
                </section>}
        </>
    )
};