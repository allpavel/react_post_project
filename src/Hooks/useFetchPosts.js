import { useState } from 'react';

export const useFetchPosts = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPosts = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {
            setError(e.message);           
        } finally {
            setIsLoading(false);
        }
    };

    return [fetchPosts, isLoading, error];
};