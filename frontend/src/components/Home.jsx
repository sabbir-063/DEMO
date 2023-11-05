import React from 'react'
import { Banner, Carousel } from 'flowbite-react';
import banner1 from './../assets/banner1.png';

function Home() {
    return (
        <div className=' bg-neutralSilver' id='home'>
            <div className='px-4 lg:px-14 mx-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse h-full items-center justify-center gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'>
                                Lessons and Insights <br />
                                <span className=' text-brandPrimary leading-snug'>
                                    from 8 Years
                                </span>
                            </h1>
                            <p className=' text-neutralGrey text-base mb-8'>
                                Where to grow your business as a photograper: site or social media?
                            </p>
                            <button className='btn-primary'>
                                Register
                            </button>
                        </div>
                    </div>
                    {/* 2nd slide*/}
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse h-full items-center justify-center gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'>
                                Lets Learn and Earn <br />
                                <span className=' text-brandPrimary leading-snug'>
                                Money in 4 months
                                </span>
                            </h1>
                            <p className=' text-neutralGrey text-base mb-8'>
                                Where to grow your business as a photograper: site or social media?
                            </p>
                            <button className='btn-primary'>
                                Register
                            </button>
                        </div>
                    </div>
                    {/* 3rd slide*/}
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse h-full items-center justify-center gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'>
                                LSD KHA <br />
                                <span className=' text-brandPrimary leading-snug'>
                                Manush Ho
                                </span>
                            </h1>
                            <p className=' text-neutralGrey text-base mb-8'>
                                Where to grow your business as a photograper: site or social media?
                            </p>
                            <button className='btn-primary'>
                                Register
                            </button>
                        </div>
                    </div>

                </Carousel>
            </div>

        </div>
    )
}

export default Home