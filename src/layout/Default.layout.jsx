import React from 'react'
import Footer from '../components/Footer/Footer.Component';
import DefaultNavbar from '../components/Navbar/DefaultNavbar.Component'

const DefaultLayoutHoc = (Component) => ({ ...props }) => {
    return (
        <div>
            <DefaultNavbar />
            <Component {...props} />
            <Footer />
        </div>
    );
};

export default DefaultLayoutHoc;