import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../Context/Movie.Context';
import MovieLayoutHoc from '../layout/Movie.layout';
import axios from 'axios';
import Slider from 'react-slick';
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import MovieHero from '../components/MovieHero/MovieHero.Component';
import Cast from '../components/Cast/Cast.Component';


const MoviePage = () => {

    const { id } = useParams();
    const { movie, setMovie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);




    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommendedMovies(getRecommendedMovies.data.results);
        };
        requestRecommendedMovies();
    }, [id]);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data)
        };
        requestMovie();
    }, [id]);

    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        intialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    intialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]
    };
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        intialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    intialSlide: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    intialSlide: 4,
                }
            }

        ]
    };

    return (
        <>
            <MovieHero />
            <div className='my-12 container px-4 lg-ml-20 lg:w-2/3'>
                <div className='flex flex-col items-start gap-3'>
                    <h1 className='text-gray-800 font-bold gap-3'>
                        About the movie
                    </h1>
                    <p>{movie.overview}</p>
                </div>

                <div className='my-8'>
                    <hr />
                </div>

                {/*Offers*/}
                <div className='my-8'>
                    <h2 className='text-gray-800 font-bold text-2xl mb-3'>
                        Applicable Offers
                    </h2>
                    <div className='flex flex-col gap-3 lg:flex-row '>

                        <div className='flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md'>
                            <div className='w-8 h-8'>
                                <FaCcVisa className='w-full h-full' />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h3 className='text-gray-700 text-xl font-bold'>
                                    Visa Stream Offers
                                </h3>
                                <p className='text-gray-600'>
                                    Get 50% off up to INR 150 on all RuPay card on BookMyShow Strea,.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md'>
                            <div className='w-8 h-8'>
                                <FaCcApplePay className='w-full h-full' />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h3 className='text-gray-700 text-xl font-bold'>
                                    Film Pass
                                </h3>
                                <p className='text-gray-600'>
                                    Get 50% off up to INR 150 on all RuPay card on BookMyShow Strea,.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='my-8'>
                    <hr />
                </div>

                {/* Cast slider*/}
                <div className='my-8'>
                    <h2 className='text-gray-800 font-bold text-2xl mb-4'>
                        Cast and Crew
                    </h2>
                    <Slider {...settingsCast}>
                        {
                            cast.map((castData, index) => (
                                <Cast
                                    key={index}
                                    image={castData.profile_path}
                                    castName={castData.original_name}
                                    role={castData.character}
                                />
                            ))
                        }
                    </Slider>

                </div>

                {/* Recommended Movies*/}
                <div className='my-8'>
                    <PosterSlider
                        config={settings}
                        title='Recommended Movies'
                        poster={recommendedMovies}
                        isDark={false}
                    />
                    <hr />
                </div>

                <div className='my-8'>
                    <hr />
                </div>

                {/* Recommended Movies*/}
                <div className='my-8'>
                    <PosterSlider
                        config={settings}
                        title='Exclusive Movies'
                        poster={similarMovies}
                        isDark={false}
                    />
                    <hr />
                </div>
            </div>
        </>
    );
}

export default MovieLayoutHoc(MoviePage);