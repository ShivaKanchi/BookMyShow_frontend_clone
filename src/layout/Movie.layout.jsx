import React from 'react'
import Footer from '../components/Footer/Footer.Component';
import MovieNavbar from '../components/Navbar/MovieNavbar.Component';

const MovieLayoutHoc = (Component) =>
    ({ ...props }) => {
        return (
            <div>
                <MovieNavbar />
                <Component {...props} />
                <Footer />
            </div>
        )
    }

export default MovieLayoutHoc;