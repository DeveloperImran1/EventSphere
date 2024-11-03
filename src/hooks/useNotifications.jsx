import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosPublic from "../../Hooks/AxiosPublic/useAxiosPublic";
import useAuth from "./useAuth";

const useNotifications = () => {
    const axiosPublic = useAxiosPublic();
    const auth = useAuth(); // Assuming this returns the auth context

    const { refetch, data: notifications = [], isLoading, isError } = useQuery({
        queryKey: ['notifications', auth?.data?._id], // Use _id for notifications
        queryFn: async () => {
            if (!auth?.data?._id) throw new Error("User ID is required"); // Error handling
            const res = await axiosPublic.get(`/get-notifications/${auth.data._id}`); // Use _id for the request
            return res.data; // Assuming the response contains the notifications array
        },
        enabled: !!auth?.data?._id, // Only run the query if user ID is available
    });

    return { notifications, refetch, isLoading, isError }; // Return isError for error handling
};

export default useNotifications;
