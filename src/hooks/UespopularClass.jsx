import { useEffect, useState } from "react";

export const UsepopularClass = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('popularClass.json')
      .then((res) => res.json())
      .then((data) => {
        const sortedClasses = data.sort((a, b) => b.numStudents - a.numStudents);
        const topClasses = sortedClasses.slice(0, 6);
        setPopularClasses(topClasses);
        setLoading(false);
      });
  }, []);

  return [popularClasses, loading];
};


