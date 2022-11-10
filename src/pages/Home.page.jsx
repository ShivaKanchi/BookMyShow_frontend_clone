import React, { useEffect, useState } from 'react';
import axios from 'axios';
//Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
//layout Hoc
import DefaultLayoutHoc from '../layout/Default.layout'

const HomePage = () => {

    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            ///movie/top_rated
            const getTopRatedMovies = await axios.get('/movie/top_rated');
            setRecommendedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestPopularMovies = async () => {
            ///movie/top_rated
            const getPopularMovies = await axios.get('/movie/popular');
            setPremierMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            ///movie/top_rated
            const getUpcomingMovies = await axios.get('/movie/upcoming');
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, []);

    return (
        <>
            <HeroCarousel />

            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 my-3'>
                    The best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider
                    title="Recommened Movies"
                    subtitle="List of Recommended Movies"
                    poster={recommendedMovies}
                    isDark={false}
                />
            </div>

            <div className=" bg-premier-800 py-12">
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img
                            src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png'
                            alt='Rupayimage'
                            className='w-full h-full' />
                    </div>

                    <PosterSlider
                        title="Premier Movies"
                        subtitle="List of Premier Movies"
                        poster={premierMovies}
                        isDark={true}
                    />
                </div>
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider
                    title="Online Streaming Events"
                    subtitle=""
                    poster={onlineStreamEvents}
                    isDark={false}
                />'
            </div>

        </>
    );
}

export default DefaultLayoutHoc(HomePage);