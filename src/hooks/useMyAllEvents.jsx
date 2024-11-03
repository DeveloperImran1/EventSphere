import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const useMyAllEvents = () => {
    const session = useSession();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["myEvents", session?.data?.user?.email],
        queryFn: () =>
            session?.data?.user?.email ? 
            fetch(`https://event-sphare-server.vercel.app/events/getMyEvent/${session?.data?.user?.email}`).then((res) =>
                res.json()
            ) : Promise.resolve(null),
            enabled: !!session?.data?.user?.email, // Runs only if email is available
    });
    return { data, isLoading, refetch } ;
};

export default useMyAllEvents;