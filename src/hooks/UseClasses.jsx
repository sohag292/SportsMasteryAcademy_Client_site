import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useClasses = () => {
    const {user, loading} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const {data: classes = [], isLoading, refetch} = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/classes', {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            return res.json();
        }
    })

    return [classes, refetch, isLoading ]
}

export default useClasses;