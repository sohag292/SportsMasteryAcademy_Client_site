
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useInstructorClasses = () => {
    const {user, loading} = useContext(AuthContext);
  const { data: instructorClasses = [], isLoading: isLoading, refetch } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ['instructorClasses'],
    queryFn: async () => {
      const token = localStorage.getItem('access-token'); 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(`http://localhost:5000/payments/enrolled/instructor?email=${user?.email}`, config);
      return res.data;
    },
  });

  return [instructorClasses, refetch, isLoading];
};

export default useInstructorClasses;
