"use client"
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const TansTackProvider  = ({ children }) => {
    const queryClient = new QueryClient();
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
        </QueryClientProvider>
    );
};

export default TansTackProvider ;