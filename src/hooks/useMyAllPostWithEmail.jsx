import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import React from 'react';

const useMyAllPostWithEmail = () => {

    const pathname = usePathname();
    const lastPathSegment = pathname?.split('/').filter(Boolean).pop();
    const { data, isLoading, refetch }  = useQuery({
        queryKey: ["myPost"],
        queryFn: () =>
            fetch(`http://localhost:9000/getUserPosts/${lastPathSegment}`).then((res) =>
                res.json()
            ),
    });
    return { data, isLoading, refetch } ;
};

export default useMyAllPostWithEmail;