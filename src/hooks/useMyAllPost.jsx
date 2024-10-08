import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const useMyAllPost = () => {
    const session = useSession();

    const { data, isLoading, refetch }  = useQuery({
        queryKey: ["myPost"],
        queryFn: () =>
            fetch(`http://localhost:9000/getUserPosts/${session?.data?.user?.email}`).then((res) =>
                res.json()
            ),
    });
    return { data, isLoading, refetch } ;
};

export default useMyAllPost;