import { useMemo } from "react";
import { useSortedPosts } from "./useSortedPosts";

export const usePost = (posts, sort, titleSearch, bodySearch, language='all') => {
    const sortedPosts = useSortedPosts(posts, sort, language);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(titleSearch.toLowerCase()) && post.body.toLowerCase().includes(bodySearch.toLowerCase() ))
    }, [titleSearch, bodySearch, sortedPosts]);

    return sortedAndSearchedPosts;
};