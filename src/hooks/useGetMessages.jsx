
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const useGetMessages = () => {
    const session = useSession();

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["myMessage", session?.data?.user?.email],
        queryFn: () =>  fetch(`http://localhost:9000/user/get-message?senderId=${auth?.data?._id}&reciverId=${selectedUser?._id}`)
                    .then(res => {
                       console.log("conversation is ", res)
                    })
    });

    return { data, isLoading, error, refetch };
};

export default useGetMessages;
