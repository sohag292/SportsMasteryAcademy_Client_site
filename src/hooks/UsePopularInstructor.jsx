import { useEffect, useState } from "react";

export const UsePopularInstructor = () =>{
    const [popularInstructors, setPopularInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://sports-mastery-academy-server-site.vercel.app/popularinstructors')
            .then((res) => res.json())
            .then((data) => {
                setPopularInstructors(data);
                setLoading(false);
            });
    }, []);

    return [popularInstructors, loading]
}