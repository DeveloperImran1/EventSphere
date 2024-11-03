
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const useAuth = () => {
    const session = useSession();

    
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["users", session?.data?.user?.email],
        queryFn: () => 
            session?.data?.user?.email 
                ? fetch(`https://event-sphare-server.vercel.app/user/${session.data.user.email}`)
                    .then(res => {
                        if (!res.ok) throw new Error('Failed to fetch');
                        return res.json();
                    })
                : null,
        enabled: !!session?.data?.user?.email, // Runs only if email is available
    });

    return { data, isLoading, error, refetch };
};

export default useAuth;
