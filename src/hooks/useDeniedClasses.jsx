import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useDeniedClasses = () => {
  const {loading, user} = useContext(AuthContext);
  const { data: deniedClasses = [], isLoading, refetch } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ['deniedClasses'],
    queryFn: async () => {
      const token = localStorage.getItem('access-token'); 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get('https://sports-mastery-academy-server-site.vercel.app/classes/denied', config);
      return res.data; 
    },
  });

  return [deniedClasses, refetch, isLoading];
};

export default useDeniedClasses;
