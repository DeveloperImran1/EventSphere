
import axios from 'axios';

 const axiosSecure = axios.create({
    baseURL: 'process.env.NEXT_PUBLIC_SERVER_SIDE_BASE_URL',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` 
    }
});

export default  axiosSecure