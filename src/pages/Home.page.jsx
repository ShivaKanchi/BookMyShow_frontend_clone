import React, { useState } from 'react'
//Components
import EntertainmentCard from '../components/Entertainment/EntertainmentCard.Component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'
//layout Hoc
import DefaultLayoutHoc from '../layout/Default.layout'

const HomePage = () => {

    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    return (
        <>
            <HeroCarousel />
            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 my-3'>
                    The best of Entertainment
                </h1>
                <EntertainmentCard />
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider
                    title="Recommened Movies"
                    subject="List of Recommended Movies"
                    poster={recommendedMovies}
                    isDark={false}
                />
            </div>
            <div className=" bg-premier-800 py-12">
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' alt="Rupay image" className='w-full h-full' />

                    </div>

                </div>

            </div>
        </>
    );
}

export default DefaultLayoutHoc(HomePage);