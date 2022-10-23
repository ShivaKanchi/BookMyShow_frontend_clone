import React, { useState } from 'react'
//Components
import EntertainmentCard from '../components/Entertainment/EntertainmentCard.component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'
//layout Hoc
import DefaultLayoutHoc from '../layout/Default.layout'

const HomePage = () => {
    return (
        <div>HomePage</div>
    )
}

export default DefaultLayoutHoc(HomePage);