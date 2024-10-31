"use client";
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import FeedPostItem from "./FeedPostItem";
import FeedPost from './FeedPost';
import Loading from '../shared/LoadingSpiner/Loading';

export default function FeedPostCard() {
    const fetchPosts = async ({ pageParam = 1 }) => {
        const res = await axios.get(`https://event-sphare-server.vercel.app/getAllPost?page=${pageParam}`);
        return res.data; // Adjust based on API response structure
    };

    const {
        data,
        refetch,
        fetchNextPage, // To fetch the next page
        hasNextPage,   // Whether there's more data to load
        isFetchingNextPage, // Loading state for fetching new pages
    } = useInfiniteQuery({
        queryKey: ['posts'], // Query key
        queryFn: fetchPosts, // Function to fetch posts
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length === 0) return undefined; // If no more posts, stop fetching
            return allPages.length + 1; // Return the next page number
        },
    });

    const posts = data?.pages.flatMap(page => page) || []; // Flatten the pages array
    const reversedPosts = posts.slice().reverse();

    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={fetchNextPage} // Function to load more data
            hasMore={hasNextPage} // Whether more data exists
            loader={<Loading></Loading>}
            endMessage={<p className="text-center text-black text-3xl my-5">All posts are loaded</p>}
        >
            <div className="mt-20 px-4">
                <FeedPost refetch={refetch}/>
            </div>
            {reversedPosts.map((item, index) => (
                <div key={index} className="w-full max-w-3xl mx-auto p-4">
                    <FeedPostItem item={item} refetch={refetch} />
                </div>
            ))}

            {isFetchingNextPage && <Loading></Loading>} {/* Optional: show loading state */}
        </InfiniteScroll>
    );
}