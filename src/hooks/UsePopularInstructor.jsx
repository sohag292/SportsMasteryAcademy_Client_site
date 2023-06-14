import { useEffect, useState } from "react";

export const UsePopularInstructor = () =>{
    const [popularInstructors, setPopularInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('PopularInstructors.json')
            .then((res) => res.json())
            .then((data) => {
                const topInstructors = data.slice(0, 6);
                setPopularInstructors(topInstructors);
                setLoading(false);
            });
    }, []);

    return [popularInstructors, loading]
}