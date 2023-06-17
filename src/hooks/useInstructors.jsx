import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useInstructors = () => {
  const { data: instructors = [], isLoading, refetch } = useQuery({
    queryKey: ['instructors'],
    queryFn: async () => {
      const res = await axios.get('https://sports-mastery-academy-server-site.vercel.app/users/instructors');
      return res.data; 
    },
  });

  return [instructors, refetch, isLoading];
};

export default useInstructors;
