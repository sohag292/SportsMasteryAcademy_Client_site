import { useEffect, useState } from "react";

export const UsePopularInstructor = () =>{
    const [popularInstructors, setPopularInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/popularinstructors')
            .then((res) => res.json())
            .then((data) => {
                setPopularInstructors(data);
                setLoading(false);
            });
    }, []);

    return [popularInstructors, loading]
}