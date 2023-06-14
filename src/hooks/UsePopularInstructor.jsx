import { useEffect, useState } from "react";

export const UsePopularInstructor = () =>{
    const [popularInstructors, setPopularInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('PopularInstructors.json')
            .then((res) => res.json())
            .then((data) => {
                setPopularInstructors(data);
                setLoading(false);
            });
    }, []);

    return [popularInstructors, loading]
}