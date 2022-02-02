import { useMemo } from "react";

export const usePagination = (postsPerPage, totalPosts) => {
    const totalPagesNumber = Math.ceil(totalPosts / postsPerPage);
    const pageNumbers = useMemo(() => {
        return [...Array(totalPagesNumber + 1).keys()].slice(1);
    }, [totalPagesNumber]);
    return pageNumbers;
};