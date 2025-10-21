import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://server-side-ready-food-farm.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;