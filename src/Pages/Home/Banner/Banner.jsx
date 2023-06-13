import React from 'react'
import img1 from '../../../assets/banner/1.jpg'
import img2 from '../../../assets/banner/2.jpg'
import img3 from '../../../assets/banner/3.jpg'
import img4 from '../../../assets/banner/4.jpg'

export default function Banner() {
  return (
    <div className='z-0'>
        <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(212,21,221,0)]">
                        <div className="text-white space-y-6 text-center md:text-left mb-32 md:mt-28  w-full md:w-1/2 pl-8  md:pl-28">
                            <h2 className="text-3xl md:text-6xl font-bold">Masco Shakib Cricket Academy</h2>
                            <p className="text-sm md:text-base">Country’s first World Class Training Infrastructure to train the Future Cricketers under the professionally-renowned mentors through professionally-designed training curriculum.</p>
                            <div>
                                <button className="btn btn-primary mt-4 md:mt-8 mr-4 md:mr-8">Discover more</button>
                            </div>
                        </div>
                    </div>
                    {/* Slide buttons */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div>
                            <a href="#slide4" className="btn btn-circle mr-1 md:mr-5">
                                ❮
                            </a>
                        </div>
                        <div>
                            <a href="#slide2" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(212,21,221,0)]">
                        <div className="text-white space-y-6 text-center md:text-left mb-32 md:mt-28  w-full md:w-1/2 pl-8  md:pl-28">
                            <h2 className="text-3xl md:text-6xl font-bold">Ms Dhoni Cricket Academy</h2>
                            <p className="text-sm md:text-base">We, at MSDCA, strive to bring excellence & world-class cricket coaching & facilities to the budding cricket around the world. MSDCA focuses on providing the right kind of guidance and platform to the cricketers of various ages and economical backgrounds.</p>
                            <div>
                                <button className="btn btn-primary mt-4 md:mt-8 mr-4 md:mr-8">Discover more</button>
                            </div>
                        </div>
                    </div>
                    {/* Slide buttons */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div>
                            <a href="#slide1" className="btn btn-circle mr-1 md:mr-5">
                                ❮
                            </a>
                        </div>
                        <div>
                            <a href="#slide3" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(212,21,221,0)]">
                        <div className="text-white space-y-6 text-center md:text-left mb-32 md:mt-28  w-full md:w-1/2 pl-8  md:pl-28">
                            <h2 className="text-3xl md:text-6xl font-bold">Tamim Cricket Academy</h2>
                            <p className="text-sm md:text-base">Country’s first World Class Training Infrastructure to train the Future Cricketers under the professionally-renowned mentors through professionally-designed training curriculum.</p>
                            <div>
                                <button className="btn btn-primary mt-4 md:mt-8 mr-4 md:mr-8">Discover more</button>
                            </div>
                        </div>
                    </div>
                    {/* Slide buttons */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div>
                            <a href="#slide2" className="btn btn-circle mr-1 md:mr-5">
                                ❮
                            </a>
                        </div>
                        <div>
                            <a href="#slide4" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(212,21,221,0)]">
                        <div className="text-white space-y-6 text-center md:text-left mb-32 md:mt-28  w-full md:w-1/2 pl-8  md:pl-28">
                            <h2 className="text-3xl md:text-6xl font-bold">Mr Roy Cricket Academy</h2>
                            <p className="text-sm md:text-base">Country’s first World Class Training Infrastructure to train the Future Cricketers under the professionally-renowned mentors through professionally-designed training curriculum.</p>
                            <div>
                                <button className="btn btn-primary mt-4 md:mt-8 mr-4 md:mr-8">Discover more</button>
                            </div>
                        </div>
                    </div>
                    {/* Slide buttons */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div>
                            <a href="#slide3" className="btn btn-circle mr-1 md:mr-5">
                                ❮
                            </a>
                        </div>
                        <div>
                            <a href="#1" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
