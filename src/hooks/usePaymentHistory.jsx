
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const usePaymentHistory = () => {
    const {user, loading} = useContext(AuthContext);
  const { data: paymentsHistory = [], isLoading: isLoading, refetch } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ['paymentsHistory'],
    queryFn: async () => {
      const token = localStorage.getItem('access-token'); 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      };
      const res = await axios.get(`https://sports-mastery-academy-server-site.vercel.app/payments/history?email=${user?.email}`, config);
      return res.data; 
    },
  });

  return [paymentsHistory, refetch, isLoading];
};

export default usePaymentHistory;
