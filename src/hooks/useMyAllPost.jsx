import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const useMyAllPost = () => {
    const session = useSession();

    const { data, isLoading, refetch }  = useQuery({
        queryKey: ["myPosts", session?.data?.user?.email],
        queryFn: () =>
            session?.data?.user?.email ?
            fetch(`https://event-sphare-server.vercel.app/getUserPosts/${session?.data?.user?.email}`).then((res) =>
                res.json()
            ) : Promise.resolve(null),
            enabled: !!session?.data?.user?.email, // Runs only if email is available
    });
    return { data, isLoading, refetch } ;
};

export default useMyAllPost;