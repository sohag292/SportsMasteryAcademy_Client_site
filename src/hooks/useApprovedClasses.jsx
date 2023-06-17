import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useApprovedClasses = () => {
  const { data: approvedClasses = [], isLoading, refetch: approvedClassRefetch } = useQuery({
    queryKey: ['approvedClasses'],
    queryFn: async () => {
      const res = await axios.get('https://sports-mastery-academy-server-site.vercel.app/classes/approved');
      return res.data; 
    },
  });

  return [approvedClasses, approvedClassRefetch, isLoading];
};

export default useApprovedClasses;
