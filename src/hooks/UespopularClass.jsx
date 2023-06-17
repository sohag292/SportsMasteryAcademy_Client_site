import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'
export const UsepopularClass = () => {
  // const [popularClasses, setPopularClasses ] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('http://localhost:5000/popularclass')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const sortedClasses = data.sort((a, b) => b.numStudents - a.numStudents);
  //       const topClasses = sortedClasses.slice(0, 6);
  //       setPopularClasses(topClasses);
  //       setLoading(false);
  //     });
  // }, []);
  
   

  const { refetch, data: popularClass = [] } = useQuery({
      queryKey: ['popularClass'],
    
      queryFn: async () => {
          const res = await fetch('http://localhost:5000/popularClass')
          return res.json();
      },
 
  })

  return [popularClass, refetch];
};


