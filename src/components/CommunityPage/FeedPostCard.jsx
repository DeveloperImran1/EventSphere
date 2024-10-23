"use client"; 
import { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios'; // To make API calls
import FeedPostItem from "./FeedPostItem";

export default function FeedPostCard() {
    const [dataSucre, setDataSucre] = useState([]); // Initialize empty array
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1); // For pagination
    const reversedDataSucre = dataSucre.slice().reverse();
    useEffect(() => {
        // Fetch initial data
        fetchMoreData();
    }, []);

    const fetchMoreData = async () => {
        try {
            const res = await axios.get(`http://localhost:9000/getAllPost?page=${page}`);
            const newData = res?.data || []; // Adjust based on API response structure
            console.log("Fetched data:", newData);

            if (newData.length < dataSucre.length) {
                setHasMore(false); // Stop fetching if no more data
            } else {
                setDataSucre([...dataSucre, ...newData]); // Append new data to the existing data
                setPage(page + 1); // Increment page number for next fetch
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <InfiniteScroll
            dataLength={dataSucre.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>} // Display a loader while fetching
            endMessage={<p className="text-center text-black text-3xl my-5">All posts are loaded</p>} // Display when no more data
        >
            {reversedDataSucre.map((item, index) => (
                <div key={index} className="w-full max-w-3xl mx-auto p-4">
                    <FeedPostItem item={item}/>
                </div>
            ))}
        </InfiniteScroll>
    );
}
