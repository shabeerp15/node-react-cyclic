import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAxios = ({ url, method = "get", body }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios({
                    url,
                    method,
                    data: body,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setData(response.data);
                setError(null);
                setLoading(setTimeout(() => setLoading(false), 1000));
            } catch (err) {
                setError(err);
                setData(null);
                setLoading(false);
                if (err.response.statusText === "Unauthorized") {
                    localStorage.removeItem("token");
                    navigate("/signin");
                }
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useAxios;
