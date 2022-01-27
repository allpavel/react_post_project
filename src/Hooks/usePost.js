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
}

const useSortedPosts = (posts, sort, language) => {
    const filteredPosts = useFilterByLanguage(posts, language);
    const sortedPosts = useMemo(() => {
        if (sort) {
          return [...filteredPosts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts, language]);

    return sortedPosts;    
}

export const usePost = (posts, sort, search, language) => {
    const sortedPosts = useSortedPosts(posts, sort, language);
    // const sortedPosts = useFilterByLanguage(posts, language);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortedPosts]);

    return sortedAndSearchedPosts;
}