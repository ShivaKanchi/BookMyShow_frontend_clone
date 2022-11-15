import React, { useState } from 'react'
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from './Arrows.Component';
const HeroCarousel = () => {

    const [images] = useState([
        {
            "adult": false,
            "backdrop_path": "/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
            "genre_ids": [
                53
            ],
            "id": 985939,
            "original_language": "en",
            "original_title": "Fall",
            "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
            "popularity": 2707.6,
            "poster_path": "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
            "release_date": "2022-08-11",
            "title": "Fall",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 1505
        },
        {
            "adult": false,
            "backdrop_path": "/96qFAPRQtwsi53s2sS0WhwBO2j8.jpg",
            "genre_ids": [
                878,
                27,
                28
            ],
            "id": 870096,
            "original_language": "zh",
            "original_title": "重启地球",
            "overview": "When a drug to replicate plant cells creates a sentient form of flower, the planet is over taken by flora and humankind is depleted. A Chinese task force, a widowed father and his young daughter fight to survive in a mission to inject an antidote to the core of the plants to reverse their growth.",
            "popularity": 2696.784,
            "poster_path": "/kl80N1g69v9QXe1wvkFza31WhD4.jpg",
            "release_date": "2022-08-04",
            "title": "Restart The Earth",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 48
        },
        {
            "adult": false,
            "backdrop_path": "/2iGUavwv86Hubv3V5Iq4qEQXDfE.jpg",
            "genre_ids": [
                18,
                53,
                27
            ],
            "id": 848058,
            "original_language": "es",
            "original_title": "Cerdita",
            "overview": "A bullied overweight teenager sees a glimpse of hope when her tormentors are brutally abducted by a mesmerizing stranger.",
            "popularity": 684.188,
            "poster_path": "/pIFeu5gF7ofAxI9NqrWbJAjjKn6.jpg",
            "release_date": "2022-10-07",
            "title": "Piggy",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 98
        },
    ]);

    const settingsLG = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className='lg:hidden '>

                <HeroSlider {...settings}>
                    {
                        images.map((image, index) => (
                            <div className='w-full h-56 md:h-80 py-3' key={index}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                    alt='HerocarouselBanner'
                                    className='w-full rounded-md object-cover' />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            <div className='hidden lg:block'>
                <HeroSlider {...settingsLG}>
                    {
                        images.map((image, index) => (
                            <div className='w-full h-96 px-2 py-3' key={index}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                    alt='HeroCarouselBanner'
                                    className='w-full rounded-md object-cover'
                                />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
        </>
    );

};

export default HeroCarousel;