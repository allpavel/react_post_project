import { useMemo } from "react";

const useFilterByLanguage = (posts, language) => {
    const postsFilteredbyLanguage = useMemo(() => {
        
        if (language !== 'all') {
            return [...posts].filter(post => post.title.toLowerCase() === language);
        } else if (language === 'all') {
            return [...posts];
        }
        return posts;
    }, [posts, language]);

    return postsFilteredbyLanguage;
};

const useSortedPosts = (posts, sort, language) => {
    const filteredPosts = useFilterByLanguage(posts, language);
    const sortedPosts = useMemo(() => {
        if (sort) {
          return [...filteredPosts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return filteredPosts;
    }, [sort, posts, language]);

    return sortedPosts;    
};

export const usePost = (posts, sort, titleSearch, bodySearch, language) => {
    const sortedPosts = useSortedPosts(posts, sort, language);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(titleSearch.toLowerCase()) && post.body.toLowerCase().includes(bodySearch.toLowerCase() ))
    }, [titleSearch, bodySearch, sortedPosts]);

    return sortedAndSearchedPosts;
};