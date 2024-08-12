import React from 'react';
import one from '../../../../assets/images/banner/1.jpg'
import two from '../../../../assets/images/banner/2.jpg'
import three from '../../../../assets/images/banner/3.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[750px] rounded-lg mt-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={one} className="w-full " />
                <div className="absolute left-0  h-full text-white flex transform  pl-20 space-y-10 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className="pt-64"> 
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='mt-10'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-5'>
                            <button className='btn btn-warning '> Discover More</button>
                            <button className='btn ml-5'> Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute gap-4 right-10 bottom-10 flex  transform ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={two} className="w-full" />
                <div className="absolute left-0  h-full text-white flex transform  pl-20 space-y-10 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className="pt-64"> 
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='mt-10'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-5'>
                            <button className='btn btn-warning '> Discover More</button>
                            <button className='btn ml-5'> Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute gap-4 right-10 bottom-10 flex  transform">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={three} className="w-full" />
                <div className="absolute left-0  h-full text-white flex transform  pl-20 space-y-10 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                    <div className="pt-64"> 
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='mt-10'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-5'>
                            <button className='btn btn-warning '> Discover More</button>
                            <button className='btn ml-5'> Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute gap-4 right-10 bottom-10 flex  transform">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;