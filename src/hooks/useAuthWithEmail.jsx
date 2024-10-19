import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const useAuthWithEmail = () => {
    const pathname = usePathname();
    const lastPathSegment = pathname?.split('/').filter(Boolean).pop();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            fetch(`http://localhost:9000/user/${lastPathSegment}`).then((res) =>
                res.json()
            ),
    });
    return { data, isLoading, refetch };
};

export default useAuthWithEmail;