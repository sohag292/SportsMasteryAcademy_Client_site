import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import useTopClasses from "../../../Hooks/useTopClasses";

const TopClasses = () => {
  const [topClasses] = useTopClasses();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 gap-4">
      {topClasses?.map((cls) => (
        <div key={cls._id} className="bg-white rounded-lg shadow-lg">
          <div className="relative h-72">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <img
              className="h-full w-full object-cover"
              src={cls?.classImage}
              alt=""
            />
            <div className="absolute flex items-center justify-between bottom-0 text-white w-full p-5 bg-opacity-60">
              <div>
                {cls?.className && (
                  <h1 className="text-md md:text-2xl font-bold">
                    {cls?.className}
                  </h1>
                )}
                <p className="text-xs md:text-lg">{cls?.instructorName}</p>
                <p>Price: ${cls?.price}</p>
              </div>
              <Link to="/allClasses">
                <button className="btn btn-primary">Enroll Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-indigo-200 p-6 mx-4 rounded-lg flex items-center justify-center">
        <Link to="/allClasses">
          <button className="text-black text-2xl font-bold flex items-center justify-center gap-3">
            Show All <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopClasses;

