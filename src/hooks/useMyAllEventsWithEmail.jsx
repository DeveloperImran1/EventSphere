import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

const useMyAllEventsWithEmail = () => {

    const pathname = usePathname();
    const lastPathSegment = pathname?.split('/').filter(Boolean).pop();
    const { data, isLoading, refetch }  = useQuery({
        queryKey: ["myEventsWithEmail"],
        queryFn: () =>
            fetch(`http://localhost:9000/events/getMyEvent/${lastPathSegment}`).then((res) =>
                res.json()
            ),
    });
    return { data, isLoading, refetch } ;
};

export default useMyAllEventsWithEmail;