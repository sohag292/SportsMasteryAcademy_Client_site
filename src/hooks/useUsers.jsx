import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const token = localStorage.getItem('access-token');
            const res = await fetch('https://sports-mastery-academy-server-site.vercel.app/users', {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });

            return res.json();
        }
    });
    // console.log('sdf',refetch);
    return [users, loading, refetch];
};

export default useUsers;
