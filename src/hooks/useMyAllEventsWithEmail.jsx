import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

const useMyAllEventsWithEmail = () => {

    const pathname = usePathname();
    const lastPathSegment = pathname?.split('/').filter(Boolean).pop();
    const { data, isLoading, refetch }  = useQuery({
        queryKey: ["myEventsWithEmail", lastPathSegment],
        queryFn: () =>
            fetch(`https://event-sphare-server.vercel.app/events/getMyEvent/${lastPathSegment}`).then((res) =>
                res.json()
            ),
    });
    return { data, isLoading, refetch } ;
};

export default useMyAllEventsWithEmail;