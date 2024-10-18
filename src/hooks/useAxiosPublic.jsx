import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "process.env.https://event-sphare-server.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;