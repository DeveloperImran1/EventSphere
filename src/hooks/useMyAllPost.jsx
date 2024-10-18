import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const useMyAllPost = () => {
    const session = useSession();

    const { data, isLoading, refetch }  = useQuery({
        queryKey: ["myPosts"],
        queryFn: () =>
            fetch(`process.env.NEXT_PUBLIC_SERVER_SIDE_BASE_URL/getUserPosts/${session?.data?.user?.email}`).then((res) =>
                res.json()
            ),
    });
    return { data, isLoading, refetch } ;
};

export default useMyAllPost;