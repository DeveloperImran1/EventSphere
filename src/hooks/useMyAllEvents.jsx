import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const useMyAllEvents = () => {
    const session = useSession();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["myEvents"],
        queryFn: () =>
            fetch(`http://localhost:9000/events/getMyEvent/${session?.data?.user?.email}`).then((res) =>
                res.json()
            ),
    });
    return { data, isLoading, refetch } ;
};

export default useMyAllEvents;