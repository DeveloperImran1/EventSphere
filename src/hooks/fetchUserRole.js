import jwt from 'jsonwebtoken';
const fetchUserRole = async (token) => {
    if (!token) {
        return null;
    }
    try {
        const decode = jwt?.decode(token)
        console.log("decode is ", decode)
        return decode?.role || null;
    }
    catch (error) {
        console.error("decode fetching error ", error);
        return null;
    }

}
export default fetchUserRole;