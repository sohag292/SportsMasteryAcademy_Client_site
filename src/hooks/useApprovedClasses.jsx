import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useApprovedClasses = () => {
  const { data: approvedClasses = [], isLoading, refetch: approvedClassRefetch } = useQuery({
    queryKey: ['approvedClasses'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/classes/approved');
      return res.data; 
    },
  });

  return [approvedClasses, approvedClassRefetch, isLoading];
};

export default useApprovedClasses;
