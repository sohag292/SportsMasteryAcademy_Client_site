import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useTopInstructors = () => {
  const { data: topInstructors = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['topInstructors'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/Instructors/popular');
      return res.data;
    },
  });

  return [topInstructors, refetch, loading];
};

export default useTopInstructors;
