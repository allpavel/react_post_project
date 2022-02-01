import { useMemo } from "react";
import { useFilterByLanguage } from "./useFilterByLanguage";

export const useSortedPosts = (posts, sort, language='all') => {
    const filteredPosts = useFilterByLanguage(posts, language);
    const sortedPosts = useMemo(() => {
        if (sort) {
          return [...filteredPosts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return filteredPosts;
    }, [sort, posts, language]);

    return sortedPosts;    
};