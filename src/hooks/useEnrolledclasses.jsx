
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useEnrolledClasses = () => {
    const {user, loading} = useContext(AuthContext);
  const { data: enrolledClasses = [], isLoading: isLoading, refetch } = useQuery({
    enabled: !loading && !!user?.email ,
    queryKey: ['enrolledClasses'],
    queryFn: async () => {
      const token = localStorage.getItem('access-token'); 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(`https://sports-mastery-academy-server-site.vercel.app/payments/enrolled/student?email=${user?.email}`, config);
      return res.data; 
    },
  });

  return [enrolledClasses, refetch, isLoading];
};

export default useEnrolledClasses;
