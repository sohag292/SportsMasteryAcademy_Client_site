import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useSelectedClasses = () => {
  const {user, loading} = useContext(AuthContext);
  const { data: selectedClasses = [], isLoading: isLoading, refetch } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ['selectedClasses'],
    queryFn: async () => {
      const token = localStorage.getItem('access-token'); 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(`https://sports-mastery-academy-server-site.vercel.app/classes/selected?email=${user?.email}`, config);
      return res.data; 
    },
  });

  return [selectedClasses, refetch, isLoading];
};

export default useSelectedClasses;
