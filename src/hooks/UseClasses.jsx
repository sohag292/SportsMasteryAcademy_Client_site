import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const useClasses = () => {
    const { user } = useContext(AuthContext);
   

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classe', user?.email],
      
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`)
            return res.json();
        },
   
    })

    return [classes, refetch]

}
export default useClasses;