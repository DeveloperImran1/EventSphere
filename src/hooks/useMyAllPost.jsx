import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const useMyAllPost = () => {
    const session = useSession();

    const { data, isLoading, refetch }  = useQuery({
        queryKey: ["myPost"],
        queryFn: () =>
            fetch(`https://event-sphare-server.vercel.app/getUserPosts/${session?.data?.user?.email}`).then((res) =>
                res.json()
            ),
    });
    return { data, isLoading, refetch } ;
};

export default useMyAllPost;