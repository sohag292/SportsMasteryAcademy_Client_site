import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import useTopInstructors from "../../../Hooks/useTopInstructors";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { ToggleContext } from "../../../Provider/ToggleProvider";

const TopInstructors = () => {
    const [topInstructors] = useTopInstructors();
    const { isDark } = useContext(ToggleContext);
    const cardBackgroundClass = isDark ? "bg-indigo-200" : "bg-base-100";

    return (
        <div>
            
            <Swiper
                slidesPerView={2} 
                spaceBetween={10} 
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper hidden  "
            >
                {topInstructors?.map((ins, index) => (
                    <SwiperSlide className="ml-3" key={index}>
                        <div className={`card w-full md:w-[500px] h-72 lg:card-side ${cardBackgroundClass} shadow-2xl`}>
                            <figure>
                                <img className="w-[250px] h-[290px] object-cover" src={ins.photoURL} alt="" />
                            </figure>
                            <div className="card-body">
                                <div className="absolute top-0 mt-3 right-4 ml-1 font-semibold">
                                    {index === 0 && <p className="badge badge-secondary mx-3">Top</p>}
                                    <p className="badge badge-secondary">Popular</p>
                                </div>
                                    <div className="mt-6">
                                        <h2 className="font-bold md:text-xl text-md">{ins.name}</h2>
                                        <p className="md:text-lg text-sm font-semibold">Instructor</p>
                                    </div>
                                    <button className="btn mt-auto btn-primary text-xs md:text-md">View Details</button>
                                </div>
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    <div className="bg-indigo-200 rounded-2xl shadow-2xl w-44 md:w-[500px] h-72 flex flex-col justify-center items-center">
                        <Link to="/allClasses">
                            <button className="text-black flex items-center justify-center gap-3 test-lg md:text-2xl font-bold mx-auto">
                                Show All <FaArrowRight />
                            </button>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default TopInstructors;
