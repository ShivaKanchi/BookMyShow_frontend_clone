import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../Context/Movie.Context';
import MovieLayoutHoc from '../layout/Movie.layout';
import axios from 'axios';
import Slider from 'react-slick';
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";


const MoviePage = () => {

    const { id } = useParams();
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const { movie, setMovie } = useContext(MovieContext);

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
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommended`);
            setRecommendedMovies(getRecommendedMovies.data.results);
        };
        requestRecommendedMovies();
    }, [id]);

    const settingsCast = {};
    const settings = {};

    return (

        <div className='my-12 container px-4 lg-ml-20 lg:w-2/1'>
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
                <div className='flex flex-col gap-3 lg:flex-row lg:w-3/4'>

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

            {/* Cast slider*/}
            <div className='my-8'>
                <hr />
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
    );
}

export default MovieLayoutHoc(MoviePage);