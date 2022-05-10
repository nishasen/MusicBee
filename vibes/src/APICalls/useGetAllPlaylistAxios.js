import axios from "axios";
import { useEffect, useState } from "react";

export const useGetAllPlaylistAxios = (apiURL, playlist) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const config = {
                headers: {
                    authorization: localStorage.getItem("userToken")
                }
            }
            const res = await axios.get(apiURL, config);
            setResponse(res.data);    
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }      
    }

    useEffect(() => {
        fetchData();
    }, [playlist]);
    
    return { response, loading, error }
}