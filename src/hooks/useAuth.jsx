import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const useAuth = () => {
    const session = useSession();

    console.log("ProfileInfo", session);
    const { data, isLoading, refetch }  = useQuery({
        queryKey: ["users"],
        queryFn: () =>
            fetch(`process.env.NEXT_PUBLIC_SERVER_SIDE_BASE_URL/user/${session?.data?.user?.email}`).then((res) =>
                res.json()
            ),
    });
    return { data, isLoading, refetch } ;
};

export default useAuth;