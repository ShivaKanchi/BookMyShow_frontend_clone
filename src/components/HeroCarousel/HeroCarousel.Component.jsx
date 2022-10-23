import React, { useState } from 'react'
import HeroSlider from "react-slick";
const HeroCarousel = () => {

    const [images, setImages] = useState([]);

    const settingsLG = {}
    const settings = {}
    return (
        <>
            <div>HeroCarousel</div>
            <div className='lg:hidden '>
                <HeroSlider>
                    {
                        images.map((images) => (
                            <div className='w-full h-56 md:h-80 py-3'>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                    alt='Hero carousel Banner'
                                    className='w-full rounded-md object-cover' />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            <div className='hidden lg:block'>
                <HeroSlider>
                    {
                        images.map((images) => (
                            <div className='w-full h-96 px-2 py-3'>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                    alt='Hero carousel Banner'
                                    className='w-full rounded-md object-cover' />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
        </>
    );

}

export default HeroCarousel