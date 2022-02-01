import { useMemo } from "react";

export const useFilterByLanguage = (posts, language='all') => {
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