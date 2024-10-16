import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useEvents = () => {
    const axiosPublic = useAxiosPublic();


    const {data: events = [], isPending: loading, refetch} = useQuery({
        queryKey: ['events'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/events',{ params: filters });
            // console.log(res.data)
            return res.data;
        }
    })


    return [events, loading, refetch]
}

export default useEvents;